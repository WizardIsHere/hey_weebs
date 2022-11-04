import React,{useState} from 'react'
import { Link } from 'react-router-dom';

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
                <Link to={'../home'}><img src={Home} alt="" /></Link>
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

