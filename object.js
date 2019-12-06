
// Object lieterals
var jeromeTum={   //create using object literal
    firstName:"JEROME",
    seconName:"tUMWESIGYE",
    age:25,
    gender: "male"
}
console.log(jeromeTum.age);



// Factory objects; creates and returns objects
// we use template student to create objects

function Student(){
return {}; //this is a literal
}

function Student(givenFirstName,givenSeconName,givenAge,givenGender){
    return {
        firstName:givenFirstName,
        secondName:givenSeconName,
        age:givenAge,
        gender:givenGender
    };
    }
    //Congz, we have created a factory og\f students

    let jerome=Student("Jerome","Tumwesigye",120,"Male")
    let nicho=Student("Nic","Seguya",57,"male")

    nicho.age=34
    console.log(nicho.age)

    

//Object constructor. The convention is to use small letter
//this calls for a genral name
function car(givenSpeed,givenBrand,givenColor,givenFuelType,givenBrand){
this.brand=givenBrand;
this.speed=givenSpeed;
this.color=givenColor;
this.fuelType=givenFuelType;
}
//Now this is a template for creating instances of this template
const myFord=new car(180,"black","petrol","ford")
const myBMW=new car(178,"gray","petrol","BMW")

myBMW.color='speed'
console.log(myBMW.color)


function person(){
    this.name=undefined;
}
let patrick=new person();
// pattick.name = 'nicholas'
patrick['name']='patrick'
console.log(patrick.name)



// classe template

class person{
    constructor(){               //list the attributes
        this.name='Jerome';
        this.age=123;
    }
        constructor(gName,gAge){               //list the attributes
            this.name=gName;
            this.age=gAge;
                }
    digest() {       //method/behaviour of the object, you can elimeinate the word function
        console.log('I am digesting')
    }
    laugh(){
        console.log('I am laughing')
    }  
    walk(){
        console.log('I am walking')
    }
}
//Creating objects
let shayo=new person('Ahmed Shayo',45);
console.log(shayo.name)
console.log(shayo.laugh())  //a method is a function within an object


//Assignment object class
class Cow{

        constructor(cowName,cowAge, cowColor, cowSize, gender){
            this.name=cowName;
            this.age=cowAge;
            this.color=cowColor;
            this.size=cowSize;
            this.gender=gender;
                }
    //Creating the behaviours of the object dog.            
    moe() {
        console.log('I am digesting')
    }
    eat(){
        console.log('I am laughing')
    }  
    walk(){
        console.log('I am walking')
    }
    mate(){

    }
    urinate(){

    }
}

//Creating instances of object dog
let gaju = new Cow('Ggaju', '2yrs','Blue','Big','Female');
let siina = new Cow('Siina', '1yrs','Brown','Medium','Bull');
let mayenje = new Cow('Mayenje', '5months','spotted-white','Medium','Bull');
let kyoozi = new Cow('Kyoozi', '1yr and 2months','Blue-black','Small','Female');
let ngabo = new Cow('Ngabo', '3yrs','spotted-blue','Big','Bull');
let siinaGaju = new Cow('Siina_ya_Gaju', '11months','spotted-brown','Small','Female');
let bihogo = new Cow('Bihogo', '3wks','brown-blue','Small','Bull');

console.log(gaju.color)
cow.eat();




class RefactoryBank{
    constructor(totalSavings,totalLoans,totalInterests){
        this.saving=totalSavings;
        this.loans=totalLoans;
        this.interests=totalInterests;

    }
createAccount(){
console.log('Create account')
}
creditAccount(){
    console.log('Create account')
}
debitAccount(){

}
closeAccount(){

}
}
