<template>
    <h2 class="title">欢迎使用mobile app初始化模版</h2>
    <div class="content">
        <h3>使用方法</h3>
        <div class="item">
            <p>1.请确保已安装node环境，如果没有安装，请去 <a href="https://nodejs.org">nodejs官网</a>下载安装</p>
            <p>2.安装 vue-cli 命令行工具（第一次使用时执行，只用安装一次）</p>
            <div class="code">
                <p>$ npm install -g vue-cli</p>
            </div>
            <p>3.执行初始化命令</p>
            <div class="code">
                <p>$ vue init zhipenglin/mobile-app my-project</p>
            </div>
            <p>4.进入项目目录，安装项目依赖</p>
            <div class="code">
                <p>$ cd my-project</p>
                <p>$ npm install</p>
            </div>
            <p>5.启动本地开发环境</p>
            <div class="code">
                <p>$ npm run start</p>
            </div>
            <p>6.打开浏览器，访问http://localhost:8080(默认配置，更改配置端口的话请访问对应端口)</p>
            <p>7.开发完成，发布项目</p>
            <div class="code">
                <p>$ npm run build</p>
            </div>
        </div>
    </div>
    <div class="content">
        <h3>相关文档资料</h3>
        <div class="item">
            <p>1.<a href="http://cn.vuejs.org/">vue官方文档</a></p>
            <p>2.<a href="http://router.vuejs.org/zh-cn/">vue-router文档</a></p>
            <p>3.<a href="http://webpack.github.io/docs">webpack官方文档</a></p>
            <p>4.<a href="https://zhuanlan.zhihu.com/FrontendMagazine">webpack傻瓜式指南（一）</a></p>
            <p>5.<a href="https://zhuanlan.zhihu.com/p/20397902?refer=FrontendMagazine">webpack傻瓜式指南（二）开发和部署技巧</a></p>
            <p>6.<a href="https://zhuanlan.zhihu.com/p/21287263?refer=leanreact">webpack介绍</a></p>
            <p>7.<a href="https://zhuanlan.zhihu.com/p/21318102?refer=leanreact">webpack进阶</a></p>
            <p>8.<a href="http://es6.ruanyifeng.com/">ECMAScript 6入门</a></p>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import '../less/index.less'
    export default {
        data(){
            return {
                pageData:{}
            }
        }
    }
</script>