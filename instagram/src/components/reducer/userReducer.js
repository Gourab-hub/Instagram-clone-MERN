export const initialState =null


export const reducer=(state,action)=>{
    if(action.type ==="USER"){
        //console.log("action.payload",action.payload)
        return action.payload
    }
    if(action.type ==="CLEAR"){
        return null;
    }
    return state
}