import { useContext } from 'react'
import React from 'react'
import { QuizContext } from '../helpers/Contex'
import './appication.css'

const MainMenu = () => {
  const { gameState, setGameState } = useContext(QuizContext)

  const handleStart = () => {
    setGameState('Quiz')
  }
  return (
    <div className="Menu">
      <button className="btn" onClick={handleStart}>
        Start Quiz
      </button>
    </div>
  )
}

export default MainMenu
