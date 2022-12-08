import { useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import CreateAccountComp from './Components/Auth/CreateAccount';
import LoginComp from './Components/Auth/Login';
import MainPageComp from './Components/MainPage';
import AddMovieComp from './Components/Movies/AddMovie';
import MoviesComp from './Components/Movies/Movies';
import MoviesContainerComp from './Components/Movies/MoviesContainer';
import AddMemberComp from './Components/Subscriptions/AddMember';
import MembersComp from './Components/Subscriptions/Members';
import SubscriptionsContainerComp from './Components/Subscriptions/SubscriptionsContainer';
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
      <HeaderComp uname={storeUsers?.connectedUser?.userName} fname={storeUsers?.connectedUser?.firstName} lname={storeUsers?.connectedUser?.lastName} />
      <main>

        <Routes>
          <Route path='/auth/login' element={<LoginComp />} />
          <Route path='/createAccount' element={<CreateAccountComp />} />
          <Route path='/' element={storeUsers?.connectedUser ? <MainPageComp /> : <Navigate to="/auth/login" />} />
          <Route path='/movies/*' element={storeUsers?.connectedUser ? <MoviesContainerComp /> : <Navigate to="/auth/login" />} >
            <Route path='allMovies' element={<MoviesComp />} />
            <Route path='addMovie' element={<AddMovieComp />} />
          </Route>
          <Route path='/subscriptions' element={storeUsers?.connectedUser ? <SubscriptionsContainerComp /> : <Navigate to="/auth/login" />}>
            <Route path='members' element={<MembersComp />} />
            <Route path='addMember' element={<AddMemberComp />} />
          </Route>
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
