import React, { useState } from "react";
import './Post.css'
import { MoreVert, FavoriteBorderOutlined, Favorite } from '@mui/icons-material'
import { Users } from '../../DummyData'

export default function Post({ post }) {
    const [like, setLike] = useState(post.like)
    const [isLike, setIsLike] = useState(false)

    const likeHandler = () => {
        setLike(isLike ? like - 1 : like + 1)
        setIsLike(!isLike)
    }
    return (
        <>
            <div className="post">
                <div className="postWrapper">
                    <div className="postTop">
                        <div className="postTopLeft">
                            <img className="postProfileImg" src={Users.filter(el => el.id === post.userId)[0]?.profilePicture} alt="" />
                            <span className="postUsername">
                                {
                                    Users.filter(el => el.id === post.userId)[0]?.username
                                }
                            </span>
                            <span className="postDate">{post.date}</span>
                        </div>
                        <div className="postTopRight">
                            <MoreVert />
                        </div>
                    </div>
                    <div className="postCenter">
                        <span className="postText">
                            {post?.desc}
                        </span>
                        <img className="postImg" src={post?.photo} alt="" />
                    </div>
                    <div className="postBottom">
                        <div className="postBottomLeft">
                            {
                                isLike ? (
                                    <Favorite className="postLikeIcon" onClick={likeHandler} sx={{ color: '#FF0B00' }} />
                                ) : (
                                    <FavoriteBorderOutlined onClick={likeHandler} className="postLikeIcon" />
                                )
                            }



                            <span className="postLikeCounter">{like} people like it</span>
                        </div>
                        <div className="postBottomRight">
                            <span className="postCommentText">{post.comment} comments</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}