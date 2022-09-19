import React from 'react'
import {UilSearch} from '@iconscout/react-unicons'

import styles from './LogoSearch.module.css'
import Logo from '../../img/logo.png'

const LogoSearch = () => {
  return (
    <div className={styles.LogoSearch}>
        <img src={Logo} alt='Logo '/>

        <div className={styles.search}>
            <input type="text" placeholder='#Baka #DemonSlayer' />
            <div className={styles['s-icon']}>
                <UilSearch />
            </div>
        </div>

    </div>
  )
}

export default LogoSearch