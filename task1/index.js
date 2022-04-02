function calculate(input) {
  let [leftPart, operator, rightPart] = input.split(" ");
  leftPart = leftPart.split("").length;
  rightPart = rightPart.split("").length;

  const operations = {
    "+": leftPart + rightPart,
    "-": leftPart - rightPart,
    "*": leftPart * rightPart,
    "//": leftPart / rightPart,
  };
  return ".".repeat(operations[operator]);
}
