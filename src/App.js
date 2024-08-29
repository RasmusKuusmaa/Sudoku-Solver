import { useState } from 'react';
import './App.css';

function App() {
  const [grid, setGrid] = useState(Array.from({ length: 9 }, () => Array(9).fill('')));

  const handleChange = (row, col, e) => {
    const value = e.target.value;

    setGrid(prevGrid => {
      return prevGrid.map((r, rowIndex) =>
        r.map((cell, colIndex) =>
          rowIndex === row && colIndex === col ? value : cell
        )
      );
    });
  };


  return (
    <div className="App">
      <div className="SudokuContainer">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <input 
                key={colIndex}
                type='text'
                value={cell}
                className='Cell'
                maxLength={1}
                onChange={(e) => handleChange(rowIndex, colIndex, e)}
              />
            ))}
          </div>
        ))}
      </div>
      <button onClick={() => console.log(grid)}>SOLVE</button>
    </div>
  );
}

export default App;
