function calculate(input) {
  if (typeof input !== string) return "";

  const [leftPart, operator, rightPart] = input.split(" ");
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
