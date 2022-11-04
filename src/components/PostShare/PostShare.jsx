import React, {useState, useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import { UilScenery } from '@iconscout/react-unicons';
import { UilPlayCircle } from '@iconscout/react-unicons';
import { UilLocationPoint } from '@iconscout/react-unicons';
import { UilSchedule } from '@iconscout/react-unicons';
import { UilTimes } from '@iconscout/react-unicons';

import styles from './PostShare.module.css'
import ProfileImage from '../../img/profileImg.jpg';
import { uploadImage, uploadPost } from '../../actions/uploadAction';

const PostShare = () => {
    const loading = useSelector((state)=>state.postReducer.uploading)
    const [image, setImage] = useState(null);
    const desc = useRef()
    const dispatch = useDispatch()
    const {user} = useSelector((state)=>state.authReducer.authData)
    const publicServer = process.env.REACT_APP_PUBLIC_FOLDER
    
    const imageChangeHandler = (event) => {
        if(event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage(img);
        }
    }

    const imgRef = useRef()

    const handleSubmit =async(event)=> {
        event.preventDefault();

        const newPost = {
            userId : user._id,
            desc: desc.current.value,
        };

        if(image){
            const data= new FormData();
            const filename = Date.now()+image.name;
            data.append('name', filename)
            data.append('file',image)
            newPost.image= filename;
            console.log(newPost)

            try {
                dispatch(uploadImage(data))
            } catch (error) {
                console.log(error)
            }
        }
        dispatch(uploadPost(newPost))
        reset()
    }

    const reset = () =>{
        setImage(null);;
        desc.current.value=""
    }
    return (
        <div className={styles.PostShare}>
            <img src={user.profilePicture ? publicServer+user.profilePicture : publicServer+'img1.png'} alt='Profile' />
            <div>
                <input ref={desc} type="text" placeholder='Whats Happening?' required />
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
                    <button className={styles.postShareBtn} onClick={handleSubmit} disabled={loading}>
                        {loading?"Uploading..":"Share"}
                    </button>

                    <div style={{display: 'none'}}>
                        <input type="file" name="myImage" ref={imgRef} onClick={imageChangeHandler}/>
                    </div>
                </div>
                {image && (
                    <div className={styles.previewImage}>
                        <UilTimes onClick={()=>setImage(null)}/>
                        <img src={URL.createObjectURL(image)} alt=""  />
                    </div>
                )}
            </div>
        </div>
    )
}


export default PostShare