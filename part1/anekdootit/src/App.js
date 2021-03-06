import React, { useState } from 'react'
const defaultPoints = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(defaultPoints)
  const [bestAnecdote, setBestAnecdote] = useState('')

  const nextAnecdote = () => {
    const randomAnecdote = Math.floor(Math.random() * 5)
    console.log(randomAnecdote)
    setSelected(randomAnecdote)
  }

  const vote = () => {
    const copy = { ...points }
      copy[selected] += 1  
      console.log(copy) 
      setPoints(copy)
      mostVoteAnecdote(copy)
  }

  const mostVoteAnecdote = (newPoints) => {
    let maxVotes = 0
    let bestAnecdote
    for(let i = 0; i < 6; i++) {
      if (maxVotes < newPoints[i]) {
        maxVotes = newPoints[i]
        bestAnecdote = anecdotes[i]
      }
    }
    setBestAnecdote(bestAnecdote)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]} <br />
      <p>has {points[selected]} votes</p>
      <button onClick={vote}>vote</button>
      <button onClick={nextAnecdote}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      {bestAnecdote}

    </div>
  )
}

export default App