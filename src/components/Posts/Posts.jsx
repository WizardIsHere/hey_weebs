import React,{ useState} from 'react';

import styles from './Posts.module.css';
import Heart from '../../img/like.png';
import Share from '../../img/share.png';
import Comment from '../../img/comment.png';
import Nolike from '../../img/notlike.png';
import { useSelector } from 'react-redux';
import { likePost } from '../../api/PostRequest';

const Posts = ({data}) => {

    const {user} = useSelector((state)=>state.authReducer.authData)
    const [liked, setLiked] = useState(data.likes.includes(user._id));
    const [likes, setlikes] = useState(data.likes.length)

    const handleLikes = () =>{
        setLiked((prev)=>setLiked(!prev))
        likePost(data._id, user._id)
        liked ? setlikes((prev)=> prev-1) : setlikes((prev) => prev+1);
    }

    return (
        <div className={styles.Posts}>
            <img src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""} alt="" />
            <div className={styles.postReact}>
                <img src={liked? Heart : Nolike } alt="" style={{cursor:"pointer"}} onClick={handleLikes} />
                <img src={Comment} alt="" />
                <img src={Share} alt="" />
            </div>
            <span style={{ color: 'var(--gray)', fontSize: '12px' }}>{likes} likes</span>
            <div className={styles.details}>
                <span><b>{data.name}</b></span>
                <span> {data.desc}</span>

            </div>
        </div>
    )
}

export default Posts;
