import { Checkbox, FormControlLabel, FormGroup } from "@material-ui/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import ButtonComp from "../../UI/Button";
import FormControlComp from "../../UI/FormControl";
import utils from "../../Utilities/utils";
import toast from 'toast-me';


const AddUserComp = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState({ firstName: "", lastName: "", userName: "", sessionTimeOut: 0, permissions: [] })

  let permissionsArr = [
    "View Subscriptions",
    "Create Subscriptions",
    "Delete Subscriptions",
    "Update Subscriptions",
    "View Movies",
    "Create Movies",
    "Delete Movies",
    "Update Movies"
  ]


  // Creating an array of choices the same length as the array of permissions
  const [checkedState, setCheckedState] = useState(
    new Array(permissionsArr.length).fill(false)
  );

  const handleChange = (position) => {

    //Updating the array of choices according to the choice
    const updateCheckedState = checkedState.map((item, index) => {
      return position === index ? !item : item;
    })

    setCheckedState(updateCheckedState)

    let perm = [...permissionsArr]

    //Filtering the permissions array according to the choices array
    let filteredPerm = perm.filter((item, index) => updateCheckedState[index] == true);
    setUser({ ...user, permissions: filteredPerm })

  }

  

  const cancelFunc = () => {
    navigate("/usersManagement/users");
  }

  const addUserFunc = async (e) => {
    e.preventDefault();
    let newUser = user;
    let status = await utils.addItem("http://localhost:5000/api/users", newUser)

    if (status.data.status == "created!") {

      let newUserID = status.data.userId; // get the userId from database
      let createdDate = status.data.createdDate; // get the createdDate from database

      toast("The user was created!", { duration: 3000 })

      dispatch({ type: "ADD_USER", payload: { ...newUser, _id: newUserID, createdDate: createdDate } });

      navigate("/usersManagement/users");
    }
  }



  return (<>
    <h3>Add User</h3>
    <div className="scroll-div">
      <form className="form" onSubmit={e => addUserFunc(e)}>
        <FormGroup>
          <FormControlComp id="firstName" type="text" label="First Name:" required onChange={e => setUser({ ...user, firstName: e.target.value })} />
          <FormControlComp id="lastName" type="text" label="Last Name:" required onChange={e => setUser({ ...user, lastName: e.target.value })} />
          <FormControlComp id="userName" type="text" label="User Name:" required onChange={e => setUser({ ...user, userName: e.target.value })} />
          <FormControlComp id="sessionTimeOut" type="number" label="Session Time Out (Minutes):" required onChange={e => setUser({ ...user, sessionTimeOut: e.target.value })} />

          <fieldset style={{width : "77%" , margin:"auto"}}>
            <legend>permissions:</legend>{
            permissionsArr.map((per, index) => {
              return <FormControlLabel key={index}
                control={
                  <Checkbox checked={checkedState[index]} onChange={() => handleChange(index)} name={per} />
                }
                label={per}
              />
            })
          }
          </fieldset>

          <br />

          <ButtonComp typeBtn='submit' variant="contained" color="default" >Save</ButtonComp><br />
          <ButtonComp typeBtn='button' variant="contained" color="default" onClick={cancelFunc}>Cancel</ButtonComp><br />

        </FormGroup>
      </form>
    </div>
  </>
  )
}

export default AddUserComp;