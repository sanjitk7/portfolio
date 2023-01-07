import React from "react"

import "./ProfilePicture.css"
import profilePicture from "../../assets/img/profile_pic_sf.png"

const ProfilePicture = () => {
    return(
        <div className="ProfilePic">
            <img id="profilePicImg" src={profilePicture}/>
        </div>
    )
}

export default ProfilePicture