import React, { useState } from 'react';

function GuessInput({ disabled, onSubmit }) {
  const [guess, setGuess] = useState('');

  const handleChange = (e) => {
    const nextGuess = e.target.value.toUpperCase();
    setGuess(nextGuess);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(guess);
    console.log({ guess });
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        value={guess}
        minLength={5}
        maxLength={5}
        disabled={disabled}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        onChange={handleChange}
      />
    </form>
  );
}

export default GuessInput;
