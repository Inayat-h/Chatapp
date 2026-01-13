import { createContext, useEffect, useState }from "react";

import io from  "socket.io-client";
import { useAuth } from "../Authprovider";
import { useContext } from "react";

const SocketContext =createContext();
export const useSocketContext=()=>{
    return useContext(SocketContext);
}

export const Socketprovider=({children}) =>{
    const [socket,setsocket]=useState(null);
    const [userAuth] = useAuth();
    const [online,setonline]=useState([]);
    
 
    useEffect(()=>{
        if(userAuth){
         const socket=io("https://chatapp-qk2g.onrender.com",
            {
                query:{
                    userId:userAuth.user.id
                },

            });
         setsocket(socket)
        socket.on("getonlineusers",(users)=>{
            setonline(users);
        });
        return ()=>socket.close()
         } 
         else{
            if(socket){
                socket.close();
                setsocket(null);

            }
        } 
        
    }
    ,[userAuth])
return (
    <SocketContext.Provider value={{ socket ,online }}>
     {children}
    </SocketContext.Provider>
  );
};