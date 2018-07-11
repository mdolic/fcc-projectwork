/*
    passed in an array of two numbers. 
    return the sum of those two numbers plus the sum of all the numbers between them
    
    random note: the lowest number will not always come first. 
*/

//i made a copy of arr into newestArr
// i can take newest arr 

function sumAll(arr) {
    //let newestArr = [...arr];

    arr.map((item)=>{
       return     Math.max(...arr) - Math.min(...arr);
    });
    
//return arr;

  }
  
  sumAll([1, 4]);