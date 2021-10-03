import React from 'react'

const Profile = () => {
    return (
        <div style={{maxWidth:"80%",margin:"0px auto"}}>
            <div style={{

                display: 'flex',
                justifyContent:'space-around',
                margin:'30px auto',
                width:'70%', height: '160px', align:'center',
                borderBottom:'1px solid gray'
                
            }}>
                <div>
                    <img src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80" style={{ width: '160px', height: '160px', borderRadius: "80px" }} />
                </div>
                <div>
                    <h4>Gourab Banik</h4>
                    <div style={{ display: 'flex',justifyContent:"space-between",width:"108%"}}>
                        <h5>40 Posts</h5>
                        <h5>40 Followers</h5>
                        <h5>40 Following</h5>
                    </div>
                </div>
            </div>
            <div className="gallery">
                <img className="item" src="https://images.unsplash.com/photo-1570752321219-41822a21a761?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybHxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                <img className="item" src="https://images.unsplash.com/photo-1570752321219-41822a21a761?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybHxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                <img className="item" src="https://images.unsplash.com/photo-1570752321219-41822a21a761?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybHxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                <img className="item" src="https://images.unsplash.com/photo-1570752321219-41822a21a761?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybHxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                <img className="item" src="https://images.unsplash.com/photo-1570752321219-41822a21a761?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybHxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                <img className="item" src="https://images.unsplash.com/photo-1570752321219-41822a21a761?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybHxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                <img className="item" src="https://images.unsplash.com/photo-1570752321219-41822a21a761?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybHxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                <img className="item" src="https://images.unsplash.com/photo-1570752321219-41822a21a761?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybHxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                <img className="item" src="https://images.unsplash.com/photo-1570752321219-41822a21a761?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybHxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                <img className="item" src="https://images.unsplash.com/photo-1570752321219-41822a21a761?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybHxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                <img className="item" src="https://images.unsplash.com/photo-1570752321219-41822a21a761?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybHxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>

            </div>
        </div>
    )
}

export default Profile
