import { Outlet } from 'react-router-dom';
import BorderContainer from '../UI/BorderContainer';
import '../UI/style.css'


const UserManagementComp = () => {

  return (

    <BorderContainer>
      <h3>Users</h3>
      <Outlet />
      

    </BorderContainer>
  )
}

export default UserManagementComp;