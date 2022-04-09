import React, { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import logo from '../logo.svg';
import { stockData } from "../data";

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false)
    const [score, setScore] = useState(0)

    const handleAnswerButtonClick = (isCorrect) =>{
        if(isCorrect === true){
            setScore(score+1);
        }
        const nextQuestion = currentQuestion + 1;
        if(nextQuestion < stockData.length){
            setCurrentQuestion(nextQuestion)
        }
        else{
            setShowScore(true);
        }


    };


    return (
        <div className='app'>
        <img src= {logo} alt = "logo" className="App-logo" style = {{width: '200px'}}/>
        {/* replace "false" with logic to display the
        score when user has answered all questions. */}
        {showScore?(
            <div className='score-section'> You scored <b>{score}</b> out of {stockData.length}!!!</div>
        ):(
            <>
            <div className="question-section">
                <div className="question-count">
                    <span><big>Question {currentQuestion + 1 }</big></span>/{stockData.length}
                </div>
                <div className="question-text">
                    {stockData[currentQuestion].question}
                </div>

                <div className = "answer-section">
                    {stockData[currentQuestion].answerOptions
                    .map((answerOption)=> (
                        <button className = "btn" onClick = {() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                    ))}

                </div>
                </div>
            </>
        )}
        </div>
    );
}

export default Quiz
