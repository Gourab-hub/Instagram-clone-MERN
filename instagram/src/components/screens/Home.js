import React from 'react'

const Home = () => {
    return (
        <div className="home" >
            <div className="card home-card" >
                <h5 className="text-name" > ramesh </h5>
                <div className="card-image" >
                    <img src="https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=562&q=80" />
                </div>
                <div className="" >
                    <h6 className="text-home" > title </h6> <p className="text-home" > this is amazing post </p> <i className="material-icons text-icon"
                        style={{ color: "red" }} > favorite </i>
                    <input className="text-input" type="text" placeholder="Add a comment" />
                </div>
            </div>
            <div className="card home-card" >
                <h5 className="text-name" > ramesh </h5>
                <div className="card-image" >
                    <img src="https://images.unsplash.com/photo-1618048094700-f4817c77838b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=608&q=80" />
                </div>
                <div className="" >
                    <h6 className="text-home" > title </h6> <p className="text-home" > this is amazing post </p> <i className="material-icons text-icon"
                        style={{ color: "red" }} > favorite </i>
                    <input className="text-input" type="text" placeholder="Add a comment" />
                </div>
            </div>
            <div className="card home-card" >
                <h5 className="text-name" > ramesh </h5>
                <div className="card-image" >
                    <img src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGdpcmx8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                </div>
                <div className="" >
                    <h6 className="text-home" > title </h6> <p className="text-home" > this is amazing post </p> <i className="material-icons text-icon"
                        style={{ color: "red" }} > favorite </i>
                    <input className="text-input" type="text" placeholder="Add a comment" />
                </div>
            </div>
        </div>
    )
}

export default Home