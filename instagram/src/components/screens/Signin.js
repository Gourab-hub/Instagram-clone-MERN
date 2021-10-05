import React,{useState} from 'react'
import { Link,useHistory } from 'react-router-dom'
import M from 'materialize-css'



const Signin = () => {
    const histroy = useHistory()
   
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const PostData = () => {

        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html: "invalid email",classes:"#c62828 red darken-3"})
            return
        }

        fetch("/signin", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({

                email,
                password,
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.error) {
                    M.toast({ html: data.error, classes: 'rounded red' })
                }
                else {

                    //token store 
                    localStorage.setItem("jwt",data.token)
                    localStorage.setItem("user",JSON.stringify(data.user))

                    M.toast({ html: "Successfully Signin", classes: 'rounded green' })
                    histroy.push('/')
                }

                console.log(data);
            })
            .catch(err => {
                console.log(err);
            })
    }


    return (
        <div className="mycard">
            <div className="card auth-card input-field">
                <h2 className="brand-logo">Instagram</h2>
                <input className="input-field" type="text" placeholder="Email" aautocomplete="off"
                        value={email} onChange={(e) => setEmail(e.target.value)} />


                    <input className="input-field" type="text" placeholder="Password " autocomplete="off"
                        value={password} onChange={(e) => setPassword(e.target.value)} />


                <button className="btn waves-effect waves-light #448aff blue accent-2" onClick={() => PostData()}>Login</button>
                <h5>
                    <Link to="/signup">Don't have an account?</Link>
                </h5>
            </div>
        </div>
    )
}

export default Signin
