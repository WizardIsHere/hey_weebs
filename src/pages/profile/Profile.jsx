import React from 'react'
import Post from '../../components/Post/Post'

import ProfileCard from '../../components/ProfileCard/ProfileCard'
import ProfileSidebar from '../../components/ProfileSidebar/ProfileSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'

import styles from './Profile.module.css'
const Profile = () => {
    return (
        <div className={styles.Profile}>
            <ProfileSidebar />
            <div className={styles.ProfileCenter}>
                <ProfileCard/>
                <Post/>
            </div>
            <RightSidebar/>
        </div>
    )
}

export default Profile
