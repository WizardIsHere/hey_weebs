import React from 'react'

import styles from './Posts.module.css';
import Heart from '../../img/like.png';
import Share from '../../img/share.png';
import Comment from '../../img/comment.png';
import Nolike from '../../img/notlike.png';

const Posts = ({data}) => {
    return (
        <div className={styles.Posts}>
            <img src={data.img} alt="" />
            <div className={styles.postReact}>
                <img src={data.likes ? Heart : Nolike } alt="" />
                <img src={Comment} alt="" />
                <img src={Share} alt="" />
            </div>
            <span>{data.likes}likes</span>
            <div className={styles.details}>
                <span><b>{data.name}</b></span>
                <span> {data.desc}</span>

            </div>
        </div>
    )
}

export default Posts
