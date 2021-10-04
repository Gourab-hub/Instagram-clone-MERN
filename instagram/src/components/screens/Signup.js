import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import M from 'materialize-css'

const Signup = () => {
    const histroy = useHistory()
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const PostData = () => {

        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html: "invalid email",classes:"#c62828 red darken-3"})
            return
        }

        fetch("/signup", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                password,
            })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    M.toast({ html: data.error, classes: 'rounded red' })
                }
                else {
                    M.toast({ html: data.message, classes: 'rounded green' })
                    histroy.push('/signin')
                }

                console.log(data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <div className="mycard">
                <div className="card auth-card input-field">
                    <h2 className="brand-logo">Instagram</h2>
                    <input className="input-field" type="text" placeholder="Name " autocomplete="off"
                        value={name} onChange={(e) => setName(e.target.value)} />


                    <input className="input-field" type="text" placeholder="Email" aautocomplete="off"
                        value={email} onChange={(e) => setEmail(e.target.value)} />


                    <input className="input-field" type="text" placeholder="Password " autocomplete="off"
                        value={password} onChange={(e) => setPassword(e.target.value)} />

                    <button className="btn waves-effect waves-light #448aff blue accent-2" onClick={() => PostData()} >Login</button>
                    <h5>
                        <Link to="/signin">Already have an account?</Link>
                    </h5>
                </div>
            </div>
        </div>
    )
}

export default Signup
