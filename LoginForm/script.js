
function login(){
    let user= document.getElementById("user").value;
    let pass=document.getElementById("pass").value;
    if(!user || !pass){
        alert('fill all credentials');
        return;
    }
    if(localStorage.getItem(user)===pass){
        console.log('login Successful');
        window.location.href="loginSuccessfull.html"
    }else {
        console.log('wrong credentials');
        alert('incorrect credentials registor first ')
        window.location.href="Registor.html"
    }
}

function Registor(){
    let user=document.getElementById("Ruser").value;
    let pass= document.getElementById("Rpass").value;

    if(!user || !pass){
        alert('cant registor with this')
        return
    }
    localStorage.setItem(user , pass);
    window.location.href="index.html";
}