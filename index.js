
{// 轮播点点击换图
let imgs=document.querySelectorAll(".lunbootu");
let pages=document.querySelectorAll(".lunbo li");
let banner=document.querySelector(".banner_box");
pages.forEach(function(value,index){
    value.onclick=function(){
        for (var i=0;i<imgs.length;i++){
            pages[i].classList.remove("active");
            imgs[i].classList.remove("active");
        }
        this.classList.add("active");
        imgs[index].classList.add("active");
        n=index;
    }
})
// 自动轮播
let n=0;
function bannerfn(dir="r"){
    if(dir==="r"){
        n++;
        if(n===imgs.length){
            n=0;
        }
    }else if (dir==="l"){
        n--;
        if(n===-1){
            n=imgs.length-1;
        }
    }

    for(var i=0;i<imgs.length;i++){
        imgs[i].classList.remove("active");
        pages[i].classList.remove("active");
    }
    imgs[n].classList.add("active");
    pages[n].classList.add("active");
}
let t=setInterval(bannerfn,4000);
banner.onmouseover=function(){
    clearInterval(t);
}
banner.onmouseout=function(){
    t=setInterval(bannerfn,4000);
}

// 左右箭头
var left=document.querySelector(".zuo");
var right=document.querySelector(".you");
let flag=true;
right.onclick=function(){
    if(flag){
        flag=false;
        bannerfn();
    }

}
left.onclick=function(){
    if(flag){
        flag=false;
        bannerfn("l");
    }
}
imgs.forEach(function(val,index){
    val.addEventListener("transitionend",function(){
        flag=true;
    });
})
}






































 let ttp=document.querySelector(".ng-fix-bar");
 let leftbar=document.querySelector(".cedaohang_box");
window.onscroll=function () {
    if(flag){
    let r=document.documentElement.scrollTop;
    if(r>900){
        ttp.style.display="block"
    }else{
        ttp.style.display="none"
    }
    if(r>boxx[0].offsetTop){
        leftbar.style.display="block"
    }else{
        leftbar.style.display="none"
    }

        boxx.forEach(function (value,index) {
            if(r>=value.offsetTop){

                for(let i=0;i<btn.length;i++){

                    btn[i].classList.remove("active")
                }
                btn[index].classList.add("active");


            }
        })}
};
let totop=document.querySelector(".top_dibu");
totop.onclick=function () {
    let st=document.documentElement.scrollTop;
    let speed=st*30/500;
    let t=setInterval(function () {
        st-=speed;
        if(st<=0){
            st=0;
            clearInterval(t);
        }
        document.documentElement.scrollTop=st;
    },30)
};
let flag=true;
let btn=document.querySelectorAll(".cedaohang_box ul li");
let boxx=document.querySelectorAll(".boxx");

btn.forEach(function (ele, index) {
    ele.onclick=function () {
        flag=false;
        let target=boxx[index].offsetTop;
        let now=document.documentElement.scrollTop;
        let speed=(target-now)*30/300;
        let time=0;
        let n=setInterval(function () {
            time+=30;now+=speed;
            if(time===300){
                clearInterval(n);
                now=target;
                flag=true;
            }
            document.documentElement.scrollTop=now;
        },30)
    }
});