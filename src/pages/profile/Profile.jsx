import React from "react";
import Feed from "../../components/feed/Feed";
import LeftBar from "../../components/leftbar/LeftBar";
import RightBar from "../../components/rightbar/RightBar";
import TopBar from "../../components/topbar/TopBar";
import './Profile.css'

export default function Profile() {
    return (
        <>
            <TopBar />
            <div className="profile">
                <LeftBar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImg" src="assets/default-cover-image.png" alt="" />
                            <img className="profileUserImg" src="assets/person/user.jpg" alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">User 1</h4>
                            <span className="profileInfoDesc">Lorem ipsum dolor, sit amet consectetur adipisicing.</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <RightBar />
                    </div>
                </div>
            </div>
        </>
    )
}