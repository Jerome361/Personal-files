

//This block of code culculates the final score from the two tests and assignment marks and the exam score.

function check(test1, test2) {          //A function named "check" with two prameters  
    let test = test1 > test2 ? test1 : test2; //This function considers the best done test and stores it in a avriable named "test".
    //if test1 is greater tahn test2, consider test1. Otherwise, consider test2
    return test; //Exposes the value in a variable named test for further action.
  }
  console.log(check(test1, test2))
  
  function coswk(test1, test2, assgnt) {        //The function named coswk has three parameters.
    let coswkAdd = check(test1, test2) + assgnt; //Invokes the function test and adds to it the assignment score.
    let coswkTotal = coswkAdd * (40 / 200);      //coarsework total is outof 40                      
    return coswkTotal;
  }
  // console.log(coswk(test1, test2, assgnt))
  
  
  function exam(test1, test2, assgnt, score) {
    let examScore = score * (60 / 100);           //Exam score is out of 60
    let totalScore = examScore + coswk(test1, test2, assgnt); //Adding coarse work and exam scores to obtain the final mark.
    console.log("The final mark is:\t"+totalScore +"%"); //Commands the terminal to output a value stored in the variable named "totalScore"
  }
  exam(50, 70, 82, 87); //Invoke the function with arguments

