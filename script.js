document.addEventListener('DOMContentLoaded', function() {
//////////////////////////////////////////////////////////////////////////
  // Write the `summertime` function below.
  function summertime(){
    return "its summertime baby"
  }
  function add5(x){
    return x + 5
  }
  function double(e){
    return e * 2
  }
  function greatme(w){
    return"hello" + w
  }
  function lessthan10(num){
    if (num < 10){
      return"less than ten"
    }else {
      return"more than ten"
    }
  }
  function inHighSchool(age){
    if (age > 14){
      return"in high school"
    } else {
      return"nope"
    }
  } 
  
  
  function arespeeding(mph){
    if (mph < 75){
      return"hello good driving"
    } else {
      return"slow down" 
    }
  }
  
  function add(num1, num2){
    return  num1 + num2
  }
  function multiply(q, a){
    return q * a 
  }
  
  
  // Uncomment the line below, and look in the console to see if your function worked!
  console.log(summertime())

//////////////////////////////////////////////////////////////////////////
  // Write `addFive` below. 
  console.log(add5(3))


  // Uncomment the line below, and look in the console to see if your function worked!
  // console.log(addFive(10))
//////////////////////////////////////////////////////////////////////////
  // Write `double` below.
  
  console.log(double(3))



  // Uncomment the line below, and look in the console to see if your function worked!
  // console.log(double(6));
//////////////////////////////////////////////////////////////////////////
  // Write `greetMe` below.
  console.log(greatme("max"))



  // Uncomment the line below, and look in the console to see if your function worked!
  // console.log(greetMe("Carl"));
//////////////////////////////////////////////////////////////////////////
  // Write `isItLessThanTen` below.

  console.log(lessthan10(7))


  // Uncomment the lines below, and look in the console to see if your function worked!
  // console.log(isItLessThanTen(3));
// console.log(isItLessThanTen(20));
//////////////////////////////////////////////////////////////////////////
  // Write `inHighSchool` below.

  console.log(inHighSchool(10))



  // Uncomment the lines below, and look in the console to see if your function worked!
  // console.log(inHighSchool(17));
  // console.log(inHighSchool(10));
//////////////////////////////////////////////////////////////////////////
  // Write `areTheySpeeding` below.
  console.log(arespeeding(25))



  // Uncomment the line below, and look in the console to see if your function worked!
  // console.log(areTheySpeeding(60));
  // console.log(areTheySpeeding(90));
//////////////////////////////////////////////////////////////////////////
  // Write `addTwoNumbers` below.


  console.log(add(1, 1))

  // Uncomment the lines below, and look in the console to see if your function worked!
  // console.log(addTwoNumbers(3, 4));
//////////////////////////////////////////////////////////////////////////
  // Write `multiplyTwoNumbers` below.
  console.log(multiply(5, 10))

  

  // Uncomment the lines below, and look in the console to see if your function worked!
  // console.log(multiplyTwoNumbers(8, 10));
//////////////////////////////////////////////////////////////////////////
})