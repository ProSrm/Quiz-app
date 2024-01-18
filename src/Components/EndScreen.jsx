import React, { useContext } from 'react'
import { QuizContext } from '../helpers/Contex'
import question from '../helpers/Questionbank'

const EndScreen = () => {
  const { score, setGameState, setScore } = useContext(QuizContext)
  const restart = () => {
    setGameState('Menu')
    setScore(0)
  }
  return (
    <div className="EndScreen">
      <h3>
        Your Score is : {score}/{question.length}
      </h3>
      <button onClick={restart}>Restart</button>
    </div>
  )
}

export default EndScreen
