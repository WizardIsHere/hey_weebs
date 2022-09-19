import React from 'react'

import styles from './FollowersCard.module.css';
import {Followers} from '../../Data/FollowersData'

const FollowersCard = () => {
  return (
    <div className={styles.FollowersCard}>
      <h3>
      Who are following you.
      </h3>
      {Followers.map((follower, id) => {
        return (
          <div className={styles.follower}>
              <div>
                <img src={follower.img} alt="" className={styles.followerImg} />
                <div className={styles.name}>
                    <span>
                      {follower.name}
                    </span>
                    <span>{follower.username} </span>
                </div> 
              </div>
              <button className={styles.fcButton}>Follow</button>
          </div>
        )
      })}
    </div>
  )
}

export default FollowersCard