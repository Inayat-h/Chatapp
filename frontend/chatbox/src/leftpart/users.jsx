import React from 'react';
import useConversation from '../useConversation';
import { useSocketContext } from '../context/Socketprovider';

function Users({ user }) {
  const { selectedConversation, setselectedConversation } = useConversation();
  const isSelect = selectedConversation?._id === user._id;
  const { socket,online}=useSocketContext();
  const isonline=online.includes(user._id);

  return (
    <div
      className={`hover:bg-slate-300 duration-300 cursor-pointer ${isSelect ? "bg-slate-400" : ""}`}
      onClick={() => setselectedConversation(user)}
      
    >
      <div className="px-6 py-2 flex items-center">
        <div className={`avatar ${isonline?"online":""}`}>
          <div className="w-14 rounded-full">
            <img
              src={user.avatar || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
              alt={`${user.Fullname}'s avatar`}
            />
          </div>
        </div>
        <div className="px-2">
          <p className="font-semibold truncate">{user.Fullname}</p>
          <span className="text-sm text-gray-500 truncate">{user.email}</span>
        </div>
      </div>
    </div>
  );
}

export default Users;
