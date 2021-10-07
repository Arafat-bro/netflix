import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import HomeScreen from './HomeScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginScreen from './LoginScreen';
// import { useEffect } from 'react';
import { getAuth } from '@firebase/auth';
// import { login, logout, selectUser } from './features/userSlice';
// import { useSelector, useDispatch} from 'react-redux';

const user = true;
const auth = getAuth();
function App() {

  // const user = useSelector(selectUser);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const unsubscribe =  auth.onAuthStateChanged((authUser) => {
  //     if (authUser) {
  //       // logged in
  //       console.log(authUser);
  //       dispatch(login({
  //         uid: authUser.uid,
  //         email: authUser.email,
  //       })
  //       );
  //     } else {
  //       // logged out
  //       dispatch(logout);
  //     }
  //   })
  //   return unsubscribe;
  // }, []);

  return (
    
    <div className="app">
      <Router>
        {!user ? (<LoginScreen />) :
        
          (<Switch>
            <Route exact path="/" >
              <HomeScreen />
            </Route>
          </Switch>
          )
        }
</Router>
    </div>
  );
}

export default App;
