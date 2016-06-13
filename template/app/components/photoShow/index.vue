<template>
    <div class="component-photo-show" v-if="show">
        <div class="mask"></div>
        <div class="content">
            <div class="item">

            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import './style.less'
    export default {
        props:{
            list:{
                type:Array,
                default(){
                    return [];
                }
            },
            current:{
                type:Number,
                default:0
            },
            show:{
                type:Boolean,
                default:false
            }
        },
        created(){
            if(this.list.length>1){
                this.list.splice(0,0,this.list[this.list.length-1]);
                list.push(this.list[0]);
            }
        }
    }
</script>
