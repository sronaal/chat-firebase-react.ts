

interface FriendProps {
    uuid: string;
    displayName: string;
    photoURL: string;
    lastMessage: string;
}


function FriendItem({ displayName, photoURL, lastMessage }: FriendProps) {
    return (
        <article
            className='flex gap-x-3 items-center 
        py-2 px-5 border-b  border-b-gray-300 cursor-pointer hover:bg-gray-200 overflow-hidden'>
            <img
                src={photoURL}
                className='w-13 h-13 rounded-md'
            />
            <div className="flex-1 min-w-0">
                <h3 className='font-semibold text-lg truncate'>{displayName}</h3>
                <p className='text-xs text-gray-800 truncate'>Lorem ipsum dolor sit, {lastMessage} ksjdjdj</p>
            </div>
        </article>
    )
}

export default FriendItem
