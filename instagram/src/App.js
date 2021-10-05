import './App.css';
import React, { useEffect, createContext, useReducer,useContext } from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom"
import Home from './components/screens/Home';
import Signup from './components/screens/Signup';
import Signin from './components/screens/Signin';
import Profile from './components/screens/Profile';
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
    history.push('/')
   }else {
     dispatch({type: 'USER',path:user})
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

      <Route path="/profile">
        <Profile />
      </Route>

      <Route path="/createpost">
        <Createpost />
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
