import Friends from "@/components/chat/Friends"
import Messages from "@/components/chat/Messages"
import Profile from "@/components/chat/Profile"

const ChatLayout = () => {
  return (
    <div className="md:grid md:grid-cols-[2fr_5fr_2fr] h-screen">
      <Friends />
      <Messages />
      <Profile />
    </div>
  )
}

export default ChatLayout
