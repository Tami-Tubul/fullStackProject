import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import CreateAccountComp from './Components/Auth/CreateAccount';
import LoginComp from './Components/Auth/Login';
import MainPageComp from './Components/MainPage';
import MoviesComp from './Components/Movies/Movies';
import SubscriptionsComp from './Components/Subscriptions/Subscriptions';
import AddUserComp from './Components/Users/AddUser';
import EditUserComp from './Components/Users/EditUser';
import UsersComp from './Components/Users/Users';
import UsersContainerComp from './Components/Users/UsersContainer';
import UsersManagementComp from './Components/Users/UsersManagement';
import HeaderComp from './Layouts/Header';
import utils from './Utilities/utils';


function App() {

  const dispatch = useDispatch()
  const storeUsers = useSelector(state => state.usersReducer)

  useEffect(() => {

    //load users
    const getAllUsers = async () => {
      const resp = await utils.getAllItems("http://localhost:5000/api/users")
      dispatch({ type: "LOAD_USERS", payload: resp.data })
    }
    getAllUsers()

  }, [dispatch])


  useEffect(() => {
    if(sessionStorage["user"])
    {
      dispatch({ type: "CONNECTED_USER", payload: JSON.parse(sessionStorage["user"]) })
    }
    
  }, [sessionStorage])
  

  return (
    <div className='App'>
      <HeaderComp />
      <main>
        <Routes>
          <Route path='/auth/login' element={<LoginComp />} />
          <Route path='/createAccount' element={<CreateAccountComp />} />
          <Route path='/' element={storeUsers.connectedUser !== undefined ? <MainPageComp /> : <Navigate to="/auth/login" />} />
          <Route path='/movies' element={<MoviesComp />} />
          <Route path='/subscriptions' element={<SubscriptionsComp />} />
          <Route path='/usersManagement' element={<UsersManagementComp />} >
            <Route path='' element={<UsersContainerComp />} >
              <Route path='users' element={<UsersComp />} />
              <Route path='addUser' element={<AddUserComp />} />
            </Route>
            <Route path='editUser/:id' element={<EditUserComp />} />
          </Route>
        </Routes>
      </main>

    </div>
  );
}

export default App;
