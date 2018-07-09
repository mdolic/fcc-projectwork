//how to combine two arrays using concat method

function nonMutatingConcat(original, attach) {
    // Add your code below this line
    let newArr = original.concat(attach);
    return newArr;

    // Add your code above this line
  }
  var first = [1, 2, 3];
  var second = [4, 5];
  nonMutatingConcat(first, second);

  //how to add elements to the End of an array using concat instead of push
