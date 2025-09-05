import { useState } from 'react'

const Stats = ({good, neutral, bad, allFeedback}) => {
  
  if (allFeedback == 0) {
    return (
      <>
        No feedback yet.
      </>
    ) 
  } else {
      return (
        <>
          <table>
            <StatisticLine text="good" value = {good}/>
            <StatisticLine text="neutral" value = {neutral}/>
            <StatisticLine text="bad" value = {bad}/>
            <StatisticLine text="average" value = {((good*1) + (bad*-1))/allFeedback}/>
            <StatisticLine text="percentage" value = {((good/allFeedback)*100) + "%"}/>
          </table>
          
        </>
      )
    }
  
}

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>
const StatisticLine = ({ text, value }) => <tr><td>{text}:</td> <td>{value}</td></tr>


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allFeedback, setAll] = useState(0)

  
  
  const updateGood = () => {
    setGood(good + 1)
    setAll(good + bad + neutral)
    }

  const updateNeutral = () => {
    setNeutral(neutral + 1)
    setAll(good + bad + neutral)
    }

  const updateBad = () => {
    setBad(bad + 1)
    setAll(good + bad + neutral)
    }

  return (
    <div>
      <h1>how was your service?</h1>
      <Button onClick={updateGood} text={"good"}></Button>
      <Button onClick={updateNeutral} text={"neutral"}></Button>
      <Button onClick={updateBad} text={"bad"}></Button>
      <br />
      <h1>stats</h1>
      <Stats good={good} neutral={neutral} bad={bad} allFeedback={allFeedback} />
    </div>

  )
}

export default App