function pairElement(str) {
  let emptyArr = [];
  let a = ['G','K']
  let newArr = str.split("");

  newArr.map(item =>{
    if(newArr.item[0] === 'A'){
    emptyArr.push(a);
    }
  });
  return emptyArr;

}
  pairElement("GCG");