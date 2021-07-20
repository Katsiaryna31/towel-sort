
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
    return [];
  }
  let arr = [];
  matrix.map(array => {
    if (matrix.indexOf(array)%2 === 0) {
      array.forEach(el=> {
        arr.push(el);
      })
    } else {
      for (let i = array.length-1; i>=0; i--) {
        arr.push(array[i])
      };
    }
  })
  return arr;
}
