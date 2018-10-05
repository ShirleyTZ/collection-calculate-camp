'use strict';
var map_to_four_multiples_add_one = function(collection){
  const result = [];
  for(let i = 0; i < collection.length; i++){
    let item = collection[i]*4 + 1;
    result.push(item);
  }
  return result;
};

module.exports = map_to_four_multiples_add_one;
