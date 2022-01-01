import React , {useState, useContext} from 'react'
import {Questions} from '../helpers/Questions';
import { QuizContext } from '../helpers/Context';
import '../styles/Quiz.css'

function Quiz() {

    const[currentQuestion, setCurrentQuestion] = useState(0);
    const[selectedOption, setSelectedOption] = useState("");

    const {score,setScore, setGameState} = useContext(QuizContext);

    const nextQuestion=() =>{
        if(Questions[currentQuestion].answer == selectedOption){
            setScore(score+1);
        }
       setCurrentQuestion(currentQuestion+1);
    }

    const endQuiz=() =>{
        if(Questions[currentQuestion].answer == selectedOption){
            setScore(score+1);
        }
        setGameState("end");
    }

   
    const selectA = () =>{
        setSelectedOption("A");
    }

    const selectB=() =>{
        setSelectedOption("B");
    }

    const selectC=() =>{
        setSelectedOption("C");
    }

    const selectD=() =>{
        setSelectedOption("D");
    }

    return (
        <div className="quiz">
            <h6>Question No : {currentQuestion+1} </h6>

            <h4>{Questions[currentQuestion].prompt}</h4>
            <div className="options">
                <button className='optionButton' onClick={selectA}>{Questions[currentQuestion].A}</button>
                <button className='optionButton' onClick={selectB}>{Questions[currentQuestion].B}</button>
                <button className='optionButton' onClick={selectC}>{Questions[currentQuestion].C}</button>
                <button className='optionButton' onClick={selectD}>{Questions[currentQuestion].D}</button>
           </div>

           {
           currentQuestion==Questions.length-1 ?  (<button className="endButton" onClick={endQuiz}>End Quiz</button> )
                                                 : (<button className="nextButton" onClick={nextQuestion}>Next Question</button> )
           }

        </div>
    )
}

export default Quiz
