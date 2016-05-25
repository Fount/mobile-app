/**
 * Created by Administrator on 2016/4/14.
 */
import {error} from './alert'

export default function(url,options){
    options=Object.assign({
        type:'post',
        success(){},
        error(){},
        complete(){}
    },options);
    $.ajax({
        url:url,
        dataType:'json',
        type:options.type,
        data:options.data,
        success(respose){
            if(respose.status==1){
                options.success(respose.data);
            }else{
                if(options.error(respose)!==false){
                    error(respose.message);
                }
            }
        },
        complete(){
            options.complete();
        }
    });
}