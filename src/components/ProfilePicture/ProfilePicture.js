import React from "react"

import "./ProfilePicture.css"
import profilePicture from "../../assets/img/profilePicture2.jpg"

const ProfilePicture = () => {
    return(
        <div className="ProfilePic">
            <img id="profilePicImg" src={profilePicture}/>
        </div>
    )
}

export default ProfilePicture