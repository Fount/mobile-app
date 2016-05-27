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
