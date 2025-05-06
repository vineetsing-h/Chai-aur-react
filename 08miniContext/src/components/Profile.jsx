import React,{useContext} from 'react'
import UserContext from "../Context/UserContext";

function Profile() {

    const {user} = useContext(UserContext)

  if(!user) {
    return <h2>Please log in</h2>
  }

    return (
        <div>
            <h2>Welcome</h2>
            <p>Username: {user.username}</p>
            
        </div>
    )
}

export default Profile