import React, { useEffect, useRef } from "react";
import Usermsg from "./Usermsg";
import Chat from "./Chat";
import Chatsend from "./Chatsend";
import Getmessage from "../Getmessage";
import Loading from "../components/Loading";
import useConversation from "../useConversation";
import { useAuth } from "../authprovider";
import UseSocketmsg from "../context/UseSocketmsg";
import { CiMenuFries } from "react-icons/ci";

function Right() {
  const [messages, loading] = Getmessage();
  const { selectedConversation, setselectedConversation } = useConversation();
  const lastMsgRef = useRef();

  // Listen for incoming messages
  UseSocketmsg();

  // Scroll to the last message when messages update
  useEffect(() => {
    setTimeout(() => {
      if (lastMsgRef.current) {
        lastMsgRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }, [messages]);

  // Reset selected conversation when component unmounts
  useEffect(() => {
    return () => setselectedConversation(null);
  }, [setselectedConversation]);

  return (
    <div className="w-full bg-slate-900 text-white">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <Usermsg />
          <div
            className="overflow-y-auto flex-1 h-[calc(92vh-9.2vh)]"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {loading ? (
              <Loading />
            ) : messages.length > 0 ? (
              messages.map((message) => (
                <div key={message.id} ref={lastMsgRef}>
                  <Chat message={message} />
                </div>
              ))
            ) : (
              <p className="text-center mt-[20%]">Say hi to start the conversation!</p>
            )}
          </div>
          <Chatsend />
        </>
      )}
    </div>
  );
}

export default Right;

const NoChatSelected = () => {
  const [AuthUser] = useAuth();

  return (
    <div className="relative">
      <label
        htmlFor="my-drawer-2"
        className="btn btn-ghost drawer-button lg:hidden absolute left-5"
      >
        <CiMenuFries className="text-white text-xl" />
      </label>
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-center">
          Welcome <span className="font-semibold text-2xl">{AuthUser.user.Fullname}</span>
          <br />
          No chat selected! Please select a contact to start the conversation.
        </h1>
      </div>
    </div>
  );
};
