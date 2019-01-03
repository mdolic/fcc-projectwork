function pairElement(str) {
  let emptyArr = [];
  let a = ['G','C'];
  let b = ['T','A'];
  let newArr = str.split("");

  newArr.map(item =>{
    if(item[0] === 'C'){
    emptyArr.push(a);
    } else if(item[0]=== 'A'){
      emptyArr.push(b);
    } else if(item[0] === 'G'){
      emptyArr.push(a);
    }
  });
  return emptyArr;

}
pairElement("ATCGA");