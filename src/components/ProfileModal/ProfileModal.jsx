import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button, Group } from '@mantine/core';
import styles  from './ProfileModal.module.css'
import { useParams } from 'react-router-dom';
import { uploadImage } from '../../actions/uploadAction';
import { updateUser } from '../../actions/UserAction';

function ProfileModal( {modalOpened, setModalOpened,data}) {
  const [opened, setOpened] = useState(false);
  const{password, ...other} = data;
  const [formData, setFormData] = useState(other);
  const [profileImage, setProfileImage] = useState(null)
  const [coverImage, setCoverImage] = useState(null);
  const dispatch = useDispatch()
  const param = useParams()
  const {user} = useSelector((state) => state.authReducer.authData)

  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]: e.target.value})
  }
  const handleImageChange = (event)=>{
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      event.target.name === "profileImage"
        ? setProfileImage(img)
        : setCoverImage(img);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    let UserData = formData;
    if (profileImage) {
      const data = new FormData();
      const fileName = Date.now() + profileImage.name;
      data.append("name", fileName);
      data.append("file", profileImage);
      UserData.profilePicture = fileName;
      try {
        dispatch(uploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }
    if (coverImage) {
      const data = new FormData();
      const fileName = Date.now() + coverImage.name;
      data.append("name", fileName);
      data.append("file", coverImage);
      UserData.coverPicture = fileName;
      try {
        dispatch(uploadImage(data));
      } catch (err) {
        console.log(err);
      }
    }
    dispatch(updateUser(param.id, UserData));
    setModalOpened(false);
  };


  return (
    <>
      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        size= '55%'
      >
        <form className={styles.infoForm}>
            <h3>Your Info</h3>
            <div>
                <input type="text" className={styles.infoInput} name='firstname' placeholder='First Name' value={formData.firstname}  onChange={handleChange}/>
                <input type="text" className={styles.infoInput} name='lastname' placeholder='Last Name' value={formData.lastname} onChange={handleChange}/>
            </div>

            <div>
                <input type="text" className={styles.infoInput} name='works' placeholder='Works at' value={formData.works} onChange={handleChange}/>
            </div>
            
            <div>
                <input type="text" className={styles.infoInput} name='livesIn' placeholder='Lives in' value={formData.livesIn} onChange={handleChange}/>
                <input type="text" className={styles.infoInput} name='country' placeholder='Country' value={formData.country} onChange={handleChange}/>
            </div>
            <div>
              <input type="text" className={styles.infoInput} name='relationship' placeholder='Relationship Status' value={formData.relationship} onChange={handleChange} />
            </div>

            <div>
                Profile Image
                <input type="file" name="profileImage" id="" onChange={handleImageChange} />
                Cover Image
                <input type="file" name="coverImage" id="" onChange={handleImageChange} />
            </div>
            <button className={styles.infoButton} onClick={handleSubmit}>Update</button>
        </form>
      </Modal>

    </>
  );
}

export default ProfileModal;