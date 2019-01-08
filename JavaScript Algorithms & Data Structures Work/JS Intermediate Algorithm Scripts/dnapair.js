function pairElement(str) {
  let emptyArr = [];
  let a = ['G','C'];
  let b = ['T','A'];
  let c = ['A', 'T'];
  let d = ['C','G'];
  let newArr = str.split("");

  newArr.map(item =>{
    if(item[0] === 'C'){
    emptyArr.push(a);
    } else if(item[0]=== 'A'){
      emptyArr.push(c);
    } else if(item[0] === 'G'){
      emptyArr.push(d);
    }else if(item[0] === 'T'){
      emptyArr.push(b)
    }
  });
  return emptyArr;

}
pairElement("GCG");
