// Determine if a 9x9 Sudoku board is valid. A valid Sudoku board (partially filled) must not violate the rules of Sudoku.
// The sudoku board input is represented by a 2D array containing either string numbers or "." (empty space) as elements

export const matrices = {
  board1: [
    ["9", "8", "4", ".", "3", "1", ".", "7", "2"],
    ["6", "1", ".", ".", ".", "7", ".", ".", "."],
    ["2", "5", "7", ".", ".", "9", "8", ".", "."],
    ["3", ".", ".", ".", "6", ".", ".", "1", "."],
    [".", ".", ".", "3", "7", ".", "9", "2", "."],
    [".", ".", "9", ".", ".", "5", ".", ".", "."],
    [".", "3", ".", ".", ".", "6", ".", ".", "."],
    [".", "4", "5", ".", "1", "8", ".", "9", "6"],
    ["1", "9", "6", "7", ".", ".", "2", "8", "."], //Should Pass
  ],
  board2: [
    ["9", "8", "4", ".", "3", "1", ".", "7", "2"],
    ["6", "1", ".", ".", ".", "7", ".", ".", "."],
    ["2", "5", "7", ".", ".", "9", "8", ".", "."],
    ["3", ".", ".", ".", "6", ".", ".", "1", "."],
    [".", ".", ".", ".", "6", ".", ".", "1", "."], //Column Failure Test Here
    [".", ".", "9", ".", ".", "5", ".", ".", "."],
    [".", "3", ".", ".", ".", "6", ".", ".", "."],
    [".", "4", "5", ".", "1", "8", ".", "9", "6"],
    ["1", "9", "6", "7", ".", ".", "2", "8", "."],
  ],
  board3: [
    ["9", "8", "4", ".", "3", "1", ".", "7", "2"],
    ["6", "1", ".", ".", ".", "7", ".", ".", "."],
    ["2", "5", "7", ".", ".", "9", "8", ".", "."],
    ["3", ".", ".", ".", "6", ".", ".", "1", "."],
    [".", ".", ".", "3", "7", ".", "9", "2", "."],
    [".", ".", "9", ".", ".", "5", ".", ".", "."],
    [".", "3", ".", ".", ".", "6", ".", ".", "."],
    [".", "4", "5", ".", "1", "8", ".", "9", "6"],
    ["1", "8", "6", "7", ".", ".", "2", "8", "."], //Row Failure Test Here
  ],
  board4: [
    ["9", "8", "4", ".", "3", "1", ".", "7", "2"],
    ["6", "1", ".", ".", ".", "7", ".", ".", "."],
    ["2", "5", "7", ".", ".", "9", "8", ".", "."],
    ["3", ".", ".", ".", "6", ".", ".", "1", "."],
    [".", ".", ".", "3", "7", ".", "9", "2", "."],
    [".", ".", "9", ".", ".", "5", ".", ".", "."],
    ["4", "3", ".", ".", ".", "6", ".", ".", "."],
    [".", "4", "5", ".", "1", "8", ".", "9", "6"], //Grid Failure Test Here
    ["1", "9", "6", "7", ".", ".", "2", "8", "."],
  ],
};

export const validateSudoku = (arr) => {
  for (let x = 0; x < arr.length; x++) {
    const checkRow = new Map();
    const checkColumn = new Map();
    for (let y = 0; y < arr.length; y++) {
      const rowCheck = arr[x][y];
      const columnCheck = arr[y][x];
      if (rowCheck !== "." && checkRow.has(rowCheck)) {
        return false;
      }
      if (columnCheck !== "." && checkColumn.has(columnCheck)) {
        return false;
      }
      checkRow.set(rowCheck, true);
      checkColumn.set(columnCheck, true);
    }
  }

  for (let x = 0; x < 9; x += 3) {
    for (let y = 0; y < 9; y += 3) {
      const checkGrid = new Map();
      for (let a = 0; a < 3; a++) {
        for (let b = 0; b < 3; b++) {
          const gridCheck = arr[x + a][y + b];
          if (gridCheck !== "." && checkGrid.has(gridCheck)) {
            console.log("hit");
            return false;
          }
          checkGrid.set(gridCheck, true);
        }
      }
    }
  }

  return true;
};
