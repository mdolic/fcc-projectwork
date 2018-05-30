function checkScope() {
"use strict";
 let i = "function scope";
  if (true) {
    let i = "block scope"; //assigned i to be its own let variable here to solve this problem
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
