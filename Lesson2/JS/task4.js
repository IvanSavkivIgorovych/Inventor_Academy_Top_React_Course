let fmap = function (a, gen) {
  let x = 0;
  let x1 = 0;
  let generation1 = function () {
    const argNumber = arguments.length;
    let newArray = [];
    for (let i = 0; i < argNumber; i++) {
      newArray[i] = arguments[i];
    }
    x = gen.aplly(null, newArray);
    x1 = a(x);
    return x1;
  };
  return generation1;
};
