import React from 'react';

import LogoSearch from '../LogoSearch/LogoSearch';
import ProfileCard from '../ProfileCard/ProfileCard';
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <div className={styles.Profile}>
        <LogoSearch/>
        <ProfileCard />
    </div>
  )
}

export default Profile