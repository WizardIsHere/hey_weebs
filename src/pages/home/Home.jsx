import React from 'react'
import Profile from '../../components/profile/Profile';


import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.Home}>
            <Profile />
            <div className='post'>Post</div>
            <div className='Rsidebar'>Right</div>
        </div>
    )
}

export default Home
