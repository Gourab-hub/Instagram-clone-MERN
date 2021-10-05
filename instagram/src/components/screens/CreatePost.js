import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import M from 'materialize-css'


const Createpost = () => {
    const histroy = useHistory()

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [image, setImage] = useState("")
    const [url, setUrl] = useState("")


    const postDetails = () => {
        const data = new FormData()
        data.append('file', image)
        data.append('upload_preset', "insta-clone")
        data.append('cloud_name', "gourab")
        const res = fetch("https://api.cloudinary.com/v1_1/gourab/image/upload", {
            method: "post",
            body: data
        })
            .then(res => res.json())
            .then(data => {
                setUrl(data)
            })
            .catch(err => {
                console.log(err)
            })

        fetch("/createpost", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                body,
                url
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.error) {
                    M.toast({ html: data.error, classes: 'rounded red' })
                }
                else {
                    M.toast({ html: "Created Post Successfully ", classes: 'rounded green' })
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
                <h5 className="Create-name">Instagram</h5>
                <input className="input-field" type="text" placeholder="Title" aautocomplete="off" value={title} onChange={(e) => setTitle(e.target.value)} />
                <input className="input-field" type="text" placeholder="Body " autocomplete="off" value={body} onChange={(e) => setBody(e.target.value)} />

                <div className="file-field input-field">
                    <div className="btn #448aff blue accent-2">
                        <span>File</span>
                        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                    </div>
                    <div className="file-path-wrapper ">
                        <input className="file-path validate" type="text" />
                    </div>
                </div>
                <button className="btn waves-effect waves-light #448aff blue accent-2" onClick={() => postDetails()}>SUBMIT POST</button>

            </div>
        </div>

    )
}

export default Createpost
