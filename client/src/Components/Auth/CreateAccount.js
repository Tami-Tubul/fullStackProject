import CardComp from "../../UI/Card";
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import utils from '../../Utilities/utils';

import { FormGroup } from '@material-ui/core';
import toast from 'toast-me';
import AlertComp from '../../UI/Alert';
import ButtonComp from '../../UI/Button';
import FormControlComp from '../../UI/FormControl';
import './Auth.css';


const CreateAccountComp = () => {


  const [user, setUser] = useState({})
  const [error, setError] = useState("")

  const navigate = useNavigate()

  const checkUser = async (e) => {
    e.preventDefault(); 
   
    let resp = await utils.getAllItems("http://localhost:5000/api/users")
    let allUsers = resp.data;
    let userIsExist = allUsers.find(x => x.userName === user.userName)
    let passwordIsExist = allUsers.find(x => x.password === user.password)

    if (userIsExist) {
      if (!passwordIsExist) {
        userIsExist.password = user.password;
        let upsatedUser = userIsExist;
        let status = await utils.editItem("http://localhost:5000/api/users", userIsExist._id, upsatedUser)
        if (status.data === "updated!") {
          toast("This user's password has been updated!" ,{ duration: 2000} )
          navigate("/auth/login")
        }
      }
      else {
        setError("This user already exists in the system!")
      }
    }
    else {
      setError("Username does not exist!")
    }
  }


  return (
    <>
      <CardComp>
        <h2 className="form-heading">Create an Account</h2>
        <hr></hr>
        <br />
        <form className='form' onSubmit={e => checkUser(e)} autoComplete="off">
          <FormGroup>

            <FormControlComp id="userName" type="text" label="User Name" required onChange={e => setUser({ ...user, userName: e.target.value })} />
            <FormControlComp id="password" type="password" label="Password" required onChange={e => setUser({ ...user, password: e.target.value })} />

            <ButtonComp typeBtn='submit' variant="contained" color="default">Create</ButtonComp><br />

            {error.length !== 0 && <AlertComp message={error} severity="error" />}

          </FormGroup>
          <br />

          <span> User exist? </span>
          <Link to='/auth/login'>Log in</Link>

        </form>
      </CardComp>
    </>
  )
}

export default CreateAccountComp; 