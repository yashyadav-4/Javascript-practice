const inputBox= document.getElementById("input-box");
const listContainer= document.getElementById("list-container");


function AddTask(inputBox) {
    if(inputBox.value.trim() ===''){
        alert("You must write something!")
    }else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}

listContainer.addEventListener("click" , function(e){
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
} , true);

document.getElementById("input-box").addEventListener("keydown", function(e){
    if(e.key=="Enter"){
        AddTask(inputBox)
    }
});


function saveData(){
    localStorage.setItem("data" , listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();