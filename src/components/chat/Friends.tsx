import FriendItem from './FriendItem'
import FriendSearch from './FriendSearch'

const Friends = () => {
  return (
    <div className='grid grid-rows-[auto_1fr] h-screen'>
      <section className='border-b border-b-gray-300 p-4'>
        <h2 className='text-xl font-bold text-gray-800 mb-4'>Chats</h2>

        <FriendSearch/>



      </section>

      <section className='overflow-y-auto custom-scrollbar'>
        {
          Array.from({length: 10}).map((_, i) => (
            <FriendItem key={i}/>
          ))
        }
      </section>
    </div>
  )
}

export default Friends
