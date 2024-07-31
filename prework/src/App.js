import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Input Box </h1>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
        />
        <p>You typed: {inputValue}</p>
      </header>
    </div>
  );
}

export default App;
