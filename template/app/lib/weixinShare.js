/**
 * Created by linzhipeng on 16/4/13.
 */
import server from './server.js'

var setShareData=function(config){
    config=Object.assign({
        link:'',
        title:'',
        desc:'',
        img:'',
        sucess(){}
    },config);
    wx.ready(()=>{
        wx.onMenuShareTimeline({
            title: config.desc, // 分享标题
            link: config.link, // 分享链接
            imgUrl:config.img, // 分享图标
            success:config.success
        });
        wx.onMenuShareAppMessage({
            title: config.title, // 分享标题
            desc: config.desc, // 分享描述
            link: config.link, // 分享链接
            imgUrl: config.img, // 分享图标
            success:config.success
        });
        wx.onMenuShareQQ({
            title: config.title, // 分享标题
            desc: config.desc, // 分享描述
            link: config.link, // 分享链接
            imgUrl: config.img, // 分享图标
            success: config.success
        });
        wx.onMenuShareWeibo({
            title: config.title, // 分享标题
            desc: config.desc, // 分享描述
            link: config.link, // 分享链接
            imgUrl: config.img, // 分享图标
            success:config.success
        });

        wx.onMenuShareQZone({
            title: config.title, // 分享标题
            desc: config.desc, // 分享描述
            link: config.link, // 分享链接
            imgUrl: config.img, // 分享图标
            success:config.success
        });
    });
};
var configCache;
export const getTicket=function(){
    var config=window.weixiShare;
    wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: config.appId, // 必填，公众号的唯一标识
        timestamp: config.timestamp, // 必填，生成签名的时间戳
        nonceStr: config.nonceStr, // 必填，生成签名的随机串
        signature: config.signature,// 必填，签名，见附录1
        jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage','onMenuShareQQ','onMenuShareWeibo','onMenuShareQZone'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    });
}

export default setShareData;