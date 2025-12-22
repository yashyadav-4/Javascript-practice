// qr code api
// link = https://goqr.me/api/

let inputBox=document.getElementById("input");
let image= document.getElementById("imgBox");
let qrImage=document.getElementById("qrImage");

const APIurl="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";


async function Generate(inputBox){
    if(inputBox.value.trim()==""){
        inputBox.classList.add('error');
        setTimeout(()=>{
            inputBox.classList.remove('error');
        }, 1000);
        randomColor();
        return;
    }
    const Qr= APIurl + `${inputBox.value}`;
    qrImage.src=Qr;
    imgBox.classList.add("show-img");
    inputBox.value="";
}


document.getElementById("input").addEventListener("keydown" , function(e){
    if(e.key=="Enter") Generate(inputBox);
});


function randomColor(){
    let val1 = Math.floor(Math.random()*255);
    let val2 = Math.floor(Math.random()*255);
    let val3 = Math.floor(Math.random()*255);

    document.body.style.background=`rgb(${val1} , ${val2} , ${val3})`;
}