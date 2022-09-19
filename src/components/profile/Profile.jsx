import React from 'react';
import FollowersCard from '../FollowersCard/FollowersCard';

import LogoSearch from '../LogoSearch/LogoSearch';
import ProfileCard from '../ProfileCard/ProfileCard';
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <div className={styles.Profile}>
        <LogoSearch/>
        <ProfileCard />
        <FollowersCard />
    </div>
  )
}

export default Profile