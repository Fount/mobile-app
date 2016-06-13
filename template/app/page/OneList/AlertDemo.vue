<template>
    <div class="content">
        <h3>弹出层</h3>
        <div class="item">
            <a class="button error" @click="error">错误框组件</a>
            <a class="button success" @click="success">正确弹框</a>
            <a class="button" @click="confirm">确认弹框</a>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
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
        }
    }
</script>