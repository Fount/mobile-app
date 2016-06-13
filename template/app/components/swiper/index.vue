<template>
    <div class="component-swiper">
        <template v-if="_list[current]&&_list[current].url">
            <a href="_list[current].url}}">
                <div class="item" v-for="item in _list" track-by="$index">
                    <img :src="item.img|imgcut">
                </div>
                <div class="cover">
                    {{list[current]&&list[current].title}}
                    <div class="indicator">
                        <i v-for="item in list" :class="{'on':$index==current}"></i>
                    </div>
                </div>
            </a>
        </template>
        <template v-if="_list[current]&&!_list[current].url">
            <div class="item" v-for="item in _list" track-by="$index">
                <img :src="item.img|imgcut">
            </div>
            <div class="cover">
                {{list[current]&&list[current].title}}
                <div class="indicator">
                    <i v-for="item in list" :class="{'on':$index==current}"></i>
                </div>
            </div>
        </template>
    </div>
</template>
<script type="text/ecmascript-6">
    import './swiper.less'
    export default{
        props:{
            list:{
                type:Array,
                required:true,
                default(){
                    return [];
                }
            },
            current:{
                type:Number,
                default(){
                    return 0;
                }
            }
        },
        data(){
            return {
                imgList:[]
            }
        },
        created(){
            var timer=setInterval(()=>{
                this.next();
            },5000);
        },
        computed:{
            _list(){
                var list=this.list.slice(0);
                if(list.length>1){
                    list.splice(0,0,this.list[this.list.length-1]);
                    list.push(this.list[0]);
                }
                this.setOffset();
                return list;
            }
        },
        methods:{
            setOffset(){
                var self=this;
                this.$nextTick(()=>{
                    $(this.$el).children('.item').each(function(i){
                        var translateX=(i-self.current-1)*$(window).width();
                        $(this).css({'transform':'translateX('+translateX+'px)'});
                    });
                });
            },
            next(){
                this.current+=1;
                $(this.$el).children('.item').css('transition','transform 0.5s');
                this.setOffset();
                setTimeout(()=>{
                    this.current>=this.list.length&&(this.current=0);
                    $(this.$el).children('.item').css('transition','none');
                    this.setOffset();
                },500);
            }
        }
    }
</script>