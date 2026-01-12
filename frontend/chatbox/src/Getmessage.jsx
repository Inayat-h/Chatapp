

import { useState, useEffect } from 'react';
import axios from 'axios';
import useConversation from './useConversation';

function Getmessage() {
  const { messages, setmessages, selectedConversation } = useConversation();
  const [loading, setloading] = useState(false);

  const getmessage = async () => {
    if (selectedConversation && selectedConversation._id) {
      setloading(true);
      try {
        const response = await axios.get(`/api/message/sendmessage/${selectedConversation._id}`);
        setmessages(response.data);
      } catch (error) {
        console.error("Error fetching messages: ", error);
      } finally {
        setloading(false);
      }
    }
  };

  useEffect(() => {
    getmessage();
  }, [selectedConversation,setmessages]);

  return [messages, loading];
}

export default Getmessage;
