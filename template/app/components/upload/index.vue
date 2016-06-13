<template>
    <div class="component-upload clear">
        <div class="item" v-for="file in filesIndex">
            <img :src="file.data|avatarcut 60" v-if="file.type==1">
            <div class="progress" v-if="file.type==0"><div class="value" :style="{'width':file.data+'%'}"></div></div>
        </div>
        <div class="up-icon item">
            <input class="file-input" type="file" accept="image/*" @change="selected" v-if="show" multiple="multiple">
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    var url='/common/upload';
    import './style.less'
    import EXIF from './lib/exif'
    import zip from './lib/zip'
    export default{
        data(){
            return {
                filesIndex:[],
                show:true
            }
        },
        props:{
            value:{
                type:Array,
                default(){
                    return [];
                }
            },
            max:{
                type:Number,
                default:9
            }
        },
        methods:{
            selected(event){
                var files=event.target.files;
                if(this.filesIndex.length+files.length>this.max){
                    this.$alert.error(`上传图片不能超过${this.max}张`);
                    return;
                }
                if(files.length > 0) {
                    var arrayOfPromises=[].slice.call(files,0).map((file)=>{
                        var item={type:0,data:0};
                        this.filesIndex.push(item);
                        return new Promise((resolve,reject)=>{
                            if(file.type!=''){
                                if(!/image\/*/.test(file.type)){
                                    this.filesIndex.splice(-1,1);
                                    reject('只允许上传jpg,,jpeg,gif,png格式的图片');
                                    return;
                                }
                            }else{
                                if(!/\.(jpg|jpeg|gif|png)$/.test(file.name)){
                                    this.filesIndex.splice(-1,1);
                                    reject('只允许上传jpg,,jpeg,gif,png格式的图片');
                                    return;
                                }
                            }

                            if(file.size>5*1024*1024){
                                this.filesIndex.splice(-1,1);
                                reject('只允许上传5M以内的图片');
                                return;
                            }
                            resolve();
                        }).then(()=>{
                            return Promise.all([new Promise((resolve,reject)=>{
                                EXIF.getData(file,function(){
                                    EXIF.getAllTags(this);
                                    resolve(EXIF.getTag(this, 'Orientation'));
                                });

                            }),zip(file)]);
                        }).then(([orientation,file])=>{
                            return new Promise((resolve,reject)=>{
                                var form = new FormData();
                                var xhr = new XMLHttpRequest();
                                try {
                                    form.append('Content-Type', file.type || 'application/octet-stream');
                                    form.append('Filedata', file);
                                } catch (err) {
                                    reject('上传失败');
                                    this.filesIndex.splice(-1,1);
                                    return
                                }

                                xhr.upload.addEventListener('progress', (e)=>{
                                    item.data=(e.loaded / e.total) * 100;
                                }, false);

                                xhr.onreadystatechange = ()=>{
                                    if (xhr.readyState < 4) {
                                        return;
                                    }
                                    if (xhr.status < 400) {
                                        var res = JSON.parse(xhr.responseText);
                                        if(res.status==1){
                                            item.type=1;
                                            item.data=res.data;
                                            this.value.push(res.data);
                                            resolve(item);
                                        }else{
                                            this.filesIndex.splice(-1,1);
                                            reject(res.message);
                                        }

                                    } else {
                                        var err = JSON.parse(xhr.responseText);
                                        err.status = xhr.status;
                                        err.statusText = xhr.statusText;
                                        this.filesIndex.splice(-1,1);
                                        reject(err);
                                    }
                                };
                                xhr.onerror = ()=>{
                                    var err = JSON.parse(xhr.responseText);
                                    err.status = xhr.status;
                                    err.statusText = xhr.statusText;
                                    this.filesIndex.splice(-1,1);
                                    reject(err);
                                };

                                xhr.open('POST',url+'?orientation='+orientation, true);
                                xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                                xhr.send(form);
                            });
                        });
                    });
                    Promise.all(arrayOfPromises).then((allFiles)=>{
                        this.$alert.success('图片上传成功');
                        this.show=false;
                        this.$nextTick(()=>{
                            this.show=true;
                        });
                    }).catch((err)=>{
                        this.$alert.error(err);
                    });
                }else{
                    this.$alert.error('您没有选取任何照片');
                }
            }
        }
    }
</script>