//how to Reset an Inherited Constructor Property

function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Add your code below this line
Bird.prototype.constructor = Bird; //manually changed the bird constructor property to the bird object
Dog.prototype.constructor = Dog;//manually changed the bird constructor property to the dog object


let duck = new Bird();
let beagle = new Dog();

//how to Add Methods After Inheritance

function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Add your code below this line
Dog.prototype = Object.create(Animal.prototype); //inhereted the animal properties here
Dog.prototype.constructor = Dog; //set the dog constructor to dog object

Dog.prototype.bark = function(){ //created a new bark method just for dog 
    console.log("Woof!");
}
// Add your code above this line

let beagle = new Dog();

beagle.eat(); // Should print "nom nom nom"
beagle.bark(); // Should print "Woof!"

//how to override inherited methods 

function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Add your code below this line
Penguin.prototype.fly = function(){ //created the ovverride here on the fly() Bird method 
    return "Alas, this is a flightless bird."; 
};
// Add your code above this line

let penguin = new Penguin();
console.log(penguin.fly());

//how to Use a Mixin to Add Common Behavior Between Unrelated Objects
let bird = {
    name: "Donald",
    numLegs: 2  
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  
  // Add your code below this line
  let glideMixin = function(obj){
      obj.glide = function(){
          console.log(`Gliding`);
      }
  };
  glideMixin(boat);
  glideMixin(bird);
  
  boat.glide();
  bird.glide();

  //how to Use Closure to Protect Properties Within an Object from Being Modified Externally

  function Bird() {
  let weight = 15; //sets weight variable to private access
  
  this.getWeight = function(){ //method created for accesing the  private weight variable
    return weight;
  };
}

let birdy = new Bird();
birdy.getWeight(); //returns 15 

//how to Understand the Immediately Invoked Function Expression (IIFE)
//executing a fucntion as soon as it is declared. 
(function () {
    console.log("Chirp, chirp!");
  })(); // this is an anonymous function expression that executes right away
  // Outputs "Chirp, chirp!" immediately

//how to Use an IIFE to Create a Module
let funModule = (function (){
    return {
   isCuteMixin:function(obj) {
    obj.isCute = function() {
      return true;
    };
  },
  singMixin: function(obj) {
    obj.sing = function() {
      console.log("Singing to an awesome tune");
    };
}
}
})();