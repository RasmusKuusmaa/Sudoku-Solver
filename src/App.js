import { useState } from 'react';
import './App.css';

function App() {
  const [grid, setGrid] = useState(Array.from({ length: 9 }, () => Array(9).fill('')));
  
  return (
    <div className="App">
      <div className="SudokuContainer">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <div key={colIndex} className="Cell">
                
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
      <button>SOLVE</button>
    </div>
  );
}

export default App;
