/**
 * 底部导航条
 */
import '../less/common/toolbar.less'
import Vue from 'vue'
import {routeList} from '../router'
import {router} from './routerStart'

var $el=$('<div id="toolbar-con" class="toolbar-con"></div>');
$('body').append($el);

var Toolbar = Vue.extend({
    template: `<div v-show="store.show" transition="toolbar"><a v-for="item in list" @click="goto(item.name)" :class="{'active':store.active==item.name}"><span>\{{item.text}}</span></a></div>`,
    methods:{
        goto(name){
            router.go({name});
        }
    }
});

var routerMap=(()=>{
    let textList={},toolBarShow={};
    for(let key in routeList){
        let routeItem=routeList[key];
        if(routeItem.text&&!/\/:/.test(key)){
            textList[key]={
                url:key,
                name:routeItem.name,
                text:routeItem.text
            };
        }
        toolBarShow[routeItem.name]=routeItem.toolBarShow
    }
    return {textList,toolBarShow};
})();

var store={
    state:{
        active:'',
        show:true
    },
    setActive(active){
        this.state.active=active;
    },
    show(){
        this.state.show=true;
    },
    hide(){
        this.state.show=false;
    }
};

new Toolbar({
    el:'#toolbar-con',
    data(){
        return {
            store:store.state,
            list:routerMap.textList
        }
    }
});

router.beforeEach(({to:{name},next})=>{
    store.setActive(name);
    routerMap.toolBarShow[name]!==false?store.show():store.hide();
    next();
});