import React from 'react'

import Profile from '../../components/profile/Profile';
import Post from '../../components/Post/Post';


import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.Home}>
            <Profile />
            <Post />
            <div className='Rsidebar'>Right</div>
        </div>
    )
}

export default Home
