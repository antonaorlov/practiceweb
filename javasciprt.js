console.log("HEllo");
function sayHello(){
    console.log("Hello");
}
sayHello();

var sayBye = function(){
    console.log("Bye");
}
sayBye();

function sing(song){
    console.log(song);
}
sing("red");
sing("blue");

 function multiple(a,b){
    return a*b;
}
//alert(multiple(5,10));

var list= [
    ["tiger", "cat","dog", "red"]
];
console.log(list[0][1]);
list.shift(); //first element removed
list.pop(); //last element removed
list.push("blue"); //push into last element of list
list.concat(["bee", "dear"]); //add another array at end of list
list.sort(); //sorts array