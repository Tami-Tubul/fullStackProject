import { FormGroup } from "@material-ui/core";
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
  const params = useParams()
  const [user, setUser] = useState({ firstName: "", lastName: "", userName: "", sessionTimeOut: 0 })
  const navigate = useNavigate()


  useEffect(() => {
    let userForEdit = users && users.find(x => x._id === params.id)
    setUser(userForEdit)
  }, [users, params.id])



  const cancelFunc = () => {
    navigate(-1)
  }

  const updateFunc = async (e) => {
    e.preventDefault();
    let updatedUser = user;
    let status = await utils.editItem("http://localhost:5000/api/users", params.id, updatedUser)
    if (status.data === "updated!") {
      toast("The user was updated!", { duration: 3000 })
      dispatch({ type: "UPDATE_USER", payload: updatedUser })
      navigate(-1)

    }

  }

  return (
    <>
      <h3>Edit User</h3>
      <form className="form" onSubmit={e => updateFunc(e)}>

        <FormGroup>
        
          <FormControlComp id="firstName" type="text" label="First Name:" value={user?.firstName} onChange={e => setUser({ ...user, firstName: e.target.value })} />
          <FormControlComp id="lastName" type="text" label="Last Name:" value={user?.lastName} onChange={e => setUser({ ...user, lastName: e.target.value })} />
          <FormControlComp id="userName" type="text" label="User Name:" value={user?.userName} onChange={e => setUser({ ...user, userName: e.target.value })} />
          <FormControlComp id="sessionTimeOut" type="number" label="Session Time Out (Minutes):" value={user?.sessionTimeOut} onChange={e => setUser({ ...user, sessionTimeOut: e.target.value })} />
          <FormControlComp id="createdDate" type="text" label="Created Date:" value={user?.createdDate} readonly disabled />
 
          {/* <PermissionsComp /> */}

          <br />

          <ButtonComp typeBtn='submit' variant="contained" color="default" >Update</ButtonComp><br />
          <ButtonComp typeBtn='button' variant="contained" color="default" onClick={cancelFunc} >Cancel</ButtonComp><br />

        </FormGroup>
      </form>
    </>
  )
}

export default EditUserComp;