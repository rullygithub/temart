import React from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <div className={styles.logo}>
            <img src='/assets/Logo/logo.png' alt="Logo" />
        </div>

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
    </div>
  )
}

export default Navbar