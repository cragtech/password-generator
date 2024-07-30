import React from 'react';
import { useEffect, useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(4);
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [specialChars, setSpecialChars] = useState(false);
  const [allIncluded, setAllIncluded] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [placeholder, setPlaceholder] = useState('Max Length: 64');
  const [charArr, setCharArr] = useState([]);


  const generatePassword = (pwLength) => {
    //create a variable to store the password
    let tempPassword = '';
    let finalPassword = '';
    const generateRandomNumber = (bottomNum, topNum) => {
      return Math.floor(Math.random() * ((topNum - bottomNum) + 1)) + bottomNum;
    }
    //This function ensures that the password contains at least one of each character type selected.
    const initializePasswordChars = () => {
      for (let i = 0; i < charArr.length; i++) {
        switch (charArr[i]) {
          case 'uppercase':
            tempPassword += String.fromCharCode(generateRandomNumber(65, 90));
            break;
          case 'lowercase':
            tempPassword += String.fromCharCode(generateRandomNumber(97, 122));
            break;
          case 'numbers':
            tempPassword += String.fromCharCode(generateRandomNumber(48, 57));
            break;
          case 'specialChars':
            let randomSpecialChars = ''
            randomSpecialChars += String.fromCharCode(generateRandomNumber(33, 47));
            randomSpecialChars += String.fromCharCode(generateRandomNumber(58, 64));
            randomSpecialChars += String.fromCharCode(generateRandomNumber(91, 96));
            randomSpecialChars += String.fromCharCode(generateRandomNumber(123, 126));
            let randomSpecialCharsIndex = generateRandomNumber(0, randomSpecialChars.length - 1);
            randomSpecialChars = randomSpecialChars[randomSpecialCharsIndex];
            tempPassword += randomSpecialChars;
            break;
          default:
            break;
        }
      }
    }
    const randomPasswordChars = () => {
      const RandomCharIndex = generateRandomNumber(0, charArr.length - 1);
      switch (charArr[RandomCharIndex]) {
        case 'uppercase':
          tempPassword += String.fromCharCode(generateRandomNumber(65, 90));
          break;
        case 'lowercase':
          tempPassword += String.fromCharCode(generateRandomNumber(97, 122));
          break;
        case 'numbers':
          tempPassword += String.fromCharCode(generateRandomNumber(48, 57));
          break;
        case 'specialChars':
          let randomSpecialChars = ''
          randomSpecialChars += String.fromCharCode(generateRandomNumber(33, 47));
          randomSpecialChars += String.fromCharCode(generateRandomNumber(58, 64));
          randomSpecialChars += String.fromCharCode(generateRandomNumber(91, 96));
          randomSpecialChars += String.fromCharCode(generateRandomNumber(123, 126));
          let randomSpecialCharsIndex = generateRandomNumber(0, randomSpecialChars.length - 1);
          randomSpecialChars = randomSpecialChars[randomSpecialCharsIndex];
          tempPassword += randomSpecialChars;
          break;
        default:
          break;
      }
    }
    const scramblePassword = () => {
      const copiedTempPassword = tempPassword.slice(0 , tempPassword.length);
      for (let i = tempPassword.length; i > 0 ; i--) {
        let randomIndex = generateRandomNumber(0, i - 1);
        finalPassword += tempPassword[randomIndex];
        tempPassword = tempPassword.slice(0, randomIndex) + tempPassword.slice(randomIndex + 1);
      }
      setPassword(finalPassword);

    }
    const generateFinalPassword = () => {
      if (tempPassword.length === 0) {
        initializePasswordChars();
        generateFinalPassword();
      } else if (tempPassword.length > 0 && pwLength != tempPassword.length) {
        randomPasswordChars();
        generateFinalPassword();
      } if (pwLength == tempPassword.length) {
        scramblePassword();
      }
    }

    if (charArr.length > 0) {
      generateFinalPassword();
    }
    //END OF FUNCTION
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

  const copyToClipboard = (text) => {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }

  useEffect(()=> {

  }, [])

  return (
    <div className="App">
      <h1>Password Generator</h1>
      <div className="best-practices">
        Best practices for passwords are as follows:
      </div>
      <div className="password-container">
        <input className="passwordInput" type="text" value={password} />
        <a onClick={() => copyToClipboard(password) } className="copy-btn" ><i className="bi-copy"></i></a>
      </div>
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
      <button onClick={ () => generatePassword(length) }>
        Create New Password
      </button>
    </div>
  );
}

export default App;
