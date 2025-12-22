function updateClock(){
    const now=new Date();
    let h=now.getHours();
    let m=now.getMinutes();
    let s=now.getSeconds();

    h=h<10?"0"+h:h;
    m=m<10?"0"+m:m;
    s=s<10?"0"+s:s;

    document.getElementById("hh").innerText=h;
    document.getElementById("mm").innerText=m;
    document.getElementById("ss").innerText=s;
}

setInterval(updateClock,1000);
updateClock();

addEventListener("keydown",function(e){
    if(e.key==="f"||e.key==="F"){
        if(!document.fullscreenElement){
            document.documentElement.requestFullscreen();
        }else{
            document.exitFullscreen();
        }
    }
});