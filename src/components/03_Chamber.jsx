import React from 'react'
import Room from './04_Room'

const Chamber = ({ message1, handleReply }) => {
  return (
    <div>
      <p className='flex justify-center'>Chamber</p>
      <Room message1={message1} handleReply={handleReply} />
    </div>
  )
}

export default Chamber
