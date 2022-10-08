import React from 'react'

import styles from './InfoCard.module.css'
import { UilPen } from '@iconscout/react-unicons'


const InfoCard = () => {
    return (
        <div className={styles.InfoCard}>
            <div className={styles.infoHead}>
                <h4>Your Profile</h4>
            <div>
                <UilPen width='2rem' height='1.2rem' />
            </div>
            </div>
            <div className={styles.info}>
                <b>Status </b>
                <span>Complicated</span>
            </div>
            <div className={styles.info}>
                <b>Lives in </b>
                <span>Leaf Village</span>
            </div>
            <div className={styles.info}>
                <b>Work </b>
                <span>Sixth Hokage</span>
            </div>

            <button className={styles.logoutBtn}>Logout</button>
        </div>
    )
}

export default InfoCard
