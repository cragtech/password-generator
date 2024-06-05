import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(null);
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [specialChars, setSpecialChars] = useState(false);
  const [allIncluded, setAllIncluded] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [placeholder, setPlaceholder] = useState('Max Length: 64');

  const generatePassword = () => {

  }

  useEffect(()=> {
    setAllIncluded(allIncluded)
    setLength(length)
    setLowercase(lowercase)
    setUppercase(uppercase)
    setNumbers(numbers)
    setSpecialChars(specialChars)

  }, [uppercase, lowercase, numbers, specialChars, allIncluded, length])

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
        <span>Length: </span>
          <input
            className="length-input"
            placeholder={placeholder}
            min="1"
            max="64"
            type="number"
            value={length}
            onChange={(e) => {

              if (e.target.value <= 64 && e.target.value > 0) {
                setLength(e.target.value)
              } else {
                setLength(length)
              }
            }}
          />
        </label>
      <label>
          <input
            type="radio"
            checked={allIncluded}
            onChange={(e) => {
              setAllIncluded(e.target.checked)
              setUppercase(e.target.checked)
              setLowercase(e.target.checked)
              setNumbers(e.target.checked)
              setSpecialChars(e.target.checked)

            }}
          />
          Include All
        </label>
        <label>
          <input
            type="checkbox"
            checked={uppercase}
            onChange={(e) => {
              if (allIncluded) {
                setAllIncluded(false)
                setUppercase(e.target.checked)
              } else if (!uppercase && lowercase && numbers && specialChars && !allIncluded)
                {
                setAllIncluded(true)
                setUppercase(e.target.checked)
              } else {
                setUppercase(e.target.checked)
              }
            }}
          />
          Uppercase
        </label>
        <label>
          <input
            type="checkbox"
            checked={lowercase}
            onChange={(e) => {
              if (allIncluded) {
                setAllIncluded(false)
                setLowercase(e.target.checked)
              } else if (uppercase && !lowercase && numbers && specialChars && !allIncluded)
                {
                setAllIncluded(true)
                setLowercase(e.target.checked)
              } else {
                setLowercase(e.target.checked)
              }
            }}
          />
          Lowercase
        </label>
        <label>
          <input
            type="checkbox"
            checked={numbers}
            onChange={(e) => {
              if (allIncluded) {
                setAllIncluded(false)
                setNumbers(e.target.checked)
              } else if (uppercase && lowercase && !numbers && specialChars && !allIncluded)
                {
                setAllIncluded(true)
                setNumbers(e.target.checked)
              } else {
                setNumbers(e.target.checked)
              }
            }}
          />
          Numbers (0-9)
        </label>
        <label>
          <input
            type="checkbox"
            checked={specialChars}
            onChange={(e) => {
              if (allIncluded) {
                setAllIncluded(false)
                setSpecialChars(e.target.checked)
              } else if (uppercase && lowercase && numbers && !specialChars && !allIncluded)
                {
                setAllIncluded(true)
                setSpecialChars(e.target.checked)
              } else {
                setSpecialChars(e.target.checked)
              }
            }}
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
