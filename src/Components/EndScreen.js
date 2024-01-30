
import React,{useContext,} from "react";
import { QuizContext } from "../Assists/Contexts";
import {Questions} from "../Assists/QuestionBank";
import "../App.css";





 function EndScreen() {
  const{score, setScore, setGameState}=useContext(QuizContext)

  const restartQuiz = ()=>{
    setScore(0)
    setGameState("menu");
  };
  return (
    <div className='EndScreen'>
      <h1>Quiz finish</h1>
      <h3>{score}/{Questions.length}</h3>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  )
}
 export default EndScreen;