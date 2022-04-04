function pluck(arr, fieldName) {
  return arr.filter((item) => fieldName in item).map((item) => item[fieldName]);
}
