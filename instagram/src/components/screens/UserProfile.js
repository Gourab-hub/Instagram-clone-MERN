import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../../App'
import { useParams } from 'react-router-dom'


const UserProfile = () => {
    const [userProfile, setProfile] = useState(null)
    const { state, dispatch } = useContext(UserContext)

    const { userid } = useParams()
    const [showfollow,setShowFollow] = useState(state?!state.following.includes(userid):true)
    console.log(userid)

    useEffect(() => {
        fetch(`/user/${userid}`, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
            .then(result => {
                 console.log(result)

                setProfile(result)
            })
    }, [])


    const followUser = () => {
        fetch('/follow', {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem('jwt')
            },
            body: JSON.stringify({
                followId: userid
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data)

                 dispatch({ type: "UPDATE", payload: { following: data.following, followers: data.followers } })
                 localStorage.setItem("user", JSON.stringify(data))
                setProfile((prevState) => {
                    return {
                        ...prevState,
                        user: {
                            ...prevState.user,
                            followers: [...prevState.user.followers, data._id]
                        }
                    }
                })
                setShowFollow(false)
            })
    }


    const unfollowUser = ()=>{
        fetch('/unfollow',{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem('jwt')
            },
            body:JSON.stringify({
                unfollowId:userid
            })
        }).then(res=>res.json())
        .then(data=>{
            dispatch({type:"UPDATE",payload:{following:data.following,followers:data.followers}})
             localStorage.setItem("user",JSON.stringify(data))
             setProfile((prevState)=>{
                const newFollower = prevState.user.followers.filter(item=>item != data._id )
                 return {
                     ...prevState,
                     user:{
                         ...prevState.user,
                         followers:newFollower
                        }
                 }
             })
             setShowFollow(true)
             
        })
    }




    return (
        <>
            {
                userProfile ?
                    <div style={{ maxWidth: "80%", margin: "0px auto" }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            margin: '30px auto',
                            width: '70%', height: '200px', align: 'center',
                            borderBottom: '1px solid gray'
                        }}>
                            <div>
                                <img className="img-border" src={userProfile ? userProfile.user.pic : "loading"} style={{ width: '160px', height: '160px', borderRadius: "80px" }} />
                            </div>
                            <div>
                                <h4>{userProfile ? userProfile.user.name : "loading"}</h4>
                                <h6>{userProfile ? userProfile.user.email : "loading"}</h6>
                                <div style={{ display: 'flex', justifyContent: "space-between", width: "108%" }}>
                                    <h5>{userProfile.posts.length} posts</h5>
                                    <h5>{userProfile.user.followers.length} followers</h5>
                                    <h5>{userProfile.user.following.length} Following</h5>
                                </div>
                                {showfollow?
                   <button style={{
                       margin:"10px"
                   }} className="btn waves-effect waves-light #64b5f6 blue darken-1"
                    onClick={()=>followUser()}
                    >
                        Follow
                    </button>
                    : 
                    <button
                    style={{
                        margin:"10px"
                    }}
                    className="btn waves-effect waves-light #64b5f6 blue darken-1"
                    onClick={()=>unfollowUser()}
                    >
                        UnFollow
                    </button>
                    }
                            </div>
                        </div>
                        <div className="gallery">
                            {userProfile ?
                                userProfile.posts.map(item => {
                                    return (
                                        <img className="item" src={item.photo} key={item._id} />
                                    )
                                }) : "loading"
                            }


                        </div>
                    </div> : <h4>"loading"</h4>


            }

        </>
    )
}

export default UserProfile
