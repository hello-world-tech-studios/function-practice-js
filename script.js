document.addEventListener('DOMContentLoaded', function() {

function summertime() {
  return "It's summertime baby!";
}

   console.log(summertime())


function addFive(number){
  return number + 5
}

 console.log(addFive(10))


function double(doubledNumber){
  return doubledNumber * 2
}

  console.log(double(6));


function greetMe(Name){
  return "hello, "+ Name 
}

  console.log(greetMe("Carl"));


function isItLessThanTen(tenOrBelow){
  if(tenOrBelow < 10){
    return "your number is less than ten"}
  else{
    return "your number is not less than ten"
}}

  console.log(isItLessThanTen(3));


function inHighSchool(HighSchoolAge){
  if(HighSchoolAge >=14){
    return "High Schooler"}
  else{
    return "nope"
}
}

   console.log(inHighSchool(10));


function areTheySpeeding(speed){
  if(speed < 75){
    return "thanks for driving safely"}
  else{
    return "SLOW DOWN!!"
}
}

   console.log(areTheySpeeding(90));


function addTwoNumbers(numberOne, numberTwo){
return numberOne + numberTwo;
}

  console.log(addTwoNumbers(3, 4));


function multiplyTwoNumbers(numOne, numTwo){
return numOne * numTwo
}


  console.log(multiplyTwoNumbers(8, 10));

})