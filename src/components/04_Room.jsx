import React from 'react'
import Hall from './05_Hall'

const Room = ({ message1, handleReply }) => {
  return (
    <div>
      <p className='flex justify-center'>Room</p>
      <Hall message1={message1} handleReply={handleReply} />
    </div>
  )
}

export default Room
