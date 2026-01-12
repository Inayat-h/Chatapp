import React from 'react'
import Search from './Search'
import Users from './users'
import Logout from './Logout'
import Getalluser from '../../Getalluser'

function Left() {
  const[getuser,loading]=Getalluser();
  console.log(getuser);
  return (
    <div className='w-full bg-black  text-gray-100 h-[calc(92-9.2vh)]'>
        <Search/>
        <h3 className='bg-slate-900 px-6 py-2 mr-1 rounded-lg'>Messages</h3>
        <div className=' flex-1 overflow-y-auto  '
        style={{minHeight:"calc(84vh - 10vh) "}}>
       {getuser.map((user,index)=>(
        <Users key={index} user={user}/>
       ))}
       
        </div>
        <Logout/>
    </div>
  )
}

export default Left