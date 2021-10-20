

// =============================
// even numbers
function isEven1(num){
  if(num % 2 ==0)
  {
    return "true";
   
  }
   return "false";
 }
 
 console.log(isEven1(7))
// ===========================
// odd numbers
 function isOdd1(num){
  if(num % 2 ==1)
  {
    return  num ,"true";
   
  }
   return "false";
 }
 
 console.log(isOdd1(9))
 
// ===============================
//prime numbers
function prime1(num){
  if(num  == 1) {
    return true
  };
  var t = num / 2;
  var k = 2;
  while(k < t){
    if(num % k == 0){
      return false
    }else{
      k++
    }
  }
  return true;
}
console.log(prime1(7))

// ====================================
// // countdown for 10 seconds
 var i = 10;
 var timer
 function countdown(){
   if(i){ 
     console.log("counter at " + i)
   }else{
     clearInterval(timer)
   }
   i--

   if(i === 0){
     console.log("DONE! " )
   }
 }
timer = setInterval (function(){countdown()},1000)

// ==============================
// prime ,even and odd callback
function value(value1,callback){
  return callback(value1).map(fn => fn())
}
function isEven(a){
  return [
    () => a % 2 === 0
  ]
}
function isOdd(a){
  return [
    () => a % 2 === 1
  ]
}

function isPrime(a){
  return [
    () => {
      if (a == 1)
      return false;
      if (a == 4)
      return false;
      var t = a / 2;
      var k = 2;
      while(k < t){
        if(a % k == 0){
          return false
        }else{
          k++
        }
      }
      return true;
    }
  ]
}
const userOutput = value(59,isEven)
const userOutput2 = value(59,isOdd)
const userOutput3 = value(59,isPrime)

console.log(userOutput)
console.log(userOutput2)
console.log(userOutput3)
// ===============================
// specialMultiply

function specialMultiply(num1,num2){
  if(num2===undefined){
    return function(num2){
      return num1 * num2
    }
  }else{
    return num1 * num2
  }
}

console.log(specialMultiply(3,4))
console.log(specialMultiply(3)(4))
console.log(specialMultiply(3))
