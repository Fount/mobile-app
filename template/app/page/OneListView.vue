<template>
    <h2 class="title">组件列表</h2>
    <div class="part">
        <upload-demo></upload-demo>
        <alert-demo></alert-demo>
        <swiper-demo></swiper-demo>
        <photo-show-demo></photo-show-demo>
    </div>
</template>
<script type="text/ecmascript-6">
    import '../less/components_list.less'
    import UploadDemo from './OneList/UploadDemo.vue'
    import AlertDemo from './OneList/AlertDemo.vue'
    import SwiperDemo from './OneList/SwiperDemo.vue'
    import PhotoShowDemo from './OneList/PhotoShowDemo.vue'
    export default {
        components:{
            UploadDemo,AlertDemo,SwiperDemo,PhotoShowDemo
        },
        data(){
            return {
                pageData:{}
            }
        }
    }
</script>