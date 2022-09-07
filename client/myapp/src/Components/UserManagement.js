import { useEffect, useState } from 'react';
//import { useSelector } from 'react-redux';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import BorderContainer from '../UI/BorderContainer';


const UserManagementComp = () => {

  const [tabColor, setTabColor] = useState({})
  const navigate = useNavigate()
 // const storeData = useSelector(state => state)

  useEffect(() => {
    navigate("users")
    setTabColor({ users: "gold" })
  }, [])

  return (

    // <div style={{ border: "5px solid black", width: "50%", marginRight: "auto", marginLeft: "auto" }}>
    <BorderContainer>

      <h3>Users</h3>
      <Link to="users" onClick={() => setTabColor({ users: "gold" })} style={{ textDecoration: "none", padding: "2px", border: "1px solid black", margin: "5px", background: tabColor.users }}>All Users</Link>
      <Link to="addUser" onClick={() => setTabColor({ addUser: "gold" })} style={{ textDecoration: "none", padding: "2px", border: "1px solid black", margin: "5px", background: tabColor.addUser }}>Add User</Link>

      <Outlet />
    {/* </div> */}
    </BorderContainer>
  )
}

export default UserManagementComp;