import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';

import { FormGroup } from '@material-ui/core';

import AlertComp from '../UI/Alert';
import ButtonComp from '../UI/Button';
import FormControlComp from '../UI/FormControl';
import '../UI/style.css'

import authService from '../Utilities/authService'



const LoginComp = () => {

    const [user, setUser] = useState({ userName: "", password: "" })
    const [error, setError] = useState("")

    const navigate = useNavigate();



    const login = async (e) => {

        e.preventDefault();

        let { userName, password } = user;
        authService.login(userName, password)
            .then(resp => {
               
                if (resp.status === 200) {
                    let token = resp.data.token;
                    authService.saveToken(token);

                    let connectedUser = resp.data.connectedUser;
                    authService.saveUser(connectedUser)

                    navigate("/mainPage")
                }

            }).catch(err => {
                    setError(err.response.data.message)
            })
    }


    return (<>

        <h2>Log in Page</h2>

        <form className='form' onSubmit={e => login(e)} autoComplete="off">
            <FormGroup>

                <FormControlComp id="userName" type="text" label="User Name" required onChange={e => setUser({ ...user, userName: e.target.value })} />
                <FormControlComp id="password" type="password" label="Password" required onChange={e => setUser({ ...user, password: e.target.value })} />

                <ButtonComp typeBtn='submit' variant="contained" color="default" textBtn="Login" /><br />

                {error.length !== 0 && <AlertComp message={error} severity="error" />}

            </FormGroup>
            <br />
            <span>New User? </span>
            <Link to='/createAccount'>Create Account</Link>

        </form>
    </>
    )
}

export default LoginComp;