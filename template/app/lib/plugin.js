/**
 * Created by Administrator on 2016/4/14.
 */
import routerStart from './routerStart'
import FastClick from 'fastclick'
import filter from './filter'
import scrollControl from './scrollControl'
{{#if_eq weixinShare true}}
import {getTicket,default as weixinShare} from './weixinShare'
{{/if_eq}}
import alert from './alert'
import  './toolbar'
export default {
    install(Vue,options){
        options=Object.assign({
            fastclick:true,
            adaption:true,
            width:320
        },options);

        //添加fastclick
        options.fastclick&&FastClick.attach(document.body);

        //添加屏幕自适应
        if(options.adaption){
            var winH=window.document.documentElement.clientHeight,
                winW=window.document.documentElement.clientWidth;
            var baseSize=14/options.width*(winH<winW?winH:winW);
            document.getElementsByTagName('html')[0].style.fontSize=`${baseSize}px`;
            Vue.prototype.$baseSize=baseSize;
        }

        //添加屏幕滚动锁定方法 解决微信端滚动掉到边界后出现黑色区域
        Vue.prototype.$scrollLock=scrollControl.lock()
        Vue.prototype.$scrollUnlock=scrollControl.unlock();

        //加载过滤器
        filter(Vue);

        //加载分享
        getTicket();
        Vue.prototype.$share=weixinShare;

        //加载弹框组件
        Vue.prototype.$alert=alert;

        //启动路由控制器
        routerStart();
    }
}