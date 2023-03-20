import React, { useState, useEffect } from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Guess from '../Guess';

function GuessResults({ data, answer }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    setResults(getResults(data))
  }, [data])

  return (
    <div className="guess-results">
      <Guess data={results} answer={answer} />
    </div>
  )
}

function getResults (data) {
  if (data.length >= NUM_OF_GUESSES_ALLOWED) {
    return data.slice(0, NUM_OF_GUESSES_ALLOWED);
  } else {
    const emptyData = new Array(NUM_OF_GUESSES_ALLOWED - data.length).fill('');
    return [...data, ...emptyData];
  }
}

export default GuessResults;
