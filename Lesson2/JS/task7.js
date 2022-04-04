const bind = function (fn, context) {
  const bindArguments = [].slice.call(arguments, 2);
  return function () {
    const fnArguments = [].slice.call(arguments);
    return fn.apply(context, bindArguments.concat(fnArguments));
  };
};
