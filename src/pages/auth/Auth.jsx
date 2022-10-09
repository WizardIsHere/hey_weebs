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

            <Login />
            {/* <SignUp /> */}

        </div>
    )
}

function Login() {
    return(
        <div className={styles['a-right']}>
            <form action="" className={`${styles.infoForm} ${styles.authForm}`}>
                <h3>Login</h3>

                <div>
                    <input type="text" placeholder='Username' className={styles.infoInput} name='username' />
                </div>

                <div>
                    <input type="password" placeholder='Password' className={styles.infoInput} name='password' />
                </div>

                <div>
                    <span style={{ fontSize: 'small'}}>Don't have an account. Login</span>
                </div>
                <button className={styles.infoButton} type='submit'>Login</button>

            </form>
        </div>
    )
}

function SignUp() {
    return (
        <div className={styles['a-right']}>
            <form action="" className={`${styles.infoForm} ${styles.authForm}`}>
                <h3>Sign Up</h3>

                <div>
                    <input type="text" placeholder='First Name' className={styles.infoInput} name='firstname' />
                    <input type="text" placeholder='Last Name' className={styles.infoInput} name='lastname' />
                </div>

                <div>
                    <input type="text" placeholder='Username' className={styles.infoInput} name='username' />
                </div>

                <div>
                    <input type="text" placeholder='New Password' className={styles.infoInput} name='password' />
                    <input type="text" placeholder='Confirm Password' className={styles.infoInput} name='cnfpassword' />
                </div>

                <div>
                    <span style={{ fontSize: 'small'}}>Already have an account. Login</span>
                </div>
                <button className={styles.infoButton} type='submit'>Sign Up</button>

            </form>
        </div>
    )
}


export default Auth
