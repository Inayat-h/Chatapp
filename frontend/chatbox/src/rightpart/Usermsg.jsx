import useConversation from '../useConversation'
import { useSocketContext } from '../context/Socketprovider'
import { CiMenuFries } from "react-icons/ci";
function Usermsg() {
  const{selectedConversation}=useConversation()
  const{online}= useSocketContext();
  
  const getonlineuseer=(userId)=>{
    return online.includes(userId)?"online":"offline"
  }
  return (
    <div className="relative flex items-center h-[8%] justify-center gap-4 bg-slate-800 hover:bg-slate-700 duration-300 rounded-md">
      <label
        htmlFor="my-drawer-2"
        className="btn btn-ghost drawer-button lg:hidden absolute left-5"
      >
        <CiMenuFries className="text-white text-xl"/>
      </label>
    <div className='flex p-2  items-center justify-center'>
            <div className="avatar">
        <div className="w-11 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
        </div>
        <div className='ml-2'>
            <p>{selectedConversation.Fullname}</p>
            <span className='text-sm'>{getonlineuseer(selectedConversation._id)}</span>
        </div>
    </div>
    </div>
  )
}

export default Usermsg