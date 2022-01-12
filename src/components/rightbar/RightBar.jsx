import React from "react";
import './RightBar.css';
import { Users } from '../../DummyData'

export default function RightBar() {
    return (
        <>
            <div className="rightBar">
                <div className="rightBarWrapper">
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
                        <li className="rightBarFriend">
                            <div className="rightBarProfileImgContainer">
                                <img className="rightBarProfileImg" src="/assets/person/friend-2.jpg" alt="" />
                                <span className="rightBarOnline"></span>
                            </div>
                            <span className="rightBarUsername">
                                John Doloe
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}