import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistic = ({text, value}) => {
  return (
  <tr>
    <td>{text}</td><td>{value}</td>
  </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const allClicks = good + neutral + bad
  if (allClicks ===0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
        <h1>statistics</h1>
          <table>
            <tbody>
              <Statistic text="good" value ={good} />
              <Statistic text="neutral" value ={neutral} />
              <Statistic text="bad" value ={bad} />
              <Statistic text="all" value ={allClicks} />
              <Statistic text="average" value ={good * 1 + bad * (-1) / (good + neutral + bad)} />
              <Statistic text="positive" value ={good / allClicks * 100 + ' ' + '%'} />
            </tbody>
          </table>
    </div>
  )
}

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedbask</h1>
        <Button handleClick={handleGoodClick} text='good' />
        <Button handleClick={handleNeutralClick} text='neutral' />
        <Button handleClick={handleBadClick} text='bad' />
        <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App