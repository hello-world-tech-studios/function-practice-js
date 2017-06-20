document.addEventListener('DOMContentLoaded', function() {
//////////////////////////////////////////////////////////////////////////
  // Write the `summertime` function below.
function summertime(){
  return "It's summertime baby!";
}


  // Uncomment the line below, and look in the console to see if your function worked!
  console.log(summertime())

//////////////////////////////////////////////////////////////////////////
  // Write `addFive` below. 

function addFive(number){
  return number + 5;
}


  // Uncomment the line below, and look in the console to see if your function worked!
  console.log(addFive(10))
//////////////////////////////////////////////////////////////////////////
  // Write `double` below.

function double(number){
  return number * 2;
}

  // Uncomment the line below, and look in the console to see if your function worked!
  console.log(double(6));
//////////////////////////////////////////////////////////////////////////
  // Write `greetMe` below.

function greetMe(name){
  return "Hello, " + name + "!";
}


  // Uncomment the line below, and look in the console to see if your function worked!
  console.log(greetMe("Carl"));
//////////////////////////////////////////////////////////////////////////
  // Write `isItLessThanTen` below.

function isItLessThanTen(number){
  if(number < 10){
    return "Your number is less than 10";
  }else if(number > 10){
    return "Your number is more than 10";
  }else{
    return "invalid answer";
  }
}


  // Uncomment the lines below, and look in the console to see if your function worked!
  // console.log(isItLessThanTen(3));
console.log(isItLessThanTen(20));
//////////////////////////////////////////////////////////////////////////
  // Write `inHighSchool` below.

function inHighSchool(age){
  if(age >= 14){
    return "High Schooler";
  }else if(age < 14){
    return "Nope"
  }else{
    return "invalid answer"
  }
}



  // Uncomment the lines below, and look in the console to see if your function worked!
  console.log(inHighSchool(17));
  console.log(inHighSchool(10));
//////////////////////////////////////////////////////////////////////////
  // Write `areTheySpeeding` below.

function areTheySpeeding(speedMph){
  if(speedMph < 75){
    return "Thanks for driving safely!"
  }else if(speedMph >= 75){
    return "SLOW DOWN!!"
  }else{
    return "invalid answer"
  }
}


  // Uncomment the line below, and look in the console to see if your function worked!
  console.log(areTheySpeeding(60));
  console.log(areTheySpeeding(90));
//////////////////////////////////////////////////////////////////////////
  // Write `addTwoNumbers` below.

function addTwoNumbers(number1, number2){
  return number1 + number2
}


  // Uncomment the lines below, and look in the console to see if your function worked!
  console.log(addTwoNumbers(3, 4));
//////////////////////////////////////////////////////////////////////////
  // Write `multiplyTwoNumbers` below.

function multiplyTwoNumbers(number1, number2){
  return number1 * number2
}


  // Uncomment the lines below, and look in the console to see if your function worked!
  console.log(multiplyTwoNumbers(8, 10));
//////////////////////////////////////////////////////////////////////////
})