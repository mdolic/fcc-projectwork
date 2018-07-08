//how to Implement map on a Prototype
/*Write your own Array.prototype.myMap(), 
which should behave exactly like Array.prototype.map(). You may use a for loop or the forEach method.*/
// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  // Add your code below this line
  for(let i = 0;i< this.length;i++){  //this references the 
    newArray.push(callback(this[i]));
  // Add your code above this line
  return newArray;

};

var new_s = s.myMap(function(item){
  return item * 2;
});