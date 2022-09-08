import { useEffect, useState } from 'react';
//import { useSelector } from 'react-redux';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import BorderContainer from '../UI/BorderContainer';
import '../UI/tabsStyle.css'

const UserManagementComp = () => {

  const navigate = useNavigate()

  const [tabActice, setTabActive] = useState({})

  // const storeData = useSelector(state => state)

  useEffect(() => {
    navigate("users")
    setTabActive({ users: "active" })
  }, [])

  return (

    <BorderContainer>

      <h3>Users</h3>
      
          <Link className={`tab ${tabActice.users === undefined ? "" : "active"}`} to="users" onClick={() => setTabActive({ users: "active" })}>All Users</Link>
       
          <Link className={`tab ${tabActice.addUser === undefined ? "" : "active"}`} to="addUser" onClick={() => setTabActive({ addUser: "active" })}>Add User</Link>
      

      <Outlet />

    </BorderContainer>
  )
}

export default UserManagementComp;