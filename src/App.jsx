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
  const [charArr, setCharArr] = useState([]);


  const generatePassword = () => {
    //create a variable to store the password
    let generatedPassword = '';

    let selectedValsArr = [uppercase, lowercase, numbers, specialChars];

    //create for loop to iterate through the selectedValsArr array
    for (let i = 0; i < selectedValsArr.length; i++) {
      if (selectedValsArr[i] === true) {
        let switchVal = selectedValsArr[i];
        switch (switchVal) {
          case uppercase:
            break;
          case lowercase:
            break;
          case numbers:
            break;
          case specialChars:
            break;
          default:
            break;
        }
      }
    }
  }

  const findAndRemove = (option) => {
    setCharArr(charArr.filter((char) => char !== option));
  }

  const clearOptions = () => {
    setUppercase(false);
    setLowercase(false);
    setNumbers(false);
    setSpecialChars(false);
    setAllIncluded(false);
    setCharArr([]);
  }

  useEffect(()=> {
    let aciiVal = 54;
    let char = String.fromCharCode(aciiVal);
    console.log("This is a character: " + char);

    let aciiVal2 = 'A';
    let char2 = aciiVal2.charCodeAt(0);
    console.log("This is a acii number: " + char2);

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
              setCharArr(['uppercase', 'lowercase', 'numbers', 'specialChars'])

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
                findAndRemove ('uppercase')
              } else if (!uppercase && lowercase && numbers && specialChars && !allIncluded)
                {
                setAllIncluded(true)
                setUppercase(e.target.checked)
                charArr.push('uppercase')
              } else if (uppercase){
                setUppercase(e.target.checked)
                findAndRemove ('uppercase')
              } else if (!uppercase) {
                setUppercase(e.target.checked)
                charArr.push('uppercase')
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
                findAndRemove ('lowercase')
              } else if (uppercase && !lowercase && numbers && specialChars && !allIncluded)
                {
                setAllIncluded(true)
                setLowercase(e.target.checked)
                charArr.push('lowercase')
              } else if (lowercase){
                setLowercase(e.target.checked)
                findAndRemove ('lowercase')
              } else if (!lowercase) {
                setLowercase(e.target.checked)
                charArr.push('lowercase')
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
                findAndRemove ('numbers')
              } else if (uppercase && lowercase && !numbers && specialChars && !allIncluded)
                {
                setAllIncluded(true)
                setNumbers(e.target.checked)
                charArr.push('numbers')
              } else if (numbers){
                setNumbers(e.target.checked)
                findAndRemove ('numbers')
              } else if (!numbers) {
                setNumbers(e.target.checked)
                charArr.push('numbers')
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
                findAndRemove ('specialChars')
              } else if (uppercase && lowercase && numbers && !specialChars && !allIncluded)
                {
                setAllIncluded(true)
                setSpecialChars(e.target.checked)
                charArr.push('specialChars')
              } else if (specialChars){
                setSpecialChars(e.target.checked)
                findAndRemove ('specialChars')
              } else if (!specialChars) {
                setSpecialChars(e.target.checked)
                charArr.push('specialChars')
              }
            }} />
            Special Characters
        </label>
        <button onClick={ () => clearOptions() }>
          Clear Options
        </button>
      </div>
      <button>
        Create New Password
      </button>
    </div>
  );
}

export default App;
