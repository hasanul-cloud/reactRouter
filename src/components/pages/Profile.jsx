 import { useEffect , useState } from "react"
function Profile() {

  const [data, setData] = useState([]);

  useEffect(()=>{
    fetch('https://api.github.com/users/hasanul-cloud')
    .then(res => res.json())
    .then(data =>{
      setData(data)
    })
  },[])
  return (
    <div className="w-full h-[70vh] text-center">
      <h1 className="text-2xl font-bold text-center mt-10">Profile Github</h1>
      <img src={data.avatar_url} alt={data.name} width={200}  className="mx-auto py-4 rounded-3xl"/>
      <p className="text-amber-500">{data.name}</p>
      <p className="text-gray-500 w-80 mx-auto">{data.bio}</p>
      <h3 className="text-xl font-bold text-gray-300 mt-4">Repositories Public : <span className="text-amber-500">{data.public_repos}</span></h3>
    </div>
  )
}

export default Profile

