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