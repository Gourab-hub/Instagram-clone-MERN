import React,{ useState, useEffect,useContext } from 'react'
import { UserContext } from '../../App'

const Profile = () => {
    const [mypic,setMypic]=useState([])
    const {state,dispatch} = useContext(UserContext)
    console.log(state)

useEffect(() =>{
    fetch("/mypost",{
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("jwt")
        }
    }).then((res) => res.json())
        .then(result => {
            console.log("res",result)
            setMypic(result.result)
           
        })
},[])

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
                    <img className="img-border" src={state?state.pic:"loading"} style={{ width: '160px', height: '160px', borderRadius: "80px" }} />
                </div>
                <div>
                    <h4>{state?state.name:"loading"}</h4>
                    <h5>{state?state.email:"loading"}</h5>
                    <div style={{ display: 'flex',justifyContent:"space-between",width:"108%"}}>
                       <h6>{mypic.length} posts</h6>
                       <h6>{state?state.followers.length:"0"} followers</h6>
                       <h6>{state?state.following.length:"0"} following</h6>
                    </div>
                </div>
            </div>
            <div className="gallery">
                {
                    mypic.map(item=>{
                        return(
                            <img className="item" src={item.photo} key={item._id}/>
                        )
                    })
                }
            

            </div>
        </div>
    )
}

export default Profile
