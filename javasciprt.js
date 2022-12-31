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

// condition ? expr1 : expre2
 //if conditiion true then do expr1
// if false then to expres 2

function isUSerValid(bool){
    return bool;
}

var answer = isUserValid(true) ? 
"u may enter" : "Decline";

function moveCommand(direction){
    var whatHappened;
    switch(direction){
        case "foward":
            whatHappened = "you ecounter";
        case "foward":
            whatHappened = "you ecounter";
        case "foward":
            whatHappened = "you ecounter";
        case "foward":
            whatHappened = "you ecounter";
        default:
            whatHappened = "you ecounter";
    }
    return whatHappened;
}


// const player = 'bobby';
// let experience = 100;
// let wizard = false;
// if(experience>100){
//     let wizard=true;
//     console.log('insisde', wizard);
// }

const cat="red";

//Let example

let x = 1;
if (x === 1) {
  let x = 2;
  console.log(x);
  // expected output: 2
}
console.log(x);
// expected output: 1


// In general, it is recommended to use let instead of var whenever possible,
//  because let provides better control over the scope of variables
//   and can help prevent accidental
//    or unintended reassignments or modifications. 



//DESTRUCTURING

const obj = {
    player:'bobby',
    experience: 100,
    wizard: false
}

// const player =obj.player;
// const experiences = obj.experience;
// let wizard = obj.wizard;

// const {player, experience} =obj;
// let {wizard} = obj;

const name="John";
const object={
    [name]: 'hello', //john : hello
    ['raty'+'red']: 'hi'
}


const a="simon";
const b =true;
const c = {};
const objects={  //if equal then wwrite this
   a,
   b,
   c
}

//Tempaltes strings

const names="sally";
const ages=34;
const greet = `Hello ${names} you seem to be ${ages-10}. what a lovely pet`; 
//Hello sally you seem to be 23. what a levely pet

function great(name='', age=30, pet='cat'){
    const greet = `Hello ${names} you seem to be ${ages-10}. what a lovely pet`; 
}

//symbol used for object property, not collid if same ones

let sym1 = Symbol('red');
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');
//sym2 != sym3

//Arrow functions
function add(a,b){
    return a+b;
}

const add = (a,b) => a+b; //fucntion name, paramters, method do

//Closures child scope has access to parent scope, function executed wont run again but remebers 
//thre are references to variables so child access to parent
const fir=()=>{
    const greet='Hi';
    const second = ()=>{
        alert(greet);
    }
    return second;
}
const newFunc = fir();
newFunc(); //pritns Hi

//Currying process to conevrt function with many arguemnts to one
const mulyiply = (a,b) => a*b;
const curriedMultiply = (a)=> (b) =>a*b; //one fucntion points to another function
curriedMultiply(3); //(b)=>a*b
curriedMultiply(3)(4); //12
const mulitplyBy5= curriedMultiply(5);
mulitplyBy5(5); //25

//Compose
const Compose = (f,g) => (a) => f(g(a));
const sum (num) => num+1;
Compose(sum, sum)(5); // 7 sum(5)=6 sum(6)=7

//advanced array MAP, FILTER, ARRAY No side effects

var array =[1,2,3,4];
const double=[];
const newArray = array.forEach((num) =>{ //loops through
    double.push(num*2);
})
console.log(double) //2, 4,6,8

//MAP loop over each element return new array in map array. 
//NEED A RETURN ELEMENT. store result into anotehr array
const mapArray = array.map((num)=>{
    return num*2;
})
console.log('map', mapArray); // 2,4,6,8

const newMap = array.map(num=> num*2);
console.log('map', mapArray); // 2,4,6,8


//FILTER //if condition true tehn store it in the new array
const filterArray = array.filter(num=> num>5);


//REDUCED has paarameter of accumulator always. Needs to return. Accumulartor stores body result into it
const reduceArray = array.reduce((accumulator, num)=>{
    return accumulator+num;
}, 0); //accumulator = 0
console.log('reduce', reduceArray); //10


//ADVANCED OBJECTS, Reference type, context, instantiaiton

//REFERENCE TYPE
var object1=box1; //object1 and 2 share same value
var object2=object1;
var object3=box3; //object 3 is its own value

var object1={value:10}; //object1 and 2 share same value
var object2=object1;
var object3={value:10}; //object 3 is its own value
object1===object2; //true
object1===object3; //false
object1.value=15;
obhect2.value; //15
object3.value; //10

//CONTEXT VS SCOPE
//SCOPE returns invalid due to scope
function v(){
    let a=4;
}

const object4={ //this is object4
    a:function(){
        console.log(this);
    }
}

//INSTATIATION make copy of object but new code. Inehrtiance basically
class Player{
    constructor(name,type){
        this.name=name;
        this.type=type;
    }
    introduce(){
        console.log(`Hi I am ${this.name}, Iam a ${this.type}`);
    }
}

class wizard extends Player{
    constructor(name,type){
        super(name,type); //needs to pass to parent class always if using extends. Need SUPER
    }
    play(){
        console.log(`wee I am a ${this.type}`);
    }
}

const wizard1 = new wizard('Shelly', 'Healer'); //creating a new wizard
const wizard2 = new wizard('red', 'tank');
wizard1.introduce();// hi I am a shelly I am a healer
wizard1.play();  //wee U an a healer
wizard2.play(); //wee I am a tank

//Pass by value. copy value and create it in another memory
var as=5;
var bs=a;
bs++; //bs=6

//Pass By REFERENCE, save space in memory
//Both pointing to same memory
let obget ={name:'yao', password:'123'};
let obj2=obget;
obj2.password='easy'; //both obget and obj2 are both passwords changed to easy

var cd=[1,2.3,4];
var dc=cd;
dc.push(323); // both cd and dc now have 323 at the end of array

let obgets ={a:'a', b:'b', c:'c'};
let clone =Object.assign({},obgets);
obgets.c=5;
console.log(clone); //a:'a', b:'b', c:'c'} cloen object not effected

//COERSION when opereands are differet types number adn string, one will be converted to equal value
1=='1'; //tue, will make 1==1. dont use ==
1==='1'; // false compare 2 values dont Cohersive
-0 === +0; //true

//ADVANCED LOOPING
const basket=['apples', 'red', 'blue'];
//1

for(let i=0;i<basket.length;i++){
    console.log(basket[i]);
}
//2

basket.forEach(item=>{
    console.log(item);
})

//3 for of Iterating  - arrays, strings. Iterable
for(item of baseket){
    console.log(item);
}

for(item of 'baseket'){
    console.log(item);
}

//for in works for objects. see objects properties
//enumerating for objects to see properties
const detailed={
    apples:5,
    oranges:10,
    grapes:1000
}
for(item in detailed){
    console.log(item); //apples, oranges, grapes
}

for(item in basket){
    console.log(item); //0 1 2
}


typeof 4; //number
Number.MAX_SAFE_INTEGER; //max number returns

const str="ree red";
str.replaceAll('ree', 'boo'); //boo red

const arr = [100,33,4234,234234];
arr.at(0); //100
arr.at(-1); //234234 last item

//DEBUGGING
const flat=[[0,1],[2,3],[4,5]].reduce(
    (accumulator,array)=>{
        console.log('array', array);
        console.log('accumulator', accumulator);
        accumulator.concat(array);
    }, []);
    
 
//Memory Heap
const af=1;
const fd=4;
const tre=43;
//Memory Leak happened when unused memory fills up Memory Heap
//Global memory bad because if forgot can use all memory

//Call Stack reads and execute script FIFO
console.log(2);
console.log(3);

//RECURSIONS
function foo(){
    foo();
}













































