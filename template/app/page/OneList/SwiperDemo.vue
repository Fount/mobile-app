<template>
    <div class="content">
        <h3>循环播放banner</h3>
        <div class="item">
            <swiper :list="bannerList"></swiper>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import Swiper from '../../components/swiper'
    export default {
        components:{
            Swiper
        },
        data(){
            return {
                bannerList:[
                    {
                        title:'图片1',
                        img:'14642441131386.jpg'
                    },
                    {
                        title:'图片2',
                        img:'14642441143166.jpg'
                    }
                ]
            }
        }
    }
</script>