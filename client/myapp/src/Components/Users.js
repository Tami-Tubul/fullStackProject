import { useEffect, useState } from "react"
import utils from "../utils"
import UserComp from "./User"

const UsersComp = () => {
 
  const [users, setUsers] = useState([])


  useEffect(() => {
    const getAllUsers = async () => {
      const resp = await utils.getAllItems("http://localhost:5000/api/users")
      const allUsers = resp.data;
      setUsers(allUsers)
    }
    getAllUsers()
  }, [])
  
  return (

    <>
   
      {
        users.map(item => {
          return <UserComp key={item._id} userData={item} />
        })
      }
    </>
  )
}

export default UsersComp;