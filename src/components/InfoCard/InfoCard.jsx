import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import ProfileModal from '../ProfileModal/ProfileModal'
import styles from './InfoCard.module.css'
import { UilPen } from '@iconscout/react-unicons'
import * as UserApi from '../../api/UserRequest.js'
import { logOut } from '../../actions/AuthActions'

const InfoCard = () => {

    const [modalOpened, setModalOpened] = useState(false);
    const dispatch = useDispatch()
    const params = useParams()

    const profileUserId = params.id;
    const [profileUser, setProfileUser] = useState({});
    const { user } = useSelector((state) => state.authReducer.authData)


    useEffect(() => {
        const fetchProfileUser = async () => {
            if (profileUserId === user._id) {
                setProfileUser(user);
            }
            else {
                const profileUser = await UserApi.getUser(profileUserId)
                setProfileUser(profileUser)
            }
        }
        fetchProfileUser()
    }, [user]);

    const handleLogout = () => {
        dispatch(logOut())
    }

    return (
        <div className={styles.InfoCard}>
            <div className={styles.infoHead}>
                <h4>Profile Info</h4>
                {user._id ? (<div>
                    <UilPen width='2rem' height='1.2rem' onClick={() => setModalOpened(true)} />
                    <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened} data={user}/>
                </div>) : ""}
            </div>
            <div className={styles.info}>
                <b>Status </b>
                <span>{profileUser.relationship}</span>
            </div>
            <div className={styles.info}>
                <b>Lives in </b>
                <span>{profileUser.livesIn}</span>
            </div>
            <div className={styles.info}>
                <b>Works at  </b>
                <span>{profileUser.works}</span>
            </div>

            <button className={styles.logoutBtn} onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default InfoCard
