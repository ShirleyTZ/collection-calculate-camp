function count_same_elements(collection) {
  //在这里写入代码
  let result = [];
  for(let i = 0;i < collection.length; i++){
    let firstOne = true;
    let normalOne = true;
    let theSameOne;
    let item = {};
    let arr = [];
    if(collection[i].indexOf("-") !== -1){
      normalOne =false;
      arr = collection[i].split("-");
      arr[1] = Number(arr[1]);
    }else if(collection[i].indexOf(":") !== -1){
      normalOne =false;
      arr = collection[i].split(":");
      arr[1] = Number(arr[1]);
    }else if(collection[i].indexOf("[") !== -1 && collection[i].indexOf("]") !== -1){
      normalOne = false;
      let n = collection[i].indexOf("[");
      let k = collection[i].indexOf("]");
      arr[0] = collection[i].substring(0,n);
      arr[1] = Number(collection[i].substring(n+1, k));
    }

    for(let j = 0;j < result.length; j++){
      if(collection[i] === result[j].name){
        firstOne = false;
        theSameOne = result[j];
      }else if(arr[0] === result[j].name){
        firstOne = false;
        theSameOne = result[j];
      }
    }
    if(normalOne){
      if(firstOne){
        item.name = collection[i];
        item.summary = 1;
        result.push(item);
      }else{
        theSameOne.summary = theSameOne.summary + 1;
      }
    }else{
      if(firstOne){
        item.name = arr[0];
        item.summary = arr[1];
        result.push(item);
      }else{
        theSameOne.summary = theSameOne.summary + arr[1];
      }
    }
  }      
  return result;
}

module.exports = count_same_elements;
