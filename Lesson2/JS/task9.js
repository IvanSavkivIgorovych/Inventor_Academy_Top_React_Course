const filter = function (arr, callback, thisArgument) {
  const length = arr.length;
  let results = [];
  for (let i = 0; i < length; i++) {
    if (callback.call(thisArgument, arr[i], i, arr)) {
      results.push(arr[i]);
    }
  }
  return results;
};
