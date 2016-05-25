/**
 * Created by Administrator on 2016/4/19.
 */
import server from '../lib/server'
var session={
    page:{}
};

export const getPage=(path,options)=>{
    options=Object.assign({},options);
    return new Promise((reslove,reject)=>{
        if(session.page[path]&&options.refresh!==true){
            reslove(session.page[path]);
        }else{
            server(path,{
                type:'get',
                data:options.data,
                success(data){
                    session.page[path]=data;
                    reslove(session.page[path]);
                }
            });
        }
    });
};