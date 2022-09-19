import React from 'react'

import styles from './ProfileCard.module.css';
import Cover from '../../img/cover.jpg';
import Profile from '../../img/profileImg.jpg'


const ProfileCard = () => {
  return (
    <div className={styles.ProfileCard}>
        <div className={styles.ProfileImages}>
            <img src= {Cover} alt='Profile Cover' />
            <img src={Profile} alt='Profile Image' />
        </div>
        <div className={styles.ProfileName}>
            <span>Kakashi Hatake</span>
            <span>Rokudaime</span>
        </div>
        <div className={styles.FollowStatus}>
            <hr />
                <div>
                <div className={styles.follow}>
                    <span>1.1B</span>
                    <span>Followers</span>
                </div>
                <div className={styles.vl}></div>
                <div className={styles.follow}>
                    <span>600</span>
                    <span>Following</span>
                </div>
                </div>
            <hr />
        </div>
        <span>
            My Profile
        </span>

    </div>
  )
}

export default ProfileCard