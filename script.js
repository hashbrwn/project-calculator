let Firstnum = 0; 
let secondnum = 0; 
let operator = ' '




function add(a,b){
let result = a + b
return result 
}

console.log(add(5,5))


function subtraction(a ,b){
let result = a - b 
return result ;
}
console.log(subtraction(10 ,5)) 


function multiply(a, b){
  let result = a * b 
  return result;
}
console.log(multiply(5, 5))


function divide(a , b){
let result = a - b 
return result; 
}

console.log(divide(20, 10))



  function operate(operator, num1, num2) {
    switch (operator) {
      case "+":
        return add(num1, num2);
      case "-":
        return subtract(num1, num2);
      case "*":
        return multiply(num1, num2);
      case "/":
        return divide(num1, num2);
      default:
        return "Invalid operator";
    }
  }


  
