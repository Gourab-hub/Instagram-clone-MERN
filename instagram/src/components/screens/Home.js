import React, { useState, useEffect,useContext } from 'react'
import {UserContext} from '../../App'

const Home = () => {
    const [data, setData] = useState([])
    const {state,dispatch} = useContext(UserContext)
    useEffect(() => {
        fetch("/allpost", {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then((res) => res.json())
            .then(result => {
                console.log(result.posts)
                setData(result.posts)
            })
    }, [])
    console.log("data",data)

    const likePost = (id) => {
        fetch("/like", {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                postId: id,
            })
        }).then(res=>res.json())
        .then(result => {
            console.log("result",result)
            const newData= data.map(item =>{
                if(item._id ===result._id){
                    console.log("result like",result)
                    return result;
                }
                else{
                    console.log("item like",item)
                    return item;
                }
            })
            setData(newData)
            }).catch(err => {
                console.error(err);
            })
}



const unlikePost = (id) => {
    fetch("/unlike", {
        method: "put",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("jwt")
        },
        body: JSON.stringify({
            postId: id,
        })
    }).then(res=>res.json())
    .then(result => {
        const newData= data.map(item =>{
            if(item._id ===result._id){
                console.log("result unlike",result)
                return result;

            }
            else{
                console.log("item unlike",item)
                return item;
            }
        })
        setData(newData)
        }).catch(err => {
            console.error(err);
        })
    
}

return (
    <div className="home" >
        {
            data.map(item => {
                return (
                    <div className="card home-card" key={item._id}>
                        <h5 className="text-name" > {item.postedBy.name} </h5>
                        <div className="card-image" >
                            <img src={item.photo} />
                        </div>
                        <i className="material-icons text-icon" style={{ color: "red" }} > favorite </i>
                        {
                            item.likes.includes(state._id)
                            ?
                            <i class="material-icons text-icon" onClick={()=>{unlikePost(item._id)}}> thumb_down </i>
                            :
                            <i class="material-icons text-icon " onClick={()=>{likePost(item._id)}}> thumb_up </i>
                    

                        }
                      
                        <h6 className="text-body" >{item.likes.length} Likes</h6>
                        <div className="" >
                            <h6 className="text-home" > {item.title} </h6> <p className="text-body" > {item.body} </p>

                            <input className="text-input" type="text" placeholder="Add a comment" />
                        </div>
                    </div>

                )

            })
        }

    </div>
)
}

export default Home