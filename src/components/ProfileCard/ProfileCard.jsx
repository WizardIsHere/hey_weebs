import React from 'react'
import {Link} from 'react-router-dom'

import styles from './ProfileCard.module.css';
import Cover from '../../img/cover.jpg';
import Profile from '../../img/profileImg.jpg'
import { useSelector } from 'react-redux';
import Posts from '../Posts/Posts';

const ProfileCard = (location) => {

    const ProfilePg = false
    const {user} = useSelector((state)=>state.authReducer.authData)
    const posts = useSelector((state)=>state.postReducer.posts)
    const publicServer = process.env.REACT_APP_PUBLIC_FOLDER



    return (
        <div className={styles.ProfileCard}>
            <div className={styles.ProfileImages}>
                <img src={user.coverPicture ? publicServer+user.coverPicture : publicServer+'cover.jpg'} alt='Profile Cover' />
                <img src={user.profilePicture ? publicServer+user.profilePicture : publicServer+'img1.png'} alt='Profile Image' />
            </div>
            <div className={styles.ProfileName}>
                <span>{user.firstname} {user.lastname}</span>
                <span>{ user.worksAt ? user.worksAt :"Write about yourself!" }</span>
            </div>
            <div className={styles.FollowStatus}>
                <hr />
                <div>
                    <div className={styles.follow}>
                        <span>{user.followers.length}</span>
                        <span>Followers</span>
                    </div>

                    <div className={styles.vl}></div>

                    <div className={styles.follow}>
                        <span>{user.following.length}</span>
                        <span>Following</span>
                    </div>

                    {location === 'profilePage' && (
                        <>
                            <div className={styles.vl}></div>

                            <div className={styles.follow}>
                                <span>{posts.filter((post)=>post.userId === user._id.length)}</span>
                                <span>Posts</span>
                            </div>
                        </>
                    )}


                </div>
                <hr />
            </div>
            {location === 'profilePage' ? ' ' : <span>.
                <Link to={`/profile/${user._id}`} style={{textDecoration:"none",color:"inherit"}}>

                My Profile
                </Link>
            </span>}

        </div>
    )
}

export default ProfileCard