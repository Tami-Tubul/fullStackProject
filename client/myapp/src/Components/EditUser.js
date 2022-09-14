import { FormGroup } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ButtonComp from "../UI/Button";
import FormControlComp from "../UI/FormControl";
import PermissionsComp from "../UI/Permissions";

const EditUserComp = () => {

  const users = useSelector(state => state.users)
  const params = useParams()
  const [user, setUser] = useState({})
  const navigate = useNavigate()


  useEffect(() => {
    let userForEdit = users && users.find(x => x._id === params.id)
    setUser(userForEdit)
  }, [users, params.id])



  const cancelFunc = () => {
    navigate("/mainPage/userManagement/users")
  }

  return (
    <>
      <h4>Edit User</h4>
      <form className="form">
        <FormGroup>
          <FormControlComp id="firstName" type="text" label="First Name:" value={user?.firstName} />
          <FormControlComp id="lastName" type="text" label="Last Name:" value={user?.lastName} />
          <FormControlComp id="userName" type="text" label="User Name:" value={user?.userName} />
          <FormControlComp id="sessionTimeOut" type="number" label="Session Time Out (Minutes):" value={user?.sessionTimeOut} />

          <span>Created Date:</span> <span>{user?.createdDate}</span> <br />

          <PermissionsComp />

          <br />

          <ButtonComp typeBtn='submit' variant="contained" color="default" textBtn="Update" /><br />
          <ButtonComp typeBtn='submit' variant="contained" color="default" textBtn="Cancel" onClick={cancelFunc} /><br />

        </FormGroup>
      </form>
    </>
  )
}

export default EditUserComp;