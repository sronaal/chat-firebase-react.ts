
function FriendItem() {
    return (
        <article className='flex gap-x-3 items-center py-2 px-5 border-b  border-b-gray-300 cursor-pointer hover:bg-gray-200'>
            <img
                src='https://randomuser.me/api/portraits/men/44.jpg'
                className='w-13 h-13 rounded-md'
            />
            <div>
                <h3 className='font-semibold text-lg'>Ronal</h3>
                <p className='text-xs text-gray-800'>Lorem ipsum dolor sit amet</p>
            </div>
        </article>
    )
}

export default FriendItem
