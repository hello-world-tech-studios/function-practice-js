document.addEventListener('DOMContentLoaded', function() {
//////////////////////////////////////////////////////////////////////////
  // Write the `summertime` function below.

function summertime() {
var summertime = ("It's summertime baby!")
return summertime
}


   //Uncomment the line below, and look in the console to see if your function worked!
  console.log(summertime())

//////////////////////////////////////////////////////////////////////////
  // Write `addFive` below. 
function addFive(number) {
return (number + 5)
}




  // Uncomment the line below, and look in the console to see if your function worked!
   console.log(addFive(10))
//////////////////////////////////////////////////////////////////////////
  // Write `double` below.
function double(number) {
return (number * 2)
}


  // Uncomment the line below, and look in the console to see if your function worked!
   console.log(double(6));
//////////////////////////////////////////////////////////////////////////
  // Write `greetMe` below.
function greetMe(name) {
return ("Hello "  +  name)
}



  // Uncomment the line below, and look in the console to see if your function worked!
   console.log(greetMe("Carl"));
//////////////////////////////////////////////////////////////////////////
  // Write `isItLessThanTen` below.
function isItLessThanTen(num) {
      if (num < 10) {
        return ("Your number is less than 10")
  }
      else if (num > 10) {
          return ("Your number is greater than 10")
    }
}



  // Uncomment the lines below, and look in the console to see if your function worked!
   console.log(isItLessThanTen(3));
 console.log(isItLessThanTen(20));
//////////////////////////////////////////////////////////////////////////
  // Write `inHighSchool` below.
function inHighSchool(age) {
  if (age > 14) {
    return ("High Schooler")
  }
  else if (age < 14) {
    return ("Not High Schooler")
  }
}




  // Uncomment the lines below, and look in the console to see if your function worked!
  console.log(inHighSchool(17));
 console.log(inHighSchool(10));
//////////////////////////////////////////////////////////////////////////
  // Write `areTheySpeeding` below.
  function areTheySpeeding(mph) {
   if(mph < 75) {
    return ("Thanks for driving safely")
  }
    else if (mph > 75) {
      return ("SLOW DOWN!")
  }
}
  


  // Uncomment the line below, and look in the console to see if your function worked!
   console.log(areTheySpeeding(60));
   console.log(areTheySpeeding(90));
//////////////////////////////////////////////////////////////////////////
  // Write `addTwoNumbers` below.
function addTwoNumbers(num1,num2) {
 return (num1 + num2)
}



  // Uncomment the lines below, and look in the console to see if your function worked!
  console.log(addTwoNumbers(2, 193230));
//////////////////////////////////////////////////////////////////////////
  // Write `multiplyTwoNumbers` below.
function multiplyTwoNumbers (num2,num3) {
  return (num2 * num3)
}



  // Uncomment the lines below, and look in the console to see if your function worked!
   console.log(multiplyTwoNumbers(8, 10));
//////////////////////////////////////////////////////////////////////////
})