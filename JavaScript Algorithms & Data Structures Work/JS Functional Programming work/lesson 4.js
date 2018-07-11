//how to return a sorted array without changing the original array

/*Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. 
The function should return a new array, and not mutate the globalArray variable.
*/
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line
  let newArr = arr.concat();
  return newArr.sort((a,b)=>{
    return a-b;
  });

  
  // Add your code above this line
}
nonMutatingSort(globalArray);


//how to split a string into an array using the split method

function splitify(str) {
    // Add your code below this line
    let newArr = str.split(/\W/g); // \W = matches nay non-word character /g = global 
    return newArr;
    
    // Add your code above this line
  }
  splitify("Hello World,I-am code");

  //how to combine an array into a string using the join method 

  function sentensify(str) {
    // Add your code below this line
    let newtArr = str.split(/\W/g).join(" ");
    return newtArr;
    
    // Add your code above this line
  }
  sentensify("May-the-force-be-with-you");

//how to apply functional programming to convert strings to URL slugs
// the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
    return title.trim("").toLowerCase().split(/\s+/).join("-");
  
  
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"

//alternative solution to above 

var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
    return title.toLowerCase().split(/\s+/).filter((item)=>item != '').join("-");
  
}
// Add your code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"

/*how to use the every method to check that every element in an array meets a criteria
        Use the every method inside the checkPositive function to check if every element in arr is positive. 
        The function should return a Boolean value.
            *** every element
*/
function checkPositive(arr) {
    // Add your code below this line
    let check = arr.every((currentValue) => currentValue > 0 );
    return check;
    // Add your code above this line
  }
  checkPositive([1, 2, 3, 6, 5]); //returns true or false statement 

  /*
    how to use the some method to check that any elments in an array meeet a criteria
    some method works with arrays to check if any element passes a particular test. 
    It returns a Boolean value - true if any of the values meet the criteria, false if not.
        *some element
  */
 function checkPositive(arr) {
    // Add your code below this line
    
    let check = arr.some((currentItem ) => currentItem > 0);
    return check; 
    // Add your code above this line
  }
  checkPositive([1, 2, 3, -4, 5]);

/* introduction to currying and partial application 
    it restructures a function so it takes one argument, 
    then returns another function that takes the next argument, and so on.*/
    function add(x) {
        // Add your code below this line
        return function(y){
            return function(z){
                return x + y + z;
            } 
        }
        
        
        // Add your code above this line
      }
      add(10)(20)(30);