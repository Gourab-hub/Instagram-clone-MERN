import React,{ useState, useEffect,useContext } from 'react'
import { UserContext } from '../../App'
import {useParams} from 'react-router-dom'


const UserProfile   = () => {
    const [userProfile,setProfile] = useState(null)
    const {state,dispatch} = useContext(UserContext)
    const {userid}=useParams()
    console.log(userid)

    useEffect(()=>{
        fetch(`/user/${userid}`,{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            // console.log(result.user)
          
             setProfile(result)
        })
     },[])

    return (
        <>
        {
            userProfile?
       
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
                    <h4>{userProfile?userProfile.user.name:"loading"}</h4>
                    <h6>{userProfile?userProfile.user.email:"loading"}</h6>
                    <div style={{ display: 'flex',justifyContent:"space-between",width:"108%"}}>
                        <h5>{userProfile.posts.length} posts</h5>
                        <h5>40 Followers</h5>
                        <h5>40 Following</h5>
                    </div>
                </div>
            </div>
            <div className="gallery">
                {userProfile?
                    userProfile.posts.map(item=>{
                        return(
                            <img className="item" src={item.photo} key={item._id}/>
                        )
                    }):"loading"
                }
            

            </div>
        </div>: <h4>"loading"</h4>
     

}

</>
    )
}

export default UserProfile  
