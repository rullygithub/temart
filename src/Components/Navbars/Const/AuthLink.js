import React from 'react'
import styles from './Navbar.module.css';
import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome'

const AuthLink = () => {
  return (
    <div className={styles.link_auth_a}>
    <ul>
      <li className={styles.active_bold}><a href='#'><Icon icon="fa-solid fa-lock" />Login or Register</a></li>
      <li><a href='#'>Track Your Order</a></li>
      <li><a href='#'>Hotline : 1243</a></li>
    </ul>
  </div>
  )
}

export default AuthLink