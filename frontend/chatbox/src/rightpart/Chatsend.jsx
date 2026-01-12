import React, { useState } from 'react';
import { LuSendHorizontal } from "react-icons/lu";
import Sendmessage from '../../Senmessage'; 

function Chatsend() {
  const [message, setMessage] = useState("");
  const { loading, sendmessage } = Sendmessage();

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    await sendmessage(message);
    setMessage("");
  };

  return (
    <div className='mb-0'>
    <form onSubmit={handleSubmit}>
      <div className='flex  items-center space-x-2 ml-5 mt-2  mb-0 h-[8vh]'>
        <div className='w-[90%] '>
          <input 
            type="text" 
            placeholder="Type here" 
            className="input input-bordered w-full bg-slate-600"
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
          />
        </div>
        <button>
          <LuSendHorizontal className='text-3xl' />
        </button>
      </div>
    </form> 
    </div>
  );
}

export default Chatsend;
