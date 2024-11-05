import { useState } from 'react'

const SecretRoom = ({ message1, handleReply }) => {

    //ตัวแปร เก็บข้อความตอบกลับ เริ่มต้นจากข้อความว่างงงงง
    const [reply, setReply] = useState('');
    
  return (
    <div>
      <p className='flex justify-center mb-5'>SecretRoom</p>
      <p className='flex justify-center mb-5'>Message for JSD8: {message1}</p> {/* {message1} บรรทัดนี้ ไปเอาจากตัวแปรนั้นแหละ Const */}

      {/* textarea ช่องให้ลงข้อมูล */}
      <textarea className=' mt-4 p-2 w-full bg-transparent border text-center' value={reply} onChange={(e) => setReply(e.target.value.trim())} placeholder='Type your reply here'/>

        <div className='flex justify-center'>
        {/* ปุ่มเฉยๆไม่มีไร */}
        <button className=' mt-4 px-4 py-2 bg-blue-500 text-white rounded absolute ' onClick={() => handleReply(reply)}>Send Reply</button>
        </div>
    </div>
  )
}

export default SecretRoom