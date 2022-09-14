import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

import utils from '../utils';

import { FormGroup } from '@material-ui/core';

import AlertComp from '../UI/Alert';
import ButtonComp from '../UI/Button';
import FormControlComp from '../UI/FormControl';
import { useSelector } from 'react-redux';




const CreateAccountComp = () => {

  const [user, setUser] = useState({})
  const [error, setError] = useState("")

  const navigate = useNavigate()
  const storeUsers = useSelector(state => state.usersReducer)

  const checkUser = async (e) => {
    e.preventDefault();

    let userIsExist = storeUsers.users.find(x => x.userName === user.userName)
    let passwordIsExist = storeUsers.users.find(x => x.password === user.password)

    if (userIsExist) {
      if (!passwordIsExist) {
        userIsExist.password = user.password;
        let upsatedUser = userIsExist;
        let status = await utils.editItem("http://localhost:5000/api/users", userIsExist._id, upsatedUser)
        if (status.data === "updated!") {
          alert("updated!")
          navigate("/")
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
      <h2>Create an Account</h2>

      <form className='form' onSubmit={e => checkUser(e)} autoComplete="off" >
        <FormGroup>

          <FormControlComp id="userName" type="text" label="User Name" required onChange={e => setUser({ ...user, userName: e.target.value })} />
          <FormControlComp id="password" type="password" label="Password" required onChange={e => setUser({ ...user, password: e.target.value })} />

          <ButtonComp typeBtn='submit' variant="contained" color="default" textBtn="Create" /><br />

          {error.length !== 0 && <AlertComp message={error} severity="error"/>}

        </FormGroup>
       
        <br />

        <span> User exist? </span>
        <Link to='/'>Log in</Link>
      </form>







    </>
  )
}

export default CreateAccountComp;