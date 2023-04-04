import React from 'react'
<<<<<<< HEAD
import AuthLink from './AuthLink';


import styles from './Navbar.module.css';
import Search from './Search';


const Navbar = () => {
  return (
    <div>
      <div className={styles.navbar}>
=======
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
>>>>>>> 12161eada669eacf9b682f86ddc59f1e1be8d75e
        <div className={styles.logo}>
            <img src='/assets/Logo/logo.png' alt="Logo" />
        </div>

<<<<<<< HEAD
        <div className={styles.link__navigation_a}>
          <ul>
            <li className={styles.active_bold}><a href='#'>Beranda</a></li>
            <li><a href='#'>Kategori</a></li>
          </ul>
        </div>

        <AuthLink/>
        
    </div>
    <Search/>
=======
        <div className={styles.nav__link_ul}>
            <ul>
              <li><a href='/home'></a>Home</li>
              <li><a href='/product'></a>Product</li>
              <li><a href='/category'></a>Category</li>
              <li><a href='/contact'></a>Contact</li>
            </ul>
        </div>

        <div className={styles.nav__link_auth}>
          <ul>
            <li><a href=''>Login or Register</a></li>
            <li><a href=''>Track Your Order</a></li>
            <li><a href=''>Hotline Service : 123 654</a></li>
          </ul>
        </div>
>>>>>>> 12161eada669eacf9b682f86ddc59f1e1be8d75e
    </div>
  )
}

export default Navbar