function pairElement(str) {
  let emptyArr = [];
  let a = ['G','C']; // if item indexOf(0)== "G"
  let b = ['T','A']; // if item indexOf(0)== "T"
  let c = ['A', 'T']; //if item indexOf(0) == "A"
  let d = ['C','G']; // if item indexOf(0)== "C"
  let newArr = str.split("");

  newArr.forEach(item =>{
    if(item[0] == "C"){
    emptyArr.push(d);
    } else if(item[0]== 'A'){
      emptyArr.push(c);
    } else if(item[0] == 'G'){
      emptyArr.push(a);
    }else if(item[0] == 'T'){
      emptyArr.push(b)
    }
    //return newArr;
  });
  return emptyArr;

}
pairElement("CTCTA");
