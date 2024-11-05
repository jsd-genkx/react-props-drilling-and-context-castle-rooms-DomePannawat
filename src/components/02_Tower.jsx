import React from 'react'
import Chamber from './03_Chamber';

const Tower = ({ message1, handleReply }) => {
  return (
    <div>
      <p className='flex justify-center'>Tower</p>
      <Chamber message1={message1} handleReply={handleReply} />
    </div>
  )
}

export default Tower
