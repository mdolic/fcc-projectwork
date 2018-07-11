/*
    passed in an array of two numbers. 
    return the sum of those two numbers plus the sum of all the numbers between them
    
    random note: the lowest number will not always come first. 
*/

//i made a copy of arr into newestArr
// i can take newest arr 

function sumAll(arr) {
   let max = Math.max(arr[0],arr[1]);
   let min = Math.min(arr[0],arr[1]);
   let temp=0;
   for(let i = min;i <=max;i++){
       temp +=i;
   }
   return temp;
    

  }
  
  sumAll([1, 4]);

  function sumAll(arr) {
    let sortedArr = arr.sort((a,b)=>{
       a-b;
    });
     let firstNum = arr[0];
     let secNum = arr[1];
     let totalSum = (secNum - firstNum + 1) * (firstNum + secNum) /2;
     return totalSum;
 
   }
   
   sumAll([1, 4]);

   function sumAll(arr) {
    let total = 0;
    for(let i = Math.min(...arr);i<=Math.max(...arr);i++){
        total+=i;
    }
    return total;
 
   }
   
   sumAll([1, 4]);

   function sumAll(arr) {
        const min = Math.min(...arr);
        const max = Math.max(...arr);
        const total = (max - min +1) * (min + max) /2;
        return total; 
 
   }
   
   sumAll([1, 4]);