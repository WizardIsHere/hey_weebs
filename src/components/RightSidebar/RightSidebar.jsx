import React,{useState} from 'react'

import styles from './RightSidebar.module.css';
import Home from '../../img/home.png';
import Notif from '../../img/noti.png';
import Comment from '../../img/comment.png';
import {UilSetting} from '@iconscout/react-unicons';
import TrendCard from '../TrendCard/TrendCard';
import ShareModal from '../ShareModal/ShareModal';

const RightSidebar = () => {
    const [modalOpened, setModalOpened] = useState(false);
    return (
        <div className={styles.RightSidebar}> 
            <div className={styles.navicons}>
                <img src={Home} alt="" />
                <UilSetting />
                <img src={Notif} alt="" />
                <img src={Comment} alt="" />
            </div>
            <TrendCard />
            <button className={styles.share} onClick={()=> setModalOpened(true)} >Share</button>
            <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />

        </div>
    )
}


export default RightSidebar

