import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import CardComp from "../../UI/Card";

const UsersManagementComp = () => {
 
  const navigate = useNavigate()

  useEffect(() => {

    navigate("/usersManagement/users") // active the all users tab

  }, [])


  return (
    <CardComp width="60%">
      <h2>Users</h2>
      <hr></hr>
      <Outlet />


    </CardComp>
  )
}

export default UsersManagementComp;