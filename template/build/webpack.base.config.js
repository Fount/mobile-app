var path=require('path');
var webpack=require('webpack');
var HtmlwebpackPlugin=require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var VAR=require('./webpack.var.config.js');
var ROOT_PATH=VAR.ROOT_PATH,
    APP_PATH=VAR.APP_PATH,
    BUILD_PATH=VAR.BUILD_PATH,
    TEM_PATH=VAR.TEM_PATH;
module.exports={
    entry:{
        app:path.resolve(APP_PATH,'index.js'),
        'lib/jquery':['jquery']
    },
    output:{
        path:BUILD_PATH,
        filename:'[name].js'
    },
    module:{
        loaders:[
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test:/\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css!autoprefixer!less"),
                include:APP_PATH
            },{
                test:/\.(png|jpg|svg)$/,
                loader:'url',
                query:{
                    limit:1000,
                    name:'images/[name].[ext]'
                }
            },{
                test:/\.js$/,
                loader:'babel',
                include:APP_PATH,
                query:{
                    presets:['es2015']
                }
            }
        ]
    },
    plugins:[
        new ExtractTextPlugin("[name].css"),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new HtmlwebpackPlugin({
            filename:'index.html',
            title:'hello world app',
            root:'app',
            template: path.resolve(TEM_PATH, 'index.html'),
            chunks:['lib/jquery','common.js','app'],
            inject: 'body'
        })
    ]
};
