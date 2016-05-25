/**
 * Created by Administrator on 2016/4/14.
 */

export default (Vue)=>{
    Vue.filter('imgcut',(src,size)=>{
        if(!src){
            return '';
        }
        return `http://img.91ddcc.com/${src}${size?`?imageMogr2/thumbnail/${size}`:''}`;
    });

    Vue.filter('pubcut',(src,size)=>{
        if(!src){
            return '';
        }
        return `http://pub.91ddcc.com/${src}${size?`?imageMogr2/thumbnail/${size}`:''}`;
    });
    Vue.filter('avatarcut',(src,size)=>{
        if(!src){
            return '';
        }
        return  `http://img.91ddcc.com/${src}?imageView2/1/w/${size}/h/${size}`;
    });
    Vue.filter('ctext',(text,maxLength)=>{
        if(!text){
            return '';
        }
        return text.length>maxLength?text.substring(0,maxLength)+'...':text;
    });
    Vue.filter('enter',(text)=>{
        if(!text){
            return '';
        }
        return text.replace(/\n/g,'<br>');
    });
}
