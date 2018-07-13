/*Compare two arrays and return a new array with any items only found in one of the two given arrays, 
but not both. In other words, return the symmetric difference of the two arrays.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Note
You can return the array with its elements in any order.

*/

function diffArray(arr1, arr2) {
    var newArr = [...arr1,...arr2]; //spread arr1,arr2 into newArr
    // Same, same; but different.
    let filteredArr = newArr.filter((elem)=>{ //filter on individual elemn
      return newArr.indexOf(elem) == newArr.lastIndexOf(elem); //checks the indexOf(elem)
    });
   return filteredArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

  //alternative solution 2:

  function diffArray(arr1,arr2){
    return arr1
      .concat(arr2) //joins arr2 to arr 1
      .filter(item => !arr1.includes(item)|| !arr2.includes(item)) //items not included in arr1 & arr2
  }

  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

  //alternative solution 3:

  function diffArray(arr1,arr2){
    let filterArr1 = arr1.filter((item) => arr2.indexOf(item) ===-1);
    let filterArr2 = arr2.filter((item)=> arr1.indexOf(item) ===-1);
    return filterArr1.concat(filterArr2); 
  }

  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);