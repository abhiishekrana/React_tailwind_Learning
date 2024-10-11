import React,{useContext} from "react"
import UserContest from "../utils/UserContext";
const Profile=()=>{
    const user = useContext(UserContest);
    return(
        <div style={{"border":"1px solid black","margin":"10px"}}>
        <h1>{user.name}</h1>
        <h1>{user.address}</h1>
        <h1>{user.village}</h1>
        </div>
    )
}
export default Profile;