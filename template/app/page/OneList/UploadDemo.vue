<template>
    <div class="content">
        <h3>图片上传</h3>
        <div class="item">
            <upload :value.sync="uploadValue" :max=20></upload>
            <h4>上传组件取得的值</h4>
            <p v-for="img in uploadValue">\{{img}}</p>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import Upload from '../../components/upload'
    export default {
        components:{
            Upload
        },
        data(){
            return {
                uploadValue:[]
            }
        }
    }
</script>