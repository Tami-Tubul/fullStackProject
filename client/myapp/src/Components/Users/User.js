import { Link } from "react-router-dom";
import BoxComp from "../../UI/Box";


const UserComp = ({ userData }) => {


  return (

    <BoxComp>
      <div>
        <p><strong>Name:</strong>  {userData.firstName} {userData.lastName}</p>
        <p><strong>User Name:</strong> {userData.userName}</p>
        <p><strong>Seassion time out(Minutes):</strong> {userData.sessionTimeOut}</p>
        <p><strong>Created Date:</strong> {userData.createdDate}</p>
        <p><strong>Permissions:</strong> {userData.permissions.map((per, index) => { return index > 0 ? "," + per : per })}</p>
        <button type="button"><Link to={"/usersManagement/editUser/" + userData._id}>Edit</Link></button>{" "}
        <button typp="button">Delete</button>
      </div>
    </BoxComp >


  )
}

export default UserComp;