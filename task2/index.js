function grid(N) {
  if (N < 0) return null;
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
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
