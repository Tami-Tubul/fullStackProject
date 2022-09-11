import { FormGroup } from "@material-ui/core";
import { useParams } from "react-router-dom";
import ButtonComp from "../UI/Button";
import FormControlComp from "../UI/FormControl";
import PermissionsComp from "./Permissions";

const EditUserComp = () => {

  const params = useParams()

  return (
    <>
      <h4>Edit User</h4>
      <form className="form">
        <FormGroup>
          <FormControlComp id="firstName" type="text" label="First Name:" />
          <FormControlComp id="lastName" type="text" label="Last Name:" />
          <FormControlComp id="userName" type="text" label="User Name:" />
          <FormControlComp id="sessionTimeOut" type="number" label="Session Time Out (Minutes):" />

          <span>Created Date:</span> <br />

          <PermissionsComp />
          
          <br />

          <ButtonComp typeBtn='submit' variant="contained" color="default" textBtn="Update" /><br />
          <ButtonComp typeBtn='submit' variant="contained" color="default" textBtn="Cancel" /><br />

        </FormGroup>
      </form>
    </>
  )
}

export default EditUserComp;