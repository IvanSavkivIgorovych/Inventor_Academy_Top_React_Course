function take(fn, count) {
  let array = [];
  for (i = 0; i < count; i++) {
    array[i] = fn();
  }
  return array;
}
