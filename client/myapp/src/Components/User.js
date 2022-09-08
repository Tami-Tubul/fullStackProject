import { Button, Card } from "@material-ui/core";
import { Link } from "react-router-dom";
import ButtonComp from "../UI/Button";

const UserComp = ({userData}) => {

  return (
     <Card variant="outlined" sx={{ maxWidth: 700 }} className="box">
      <strong>Name:</strong>  {userData.firstName} {userData.lastName} <br/>
      <strong>User Name:</strong> {userData.userName} <br/>
      <strong>Seassion time out</strong>(Minutes): {userData.sessionTimeOut}<br/>
      <strong>Created Date:</strong> {userData.createdDate} <br/>
      <strong>Permissions:</strong> {userData.permissions.map((per,index) => {return index > 0 ? "," + per : per})}<br/>
      <button><Link to="editUser" typp="button">Edit</Link> </button>{" "}
      <button typp="button">Delete</button> {" "}

     </Card>
  )
}

export default UserComp;