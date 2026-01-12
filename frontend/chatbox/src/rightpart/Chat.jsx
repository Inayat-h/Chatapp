function Chat({ message }) {

  const createdAt = message.createdAt
    ? new Date(message.createdAt)
    : new Date(); // realtime fallback

  const formattedTime = createdAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const authUser = JSON.parse(localStorage.getItem("chatapp"));
  const itsMe = message.senderId === authUser.user.id;

  const chat = itsMe ? "chat-end" : "chat-start";
  const chatColor = itsMe ? "bg-blue-500" : "bg-gray-800";

  return (
    <div className="py-4">
      <div className={`chat ${chat}`}>
        <div className={`chat-bubble ${chatColor}`}>
          {message.message}
        </div>
        <div className="chat-footer text-slate-200">
          {formattedTime}
        </div>
      </div>
    </div>
  );
}

export default Chat;
