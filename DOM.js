// document.getElementsByClassName("second");
// document.querySelector("li").getAttribute("random"); //23
// document.querySelector("li").setAttribute("random","1000");
// document.querySelector("h1").style.background="yellow";
// var h1=document.querySelector("h1");
// h1.className="coolTitle";
// document.querySelector("li").classList; //red
// document.querySelector("li").classList.add("coolTitle");
// document.querySelector("li").classList.remove("coolTitle");
// document.querySelectorAll("li")[1].parentElement 
// document.querySelectorAll("li")[1].parentElement.parentElement

//DOM EVENTS
document.getElementsByTagName("button"); 
var button=document.getElementsByTagName("button")[0];//this is an array
button.addEventListener("click", function(){
    console.log("Click!!!");
})

var button=document.getElementsByTagName("button")[1];//this is an array
button.addEventListener("mouseenter", function(){
    console.log("Click!!!");
})

//Click mouseenter mouseleave ...

var button1=document.getElementById("enter");
var input=document.getElementById("user-input");
var ul=document.querySelector("ul");

function inputLength(){
    return input.value.length;
}

function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";
}

function addListAfterClick(){
    if(inputLength() > 0 ){
        createListElement();
    }
}

function addListAfterKeyPress(event){
    if(inputLength() > 0 && event.keyCode===13 ){
        createListElement();
    }
}

button1.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeyPress);








