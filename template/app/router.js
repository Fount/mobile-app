/**
 * 应用的路由配置文件
 */
'use strict'

import App from './page/App.vue'
import IndexView from './page/IndexView.vue'
import InfoView from './page/InfoView.vue'
import OneListView from './page/OneListView.vue'
import TwoListView from './page/TwoListView.vue'

var routeList={
    '/':{
        //url:'',加载该路由时从后端api取得该页面的数据
        name:'index',
        text:'主页',//底部导航的文字信息
        component:IndexView,//组件对象，如果需要动态加载请参考vue router官方文档
        pageData:{//注入到页面的静态数据，如果没有url，可在此配置静态数据，如果有url，该区域存在的数据会覆盖服务器端相同key的数据
            page_title:'主页'
        }
    },
    '/info/:id':{//路由的params参数会注入给url，通过get请求发送到服务器端
        name:'info',
        text:'详情',//底部导航的文字信息 如果路由中含有params则不能出现在底部导航栏中，未配置该属性的将不能出现在底部导航栏中
        component:InfoView,
        toolBarShow:false,//工具栏在该页面隐藏 默认为true
        pageData:{
            page_title:'详情页'
        }
    },
    'onelist':{
        name:'onelist',
        text:'列表一',
        component:OneListView,
        pageData:{
            page_title:'列表一'
        }
    },
    'twolist':{
        name:'twolist',
        text:'列表二',
        component:TwoListView,
        pageData:{
            page_title:'列表二'
        }
    }
};

var start=(router)=>{
    router.start(App, '#app');
};

export var routeList=routeList;
export var start=start;

