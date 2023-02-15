import React from 'react'
import { nanoid } from 'nanoid'
import PersonCard from './PersonCard'

function List({items=[]}) {
  return (
    <ul>
      {items.map((item) => (<Person key={nanoid()} {...PersonCard}/>))}
    </ul>
  )
}

export default List