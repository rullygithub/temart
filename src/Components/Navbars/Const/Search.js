import React, { useState } from 'react'
import Cart from './Cart';
import styles from './Navbar.module.css';
import SearchImg from '../../../assets/logo/search.png'

const Search = () => {
    
    const [searchText, setSearchText] = useState('');

    const handleSearch = (e) => {
        setSearchText(e.target.value);
    }

    const handleSubmit = (e) => {
      console.log("hello")
    }
  return (
    <div className={styles.search}>
        <form className={styles.cartForm} onSubmit={handleSubmit}>
            <input type="text" placeholder='Pencarian' value={searchText} onChange={handleSearch}/>
            <button type='submit'>
              <img src={SearchImg} alt=""/>
            </button>
        </form>

        <Cart/>
    </div>
  )
}

export default Search