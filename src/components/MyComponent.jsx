import React from 'react'

const NoMessage = () => <p>No message passed</p>

function MyComponent({message, highlight}) {
    const baseStyles = {}

    if(highlight) {
        Object.assign(baseStyles, { color: "red" })
    }

    if(!message) {
        return <NoMessage/>
    }
  return (
    <>
    <div style={baseStyles}>{message}</div>
    <p>Test Component Export</p>
    </>
    
  )
}

export default MyComponent