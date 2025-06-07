import { Button } from '@/components/ui/button'
import { Input } from '../ui/input'
import { BsEmojiSmile } from 'react-icons/bs'
import { BsFillSendFill } from "react-icons/bs";
import EmojiPicker from 'emoji-picker-react';

import { useState } from 'react';



const MessagesFooter = () => {

    const [message, setMessage] = useState("")

    const [showEmojiPicket, setShowEmojiPicker] = useState(false)

    const handleSendMessage = async () => {

        console.log(message)
    }


    return (

        <footer className="border-t border-gray-300 p-4 flex gap-2">
            <div className='relative'>
                <Button className='bg-black cursor-pointer' onClick={() => setShowEmojiPicker((prev) => !prev)}>
                    <BsEmojiSmile className='text-white text-xl' />
                </Button>
                <div className='absolute bottom-12'>
                    <EmojiPicker open={showEmojiPicket} />
                </div>
            </div>
            <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                type="text"
                placeholder="Escribe un mensaje"
                className=" border rounded-md"
            />
            <Button onClick={handleSendMessage} className="bg-black cursor-pointer">
                <BsFillSendFill className='text-white text-xl' />
            </Button>
        </footer>


    )
}

export default MessagesFooter
