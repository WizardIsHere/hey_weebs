import React, {useState, useRef} from 'react'

import { UilScenery } from '@iconscout/react-unicons';
import { UilPlayCircle } from '@iconscout/react-unicons';
import { UilLocationPoint } from '@iconscout/react-unicons';
import { UilSchedule } from '@iconscout/react-unicons';
import { UilTimes } from '@iconscout/react-unicons';

import styles from './PostShare.module.css'
import ProfileImage from '../../img/profileImg.jpg';

const PostShare = () => {
    const [image, setImage] = useState(null);
    const imgRef = useRef()

    const imageChangeHandler = (event) => {
        if(event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage({
                image: URL.createObjectURL(img), 
            });
        }
    }
    return (
        <div className={styles.PostShare}>
            <img src={ProfileImage} alt='Profile' />
            <div>
                <input type="text" placeholder='Whats Happening?' />
                <div className={styles.postOptions}>
                    <div className={styles.option}
                        style={{ color: 'var(--photo)' }} 
                        onClick={()=>{imgRef.current.click(); console.log('Photo clicked')}}>
                        <UilScenery />
                        Photo
                    </div>
                    <div className={styles.option}
                        style={{ color: 'var(--video)' }}>
                        <UilPlayCircle />
                        Video
                    </div>
                    <div className={styles.option}
                        style={{ color: 'var(--location)' }}>
                        <UilLocationPoint />
                        Location
                    </div>
                    <div className={styles.option}
                        style={{ color: 'var(--schedule)' }}>
                        <UilSchedule />
                        Schedule
                    </div>
                    <button className={styles.postShareBtn}>
                        Share
                    </button>

                    <div style={{display: 'none'}}>
                        <input type="file" name="myImage" ref={imgRef} onClick={imageChangeHandler}/>
                    </div>
                </div>
                {image && (
                    <div className={styles.previewImage}>
                        <UilTimes onClick={()=>setImage(null)}/>
                        <img src={image.image} alt=""  />
                    </div>
                )}
            </div>
        </div>
    )
}


export default PostShare