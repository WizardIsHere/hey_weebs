import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import LogoSearch from '../LogoSearch/LogoSearch'
import InfoCard from '../InfoCard/InfoCard'

import styles from '../Profile/Profile.module.css'

const ProfileSidebar = () => {
    return (
        <div className={styles.Profile}>
            <LogoSearch />
            <InfoCard />
            <FollowersCard />
        </div>
    )
}

export default ProfileSidebar
