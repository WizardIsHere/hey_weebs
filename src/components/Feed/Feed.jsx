import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './Feed.module.css'
// import { FeedData } from '../../Data/FeedData'
import Posts from '../Posts/Posts'
import { getTimelinePosts } from '../../actions/PostActions'

const Feed = () => {
  const dispatch = useDispatch()
  const {user} = useSelector((state)=>state.authReducer.authData)
  const {posts, loading} = useSelector((state)=>state.postReducer)
  
  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, []);

  return (
    <div className={styles.Feed}>
        {
        loading?"Fetching Posts..": posts.map((post, id)=>{ 
            return <Posts data={post} id={id} />
        })}
    </div>
  )
}

export default Feed