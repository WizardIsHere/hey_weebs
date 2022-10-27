import React, {useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import styles from './Auth.module.css';
import Logo from '../../img/logo.png';
import { logIn, signUp } from '../../actions/AuthActions';


const Auth = () => {

    const [isSignUp, setisSignUp] = useState(false);
    const [data, setData] = useState({firstname: '', lastname: '',username: '', password: '', confirmpass: ''})
    const [confirmPassword, setConfirmPassword] = useState(true)

    const dispatch = useDispatch()
    const loading = useSelector((state)=>state.authReducer.loading)
    console.log(loading)

    const handleChange = (event) => {
        setData({...data,[event.target.name]: event.target.value})
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        if(isSignUp){
            data.password === data.confirmpass ? dispatch(signUp(data)) : setConfirmPassword(false);
        }
        else{
            dispatch(logIn (data))
        }
    }

    const resetForm = () => {
        setConfirmPassword(true);
        setData({ firstname: '', lastname: '',username: '', password: '', confirmpass: '' })
    }

    return (
        <div className={styles.Auth}>
        {/* -------Left----------  */}
            <div className={styles.logo}>
                <img src={Logo} alt="logo" />
            </div>
            <div className={styles.brand}>
                <h1>Hey Weebs!</h1>
                <h6>Explore Animes and connect with other weebs</h6>
            </div>

        {/* ---------Right----------*/}
            <div className={styles['a-right']}>
            <form action="" className={`${styles.infoForm} ${styles.authForm}`} onSubmit={handleSubmit}>
                <h3>{isSignUp?"Sign Up": "Login"}</h3>

                <div>
                    {isSignUp && (
                        <div>
                            <input type="text" placeholder='First Name' className={styles.infoInput} name='firstname' value={data.firstname} onChange={handleChange} />
                            <input type="text" placeholder='Last Name' className={styles.infoInput} name='lastname' value={data.lastname} onChange={handleChange} />
                        </div>
                    )}
                </div>

                <div>
                    <input type="text" placeholder='Username' className={styles.infoInput} name='username'value={data.username} onChange={handleChange} />
                </div>

                <div>
                    <input type="password" placeholder={isSignUp?'New Password':'Password'} className={styles.infoInput} value={data.password} name='password' onChange={handleChange} />
                    {isSignUp && 
                        <input type="password" placeholder='Confirm Password' className={styles.infoInput} name='confirmpass' value={data.confirmpass} onChange={handleChange} />
                    }
                </div>
                    <span style={{display: confirmPassword?"none":"block", color:"red",fontSize:"12px",alignSelf:"flex-end",marginRight:"5px"}}>
                        *Passwords doesn't match.
                    </span>
                <div>
                    <span style={{ fontSize: 'small', cursor:'pointer'}} onClick={()=> {setisSignUp((prev)=>!prev); resetForm()}}>
                        {isSignUp? "Already have an account. Login" : "Don't have an account? Sign Up"}
                    </span>
                </div>
                <button className={styles.infoButton} type='submit' disabled={loading}>
                    {loading ? "Loading..." : isSignUp? 'Sign Up' : 'Login'}
                </button>

            </form>
        </div>
    </div>
    )
}

export default Auth
