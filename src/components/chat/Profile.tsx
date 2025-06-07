import { Button } from "../ui/button"

function Profile() {
  return (
    <div className='p-4 text-center'>
      <img
        src="https://randomuser.me/api/portraits/men/44.jpg" alt="Foto de perfil"
        className="rounded-md mb-4 mx-auto w-24 h-24"
      />
      <h1 className="text-bold text-2xl">Profile</h1>
      <p className="font-semibold mb-2">Ronal Sánchez</p>
      <p className="text-gray-500 mb-2">ronal@gmail.com</p>
      <Button className="bg-black text-white w-full">Cerrar sesión</Button>
    </div>
  )
}

export default Profile
