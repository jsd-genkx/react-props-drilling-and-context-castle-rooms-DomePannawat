import React from 'react'
import SecretRoom from './09_SecretRoom'

const Nook = ({ message1, handleReply }) => {
  return (
    <div>
      <p className='flex justify-center'>Nook</p>
      
      {/* มันก็คือไปเรียกไฟล์ SecretRoom ออกมา แล้วส่ง message1 กับ handleReply ไปเป็น props */}
      {/* ตั้งแต่ไฟล์ 01-08 โลจิจะไม่ต่างกันเท่าไร */}
      <SecretRoom message1={message1} handleReply={handleReply} />
    </div>
  )
}

export default Nook