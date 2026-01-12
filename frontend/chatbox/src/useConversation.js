import { create } from 'zustand';

const useConversation = create((set) => ({
  selectedConversation: null,
  setselectedConversation: (conversation) => set(() => ({ selectedConversation: conversation })),
  messages: [],
  setmessages: (newMessages) => set(() => ({ messages: newMessages })),
}));

export default useConversation;
