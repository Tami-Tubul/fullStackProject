import { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import BorderContainer from '../UI/BorderContainer';
import '../UI/style.css'
import UsersComp from './Users';

const UserManagementComp = () => {

  // const navigate = useNavigate()

  // const [tabActice, setTabActive] = useState({})

  // useEffect(() => {
  //   navigate("users")
  //   setTabActive({ users: "active" })
  // }, [])

  return (

    <BorderContainer>
         <UsersComp/>

      {/* <h3>Users</h3>
      
          <Link className={`tab ${tabActice.users === undefined ? "" : "active"}`} to="users" onClick={() => setTabActive({ users: "active" })}>All Users</Link>
       
          <Link className={`tab ${tabActice.addUser === undefined ? "" : "active"}`} to="addUser" onClick={() => setTabActive({ addUser: "active" })}>Add User</Link>
      

      <Outlet /> */}

    </BorderContainer>
  )
}

export default UserManagementComp;