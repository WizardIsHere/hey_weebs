import { useState } from 'react';
import { Modal, Button, Group } from '@mantine/core';
import styles  from './ProfileModal.module.css'

function ProfileModal( {modalOpened, setModalOpened}) {
  const [opened, setOpened] = useState(false);

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
                <input type="text" className={styles.infoInput} name='Firstname' placeholder='First Name' />
                <input type="text" className={styles.infoInput} name='Lastname' placeholder='Last Name' />
            </div>

            <div>
                <input type="text" className={styles.infoInput} name='work' placeholder='Works at' />
            </div>
            
            <div>
                <input type="text" className={styles.infoInput} name='livesIn' placeholder='Lives in' />
                <input type="text" className={styles.infoInput} name='country' placeholder='Country' />
            </div>
            <div>
              <input type="text" className={styles.infoInput} name='realationship' placeholder='Relationship Status' />
            </div>

            <div>
                Profile Image
                <input type="file" name="profileImg" id="" />
                Cover Image
                <input type="file" name="coverImg" id="" />
            </div>
            <button className={styles.infoButton} >Update</button>
        </form>
      </Modal>

    </>
  );
}

export default ProfileModal;