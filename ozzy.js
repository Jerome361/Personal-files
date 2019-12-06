my first js example
my first variable
let num1 = 10
//second variable
var num_2 = 20
//capturing the sum of two vars
let num3 = num1+num_2
console.log(num3)

let num4 = num3*num_2
console.log(num4)

let num5 = num4-num_2
console.log("The answer is\t"+num5)


//if statements
var x=2;
console.log(typeof x) 
var x=5
if (x>=5)
{console.log("output")
}else
{console.log("silly")
}

//using else if
var mark=51;
if (mark>50)
{
    console.log("you have passed") }

else if(mark===50)
{
    console.log("probation")
}
else {
    console.log("you have failed")
}






let a = 3, b=5
var c=b*a
//using *
console.log(c)

var d = a+c
console.log(d)

var e = d/b
console.log("The answer is: " +e)
//increment after
let z = d++
console.log("The answer is: " +z)
//increment before
let y = ++d
console.log("The answer is: " +y)
//decrement one
let t = --d
console.log("The answer is: " +t)
//increment by 3
let q=d+=3
console.log("The answer is: " +q)

let sum = 20
let sub = 50
let add = sum % sub
console.log("The answer is: " +add) //retain all your mangoes because they are not sharable.
ble

let add2 = sub % sum
console.log("The answer is: " +add2)

//logical and; &&, AND
//logical or; ||, OR
var x = 5, x2 = "5"
var x3 = x==x2 //this is true
// ===
var x4 = x===x2 //this is not true 


//Functions
function addFunction(){
    let num1 = 200
    let num2 = 100
    let num3 = num1 + num2;
    console.log(num3)
    return num3  //make output available
}

function subFunction(){
    let diff = addFunction() - 200
    console.log(diff)

}

subFunction() // function invocation



//Addition.
function addnumms(){
    let numm1 =30
    let numm2 =60
    let numm3 =100
    let numm4 = numm1 + numm2 + numm3

    console.log("The addition is\t"+numm4)
    return numm4
}

// Subtraction
function subnumms(){
    let dif = addnumms()*2
    
    console.log("The subtraction is\n"+dif)
    return dif
}

//Modulus
function modnumms(){
    let mod = subnumms() % 15
    
    console.log("The modulus is", mod)
    return mod
}
modnumms()

// calling a function

function add3(a,b){
    var c=a+b
    console.log("addition is\t"+c)
    return c

}
add3(20,30)

function add4(){
    let d=add3(20,30) + 45
    console.log(d)
    return d
}
function mod(){
    let e = add4(67,23) % 17
    console.log("modulus is\t"+e)
    return e
}
mod()




//Function call
function check(test1, test2) {              //This function considers the best done test.
  let test = test1 > test2 ? test1 : test2; 
  return test;
}

function coswk(test1, test2, assgnt) {
  let coswkAdd = check(test1, test2) + assgnt; //Adding test score to the assignment score
  let coswkTotal = coswkAdd * (40 / 200);      //coarsework total is outof 40                      
  return coswkTotal;
}


function exam(test1, test2, assgnt, score) {
  let examScore = score * (60 / 100);           //Exam score is out of 60
  let totalScore = examScore + coswk(test1, test2, assgnt); //Adding coarse work and exam scores to obtain the final mark.
  console.log("The final mark is:\t"+totalScore +"%");
}
exam(50, 70, 82, 87);



//Fat Arrow method
var test = (mark1,mark2) => {        //The  function is made a variable
let test1=23, test2= 56;
let testTot = (test1 + test2)*mark1
let testTotal = testTot%mark2
console.log("The answer is\t"+testTotal)
}
test(45,35)





let num1=20, num2=40
if (num1>num2){
    consule.log("You have passed")
}
else {
    console.log("Heaven is not for you")
}


let paye = (sal) =>{
    if (sal>=130000){
        let payee = sal*(30/100)
        console.log(payee)
        return payee
    }
    else{
        console.log("please enjoy your salary wisely")
    }
}
paye(1600000)



var paye =(salJohn, salJames) =>{
    let payeeJohn = salJohn*(30/100)
    let payeeJames = salJames*(30/100)

    if (payeeJohn>=130000 && payeeJames>=130000){   

        

        console.log(payeeJohn,payeeJames)
        return payeeJohn,payeeJames
       
    }
    else{
        console.log("Please learn to save")
    }
}
paye (140000,170000)



var paye =(salJohn, salJames) =>{
    if (salJohn<130000 && salJames<130000){
        console.log("Work harder")
        var payeeJohn = salJohn*(30/100)
        var payeeJames = salJames*(30/100)
    }    
    else if (payeeJohn>payeeJames){         

        console.log("John payes more taxes mountinting to\t" +payeeJohn +" than James'\t" +payeeJames)
        return payeeJohn,payeeJames       
    }
    else{
        console.log("James payes more taxes mountinting to\t" +payeeJames +" than John's\t" +payeeJohn)
    }
}
paye (110000,100000)


var payee = (sal1,sal2) =>{
if(sal1>=130000 && sal2>=130000){
    let pay1 = sal1*(30/100)
    let pay2 = sal2*(30/100)
    let comp = (pay1>pay2?sal1:sal2)
    console.log("the highest taxable pay is :\t" +comp)

}
else{
    console.log("one of the salaries is not taxable")
}
}
payee (140000,160000)


var mysal =200
var yoursal = 1000
 if (mysal>yoursal){
     console.log("Mysal is greater than your sal")    
 }
 else if (mysal<yoursal){
    console.log("Mysal is less than your sal")
 }
 else if (mysal==yoursal){
    console.log("Mysal is equal to your sal")
 }
 


var sal = 200000
switch (sal) {
    case 2000:
        console.log("that is not 20000")
        break;
    case 20000:
        console.log("That is not 20000")
        break;
    default:
        console.log("20000 is the default value")


}


var marks = 63
switch (marks <= 49) {         //sort
    case true:                  //if you find out it true
        console.log("you have a retake")
    break;

}
switch (marks >= 50 && marks <= 65) {
    case true:
        console.log("you have passed with a:\t" + "D")
    break;
}


//For loop
var num =1
for (num=1; num<=10; num+=2){
    console.log(num)
}


for (var num=1; num<=10; num++ ){
   if(num%2 ==1){
       console.log(num)
   }
}



for (var num=0; num<=9; num++ ){
var c = (num%2 != 0)?num:
console.log(c)
}




//while loop
var ab=0
while (ab<=5){
    console.log(ab)
    ab++
}

//for loop
for (var ab=0; ab<=5; ab++){
    console.log(ab)
}

//do while loop,,, very bogas
var ac=0
do{
    console.log(ac)
    ab++
}while (ac<=5)



//Arrays

var abc = [20,30,40]    //storing diff items in the same variable space 
//index names start from zero
//the size of an array is n-1 where n is its length.
console.log(abc[1])

let oranges = [20,30,[40,50],90] // 50 isn oranges [2][1]


var mangoes = [20,40,60,80]
for(var item=0; item<=3; item++){  //item is the selector
    console.log(mangoes[item])
}


//Object oriented programming
var student = {
    name: "patrick",
    age: 50,
    gender: "m"
}
console.log(student.name)




var abc = {
    name:"slay queenOriginal",
    age:67,
    dob: 1889,
}

//Another style with a constructor
function student (name, age, dob){
    this.x=name
    this.y=age          //x is a property of this object 'student'
    this.z=dob
}
racheal=new student("racheal N", 23, "2nd july") //give the propertry eg x, a value
phyllis=new student("phyllis", 89, "6th august") //constructor new

console.log(racheal.x)

