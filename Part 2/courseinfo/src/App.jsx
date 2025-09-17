const Header = ( {name} ) => <h1>{name}</h1>

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

const Total = (props) => <p>Number of exercises {props.total}</p>

const Course = (props) => {
  const course = props.course
  
  return (
    <div>
      <Header name={course.name}/>
      <Content parts={course.parts}/>
      <Total total={course} />10
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'test state DELETE THIS LATER FOR THE LOVE OF GOD',
        exercises: 54,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}

export default App