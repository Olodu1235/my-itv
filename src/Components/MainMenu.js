import React,{useContext} from "react"
import "../App.css";
import { QuizContext } from "../Assists/Contexts"

 function MainMenu() {
    const{gameState,setGameState}=useContext(QuizContext)
  return (
    <div className="Menu">
        <button onClick={() => {setGameState("quiz")}}>Start Quiz</button>
    </div>
  )
}
export default MainMenu;