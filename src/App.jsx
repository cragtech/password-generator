import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(0);
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [specialChars, setSpecialChars] = useState(false);
  const [allIncluded, setAllIncluded] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const generatePassword = () => {

  }

  useEffect(()=> {

  }, [])

  return (
    <div className="App">
      <h1>Password Generator</h1>
      <div className="best-practices">
        Best practices for passwords are as follows:
      </div>
      <input className="passwordInput" type="text" value={password} />
      <span>Select the following options for creating your password:</span>
      <div className="pw-options">
      <label>
          <input
            type="radio"
            checked={allIncluded}
            onChange={(e) => setAllIncluded(e.target.checked)}
          />
          Include All
        </label>
        <label>
          <input
            type="checkbox"
            checked={uppercase}
            onChange={(e) => setUppercase(e.target.checked)}
          />
          Uppercase
        </label>
        <label>
          <input
            type="checkbox"
            checked={lowercase}
            onChange={(e) => setLowercase(e.target.checked)}
          />
          Lowercase
        </label>
        <label>
          <input
            type="checkbox"
            checked={numbers}
            onChange={(e) => setNumbers(e.target.checked)}
          />
          Numbers (0-9)
        </label>
        <label>
          <input
            type="checkbox"
            checked={specialChars}
            onChange={(e) => setSpecialChars(e.target.checked)}
          />
          Special characters
        </label>
      </div>
      <button>
        Create New Password
      </button>
    </div>
  );
}

export default App;
