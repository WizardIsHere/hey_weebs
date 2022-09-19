import React from 'react'

import styles from './Feed.module.css'
import { FeedData } from '../../Data/FeedData'
import Posts from '../Posts/Posts'

const Feed = () => {
  return (
    <div className={styles.Feed}>
        {FeedData.map((post, id)=>{
            return <Posts data={post} id={id} />
        })}
    </div>
  )
}

export default Feed