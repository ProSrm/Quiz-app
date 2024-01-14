import { useContext } from 'react'
import React from 'react'
import { QuizContext } from '../helpers/Contex'

const MainMenu = () => {
  return (
    <div className="menu">
      <button onClick={handleStart}>Start Quiz</button>
    </div>
  )
}

export default MainMenu
