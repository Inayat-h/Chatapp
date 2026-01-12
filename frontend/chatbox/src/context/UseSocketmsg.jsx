import React, { useEffect } from 'react'

import useConversation from '../useConversation';
import { useSocketContext } from './Socketprovider';
import soundweb from "/sound.mp3";

function UseSocketmsg() {
   
    const{ socket }=useSocketContext();
    const {  messages,setmessages }=useConversation();
    useEffect(()=>{
        if(!socket) return;
        socket.on("newMessage",(newMessage)=>{
            const notification= new Audio(soundweb);
            notification.play();
            setmessages([...messages,newMessage]);
        });
        return()=>{
            socket.off("newMessage")
        };

    },[socket,messages,setmessages])
 
}

export default UseSocketmsg;