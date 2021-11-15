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
                <li key="1"><Link to="/profile">Profile</Link></li>,
                <li key="2"><Link to="/createpost">Create</Link></li>,
                <li key="3"><Link to="/myfollowingpost">My following Posts</Link></li>,
                <li key="4"> <button className="btn waves-effect waves-light #448aff blue accent-2" 
                onClick={() => {
                    localStorage.clear();
                    dispatch({type: 'CLEAR'})
                    history.push("/signin")

                }} >Logout</button>
                
                </li>
            ]

        }else{
            return [
                <li key="1"><Link to="/signin">Login</Link></li>,
                <li key="2"><Link to="/signup">Signup</Link></li>
                
            ]
        }
    }



    
        return (
        <nav>
            <div className="nav-wrapper white" >
                <Link to={state?"/":"/signin"} className="brand-logo left">Instagram</Link>
                <ul id="nav-mobile" className="right nav-right">
                    {returnList()}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
