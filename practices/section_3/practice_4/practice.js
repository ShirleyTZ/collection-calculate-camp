function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  let result = [];
  for(let i = 0;i < collection_a.length; i++){
    let firstOne = true;
    let theSameOne;
    let item = {};
    if(collection_a[i].indexOf("-") !== -1){
      let arr = collection_a[i].split("-");
     item.key = arr[0];
     item.count = parseInt(arr[1]);
     result.push(item);
    }else{
      for(let j = 0;j < result.length; j++){
        if(collection_a[i] === result[j].key){
          firstOne = false;
          theSameOne = result[j];
        }
       }
       if(firstOne){
         item.key = collection_a[i];
         item.count = 1;
         result.push(item);
       }else{
        theSameOne.count = theSameOne.count + 1;
       }
    }
    }
  for(let i = 0;i < result.length; i++){
    for(let j = 0;j < object_b.value.length; j++){
      if(result[i].key === object_b.value[j]){
        let num = Math.floor(result[i].count/3);
        result[i].count = result[i].count - num;
      }
    }
  }
  return result;
}

module.exports = create_updated_collection;
