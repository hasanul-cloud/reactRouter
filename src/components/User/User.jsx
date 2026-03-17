import { useParams } from "react-router"
function User() {
  const { userId } =useParams()
  return (
    <div className="w-80 bg-gray-800 min-h-40 my-4 rounded-lg mx-auto">
      <span className="text-blue-400 font-bold text-2xl  block py-15 px-4">
      User: <span className="text-gray-400">{userId}</span>

      </span>
    </div>
  )
}

export default User
