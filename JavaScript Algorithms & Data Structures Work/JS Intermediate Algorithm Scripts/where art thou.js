

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

  function whatIsInAName(collection, source) {
    
   /*step 1*/let keys = Object.keys(source); //srckeys = ["last"] , source = {last: "capulet"}

   /*step 2*/ return collection.filter((collectionItem)=>{
   /*step 3*/    for(let key of keys){
        /*if collectionItem does not have the specific property name(key) OR
         collectionItem property does have the same value as source[key] value*/
        if(!collectionItem.hasOwnProperty(key) || collectionItem[key] !== source[key]){
        return false; 
      }
    }
    return true;
   });
        
  }

  whatIsInAName([{ first: "Romeo", last: "Montague" },
  { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });