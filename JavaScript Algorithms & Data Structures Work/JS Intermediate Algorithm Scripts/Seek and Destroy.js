

//Remove all elements from the initial array that are of the same value as these arguments.
function destroyer(arr) {
    // Remove all the values
    let args= Array.from(arguments);//takes in the arguments, places in the array
    return arr.filter((val)=>{ //goes through the array
        return !args.includes(val); //does not include val
    });
  }

  destroyer([1, 2, 3, 1, 2, 3], 2, 3);