import React from "react";
import './RightBar.css';
import { Users } from '../../DummyData'
import Online from "../online/Online";

export default function RightBar({ profile }) {

    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="/assets/cake.png" alt="" />
                    <span className="birthdayText">
                        <b>Pola Foster</b> and <b>3 other friends</b>  have a birthday today
                    </span>
                </div>
                <img className="rightBarAds" src="/assets/ad.jpg" alt="" />
                <h4 className="rightBarTitle">
                    Online Friends
                </h4>
                <ul className="rightBarFriendList">
                    {Users.map(el => (
                        <Online user={el} key={el.id} />
                    ))}
                </ul>
            </>
        )
    }
    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="rightBarTitle">
                    User Information
                </h4>
                <div className="rightBarInfo">
                    <div className="rightBarInfoItem">
                        <span className="rigthBarInfoKey">City :</span>
                        <span className="rigthBarInfoValue">Surabaya</span>
                    </div>
                    <div className="rightBarInfoItem">
                        <span className="rigthBarInfoKey">From :</span>
                        <span className="rigthBarInfoValue">Sidoarjo</span>
                    </div>
                    <div className="rightBarInfoItem">
                        <span className="rigthBarInfoKey">Relationship :</span>
                        <span className="rigthBarInfoValue">Single</span>
                    </div>
                </div>
                <h4 className="rightBarTitle">
                    User Friends
                </h4>
                <div className="rightBarFollowings">
                    <div className="rightBarFollowing">
                        <img className="rightBarFollowingImg" src="assets/person/friend-1.jpg" alt="" />
                        <span className="rightBarFollowingName">Maia</span>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            <div className="rightBar">
                <div className="rightBarWrapper">
                    {profile ? <ProfileRightbar /> : <HomeRightbar />}
                </div>
            </div>
        </>
    )
}