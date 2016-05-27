/**
 * 应用的入口文件.
 */
'use strict'

import './less/app.less'

import Vue from 'vue'
import Plugin from './lib/plugin'

//修改Vue默认字符串模版，避免与vue-cli模版冲突
Vue.config.delimiters = ['<%', '%>'];
Vue.config.unsafeDelimiters = ['<%=', '%>'];

Vue.use(Plugin{{#if_eq weixinShare true}},{
    shareApi:'/activitymany/getWeixinInfo'{{/if_eq}}
});
