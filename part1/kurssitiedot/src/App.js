import React from 'react'

const App = () => {
  const course = {
    header: 'Half Stack application development',
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
      <Header course={course.header} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  const renderPart = (part) => {
    return (
      <div>
        {part.name} {part.exercises}
      </div>
    )
  }
  return (
    <div>
      {
        renderPart(props.parts[0])
      }
      {
        renderPart(props.parts[1])
      }
      {
        renderPart(props.parts[2])
      }
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </div>
  )
}

export default App