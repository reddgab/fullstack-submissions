const Header = (props) => {
  console.log("header:" + props.course.name)
  return (
    <h1>{props.course.name}</h1>
  )
}

const Part = (props) => {
  let part = props.part
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}
const Content = (props) => {
  let part = props.course.parts
  return (
    <div>
      <Part part={part[0]}/>
      <Part part={part[1]}/>
      <Part part={part[2]}/>
    </div>
  )
}
const Total = (props) => {
  let part = props.course.parts
  return (
  <p>Number of exercises {part[0].exercises + part[1].exercises + part[2].exercises}</p>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',  
    parts: [
    {
    name: 'Fundamentals of React',
    exercises: 10
    },
    {
    name: 'Using props to pass data',
    exercises: 7
    },
    {
    name: 'State of a component',
    exercises: 14
    }
  ]
  
  }
  
  

  return (
  <div>
    <Header course={course} />
    <Content course={course}/>
    <Total course={course} />
  </div>
  )
}

export default App