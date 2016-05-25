<template>
    <div class="page index">
        <h2 class="title">欢迎使用mobile app初始化模版</h2>
        <div>
            <p></p>
        </div>
        <a href="#info/3">详情页</a>
    </div>
</template>
<script type="text/ecmascript-6">
    import '../less/index.less'
    export default {
        data(){
            return {
                pageData:{}
            }
        },
        created(){},
        ready(){},
        attached(){
            //此处获取服务器端的页面数据
            //this.$getPage();
        },
        detached(){},
        destroyed(){}
    }
</script>