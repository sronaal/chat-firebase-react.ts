import MessagesChat from "./MessagesChat"
import MessagesFooter from "./MessagesFooter"
import MessagesHeader from "./MessagesHeader"

function Messages() {
  return (
    <article className='grid grid-rows-[auto_3fr_auto] h-screen'>
      {/* Header */}
      <MessagesHeader />

      {/* Chat Content */}
      <MessagesChat />

      {/* Footer Input */}
      <MessagesFooter />

    </article>
  )
}

export default Messages
