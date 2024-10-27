import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputString, setInputString] = useState('');
  const [result, setResult] = useState('');

  const checkPalindrome = (str) => {
    const cleanedString = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedString = cleanedString.split('').reverse().join('');
    return cleanedString === reversedString;
  };

  const handleCheck = () => {
    if (inputString.trim() === '') {
      setResult('Please enter a valid string');
    } else {
      const isPalindrome = checkPalindrome(inputString);
      setResult(isPalindrome ? `'${inputString}' is a palindrome` : `'${inputString}' is not a palindrome`);
    }
  };

  return (
    <div className="App">
      <h1>Palindrome Checker</h1>
      <input
        type="text"
        value={inputString}
        onChange={(e) => setInputString(e.target.value)}
        placeholder="Enter a string"
      />
      <button onClick={handleCheck}>Check Palindrome</button>
      <p>{result}</p>
    </div>
  );
}

export default App;
