import React from 'react'

import styles from './Post.module.css'
import PostShare from '../PostShare/PostShare'
import Feed from '../Feed/Feed'

const Post = () => {
  return (
    <div className={styles.Post}>
        <PostShare />
        <Feed />
    </div>
  )
}

export default Post