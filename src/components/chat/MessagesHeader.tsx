import { Button } from '@/components/ui/button'


const MessagesHeader = () => {
    return (
        <div>
            <header className="border-b border-gray-300 p-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <img
                        className="rounded-md size-16"
                        src="https://randomuser.me/api/portraits/thumb/men/67.jpg"
                        alt="User"
                    />
                    <div>
                        <p className="font-semibold text-gray-800">Ronal Sánchez</p>
                        <p className="text-sm text-green-600">Active</p>
                    </div>
                </div>

                <Button className="bg-black text-white rounded-full cursor-pointer">X</Button>
            </header>
        </div>
    )
}

export default MessagesHeader
