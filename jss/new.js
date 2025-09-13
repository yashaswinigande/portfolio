console.log("SRIT");

num = 12;
str = "hi";
bol = true;
bigint = 752085202654688727;
null1 = null;

// var, let, const
var name1 = "srit";
console.log(name1);
var name1 = "hi";
console.log(name1);

let course = "cse";

let age = 20;
console.log(age);
age = 21;
console.log(age);

const givename = "srinivasa rit";
console.log(givename);


//functions
function generateWelcomeMessage(name) {
    return "Welcome," + name +"! Good Morning";
    }

    let welcome_message=generateWelcomeMessage(givename);

    console.log(welcome_message)

let addage=age+2;
let subage=age-2;
let mulage=age*2;
let divage=age/2;

console.log(addage);
console.log(subage);
console.log(mulage);
console.log(divage);

console.log("webpage");

let l=2;
let b=4;

area=l*b;
console.log(area);

let h=5;
area1=l*b*h;
console.log(area1);


let  n=9;
let fact=1;

for(let i=1;i<=n;i++){
    fact=fact*i;
}
console.log("factorial of",n,"is",fact);

function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    if(b==0){
        return "Error:cannot divided by zero";
    }
    return a/b;
}
function mod(a,b){
    return a%b;
}

console.log(add(10,12));
console.log(sub(4,5));
console.log(mul(6,5));
console.log(div(9,8));
console.log(mod(7,6));

function compoundinterest(p,r,t){
    return p*(Math.pow((1+r/100),t));
}
console.log(compoundinterest(10000,5,2));

//let input1=prompt("Enter first number:");
//console.log("First number is:",input1);
//let input2=prompt("Enter second number:");
//console.log("Second number is:",input2);
//console.log("compound interest is:",compoundinterest(input1,input2,2));
age=2;
if(age>18){
    console.log("eligible to vote");
}
else{
    console.log("you are not eligible");
}
 
let a=23;

function calculate(a,b,opr)
{
    if(opr=="+"){
        return a+b;
    }
    if(opr=="-"){
        return a-b;
    }
    if(opr=="*"){
        return a*b;
    }
    if(opr=="/"){
        return a/b;
    }
}
console.log(calculate(2,3,"+"));

marks=36;
if(marks>=90){
    console.log("A GRADE");
}
if(marks>=80 && marks<90){
    console.log("B GRADE");
}
if(marks>=70 && marks<80){
    console.log("C GRADE");
}
if(marks>35 && marks<70){
    console.log("D GRADE");

}
if (marks<35){
    console.log("fail");
}
 //a>>b
 //sp=30kmph;
//every 10 sp = sp*2
//max speed=120
//he travelled for 96 mins

let speed=30;
let distance=0;
for(i=10;i<=90;i+=10){
    distance =distance+speed/6;
    if(speed<120){
        speed*=2;
    }
}
distance=distance+speed/10;
console.log(distance);

//i1
//i=10
//d=d+s/6 ==0+30/6=5
//i=i+10
//s<120 so s=s*2 == 30*3=60

//b=30 for 4km
//for the next 5km the price is 10
//for the nxt 10km the price is 15
//if the kms are more the will be 20
//person travelled 19.5 kms what will be the price

function calculateFare(km) {
    let fare = 0;
    if (km <= 4) {
        fare = 30;  // Base price for first 4 km
    } else if (km <= 9) {
        fare = 30 + (km - 4) * 10;  // Next 5 km at Rs.10 per km
    } else if (km <= 19) {
        fare = 30 + (5 * 10) + (km - 9) * 15;  // Next 10 km at Rs.15 per km
    } else {
        fare = 30 + (5 * 10) + (10 * 15) + (km - 19) * 20;  // Beyond 19 km at Rs.20 per km
    }
    return fare;
}
let dist = 19.5;
console.log("Total fare for " + dist + " km = Rs." + calculateFare(dist));
//while loop
let j = 0;
while(j< 3) {
    console.log(j);
    j++;
}

let s=1;
let Y=5;
while(s<=10){
    console.log(Y,"*",s,"=",Y*s);
    s++;
}
//create a neww paragraph and append it
//const newParagraph = document.createElement("p");
//newParagraph.textContent = "This is a new paragraph added by JavaScript.";
//document.body.appendChild(newParagraph);
//add an event listener
//myDiv .addEventListener("click", function() {
  //  alert("Div clicked!");
//});
