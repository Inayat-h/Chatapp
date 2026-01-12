import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import useConversation from '../useConversation';
import Getalluser from '../../Getalluser';
import toast from 'react-hot-toast';

function Search() {
  const [Search,setSearch]=useState("");
  const{ setselectedConversation}=useConversation();
  const [alluser]= Getalluser();
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!Search) return;
    const conversation=alluser.find((user)=>
    user.Fullname?.toLowerCase().includes(Search.toLowerCase()));
    if(conversation){
      setselectedConversation(conversation);
      setSearch("");
    }else{
      toast.error("user not found");
      setSearch("")
    }
  }
  return (
    <div className=' py-3 mr-9 ml-9  rounded-3xl h-[10vh]'>
   <form onSubmit={handleSubmit}>
  <label className="input input-bordered  flex items-center gap-2 ">
  <input type="text" className="grow rounded-lg bg-slate-900 outline-none text-white" placeholder="Search"
  value={Search}
  onChange={(e)=>{setSearch(e.target.value)}} />
  <button><CiSearch className='text-3xl hover:bg-slate-600 rounded-full text-black' /></button>
  </label>
  </form>
    </div>
  )
}

export default Search