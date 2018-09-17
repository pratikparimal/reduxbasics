const changeDesc = function(state = null, action){
    switch(action.type){
        case "CHANGE_DESC" : 
            console.log("I'm in change description reducer")
            console.log(action.payload)
            return action.payload
            //break;
        default : 
            break;
    }
    return state
}
export default changeDesc;