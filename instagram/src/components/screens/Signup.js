import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div>
            <div className="mycard">
                <div className="card auth-card input-field">
                    <h2 className="brand-logo">Instagram</h2>
                    <input className="input-field" type="text" placeholder="Name " autocomplete="off" />
                    <input className="input-field" type="text" placeholder="Email" aautocomplete="off" />
                    <input className="input-field" type="text" placeholder="Password " autocomplete="off" />
                    <button className="btn waves-effect waves-light #448aff blue accent-2" >Login</button>
                    <h5>
                        <Link to="/signin">Already have an account?</Link>
                    </h5>
                </div>
            </div>
        </div>
    )
}

export default Signup