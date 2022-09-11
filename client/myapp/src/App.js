import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUserComp from './Components/AddUser';
import CreateAccountComp from './Components/CreateAccount';
import EditUserComp from './Components/EditUser';
import LoginComp from './Components/Login';
import MainPageComp from './Components/MainPage';
import MoviesComp from './Components/Movies'
import SubscriptionsComp from './Components/Subscriptions';
import UserManagementComp from './Components/UserManagement';
import UsersComp from './Components/Users';
import UsersContainerComp from './Components/UsersContainer';

function App() {


  return (
    <div className='App'>

      <h1>Movies - Subscription Web Site</h1>

      <Routes>
        <Route path='/' element={<LoginComp />} />
        <Route path='/createAccount' element={<CreateAccountComp />} />
        <Route path='/mainPage' element={<MainPageComp />} >
          <Route path='movies' element={<MoviesComp />} />
          <Route path='subscriptions' element={<SubscriptionsComp />} />
          <Route path='userManagement' element={<UserManagementComp />} >
            <Route path='' element={<UsersContainerComp />} >
              <Route path='users' element={<UsersComp />} />
              <Route path='addUser' element={<AddUserComp />} />
            </Route>
            <Route path='editUser/:id' element={<EditUserComp />} />
          </Route>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
