/**
 * 应用的入口文件.
 */
'use strict'

import './less/app.less'

import Vue from 'vue'
import Plugin from './lib/plugin'

Vue.use(Plugin{{#if_eq weixinShare true}},{
    shareApi:'/activitymany/getWeixinInfo'{{/if_eq}}
});

//移动端调试器上线后去掉
import eruda from 'eruda'
eruda.init();
