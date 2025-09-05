import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [selected, setSelected] = useState(0)
  const [mostVoted, setMostVoted] = useState(0)
  const upvote = () => {
    //create a copy so react knows its a state change :3
    const copy = [...votes]
    copy[selected]++
    setVotes(copy)

    //update most voted like this because react is asynchronous
    
    const highest = Math.max(...copy)
    const index = copy.indexOf(highest)   
    setMostVoted(index)
    
  }
  return (
    <div>
      <h1>Anecdote of the day!</h1>
      {anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <br />
      <button onClick={upvote}>Vote</button>
      <button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length) )}>Another one!</button>
      <h1>Most liked anecdote</h1>
      {anecdotes[mostVoted]}
      
    </div>
  )
}

export default App