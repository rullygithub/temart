import React from 'react'
import AuthLink from './AuthLink';


import styles from './Navbar.module.css';
import Search from './Search';


const Navbar = () => {
  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.logo}>
            <img src='/assets/Logo/logo.png' alt="Logo" />
        </div>

        <div className={styles.link__navigation_a}>
          <ul>
            <li className={styles.active_bold}><a href='#'>Beranda</a></li>
            <li><a href='#'>Kategori</a></li>
          </ul>
        </div>

        <AuthLink/>
        
    </div>
    <Search/>
    </div>
  )
}

export default Navbar