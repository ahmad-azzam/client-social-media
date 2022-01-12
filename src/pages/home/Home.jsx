import React from "react";
import Feed from "../../components/feed/Feed";
import LeftBar from "../../components/leftbar/LeftBar";
import RightBar from "../../components/rightbar/RightBar";
import TopBar from "../../components/topbar/TopBar";
import './Home.css'

export default function Home() {
    return (
        <>
            <TopBar />
            <div className="homeContainer">
                <LeftBar />
                <Feed />
                <RightBar />
            </div>
        </>
    )
}