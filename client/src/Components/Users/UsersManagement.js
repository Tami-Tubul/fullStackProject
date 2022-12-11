import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import CardComp from "../../UI/Card";
import utils from "../../Utilities/utils";

const UsersManagementComp = () => {
 
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {

    navigate("/usersManagement/users") // active the all users tab


    //load users
    const getAllUsers = async () => {
      const resp = await utils.getAllItems("http://localhost:5000/api/users")
      dispatch({ type: "LOAD_USERS", payload: resp.data })
    }
    getAllUsers()

  }, [dispatch])


  return (
    <CardComp width="60%">
      <h2>Users</h2>
      <hr></hr>
      <Outlet />


    </CardComp>
  )
}

export default UsersManagementComp;