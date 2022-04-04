function* concat(first, second) {
  let j = 0;
  for (let i = 0; i < first.length; i++) {
    yield first[i] === undefined ? second[j++] : first[i];
  }
  for (; j < second.length; j++) {
    yield second[j];
  }
}

function partialAny(fn, ...boundedArgs) {
  return (...args) => fn(...concat(boundedArgs, args));
}
