function formValidation() {
  //declare variables to access form elements
  var uid = document.registration.namUserId;
  var passId = document.registration.namPassword;
  var uname = document.registration.namName;
  var uaddress = document.registration.namAddress;
  var uzipcode = document.registration.namZipCode;
  var namEmail = document.registration.namEmail
  //any word with either should include @
  // var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  // var langEnglish = document.registration.english;
  // var langNonEnglish = document.registration.nonEnglish

  //nested if
  if (namUserIdVal(uid, 5, 12)) {
    if (passIdVal(passId, 7, 12)) {
      if (allLetter(uname)) {
        if (alphanumeric(uaddress)) {
          if (allNumeric(uzipcode)) {
            if (emailVal(namEmail)) {

            }

          }
        }
      }
    }
  }

  //handling the first element; uid(7 to 12)
  function namUserIdVal(uid, my, mx) {
    var uidlen = uid.value.length;
    if (uidlen == 0 || uidlen >= mx || uidlen < my) {
      alert("User Id should be between " + my + " to " + mx + " characters");
      uid.focus();
      uid.style.border = "2px solid red";
      return false;
    }
    return true;
  }

  //Handling password validation
  function passIdVal(passId, my, mx) {
    var passIdLen = passId.value.length;
    if (passIdLen == 0 || passIdLen >= mx || passIdLen < my) {
      alert("Password should be between " + my + " to " + mx + " characters");
      passId.focus();
      passId.style.border = "2px solid red";
      return false;
    }
    return true;
  }

  //handling name validation
  function allLetter(uname) {
    var letters = /^[A-Za-z]+$/;
    // The string should start with capital letters  and small letters and nothing more
    if (uname.value.match(letters)) {
      return true;
    } else {
      alert("Name must have alphabet characters only");
      uname.focus();
      uname.style.border = "2px solid red";

      return false;
    }
  }

  //
  function alphanumeric(uaddress) {
    var letters = /^[0-9a-zA-Z]+$/;
    if (uaddress.value.match(letters)) {
      return true;
    } else {
      alert("user address must be alphanumeric only");
      uaddress.focus();
      uaddress.style.border = "2px solid red";
      return false;
    }
  }

  //Validating ZipCode
  function allNumeric(uzipcode) {
    var numbers = /^[0-9]=$/;
    if (uzipcode.value.match(numbers)) {
      return true;
    } else {
      alert("Zip code should be numeric only")
      uzipcode.focus();
      uzipcode.style.border = "2px solid red";
      return false;
    }
  }

  //Validating the language
  function chooseLang(langEnglish) {
    if (langEnglish.value != "" || langEnglish.value != "") {
      return true;
    } else {
      alert("Please select language")
      langEnglish.focus();
      langEnglish.style.border = "2px solid red";
      return false;
    }
  }

  //Vaidating the emailaddress
  function emailVal(namEmail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if
  }

  // //Validating gender
  // function chooseLang(langEnglish){
  //   if(langEnglish.value!="" || langEnglish.value!=""){
  //     return true;    
  //   }else{
  //     alert("Please select language")
  //     langEnglish.focus();
  //     langEnglish.style.border = "2px solid red";
  //     return false;
  //   }
  // }
}
