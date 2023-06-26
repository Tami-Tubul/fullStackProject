import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import utils from './Utilities/utils';


function App() {

  const connectedUser = useSelector(state => state.usersReducer.connectedUser)

  const dispatch = useDispatch()

    useEffect(() => {

        //load users
        const getAllUsers = async () => {
            const resp = await utils.getAllItems("http://localhost:5000/api/users")
            dispatch({ type: "LOAD_USERS", payload: resp.data })
        }

        //load movies
        const getAllMovies = async () => {
            const resp = await utils.getAllItems("http://localhost:5000/api/movies")
            dispatch({ type: "LOAD_MOVIES", payload: resp.data })
        }

        //load members
        const getAllMembers = async () => {
            const resp = await utils.getAllItems("http://localhost:5000/api/members")
            dispatch({ type: "LOAD_MEMBERS", payload: resp.data })
        }

        getAllUsers();
        getAllMovies();
        getAllMembers();

    }, [dispatch])

  return (
    <div className='App'>
      <HeaderComp connectedUserData={connectedUser} />
      <main>

        <Routes>
          <Route path='/auth/login' element={<LoginComp />} />
          <Route path='/createAccount' element={<CreateAccountComp />} />
          <Route path='/' element={connectedUser ? <MainPageComp /> : <Navigate to="/auth/login" />} />
          <Route path='/movies/*' element={connectedUser ? <MoviesContainerComp /> : <Navigate to="/auth/login" />} >
            <Route path='allMovies' element={<MoviesComp />} />
            <Route path='addMovie' element={<AddMovieComp />} />
          </Route>
          <Route path='/subscriptions/*' element={connectedUser ? <SubscriptionsContainerComp /> : <Navigate to="/auth/login" />}>
            <Route path='members' element={<MembersComp />} />
            <Route path='addMember' element={<AddMemberComp />} />
          </Route>
          <Route path='/usersManagement' element={connectedUser ? <UsersManagementComp /> : <Navigate to="/auth/login" />} >
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
