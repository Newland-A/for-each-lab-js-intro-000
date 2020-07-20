/*function iterativeLog(array) {
  array.each(callback)
}
console.log(array)
*/
function iterativeLog(array){
array.forEach(element => {
  console.log(`${array.indexOf(element)}: ${element}`);
})

}

function iterate(callbackFunction){
  var animals = [1,2,3,4,5,6];
  array.forEach(callbackFunction);
  return array;
}
/*
function doToArray(array, callback){
  array.forEach(callback);
}*/