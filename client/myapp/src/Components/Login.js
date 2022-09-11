import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import utils from '../utils';

import { FormGroup } from '@material-ui/core';

import AlertComp from '../UI/Alert';
import ButtonComp from '../UI/Button';
import FormControlComp from '../UI/FormControl';
import '../UI/style.css'


const LoginComp = () => {

    const [user, setUser] = useState({})
    const [error, setError] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const checkUser = async (e) => {
        e.preventDefault();

        let resp = await utils.getAllItems("http://localhost:5000/api/users")
        let allUsers = resp.data;

        let userIsExist = allUsers.find(x => x.userName === user.userName)
        let passwordIsExist = allUsers.find(x => x.password === user.password)

        if (userIsExist) {
            if (passwordIsExist) {
                navigate("/mainPage")
                dispatch({ type: "LOGIN", payload: userIsExist })
            }
            else {
                setError("Invalid password!")
            }
        }

        else {
            setError("Username does not exist!")
        }
    }

    return (<>
        <h2>Log in Page</h2>

        <form className='form' onSubmit={e => checkUser(e)} autoComplete="off">
            <FormGroup>
                
                <FormControlComp id="userName" type="text" label="User Name" required onChange={e => setUser({ ...user, userName: e.target.value })} />
                <FormControlComp id="password" type="password" label="Password" required onChange={e => setUser({ ...user, password: e.target.value })} />

                <ButtonComp typeBtn='submit' variant="contained" color="default" textBtn="Login" /><br />

                {error.length !== 0 && <AlertComp errorMessage={error} />}

            </FormGroup>
            <br />
            <span>New User? </span>
            <Link to='./createAccount'>Create Account</Link>

        </form>
    </>
    )
}

export default LoginComp;