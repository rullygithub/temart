import React from 'react'
import styles from './user.module.css';
import iconUser from '../../../assets/logo/user.png'

const User = () => {
  return (
    <div className={styles.users}>
        <img src={iconUser} alt=''/>
    </div>
  )
}

export default User