import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/counter/userSlice';
// import { Login } from '@mui/icons-material';
import Login from './Login';
import { auth } from './firebase';

function App() {

  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
        //user is logged in
        // eslint-disable-next-line
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL:userAuth.photoURL,
        }))
      }else{
        //user is logged out
        dispatch(logout());
      }

    })
  },[dispatch]);
  return (
    <div className="app">
      {/* <h1>Lets build a Linkedin clone</h1> */}

      {/* Header */}
      <Header />
      {!user ? (
        <Login/>
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
        
    </div >
  );
}

export default App;
