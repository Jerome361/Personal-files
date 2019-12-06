function inputUserId(){
var user = document.getElementById("userId")
var password = document.getElementById("password")
var name = document.getElementById("name")
var country = document.getElementById("country")
var zipCode = parseInt(document.getElementById("zipCode"))
var email = document.getElementById("email")

if(user.value.length < 5 || user.value.length > 12 ){
    alert("User Id length should be between five to 12 characters and not empty")
user.style.border = "2px solid red"
}
if(password.value.length <7 || password.value.length >=12){
    alert("The password should be between seven to twelve characters and not epmty")
    password.style.border ="2px solid red"
}
if(name.value ==""){
alert("please input name")
name.style.border = "2px solid red"
}
if(country.value ==""){
    alert("Please select country")
    country.style.border = "2px solid red"
}
if(zipCode.value == ""){
    alert("Zip-code should not be empty")
    zipCode.style.border = "2px solid red"
}
if(email.value ==""){
    alert("Use a valid email and do not leave the feild empty")
    email.style.border = "2px solid red"
}
}

