import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import utils from '../utils'
import UserComp from './User'

const UsersComp = () => {


  const [tabActice, setTabActive] = useState({})
  const [users, setUsers] = useState([])


  useEffect(() => {

    setTabActive({ users: "active" })


    const getAllUsers = async () => {
      const resp = await utils.getAllItems("http://localhost:5000/api/users")
      const allUsers = resp.data;
      setUsers(allUsers)
    }
    getAllUsers()
  }, [])

  return (

    <>
      <h3>Users</h3>

      {/* <NavLink className={navData => navData.isActive && "active"} to="" >All Users</NavLink>
      <NavLink className={navData => navData.isActive && "active"} to="addUser">Add User</NavLink> */}

            
      <Link className={`tab ${tabActice.users === undefined ? "" : "active"}`} to="" onClick={() => setTabActive({ users: "active" })}>All Users</Link>
      <Link className={`tab ${tabActice.addUser === undefined ? "" : "active"}`} to="addUser" onClick={() => setTabActive({ addUser: "active" })}>Add User</Link>
      
      <Outlet />

      {tabActice.users &&
        users.map(item => {
          return <UserComp key={item._id} userData={item} />
        })
      }
    </>
  )
}

export default UsersComp;