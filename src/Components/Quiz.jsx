import React, { useContext, useState } from 'react'
import questtion from '../helpers/Questionbank'
import './appication.css'
import { QuizContext } from '../helpers/Contex'

const Quiz = () => {
  const [questionno, setQuetionNo] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const { gameState, setGameState, score, setScore } = useContext(QuizContext)

  //handle form submit .
  const handlSubmit = (e) => {
    e.preventDefault()
    if (selectedAnswer === questtion[questionno].answer) {
      setScore(score + 1)
    }

    questionno < questtion.length - 1
      ? setQuetionNo(questionno + 1)
      : setGameState('EndScreen')
  }

  //when radio button selected :
  const handlechange = (e) => {
    console.log(e.target.value)
    setSelectedAnswer(e.target.value)
  }

  //previous question .
  const previousQuestion = () => {
    questionno > 0 ? setQuetionNo(questionno - 1) : setQuetionNo(questionno)
  }

  //next question .
  const nextQuestion = () => {
    questionno < questtion.length - 1
      ? setQuetionNo(questionno + 1)
      : setQuetionNo(questionno)
  }

  return (
    <>
      <div className="quiz">
        <form>
          <h2>{questtion[questionno].prompt}</h2>
          <div className="questionandOptions">
            <div className="options">
              <div>
                <input
                  type="radio"
                  name="options"
                  id="one"
                  value={questtion[questionno].optionA}
                  onChange={handlechange}
                />
                <label htmlFor="one">{questtion[questionno].optionA}</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="options"
                  id="two"
                  value={questtion[questionno].optionB}
                  onChange={handlechange}
                />
                <label htmlFor="two">{questtion[questionno].optionB}</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="options"
                  id="three"
                  value={questtion[questionno].optionC}
                  onChange={handlechange}
                />
                <label htmlFor="three">{questtion[questionno].optionC}</label>
              </div>
            </div>
          </div>
          <button type="submit" onClick={handlSubmit}>
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default Quiz
