function map(fn, array) {
  const lengthOfArray = array.length;
  let resultArray = [];
  for (i = 0; i < lengthOfArray; i++) {
    resultArray[i] = fn(array[i]);
  }
  return resultArray;
}
