document.addEventListener('DOMContentLoaded', function() {
//////////////////////////////////////////////////////////////////////////
  // Write the `summertime` function below.
  function summertime(){
    return "It's summertime baby!"
  }


  // Uncomment the line below, and look in the console to see if your function worked!
  // console.log(summertime())
  console.log(summertime())
//////////////////////////////////////////////////////////////////////////
  // Write `addFive` below. 
  function addFive(number){
    return number +5
  }
  // Uncomment the line below, and look in the console to see if your function worked!
  console.log(addFive(10))
//////////////////////////////////////////////////////////////////////////
  // Write `double` below.
  function double(number) {
    return number *2
  }




  // Uncomment the line below, and look in the console to see if your function worked!
  console.log(double(6));
//////////////////////////////////////////////////////////////////////////
  // Write `greetMe` below.
  function greetMe(name) {
    return "Hello" +name
  }
  

  // Uncomment the line below, and look in the console to see if your function worked!
  console.log(greetMe("Carl"));
//////////////////////////////////////////////////////////////////////////
  // Write `isItLessThanTen` below.
  function isItLessThanTen(number) {
    if (number > 10){
      return ("Your number is not less than 10")
    }
    if (number < 10){
      return ("Your number is less than 10") 
    }
   }






  // Uncomment the lines below, and look in the console to see if your function worked!
  console.log(isItLessThanTen(3));
console.log(isItLessThanTen(20));
//////////////////////////////////////////////////////////////////////////
  // Write `inHighSchool` below.
  function inHighSchool(number) {
    if (number > 14 && number < 18) {
      return ("High Schoolar")
    } else {
      return ("Nope")
    }
  }

  // Uncomment the lines below, and look in the console to see if your function worked!
  console.log(inHighSchool(17));
  console.log(inHighSchool(10));
//////////////////////////////////////////////////////////////////////////
  // Write `areTheySpeeding` below.
  function areTheySpeeding(number) {
    if (number > 75) {
      return ("Slow Down!")
    } else {
        return ("Thanks for driving safely")
    }
  }
    



  // Uncomment the line below, and look in the console to see if your function worked!
  console.log(areTheySpeeding(60));
  console.log(areTheySpeeding(90));
  
//////////////////////////////////////////////////////////////////////////
  // Write `addTwoNumbers` below.
  function addTwoNumbers(number1, number2) {
    return number1 + number2     
}


  // Uncomment the lines below, and look in the console to see if your function worked!
  console.log(addTwoNumbers(3, 4));
//////////////////////////////////////////////////////////////////////////
  // Write `multiplyTwoNumbers` below.
  function multiplyTwoNumbers(number1, number2) {
    return number1 * number2
  }



  // Uncomment the lines below, and look in the console to see if your function worked!
  console.log(multiplyTwoNumbers(8, 10));
//////////////////////////////////////////////////////////////////////////
})