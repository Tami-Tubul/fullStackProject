import { FormGroup } from "@material-ui/core";
import ButtonComp from "../../UI/Button";
import FormControlComp from "../../UI/FormControl";


const AddUserComp = () => {


  return (
    <>
      <h3>Add User</h3>
      <form className="form">
        <FormGroup>
          <FormControlComp id="firstName" type="text" label="First Name:" />
          <FormControlComp id="lastName" type="text" label="Last Name:" />
          <FormControlComp id="userName" type="text" label="User Name:" />
          <FormControlComp id="sessionTimeOut" type="number" label="Session Time Out (Minutes):" />

          {/* <PermissionsComp /> */}
          
          <br />

          <ButtonComp typeBtn='submit' variant="contained" color="default">Save</ButtonComp><br />
          <ButtonComp typeBtn='submit' variant="contained" color="default" >Cancel</ButtonComp><br />

        </FormGroup>
      </form>
    </>
  )
}

export default AddUserComp;