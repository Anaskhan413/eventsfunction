//FUNCTIONS

// QUESTION NO 1

// function time (){
//     document.write(" Set Dec 2015 22:18:39 GMT +0500 (PKT)")
// }
// time()

// QUESTION NO 2

// function returnNumber (){
// var num1  = +prompt("enter first number")
// var num2  = +prompt("enter second number")
// var sum = num1 + num2
// document.write(sum)

// }


// QUESTION NO 3

// function returnNumber (){
// var firstName  = +prompt("enter first number")
// var lastName  = +prompt("enter second number")
// var fullName = firstName + lastName
// alert(fullName)
// return;


// }


// QUESTION NO 4

// function calculate(num1, num2, operator) {
//     var result;
 
//     if (operator === "+") {
//       result = num1 + num2;
//     } else if (operator === "-") {
//       result = num1 - num2;
//     } else if (operator === "*") {
//       result = num1 * num2;
//     } else if (operator === "/") {
//       result = num1 / num2;
//     } else {
//       result = "Invalid operator";
//     }
//     var result = calculate(10, 5, "+");
//     document.write(result);
//     return result;
//   }


// // }


// QUESTION NO 5



// function square(num) {
//     var result = square(5);
//     document.write(result);
//     return num * num;

//   }



// QUESTION NO 6

// function factorial(num) {
//     var result = factorial(5);
//     document.write(result); 
//     if (num === 0) {
//       return 1;
//     } else {
//       return num * factorial(num - 1);
//     }
//   }


// QUESTION NO 7

// function countNumbers(startNum, endNum) {
//     for (var i = startNum; i <= endNum; i++) {
//       document.write(i + "<br>");
//     }
    
//   }
//   countNumbers(1, 10);
  


//QUESTION NO 8
 
function calculateAreaValue(width, height) {
    var area = width * height;
    return area;
  }
  

  //QUESTION NO 8
   
//   function calculateAreaVariable() {
//     var width = arguments[0];
//     var height = arguments[1];
//     var area = width * height;
//     return area;
//   }
//   var resultAre1 = calculateAreaValue(6, 8);
// console.log(resultAre1)

// var width = 6;
// var height = 8;
// var area2 = calculateAreaVariable(width, height);
// document.write(area2); // 


 //QUESTION NO 9
   
// function countLetter(str, letter) {
//     var count = 0;
//     for (var i = 0; i < str.length; i++) {
//       if (str.charAt(i) === letter) {
//         count++;
//       }
//     }
//     return count;
//   }
//   var str = "hello world";
// var letter = "l";

// var letterCount = countLetter(str, letter);

// document.write(letterCount);