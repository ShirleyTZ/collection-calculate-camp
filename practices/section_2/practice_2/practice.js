function count_same_elements(collection) {
  //在这里写入代码
  let result = [];
  for(let i = 0;i < collection.length; i++){
    let firstOne = true;
    let theSameOne;
    let item = {};
    if(collection[i].indexOf("-") !== -1){
      let arr = collection[i].split("-");
     item.key = arr[0];
     item.count = parseInt(arr[1]);
     result.push(item);
    }else{
      for(let j = 0;j < result.length; j++){
        if(collection[i] === result[j].key){
          firstOne = false;
          theSameOne = result[j];
        }
       }
       if(firstOne){
         item.key = collection[i];
         item.count = 1;
         result.push(item);
       }else{
        theSameOne.count = theSameOne.count + 1;
       }
    }
    }
     
  return result;
}

module.exports = count_same_elements;
