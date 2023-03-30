import React, { useState } from 'react'
import Cart from './Cart';
import styles from './Navbar.module.css';

const Search = () => {
    
    const [searchText, setSearchText] = useState('');

    const handleSearch = (e) => {
        setSearchText(e.target.value);
    }

    const handleSubmit = (e) => {

    }
  return (
    <div className={styles.search}>
        <form className={styles.cartForm} onSubmit={handleSubmit}>
            <input type="text" placeholder='Pencarian' value={searchText} onChange={handleSearch}/>
            <button type='submit'>Search</button>
        </form>

        <Cart/>
    </div>
  )
}

export default Search