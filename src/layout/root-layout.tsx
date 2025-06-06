import Login from "@/components/auth/Login"
import Register from "@/components/auth/Register"

const RootLayout = () => {

    const user = false

    return (
        <div className="">
            {
                user ? <h1>Welcome </h1> :
                    <div className="h-screen bg-orange-500 grid grid-cols-2 place-content-center">
                        <Login />
                        <Register />
                    </div>
            }
        </div>
    )
}

export default RootLayout
