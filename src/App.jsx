import { useState } from 'react'
import './App.css'
import MainMenu from './Components/MainMenu'
import Quiz from './Components/Quiz'
import EndScreen from './Components/EndScreen'

import { QuizContext } from './helpers/Contex'
function App() {
  const [gameState, setGameState] = useState('Menu')
  const [score, setScore] = useState(0)

  return (
    <>
      <QuizContext.Provider
        value={{ gameState, setGameState, score, setScore }}
      >
        <div className="MainLayout">
          <h2>Quick Quiz</h2>
          {gameState === 'Menu' && <MainMenu />}
          {gameState === 'Quiz' && <Quiz />}
          {gameState === 'EndScreen' && <EndScreen />}
        </div>
      </QuizContext.Provider>
    </>
  )
}

export default App
