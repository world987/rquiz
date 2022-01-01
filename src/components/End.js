import React, {useContext} from 'react'
import {QuizContext} from '../helpers/Context'
import { Questions } from '../helpers/Questions';
import '../styles/End.css'

function End() {

    const {setGameState, score, setScore} =  useContext(QuizContext);

    const restartQuiz=() =>{
        setGameState("start");
        setScore(0);
    }

    return (
        <div className="end">
            <h4>Quiz Finished</h4>
            <h3>Your score : {score} / {Questions.length}</h3>
            <button className="restartButton" onClick={restartQuiz}>Restart Quiz</button>
        </div>
    )
}

export default End
