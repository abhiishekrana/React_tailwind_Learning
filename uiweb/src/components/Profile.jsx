const Profile=({name,address,village})=>{
    return(
        <div style={{"border":"1px solid black","margin":"10px"}}>
        <h1>{name}</h1>
        <h1>{address}</h1>
        <h1>{village}</h1>
        </div>
    )
}
export default Profile;