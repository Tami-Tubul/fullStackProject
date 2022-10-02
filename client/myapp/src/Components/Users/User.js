import ButtonComp from "../../UI/Button";
import { useNavigate } from "react-router-dom";

const UserComp = ({ userData }) => {

  const navigate = useNavigate()

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
        <ButtonComp type="button" width="20%" height="27px">Delete</ButtonComp>
      </div>
    </div>


  )
}

export default UserComp;