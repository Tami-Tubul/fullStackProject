import { Button, Input, FormLabel, FormControl, FormGroup } from '@material-ui/core';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import ErrorComp from '../UI/Error';

import utils from '../utils';


const CreateAccountComp = () => {

  const [user, setUser] = useState({})
  const [error, setError] = useState("")

  const navigate = useNavigate()

  const checkUser = async (e) => {
    e.preventDefault();

    let resp = await utils.getAllItems("http://localhost:5000/api/users");
    let allUsers = resp.data;
    let userIsExist = allUsers.find(x => x.userName === user.userName)
    let passwordIsExist = allUsers.find(x => x.password === user.password)

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
      <form onSubmit={e => checkUser(e)} autoComplete="off" style={{ width: "300px", height: "300px", marginRight: "auto", marginLeft: "auto", padding: "60px", border: "2px solid black" }}>
        <FormGroup >
          <FormControl>
            <FormLabel htmlFor='userName'>User name: </FormLabel>
            <Input id='userName' type='text' required onChange={e => setUser({ ...user, userName: e.target.value })} /> <br />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor='password'>Password: </FormLabel>
            <Input id='password' type='password' required onChange={e => setUser({ ...user, password: e.target.value })}></Input> <br />
          </FormControl>
          <Button type='submit' variant="contained"
            color="default">Create</Button><br />

          {/* {error.length !== 0 && <span style={{ color: "red" }}>{error}</span>} */}

          {error.length !== 0 && <ErrorComp errorMessage={error}></ErrorComp>}

          <br />
          

        </FormGroup>
        <span> User exist? </span>
        <Link to='/'>Log in</Link>
      </form>
    </>
  )
}

export default CreateAccountComp;