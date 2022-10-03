import {  useSelector } from 'react-redux';
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




function App() {

  const storeUsers = useSelector(state => state.usersReducer)



  return (
    <div className='App'>
      {console.log("render app....")}
      <HeaderComp uname={storeUsers?.connectedUser?.userName} fname={storeUsers?.connectedUser?.firstName} lname={storeUsers?.connectedUser?.lastName} />
      <main>

       <Routes>
          <Route path='/auth/login' element={<LoginComp />} />
          <Route path='/createAccount' element={<CreateAccountComp />} />
          <Route path='/' element={storeUsers?.connectedUser ? <MainPageComp /> : <Navigate to="/auth/login" />} />
          <Route path='/movies' element={storeUsers?.connectedUser ? <MoviesComp /> : <Navigate to="/auth/login" />} />
          <Route path='/subscriptions' element={storeUsers?.connectedUser ? <SubscriptionsComp /> : <Navigate to="/auth/login" />} />
          <Route path='/usersManagement' element={storeUsers?.connectedUser ? <UsersManagementComp /> : <Navigate to="/auth/login" />} >
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
