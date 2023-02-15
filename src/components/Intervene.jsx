import React from 'react'
import MyComponent from './MyComponent'

function Intervene(props) {
  return (
    <div>
        <MyComponent {...props} message="overrid"/>
    </div>
  )
}

// Object.assign({color: 'red'},
// {message: "intervening message", num: 2}, 
// {message: "overrid"})

export default Intervene