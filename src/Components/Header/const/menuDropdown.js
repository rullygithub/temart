import React, { useState } from 'react'
import styles from './dropdown.module.css';
import iconOpen from '../../../assets/logo/open.png';
import iconClose from '../../../assets/logo/close.png'

const MenuDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

  return (
    <div className={styles.dropdown}>
        <button onClick={toggleDropdown}>
            <span className={styles.icon}>{isOpen ? <img src={iconOpen} alt=""/> : <img src={iconClose} alt=""/> }</span>
        </button>
        {isOpen && (
            <ul className={styles.menuListDropdown}>
                <li><a href='#'>Beranda</a></li>
                <li><a href='#'>Produk</a></li>
                <li><a href='#'>Kategori</a></li>
                
            </ul>
        )}
    </div>
  )
}

export default MenuDropdown