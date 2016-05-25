/**
 * Created by Administrator on 2016/4/13.
 */
var type=false;
var noScroll=(e)=>{
    if(!type){
        event.preventDefault();
    }
};

export default{
    lock(){
        document.querySelector('body').addEventListener('touchstart', noScroll);
        type=true;
    },
    unlock(){
        document.querySelector('body').removeEventListener('touchstart', noScroll);
        type=false;
    }
}