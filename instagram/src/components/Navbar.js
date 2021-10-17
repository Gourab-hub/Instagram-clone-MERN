import React,{useContext} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {UserContext} from "../App"

const Navbar = () => {
    const history =useHistory();
    const {state,dispatch}=useContext(UserContext)

    // console.log("state",state)
    const returnList=()=>{
        if(state){
            return [
                <li><Link to="/profile">Profile</Link></li>,
                <li><Link to="/createpost">Create</Link></li>,
                <li key="4"><Link to="/myfollowingpost">My following Posts</Link></li>,
                <li> <button className="btn waves-effect waves-light #448aff blue accent-2" 
                onClick={() => {
                    localStorage.clear();
                    dispatch({type: 'CLEAR'})
                    history.push("/signin")

                }} >Logout</button>
                
                </li>
            ]

        }else{
            return [
                <li><Link to="/signin">Login</Link></li>,
                <li><Link to="/signup">Signup</Link></li>
                
            ]
        }
    }
        return (
        <nav>
            <div className="nav-wrapper white" >
                <Link to={state?"/":"/signin"} className="brand-logo left">Instagram</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {returnList()}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
