function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  let result = [];
  for(let i = 0;i < collection_a.length; i++){
     for(let j = 0;j < collection_b.length; j++){
      if(collection_a[i] === collection_b[j]){
        result.push(collection_a[i]);
      }
     }
  }
  return result;
}

module.exports = collect_same_elements;
