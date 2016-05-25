/**
 * Created by Administrator on 2016/5/21.
 */
var baseConfig=require('./webpack.base.config.js');
var merge = require('webpack-merge');
var VAR=require('./webpack.var.config.js');
module.exports=merge(baseConfig,{
    output:{
        path:VAR.DEV_PATH,
        filename:'[name].[hash].js'
    },
    devtool:'eval-source-map',
    devServer: {
        hot: true,
        inline: true,
        proxy: {
            '/activitymany/*': {
                target: 'http://m.91ddcc.com/',
                /*rewrite: function(req) {
                    req.url = req.url.replace(/^\/api/, '');
                },*/
                secure: false,
                changeOrigin: true
            }
        }
    }
});
