import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ data, answer }) {
  return (
    data.map((guess, index) => (
      <p className="guess" key={index}>
        <Cells guess={guess} answer={answer}/>
      </p>
    ))
  )
}

function Cells ({ guess, answer }) {
  const checkedGuess = checkGuess(guess, answer);

  if (checkedGuess) {
    return checkedGuess.map((cell, index) => (
      <span className={`cell ${cell.status}`} key={index}>{cell.letter}</span>
    ))
  }

  return range(5).map((cell, index) => (<span className="cell" key={index}>{''}</span>))
}

export default Guess;
