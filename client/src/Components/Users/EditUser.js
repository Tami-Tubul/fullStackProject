import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import utils from '../../Utilities/utils';
import ButtonComp from '../../UI/Button';
import FormControlComp from '../../UI/FormControl';

import toast from 'toast-me';



const EditUserComp = () => {

  const users = useSelector(state => state.usersReducer.users)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()

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


  //Creating an updated set of permissions for this user
  let checkedStateForEdit = permissionsArr.map(r => user?.permissions.includes(r) ? true : false)

  const handleChange = (position) => {

    //Updating the array of choices according to the choice
    const updateCheckedState = checkedStateForEdit.map((item, index) => {
      return position === index ? !item : item;
    })

    let perm = [...permissionsArr]

    //Filtering the permissions array according to the choices array
    let filteredPerm = perm.filter((item, index) => updateCheckedState[index] == true);
    setUser({ ...user, permissions: filteredPerm })

  }


  useEffect(() => {
    let userForEdit = users && users.find(x => x._id === params.id)
    setUser(userForEdit)
  }, [users, params.id])



  const cancelFunc = () => {
    navigate(-1)
  }

  const updateUser = async (e) => {
    e.preventDefault();
    let updatedUser = user;
    let status = await utils.editItem("http://localhost:5000/api/users", params.id, updatedUser)
    if (status.data === "updated!") {
      dispatch({ type: "UPDATE_USER", payload: updatedUser })
      toast("The user was updated!", { duration: 3000 })
      navigate(-1)

    }

  }




  return (<>
    <h3>Edit User</h3>
    <div className="scroll-div">
      <form className="form" onSubmit={updateUser}>
        <FormGroup>
          <FormControlComp id="firstName" type="text" label="First Name:" value={user?.firstName} onChange={e => setUser({ ...user, firstName: e.target.value })} />
          <FormControlComp id="lastName" type="text" label="Last Name:" value={user?.lastName} onChange={e => setUser({ ...user, lastName: e.target.value })} />
          <FormControlComp id="userName" type="text" label="User Name:" value={user?.userName} onChange={e => setUser({ ...user, userName: e.target.value })} />
          <FormControlComp id="sessionTimeOut" type="number" label="Session Time Out (Minutes):" value={user?.sessionTimeOut} onChange={e => setUser({ ...user, sessionTimeOut: e.target.value })} />
          <FormControlComp id="createdDate" type="text" label="Created Date:" value={user?.createdDate} inputProps={{ readOnly: true, }} disabled variant="filled" />

          <FormControl style={{ width:"77%", display:"inline-block", margin:"auto"}} component="fieldset" variant="standard">
            <FormLabel component="legend">permissions:</FormLabel>
            {
              permissionsArr.map((per, index) => {
                return <FormControlLabel key={index}
                  control={
                    <Checkbox checked={checkedStateForEdit[index]} onChange={() => handleChange(index)} name={per} />
                  }
                  label={per}
                />
              })
            }</FormControl>

          <br />

          <ButtonComp typeBtn='submit' variant="contained" color="default" >Update</ButtonComp><br />
          <ButtonComp typeBtn='button' variant="contained" color="default" onClick={cancelFunc} >Cancel</ButtonComp><br />

        </FormGroup>
      </form>
    </div>
  </>
  )
}

export default EditUserComp;