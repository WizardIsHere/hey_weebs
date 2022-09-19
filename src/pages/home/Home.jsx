import React from 'react'

import Profile from '../../components/profile/Profile';
import Post from '../../components/Post/Post';


import styles from './Home.module.css';
import RightSidebar from '../../components/RightSidebar/RightSidebar';

const Home = () => {
    return (
        <div className={styles.Home}>
            <Profile />
            <Post />
            <RightSidebar />
        </div>
    )
}

export default Home
