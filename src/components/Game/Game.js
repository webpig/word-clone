import React, { useState } from 'react';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [results, setResults] = useState([])
  const [submitTimes, setSubmitTimes] = useState(0);
  const [status, setStatus] = useState('')
  const [isOver, setIsOver] = useState(false);

  const handleSubmit = (guess) => {
    setResults([...results, guess])
    const nextSubmitTimes = submitTimes + 1;
    setSubmitTimes(nextSubmitTimes);
    check(guess, answer, nextSubmitTimes);
  }

  const check = (guess, answer, nextSubmitTimes) => {
    if (nextSubmitTimes === 6) {
      setStatus('error')
      setIsOver(true)
    } else if (guess === answer) {
      setStatus('success')
      setIsOver(true)
    }
  }

  return (
    <>
      <GuessResults data={results} answer={answer} />
      <GuessInput onSubmit={handleSubmit} disabled={isOver} />
      { status && <Banner status={status} /> }
    </>
  )
}

function Banner ({ status }) {
  if (status === 'success') {
    return (
      <div class="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>3 guesses</strong>.
        </p>
      </div>
    )
  } else if (status === 'error') {
    return (
      <div class="sad banner">
        <p>Sorry, the correct answer is <strong>LEARN</strong>.</p>
      </div>
    )
  }
}

export default Game;
