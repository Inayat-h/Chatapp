import { useState } from 'react';
import axios from 'axios';
import useConversation from './src/useConversation'; // Adjust the path as needed

function Sendmessage() {
  const { messages, setmessages, selectedConversation } = useConversation();
  const [loading, setLoading] = useState(false);

  const sendmessage = async (message) => {
    setLoading(true); // Changed setloading to setLoading for consistent camelCase
    try {
      const response = await axios.post(`/api/message/getmessage/${selectedConversation._id}`, { message });
      setmessages([...messages, response.data]);
    } catch (error) {
      console.error("Error fetching messages: ", error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, sendmessage };
}

export default Sendmessage;
