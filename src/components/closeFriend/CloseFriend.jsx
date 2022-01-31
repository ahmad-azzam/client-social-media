import React from "react"
import './CloseFriend.css'

export default function CloseFriend({ user }) {
    return (
        <>
            <li className="leftBarFriend">
                <img className="leftBarFriendPhoto" src={user?.profilePicture || 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png'} alt="" />
                <span className="leftBarFriendName">
                    {user?.username || '-'}
                </span>
            </li>
        </>
    )
}