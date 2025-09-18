const Header = ( {name} ) => {
  return (
    <h1>{name}</h1>
  )
}

const Content = ( {parts} ) => (
  <div>
    {parts.map(part =>
      <Part key={part.id} part={part}/>
    )}
  </div>
)

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Total = ( {parts} ) => {
  
  const exercises = parts.map((part) => part.exercises); //get every exercise

           //                         add them up
  const total = exercises.reduce((cur, next) => cur + next) 

  return (
    
    <h3>Total of {total} exercises</h3>
  )
}
const Course = (props) => {
  const course = props.course
  
  return (
    <div>
      <Header name={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default Course