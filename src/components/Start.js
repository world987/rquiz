import React, {useContext} from 'react'
import Img from '../assets/img.svg'

import {QuizContext} from '../helpers/Context'
import '../styles/Start.css'

function Start() {

    const {setGameState} = useContext(QuizContext);

    const startQuiz = () =>{
        setGameState("quiz")
    }
    return (

        <div className="start">
            <div>
                <img className="mainimg" src={Img} alt=""/>
            </div>
            <button className="startButton" onClick={startQuiz}>Start Quiz</button>
        </div> 
    
    )
}

export default Start
