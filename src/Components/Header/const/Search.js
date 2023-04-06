import React, { useState } from 'react'
import iconSearch from '../../../assets/logo/search.png';
import styles from './search.module.css'

const Search = () => {

    const [query, setQuery] = useState('');

    function handleQueryChange(e) {
        setQuery(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log('OK')
    }

  return (
    <div className={styles.searchform}>
        <form onSubmit={handleSubmit}>
            <input className={styles.inputsearch} type='text' placeholder='Pencarian' value={query} onChange={handleQueryChange} />
            <button>
                <img src={iconSearch} alt='' />
            </button>
        </form>
    </div>
  )
}

export default Search