'use strict';
var rank_asc = function(collection){
  for(let i = 0;i < collection.length;i++){
    for(let j = 0;j < collection.length; j++){
      if(collection[j] < collection[j + 1]){
        let item = collection[j];
        collection[j] = collection[j + 1];
        collection[j + 1] = item;
      }
    }
  }
  return collection;
};

module.exports = rank_asc;
