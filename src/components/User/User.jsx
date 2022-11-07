import React,{useState} from 'react'
import styles from './User.module.css'
import {useDispatch, useSelector} from 'react-redux'
import { followUser, unfollowUser } from '../../actions/UserAction'

const User = ({person}) => {
    const dispatch = useDispatch()
    const publicServer = process.env.REACT_APP_PUBLIC_FOLDER;
    const {user} = useSelector((state)=> state.authReducer.authData)
    const [following, setFollowing] = useState(person.following.includes(user.id));
    const handleFollow = ()=>{
        following ? dispatch(unfollowUser(person._id, user)): dispatch(followUser(person._id, user))
        setFollowing((prev)=> !prev)
    }

    return (
        <div className={styles.follower}>
              <div>
                <img src={person.profilePicture ? publicServer+person.profilePicture : publicServer+'img1.png'} alt="" className={styles.followerImg} />
                <div className={styles.name}>
                    <span>
                      {person.firstname}
                    </span>
                    <span>{person.username} </span>
                </div> 
              </div>
              <button className={following? `${styles.fcButton} ${styles.UnfollowButton}`: styles.fcButton} onClick={handleFollow}>{following ? 'Unfollow': "Follow"}</button>
          </div>
    )
}

export default User
