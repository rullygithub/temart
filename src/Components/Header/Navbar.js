import React from 'react'
import styles from './styles/Navbar.module.css';
import logo from '../../assets/logo/logo.png'
import MenuDropdown from './const/menuDropdown';
import Search from './const/Search';
import Cart from './const/cart';
import User from './const/user';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={styles.menu}>
        <MenuDropdown/>
      </div>
      <div className={styles.search}>
        <Search/>
      </div>
      <div className={styles.cart}>
        <Cart />
      </div>
      <div className={styles.user}>
        <User/>
      </div>
    </div>
  )
}

export default Navbar