function count_same_elements(collection) {
  //在这里写入代码
  let result = [];
  for(let i = 0;i < collection.length; i++){
    let firstOne = true;
    let theSameOne;
     for(let j = 0;j < result.length; j++){
      if(collection[i] === result[j].key){
        firstOne = false;
        theSameOne = result[j];
      }
     }
     if(firstOne){
      let item = {};
       item.key = collection[i];
       item.count = 1;
       result.push(item);
     }else{
      theSameOne.count = theSameOne.count + 1;
     }
  }
  return result;
}

module.exports = count_same_elements;
