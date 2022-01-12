import React from "react";
import { RssFeed, Chat, VideoCall, Group } from '@mui/icons-material'
import './LeftBar.css'

export default function LeftBar() {
    return (
        <>
            <div className="leftBar">
                <div className="leftBarWrapper">
                    <ul className="leftBarList">
                        <li className="leftBarItem">
                            <RssFeed className="leftBarItemIcon" />
                            <span className="leftBarItemText">
                                Feed
                            </span>
                        </li>
                        <li className="leftBarItem">
                            <Chat className="leftBarItemIcon" />
                            <span className="leftBarItemText">
                                Chat
                            </span>
                        </li>
                        <li className="leftBarItem">
                            <VideoCall className="leftBarItemIcon" />
                            <span className="leftBarItemText">
                                Video
                            </span>
                        </li>
                        <li className="leftBarItem">
                            <Group className="leftBarItemIcon" />
                            <span className="leftBarItemText">
                                Group
                            </span>
                        </li>
                    </ul>
                    <button className="leftBarButton">
                        Show More
                    </button>
                    <hr className="leftBarHr" />
                    <ul className="lefBarFriendList">
                        <li className="leftBarFriend">
                            <img className="leftBarFriendPhoto" src="/assets/person/friend-1.jpg" alt="" />
                            <span className="leftBarFriendName">
                                Jane
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}