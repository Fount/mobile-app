<template>
    <h2 class="title">mobile app模版列表页二</h2>
    <p>
        <a @click="error">错误框组件</a>
        <a @click="success">正确弹框</a>
        <a @click="confirm">确认弹框</a>
    </p>
</template>
<script type="text/ecmascript-6">
    import '../less/index.less'
    export default {
        data(){
            return {
                pageData:{}
            }
        },
        methods:{
            error(){
                this.$alert.error('发生了一个错误');
            },
            success(){
                this.$alert.success('成功');
            },
            confirm(){
                this.$alert.confirm('弹出确认框',{
                    yes(close){
                        console.log('你点击了确定');
                        close();
                    },
                    no(close){
                        console.log('你点击了关闭');
                        close();
                    }
                });
            }
        },
        created(){},
        ready(){},
        attached(){},
        detached(){},
        destroyed(){}
    }
</script>