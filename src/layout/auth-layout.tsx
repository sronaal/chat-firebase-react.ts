import Login from '@/components/auth/Login'
import Register from '@/components/auth/Register'


const AuthLayout = () => {
    return (
        <main className="bg-indigo-100">
            <div className="min-h-screen  grid md:grid-cols-2 md:place-content-center md:place-items-center container">
                <Login />
                <Register />
            </div>
        </main>
    )
}

export default AuthLayout
