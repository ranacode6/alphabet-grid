import React, { useState } from 'react';
import './App.css';

function App() {
  const [outputString, setOutputString] = useState('');

  // Function to handle tile click
  const handleTileClick = (letter) => {
    let updatedString = outputString + letter;

    // Check for three or more consecutive letters
    const regex = /([A-Z])\1{2,}/g;
    updatedString = updatedString.replace(regex, (match) =>
      '_'.repeat(Math.ceil(match.length / 3))
    );

    setOutputString(updatedString);
  };

  // Render alphabet tiles
  const renderTiles = () => {
    return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter) => (
      <div
        key={letter}
        className="tile"
        onClick={() => handleTileClick(letter)}
      >
        {letter}
      </div>
    ));
  };

  return (
    <div className="App">
      <h1>Alphabet Grid</h1>
      <div className="grid-container">{renderTiles()}</div>
      <div id="outputString">{outputString}</div>
    </div>
  );
}

export default App;
