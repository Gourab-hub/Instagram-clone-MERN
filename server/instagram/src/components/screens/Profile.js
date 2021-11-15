import React,{ useState, useEffect,useContext } from 'react'
import { UserContext } from '../../App'

const Profile = () => {
    const [mypic,setMypic]=useState([])

    const [image, setImage] = useState("")

    const {state,dispatch} = useContext(UserContext)
    console.log("state",state)

    useEffect(()=>{
        fetch('/mypost',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            console.log("result",result)
            setMypic(result.result)
        })
     },[])

useEffect(()=>{
    if(image){
        const data = new FormData()
        data.append('file', image)
        data.append('upload_preset', "insta-clone")
        data.append('cloud_name', "gourab")
        const res = fetch("https://api.cloudinary.com/v1_1/gourab/image/upload", {
            method: "post",
            body: data
        })
        .then(res=>res.json())
        .then(data=>{
            console.log("data",data)
            
            fetch('/updatepic',{
               method:"put",
               headers:{
                   "Content-Type":"application/json",
                   "Authorization":"Bearer "+localStorage.getItem("jwt")
               },
               body:JSON.stringify({
                   pic:data.url
               })
           }).then(res=>res.json())
           .then(result=>{
               console.log("result",result)
               localStorage.setItem("user",JSON.stringify({...state,pic:result.pic}))
               dispatch({type:"UPDATEPIC",payload:result.pic})
    
           })
       
        })
        .catch(err=>{
            console.log(err)
        })
       }
    },[image])


    const updatePhoto = (file)=>{
        setImage(file)
    }
    return (
        <div style={{maxWidth:"80%",margin:"0px auto"}}>
            <div style={{
                display: 'flex',
                justifyContent:'space-around',
                margin:'30px auto',
                width:'70%', height: 'auto', align:'center',
                borderBottom:'1px solid gray'
                
            }}>
                <div>
                    <img className="img-border" src={state?state.pic:"loading"} style={{ width: '160px', height: '160px', borderRadius: "80px" }} />

                    <div className="file-field input-field">
                        <div className="btn #64b5f6 blue darken-1">
                            <span>Upload pic</span>
                            <input type="file" onChange={(e) => updatePhoto(e.target.files[0])} />
                        </div>
                        <div className="file-path-wrapper">
                            <input className="file-path validate" type="text" />
                        </div>
                    </div>

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
