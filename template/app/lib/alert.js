/**
 * 弹窗组件
 */
import '../less/common/alert.less'

var $el=$('<div class="alert-con"></div>');
$('body').append($el);

export const alert=(type,inner)=>{
    var $dom=$(`<div class="alert-main ${type||'alert'}"><div class="mask"></div><div class="con">${inner}</div></div>`);
    $el.append($dom);
    return {
        $dom,
        close(){
            $dom.remove();
        }
    }
};

export const error=(message)=>{
    var api= alert('error',`<div class="text">${message}</div><a class="button close">关闭</a>`);
    api.$dom.find('.close').click(()=>api.close());
    return api;
};

export const success=(message,callback,options)=>{
    options=Object.assign({},{
        time:800
    },options);
    var api=alert('success',`<div class="text">${message}</div>`);
    setTimeout(()=>{
        api.close();
        callback&&callback();
    },options.time);
    return api;
};

export const confirm=(message,options)=>{
    var api=alert('confirm',`<div class="text">${message}</div><div class="button-area clear"><a class="button no">取消</a><a class="button yes">确定</a></div>`);
    options=Object.assign({},{
        yes:function(close){
            close();
        },
        no:function(close){
            close();
        }
    },options);
    api.$dom.find('.button.no').click(()=>{
        options.no(api.close);
    });
    api.$dom.find('.button.yes').click(()=>{
        options.yes(api.close);
    });
    return api;
};

export const clean=()=>{
    $el.html('');
}

export default {
    alert,error,success,confirm,clean
};
