

function whatIsInAName(collection, source) {
    // What's in a name?
    //var arr = [];
    // Only change code below this line
   let srcKeys = Object.keys(source); //srckeys = ["last"] , source = {last: "capulet"}

   return  collection.filter((collectionItem)=>{ //filter through the collection array
     return srcKeys.every((keyInObject) =>{ //use srckeys and find the keyInObject = ["last"]
       return collectionItem[keyInObject] === source[keyInObject]; 
              //["last "] === ["last"]
     });
   });

    // Only change code above this line
    
  }

  whatIsInAName([{ first: "Romeo", last: "Montague" },
  { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });