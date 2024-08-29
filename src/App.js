import { useState } from "react";
import "./App.css";

function App() {
  const [grid, setGrid] = useState(
    Array.from({ length: 9 }, () => Array(9).fill(""))
  );

  const handleChange = (row, col, e) => {
    const value = e.target.value;
    if (!isNaN) {
      setGrid((prevGrid) => {
        return prevGrid.map((r, rowIndex) =>
          r.map((cell, colIndex) =>
            rowIndex === row && colIndex === col ? value : cell
          )
        );
      });
    }
  };

  const handleSubmit = () => {
    const gridCopy = grid.map((row) =>
      row.map((cell) => (cell === "" ? 0 : parseInt(cell, 10)))
    );
    if (solve(gridCopy, 0, 0)) {
      setGrid(
        gridCopy.map((row) =>
          row.map((cell) => (cell === 0 ? "" : cell.toString()))
        )
      );
    } else {
      alert("Unsolvable");
    }
  };

  const isValidMove = (grid, row, col, num) => {
    for (let i = 0; i < 9; i++) {
      if (grid[row][i] === num || grid[i][col] === num) {
        return false;
      }
    }
    const cornerRow = row - (row % 3);
    const cornerCol = col - (col % 3);
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (grid[cornerRow + i][cornerCol + j] === num) {
          return false;
        }
      }
    }
    return true;
  };

  const solve = (grid, row, col) => {
    if (col === 9) {
      if (row === 8) {
        return true;
      }
      row += 1;
      col = 0;
    }
    if (grid[row][col] !== 0) {
      return solve(grid, row, col + 1);
    }
    for (let num = 1; num <= 9; num++) {
      if (isValidMove(grid, row, col, num)) {
        grid[row][col] = num;
        if (solve(grid, row, col + 1)) {
          return true;
        }
        grid[row][col] = 0;
      }
    }
    return false;
  };

  return (
    <div className="App">
      <div className="SudokuContainer">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <input
                key={colIndex}
                type="text"
                value={cell}
                className="Cell"
                maxLength={1}
                onChange={(e) => handleChange(rowIndex, colIndex, e)}
              />
            ))}
          </div>
        ))}
      </div>
      <button onClick={handleSubmit}>SOLVE</button>
    </div>
  );
}

export default App;
