import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUsersComp from './Components/AddUsers';
import CreateAccountComp from './Components/CreateAccount';
import LoginComp from './Components/Login';
import MainPageComp from './Components/MainPage';
import MoviesComp from './Components/Movies'
import SubscriptionsComp from './Components/Subscriptions';
import UserManagementComp from './Components/UserManagement';
import UsersComp from './Components/Users';
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
            <Route path='users' element={<UsersComp/>} />
            <Route path='addUser' element={<AddUsersComp/>} />
          </Route>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
