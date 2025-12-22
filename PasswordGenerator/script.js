const inputBox=document.getElementById("input");
const length=12;

const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const number= "1234567890";
const symbol="@#$^&*_-=><+-/";

const allChars= upperCase + lowerCase + number+ symbol;

function GeneratePass(){
    let pass="";
    while(length > pass.length){
        pass += allChars[Math.floor(Math.random() * allChars.length)];
    }
    inputBox.value=pass;
}

document.querySelector('.copy').addEventListener("click", function(){
    copy();
});

function copy(){
    navigator.clipboard.writeText(inputBox.value);
}

document.getElementById("input").addEventListener("keydown" , function(e){
    if(e.key=="Enter") GeneratePass();
});

