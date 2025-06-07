import { useEffect, useState } from 'react'
import FriendItem from './FriendItem'
import FriendSearch from './FriendSearch'

interface Friend {
  uuid: string;
  displayName: string;
  photoURL: string;
  lastMessage: string;
}

const Friends = () => {
  const [friend, setFriends] = useState<Friend[]>([])

  useEffect(() => {
    const getFriends = async () => {
      const res = await fetch('https://randomuser.me/api/?results=15&nat=mx')
      const { results } = await res.json()

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const data = results.map((user: any) => ({
        uuid: user.login.uuid,
        displayName: `${user.name.first} ${user.name.last}`,
        photoURL: user.picture.thumbnail,
        lastMessage: "Hola, ¿cómo estás?"
      }))

      setFriends(data)
    }

    getFriends()
  }, [])

  return (
    <div className='grid grid-rows-[auto_1fr] h-screen'>
      <section className='border-b border-b-gray-300 p-4'>
        <h2 className='text-xl font-bold text-gray-800 mb-4'>Chats</h2>
        <FriendSearch />
      </section>

      <section className='overflow-y-auto custom-scrollbar'>
        {friend.map((friend) => (
          <FriendItem key={friend.uuid} {...friend} />
        ))}
      </section>
    </div>
  )
}

export default Friends
