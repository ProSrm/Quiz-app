import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainMenu from './Components/MainMenu'
import Quiz from './Components/Quiz'
import EndScreen from './Components/EndScreen'

import { QuizContext } from './helpers/Contex'
function App() {
  const [gameState, setGameState] = useState('Menu')

  return (
    <>
      <div>
        <h1>Quiz app </h1>
        <QuizContext.provider value={{ gameState, setGameState }}>
          {gameState === 'Menu' && <MainMenu />}
          {gameState === 'Quiz' && <Quiz />}
          {gameState === 'EndScreen' && <EncScreen />}
        </QuizContext.provider>
      </div>
    </>
  )
}

export default App
