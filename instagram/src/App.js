import './App.css';
import Navbar from'./components/Navbar'
import {BrowserRouter,Route} from "react-router-dom"
import Home from './components/screens/Home';
import Signup from './components/screens/Signup';
import Signin from './components/screens/Signin';
import Profile from './components/screens/Profile';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Route path="/" exact>
        <Home/>
      </Route>

      <Route path="/signin">
        <Signin/>
      </Route>

      <Route path="/signup">
        <Signup/>
      </Route>

      <Route path="/profile">
        <Profile/>
      </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
