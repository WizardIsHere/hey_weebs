import React from 'react'

import styles from './RightSidebar.module.css';
import Home from '../../img/home.png';
import Notif from '../../img/noti.png';
import Comment from '../../img/comment.png';
import {UilSetting} from '@iconscout/react-unicons';
import TrendCard from '../TrendCard/TrendCard';

const RightSidebar = () => {
    return (
        <div className={styles.RightSidebar}> 
            <div className={styles.navicons}>
                <img src={Home} alt="" />
                <UilSetting />
                <img src={Notif} alt="" />
                <img src={Comment} alt="" />
            </div>
            <TrendCard />
            <button className={styles.share}>Share</button>
        </div>
    )
}


export default RightSidebar
