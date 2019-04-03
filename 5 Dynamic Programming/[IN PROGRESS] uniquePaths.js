const nPaths = (m, n) => {
  if (m === 1 || n === 1) return 1;
  return nPaths(m - 1, n) + nPaths(m, n - 1);
};

console.log(nPaths(7,3))

const uniquePaths = (m, n) => {
  const makeMatrix = (m, n) => Array(m).fill(Array(n).fill(1));
  let matrix = makeMatrix(m, n);
  debugger;
  for(let i = 1; i < m; i++) {
      for(let j = 1; j < n; j++) {
          matrix[i][j] = matrix[i-1][j]+matrix[i][j-1];
      }
  }
  return matrix[m-1][n-1];
};

console.log(uniquePaths(7, 3))