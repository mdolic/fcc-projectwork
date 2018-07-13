function destroyer(arr) {
    // Remove all the values
    let args= Array.from(arguments);//takes in the arguments, places in the array
    return arr.filter((val)=>{ //goes through the array
        return !args.includes(val);

    });
  }

  destroyer([1, 2, 3, 1, 2, 3], 2, 3);