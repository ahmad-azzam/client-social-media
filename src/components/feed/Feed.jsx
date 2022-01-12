import React from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import './Feed.css'

import { Posts } from '../../DummyData'

export default function Feed() {
    return (
        <>
            <div className="feed">
                <div className="feedWrapper">
                    <Share />
                    {
                        Posts.map(el => (
                            <Post post={el} key={el.id} />
                        ))
                    }

                </div>
            </div>
        </>
    )
}