import './App.css';

import Start from './components/Start.js'
import Quiz from './components/Quiz.js'
import End from './components/End.js'

import React, {useState} from 'react';
import {QuizContext} from './helpers/Context'

function App() {
  const [gameState, setGameState] = useState("start");
  const[score, setScore] = useState(0);

  return (
      <div className='mainpage'>
            <QuizContext.Provider value={{gameState, setGameState, score, setScore}}>
              {gameState==='start'&& <Start />}
              {gameState==='quiz'&& <Quiz />}
              {gameState==='end'&& <End />}
            </QuizContext.Provider>  
      </div>  
  );
}

export default App;
