import React from 'react'

const Createpost = () => {
    return (
        <div className="mycard">
           
            <div className="card auth-card input-field">
            <h5 className="Create-name">Instagram</h5>
                <input type="text" placeholder="Title" />
                <input type="text" placeholder="Body" />
                <div className="file-field input-field">
                    <div className="btn #448aff blue accent-2">
                        <span>File</span>
                        <input type="file" />
                    </div>
                    <div className="file-path-wrapper ">
                        <input className="file-path validate" type="text" />
                    </div>
                </div>
                <button className="btn waves-effect waves-light #448aff blue accent-2" >SUBMIT POST</button>

            </div>
        </div>

    )
}

export default Createpost
