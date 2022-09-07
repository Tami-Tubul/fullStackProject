import { Link, useNavigate } from 'react-router-dom'
import { Button, Input, FormLabel, FormControl, FormGroup } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import utils from '../utils';
import ErrorComp from '../UI/Error';



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
        <form onSubmit={e => checkUser(e)} autoComplete="off" style={{ width: "300px", height: "300px", marginRight: "auto", marginLeft: "auto", padding: "60px", border: "2px solid black" }}>
            <FormGroup >
                <FormControl>
                    <FormLabel htmlFor='userName'>User name: </FormLabel>
                    <Input id='userName' type='text' onChange={e => setUser({ ...user, userName: e.target.value })} required /> <br />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='password'>Password: </FormLabel>
                    <Input id='password' type='password' onChange={e => setUser({ ...user, password: e.target.value })} required></Input> <br />
                </FormControl>
                <Button type='submit' variant="contained"
                    color="default">Login</Button><br />

                {/* {error.length !== 0 && <span style={{ color: "red" }}>{error}</span>} */}

                {error.length !== 0 && <ErrorComp errorMessage={error}></ErrorComp>}

                <br />
            </FormGroup>
            <span>New User? </span>
            <Link to='./createAccount'>Create Account</Link>
        </form>
    </>
    )
}

export default LoginComp;