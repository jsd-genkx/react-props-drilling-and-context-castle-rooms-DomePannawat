import React from 'react'
import Tower from './02_Tower'

const Castle = ({ message1, handleReply }) => {
  return (
    <div>
      <p className='flex justify-center mt-5'>Castle</p>
      {/* มันก็คือไปเรียกไฟล์ SecretRoom ออกมา แล้วส่ง message1 กับ handleReply ไปเป็น props */}
      {/* ตั้งแต่ไฟล์ 01-08 โลจิจะไม่ต่างกันเท่าไร */}
      <Tower message1={message1} handleReply={handleReply} />
    </div>
  )
}

export default Castle
