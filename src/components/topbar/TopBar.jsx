import React from 'react'
import './TopBar.css'
import { SearchSharp, Person, Chat, Notifications } from '@mui/icons-material'

export default function TopBar() {
    return (
        <>
            <div className="topBarContainer">
                <div className="topBarLeft">
                    <span className="logo">Social App</span>
                </div>
                <div className="topBarCenter">
                    <div className="searchBar">
                        <SearchSharp
                            fontSize="small"
                            sx={{
                                marginLeft: '10px',
                                marginRight: '5px',
                                cursor: 'pointer'
                            }}
                        />
                        <input type="text" className="searchInput" placeholder="Search for Friend, Post or Video" />
                    </div>
                </div>
                <div className="topBarRight">
                    <div className="topBarLinks">
                        <span className="topBarLink">Homepage</span>
                        <span className="topBarLink">Timeline</span>
                    </div>
                    <div className="topBarIcons">
                        <div className="topBarIconItem">
                            <Person />
                            <span className="topBarIconBadge">1</span>
                        </div>
                        <div className="topBarIconItem">
                            <Chat />
                            <span className="topBarIconBadge">4</span>
                        </div>
                        <div className="topBarIconItem">
                            <Notifications />
                            <span className="topBarIconBadge">10</span>
                        </div>
                    </div>
                    <img src="/assets/person/user.jpg" alt="" className="topBarImg" />
                </div>
            </div>
        </>
    )
}