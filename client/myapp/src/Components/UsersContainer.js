import { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'


const UsersContainerComp = () => {


  const [tabActice, setTabActive] = useState({})
  const navigate = useNavigate()


   useEffect(() => {
     setTabActive({ users: "active" })
     navigate("users")
  }, [navigate])

  return (

    <>
      <Link className={`tab ${tabActice.users === undefined ? "" : "active"}`} to="users" onClick={() => setTabActive({ users: "active" })}>All Users</Link>
      <Link className={`tab ${tabActice.addUser === undefined ? "" : "active"}`} to="addUser" onClick={() => setTabActive({ addUser: "active" })}>Add User</Link>

      <Outlet />
      

    </>
  )
}

export default UsersContainerComp;