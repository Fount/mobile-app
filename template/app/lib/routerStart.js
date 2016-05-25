/**
 * Created by Administrator on 2016/5/24.
 */
import Vue from 'vue'
import Router from 'vue-router'
import {routeList,start} from '../router'
import {getPage} from './session'
import {default as weixinShare} from './weixinShare'
Vue.use(Router);
var router=new Router();

var changeTitleAndWeixinShare=(data)=>{
    var $body = $('body');
    document.title = data.page_title;
    if(window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == 'micromessenger'){
        // hack在微信等webview中无法修改document.title的情况
        var $iframe = $('<iframe src="/favicon.ico"></iframe>').on('load', function() {
            setTimeout(function() {
                $iframe.off('load').remove()
            }, 0)
        }).appendTo($body);
    }
    weixinShare({
        title:data.page_title_fx,
        desc:data.desc,
        img:data.img
    });
};

var routMap=(()=>{
    var route={};
    for(let key in routeList){
        let routeItem=routeList[key];
        route[key]={
            name:routeItem.name,
            component:routeItem.component
        };

        //给每个组件注入route
        routeItem.component.route={
            data({to:{params},next}){
                if(routeItem.url){
                    let query=[];
                    for(let key in params){
                        query.push(`${key}=${encodeURIComponent(params[key])}`);
                    }
                    let url=routeItem.url;
                    if(query.length>0){
                        url+='?'+query.join('&');
                    }
                    return getPage(url).then((data)=>{
                        let pageData=Object.assign({},data,routeItem.pageData||{});
                        changeTitleAndWeixinShare(pageData);
                        return {pageData};
                    });
                }else{
                    let pageData=routeItem.pageData||{};
                    changeTitleAndWeixinShare(pageData);
                    next({pageData});
                }
            }
        };
    }
    return {
        route
    };
})();

router.map(routMap.route);

router.redirect({
    '*': '/'
});

export default ()=>{
    start(router);
};
export {router};


