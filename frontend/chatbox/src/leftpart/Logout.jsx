import React, { useState } from 'react'
import { TbLogout2 } from "react-icons/tb";
import axios from 'axios';
import cookies from"js-cookie";
import toast from 'react-hot-toast';


function Logout() {
  const[loading,setloading]=useState(false);
  const handlelogout=async()=>{
    setloading(true);
    try{
      const res=await axios.post("/api/user/logout");
      localStorage.removeItem("chatapp");
      cookies.remove("jwt");
      toast.success("logout ");
      setloading(false);
      window.location.reload();

    }catch(error){
      console.log("error in logout"+error);
    }
    
  }
  return (
    <div  >
        
        <TbLogout2 className='text-3xl  ml-3 mt-3 text-gray-200 hover:bg-slate-600 rounded-full' onClick={handlelogout}/>
    </div>
  )
}

export default Logout