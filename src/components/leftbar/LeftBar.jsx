import React from "react";
import { RssFeed, Chat, VideoCall, Group } from '@mui/icons-material'
import './LeftBar.css'
import CloseFriend from "../closeFriend/CloseFriend";
import { Users } from '../../DummyData'

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
                        {
                            Users.map(el => (
                                <CloseFriend key={el.id} user={el} />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}