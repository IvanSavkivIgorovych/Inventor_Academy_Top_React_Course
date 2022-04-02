function grid(N) {
  if (N < 0) return null;
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let bias = 0;
  let grid = "";

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      grid += alphabet[(bias + j) % 26];
      if (j != N - 1) {
        grid += " ";
      }
      if (j === N - 1 && i !== N - 1) {
        grid += "\n";
      }
    }
    bias++;
  }
  return console.log(grid);
}
