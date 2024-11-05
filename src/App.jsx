import React, { useState } from 'react'
import Castle from './components/01_Castle'

const App = () => {
  // เก็บข้อมูลตอบกลับ และ อัปเดตข้อมูล
  const [replyMessage, setReplyMessage] = useState('');

  // อัปเดตข้อความตอบกลับ
  const handleReply = (message) => {
    setReplyMessage(message);
  };

  const message1 = "Do you love React?";
  return (
    <div>
      <p className='flex justify-center mt-10'>Message for JSD8: {message1}</p>

      {/* ตัวแสดงข้อความตอบกลับ ถ้าไม่แสดงขึ้น Reply Secret Room */}
      <p className='flex justify-center mt-5 '>Reply from the Secret Room : <span className='text-sky-500 font-medium '>{replyMessage ? replyMessage : "Waiting for a reply..."}</span></p>

      <Castle message1={message1} handleReply={handleReply} />
    </div>
  )
} 

export default App
