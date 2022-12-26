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

var user= {
    name:"John",
    age:34,
    hobby:"Soccer",
    isMarried:false,
    shout: function(){ //called method because function inside object
        console.log("reeeeeeeee")
    }
};
user.cat=true; //adds cat true to user object
user.name //John
user.shout() // reeeeeee

var list=[{
    username:"andy",
    Password:"secret"
},
{
    username:"jess",
    Password:"123"
}
];
list[0].Password //= secret

var object=[{
    username:"anton",
    Password:"Or"
}];

var array=[object.username, object.Password];

var newsfeed=[{
    username:"dog",
    Password:"cat",
},
{
    username:"dog",
    Password:"cat",
},
{
    username:"dog",
    Password:"cat",
}
];

//LOOPS
var todos=[
    "clean room",
    "red car",
    "blue car"
];
for(var i =0;i<todos.length;i++){
    console.log(i); //0 1 2
    console.log(todos[i] + "!");
    todos[i]=todos[i]+"!";
    todos.pop(); //remove last item

}

var count=0;
while(count<10){
    console.log(count);
    count++;
}

var count1=10;
do{
    console.log(count1);
    count1--;
} while(count1>0); // 10 9 8 7 6 5 4 3 2 1

todos.forEach(function(todos, i){ //accesing todos directly not index
    console.log(todos, i); //todos and its index
})


//FACEBOOK
var database=[{
    username:"Anton",
    Password:"Secret",
},
{
    username:"Antonred",
    Password:"Secret1",
},
{
    username:"Antonblue",
    Password:"Secret2",
}];

var newsfeed=[{
    username:"Bobby",
    timeline:"Tired",
},
    {
        username:"dog",
    Password:"cat",
    },

];

var usernamePrompt=prompt("Whats ur username");
var PasswordPrompt=prompt("Whats ur password");


function isUserValid(username,password){
    for(var i=0;i<database.length;i++){
        if(database[i].username===username && database[i].Password===Password){
            return true;
        }
}
return false;
}


function SignIn(username, password){
    if(isUserValid(username,password)){
        console.log(newsfeed);
    }
    else{
        alert("Sorry, wrong password");
    }
   
}

























