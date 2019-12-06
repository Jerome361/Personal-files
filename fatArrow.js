/* This block of code calculates the final percentage mark of a student; 
given the two tests and one assignment and exam. */

  var check = (test1, test2) =>{                //The fat arrow method is used since it optmises memory.    
    let test = test1 > test2 ? test1 : test2; //If test1 is greater than tet2, take test1. Otherwise take test2.
    return test;     // Avail the value in variable named test for further action.
}

var coswk = (test1, test2, assgnt) => {
  let coswkAdd = check(test1, test2) + assgnt; //Call the function named check and add to it the assgnt value
  let coswkTotal = coswkAdd * (40 / 200);   //Divide the coswkTotal by 2 and it should be out of 40                        
  return coswkTotal;
}

var exam = (test1, test2, assgnt, score) => {  //Function "exam" has four parameters
  let examScore = score * (60 / 100);      //examScore is marked out of 60.
  let totalScore = examScore + coswk(test1, test2, assgnt); //Add the exam score and coarsework score to obtain the percentage score.
  console.log("The final mark is:\t"+totalScore +"%"); //Commands the terminal to output a value stored in the variable named "totalScore"
}
exam(50, 70, 82, 87); //Invoking the function with arguments

