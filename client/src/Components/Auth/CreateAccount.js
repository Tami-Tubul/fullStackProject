import CardComp from "../../UI/Card";
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';

import toast from 'toast-me';
import AlertComp from '../../UI/Alert';
import ButtonComp from '../../UI/Button';
import FormControlComp from '../../UI/FormControl';
import './Auth.css';
import { FormGroup } from "@mui/material";
import authService from "../../Utilities/authService";


const CreateAccountComp = () => {


  const [user, setUser] = useState({})
  const [error, setError] = useState("")

  const navigate = useNavigate()

  const checkUser = async (e) => {
    e.preventDefault();

    let { userName, password } = user;
    authService.createAccount(userName, password)
      .then(resp => {
        if (resp.status === 200) {
          toast(resp.data.message, { duration: 2000 })
          navigate("/auth/login")
        }

      }).catch(err => {
        setError(err.response.data.message)
      })

  }


  return (
    <>
      <CardComp>
        <h2 className="form-heading">Create an Account</h2>
        <hr></hr>
        <br />
        <form className='form' onSubmit={checkUser} autoComplete="off">
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