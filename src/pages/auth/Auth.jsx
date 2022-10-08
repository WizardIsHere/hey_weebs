import React from 'react'

import styles from './Auth.module.css'
import Logo from '../../img/logo.png'

const Auth = () => {
    return (
        <div className={styles.Auth}>
            <div className={styles.logo}>
                <img src={Logo} alt="logo" />
            </div>
            <div className={styles.brand}>
                <h1>Hey Weebs!</h1>
                <h6>Explore Animes and connect with other weebs</h6>
            </div>

            <h4>Form</h4>

        </div>
    )
}


export default Auth
