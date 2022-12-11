import ButtonComp from "../../UI/Button";
import { useNavigate } from "react-router-dom";
import utils from "../../Utilities/utils";
import toast from 'toast-me';
import { useDispatch } from "react-redux";

const UserComp = ({ userData }) => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const deleteUser = async() => {
      let status = await utils.deleteItem("http://localhost:5000/api/users" , userData._id)
      if (status.data === "deleted!") {
        dispatch({ type: "DELETE_USER", payload: userData._id })
        toast("The user was deleted!", { duration: 3000 })

      }
    }


  return (
  
    <div className="content-box">
      <div className="text-box">
        <p><strong>Name:</strong>  {userData.firstName} {userData.lastName}</p>
        <p><strong>User Name:</strong> {userData.userName}</p>
        <p><strong>Seassion time out(Minutes):</strong> {userData.sessionTimeOut}</p>
        <p><strong>Created Date:</strong> {userData.createdDate}</p>
        <p><strong>Permissions:</strong> {userData.permissions.map((per, index) => { return index > 0 ? "," + per : per })}</p>
      </div>
      <div className="actions-box">
        <ButtonComp type="button" width="20%" height="27px" onClick={() => navigate("/usersManagement/editUser/" + userData._id)}>Edit</ButtonComp>{" "}
        <ButtonComp type="button" width="20%" height="27px" onClick={deleteUser} >Delete</ButtonComp>
      </div>
    </div> 

  )
}

export default UserComp;