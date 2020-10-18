import React, { useState } from 'react';

import './EightBall.css'

function EightBall(props) {

  const [color, setColor] = useState('black');
  const [text, setText] = useState('Think of a Question')

  const GetAnswer = () => {
    let rand = Math.floor(Math.random() * props.answers.length);
    let answer = props.answers[rand];
    setColor(answer.color);
    setText(answer.msg);
  }
  const Reset = () => {
    setColor('black');
    setText('Think of a Question');
  }
  
  return (
    <div className="container">
      <button 
      className='btn'
      onClick={GetAnswer}
      style={{backgroundColor: color}}
      >
        {text}
      </button>
      <button
      className='reset-btn'
      onClick={Reset}
      >
        Another Question
      </button>
    </div>
  )
}

export default EightBall;