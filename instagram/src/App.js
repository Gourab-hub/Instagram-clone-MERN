import './App.css';
import React, { useEffect, createContext, useReducer,useContext } from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom"
import Home from './components/screens/Home';
import Signup from './components/screens/Signup';
import Signin from './components/screens/Signin';
import Profile from './components/screens/Profile';
import UserProfile from './components/screens/UserProfile';
import SubscribedUserPosts from './components/screens/SubscribesUserPosts'
import Createpost from './components/screens/CreatePost';
import { reducer, initialState } from './components/reducer/userReducer'
export const UserContext = createContext()

const Routing = () => {
  const history = useHistory();
  const {state,dispatch} = useContext(UserContext)



  useEffect(() => {
    
    //type = string
    const user1 = localStorage.getItem('user')
    // json.parse convert to json object
    const user= JSON.parse(user1)
   // console.log(user)
   if (user) {
    dispatch({type: 'USER',payload:user})
  
   }else {
  
    history.push('/signin')
   }
  }, [])
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/signin">
        <Signin />
      </Route>

      <Route path="/signup">
        <Signup />
      </Route>

      <Route exact path="/profile">
        <Profile />
      </Route>

      <Route path="/createpost">
        <Createpost />
      </Route>

      <Route path="/profile/:userid">
        <UserProfile />
      </Route>

      <Route path="/myfollowingpost">
        <SubscribedUserPosts />
      </Route>



    </Switch>

  )


}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }} >
      <BrowserRouter>
        <Navbar />
        <Routing />
      </BrowserRouter>
    </UserContext.Provider>



  );
}

export default App;
