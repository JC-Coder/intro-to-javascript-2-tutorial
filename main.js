// comparision operators

/**
 * == (is equal to )
 * === (identical equal to (value and type))
 * != (not equal to)
 * !== (not identical (value and type))
 * > (greater than)
 * >= (greater than or equal to )
 * < (less than)
 * <= (less than or equal to )
 */

// 10 == 20 = false;
// 10 == '10' = true

// difference between == and ===
// is 10 equal to 10 => yes (true)
// is number(10) equal to String(10) => false

// let ans = 10 === "10";
// console.log(ans);

// conditionals
/**
 * 1. if statement
 * 2. else if statement
 * 3. else statement
 */

// let name = "joseph";

// if name entered is joseph say "hello joseph" , if name is not joseph say "hello sir"

// if(condtion){

// } else if (condition){

// } else {}

// if(name != "joseph"){
//     console.log("Hello " + name)
// } else {
//     console.log("Hello sir");
// }

// number dectector
// let computerNumber = 20;
// let userNumber = prompt("enter a number");

// if (userNumber > computerNumber) {
//   console.log("user number is greater than computer number");
// } else if (userNumber == computerNumber) {
//   console.log("user number is equal to computer number");
// } else {
//   console.log("user number is less than computer number");
// }

// switch statement
/**
 * switch(condition){
    case condition:
        // code to be executed
    break;
    default:
        // code to be executed
    }
 */


// switch statement example 1

// let computerNumber = 20;
// let userNumber = prompt("enter a number");


// switch (true) {
//   case userNumber > computerNumber:
//     console.log("user number is greater than computer number");
//     break;
//   default:
//     console.log("user number is less than computer number");
// }


// switch statement example 2

// let name = "mikel";

// switch(name){
//     case "joseph":
//         console.log(name);
//         break;
//     case "mikel":
//         console.log("this is mikel")
//         break;
//     default:
//         console.log("name not joseph")
// }