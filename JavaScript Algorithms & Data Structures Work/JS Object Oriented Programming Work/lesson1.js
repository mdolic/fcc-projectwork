

        //constructor example

        function Dog(){
            this.name = "doggy";
            this.color="light-brown";
            this.numLegs = 4;
        }

        //new instance of dog called hound
        let hound = new Dog();
        
        //passed in arguments to change values of the constructor
        function Dog2(name,color){
            this.name = name;
            this.color= color;
            this.numLegs = 4;
        }
        //new instance with passed in strings as arguments
        let terrier = new Dog2("ava","brown-black mix");

        /*
            verify an objects constructor with instance of
        instance of allows you to compare an object to a constructor, return T/F based on
        whether or not that object was created with the cosntructor
        */
            //example: 
            let Bird = function(name, color) {
                    this.name = name;
                    this.color = color;
                    this.numLegs = 2;
                    }

                    let crow = new Bird("Alexis", "black");

                    crow instanceof Bird; // returns true
            
            //my solution: 
            function House(numBedrooms){
                    this.numBedrooms = numBedrooms;
                }
                let myHouse = new House(4);
                myHouse instanceof House;

        /*
            if an instance of is used for an object that has no constructor, result
            will be below
        */

                    let canary = {
                        name:"Mildred",
                        color:"Yellow",
                        numLegs:2
                    };
                    canary instanceof Bird; //returns false here 

            /*understanding Own Properties
                    the new instance will have a copy of its own properties

            */

            function Bird1(name) {
            this.name = name;
            this.numLegs = 2;
            }

            let duck = new Bird1("Donald");
            let canary1 = new Bird1("Tweety");
            let ownProps = [];
            for(let property in duck){
                if(duck.hasOwnProperty(property)){
                    ownProps.push(property);
                }
            }
            console.log(ownProps); // prints ["name","numLegs"];

            for(let property in canary1){
                if(canary1.hasOwnProperty(property)){
                    ownProps.push(property);
                }
            }   
            console.log(ownProps);

            //random example 
            const weapons = ['candlestick','lead pipe','revolver'];

            const makeBroken = weapons.map((item) =>{
                return `broken ${item}`;
            });

            console.log(makeBroken);

           //how to use prototype properties to reduce complicated code
           //the prototype is an object that is shared among ALL instances of bird
           //
           function doggy(name){
               this.name = name;
           }
           doggy.prototype.numLegs = 4; //adding the prototype here 
           let beagle = new doggy("Snoopy");

           //how to iterate over all properties

           function doggypoo(name){
               this.name = name; //own property
           }
           doggypoo.prototype.numLegs = 4; //prototype property 
           let beagles = new Dog("Snoopy");

           let ownProps = [];
           let prototypeProps = []; 

           for(let property in beagles){
               if(ownProps.hasOwnProperty(property)){
                   ownProps.push(property);
               }
               else{
                   prototypeProps.push(property);
               }
           }
           console.log(prototypeProps);
           console.log(ownProps);
            
           
           //how to understand the constructor proeprty
           function Dog(name) {
            this.name = name;
            }

                // Add your code below this line
                function joinDogFraternity(candidate) {
                    if(candidate.constructor === Dog){  //can also use candidate instanceof Dog
                        return true;
                    }else{
                        return false;
                    }
                }

                //how to change prototype to a new object

                function Dog(name) {
                    this.name = name; 
                  }
                  
                  Dog.prototype = {
                    // Add your code below this line
                    numLegs:4,
                    eat: function(){
                        console.log(`nom nom nom `);
                    },
                    describe: function(){
                        console.log(` my name is ${this.name}`);
                    }
                  };
                  
//how to Remember to Set the Constructor Property when Changing the Prototype
                function Dog(name) {
                    this.name = name; 
                }
                
                // Modify the code below this line
                Dog.prototype = {
                    constructor: Dog, //setting the constructor here 
                    numLegs: 2, 
                    eat: function() {
                    console.log("nom nom nom"); 
                    }, 
                    describe: function() {
                    console.log("My name is " + this.name); 
                    }
                };

//how to Understand Where an Object’s Prototype Comes From
//doing this with the isPrototypeof

            function Dog(name) {
                this.name = name;
            }
            
            let beagle = new Dog("Snoopy");
            
            // Add your code below this line
            Dog.prototype.isPrototypeOf(beagle);

//how to Understand the Prototype Chain

            function Dog(name) {
                this.name = name;
            }
            
            let beagle = new Dog("Snoopy");
            
            Dog.prototype.isPrototypeOf(beagle);  // => true
            
            // Fix the code below so that it evaluates to true
            Object.prototype.isPrototypeOf(Dog.prototype);


//how to use Inheritance So You Don't Repeat Yourself
function Cat(name) {
    this.name = name; 
  }
  
  Cat.prototype = {
    constructor: Cat, 
  
  };
  
  function Bear(name) {
    this.name = name; 
  }
  
  Bear.prototype = {
    constructor: Bear, 
  
  };
  
  function Animal() { }
  
  Animal.prototype = {
    constructor: Animal,
    eat:function(){ //added here the eat method so that bear/cat will inherit from animal 
      console.log(`nom nom nom`);
    }
  };

  //how to inherit behaviors from a supertype
  function Animal() { }

  Animal.prototype = {
    constructor: Animal, 
    eat: function() {
      console.log("nom nom nom");
    }
  };
  
  // Add your code below this line
  
  let duck = Object.create(Animal.prototype); // calls the animal prototype here
  let beagle = Object.create(Animal.prototype); // calls the animal prototype here
  
  duck.eat(); // Should print "nom nom nom"
  beagle.eat(); // Should print "nom nom nom" 

//how to Set the Child's Prototype to an Instance of the Parent

    function Animal() { }

    Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
    }
    };

    function Dog() { }

    // Add your code below this line
    Dog.prototype = Object.create(Animal.prototype); // dog inherits all of animal properities here including methods

    let beagle = new Dog();
    beagle.eat();  // Should print "nom nom nom"














































