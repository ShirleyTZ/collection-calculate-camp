'use strict';
const result =[];
function map_to_even(collection){
  for(let i = 0;i < collection.length;i++){
    let item = collection[i]*2;
    result.push(item);
  }
  return result;
}
module.exports = map_to_even;
