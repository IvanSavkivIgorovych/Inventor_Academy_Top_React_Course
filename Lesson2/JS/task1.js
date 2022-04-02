function sequence(start = 0, step = 1) {
  let startNumber = start;
  return function () {
    let finishNumber = startNumber;
    startNumber += step;
    return finishNumber;
  };
}
