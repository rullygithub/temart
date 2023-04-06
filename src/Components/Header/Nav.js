import React from 'react'
import style from './styles/Navbar.module.css'

const Nav = () => {
    const currentDate = new Date();
    const today = currentDate.toLocaleString('en-US', {weekday: 'long'});
    const day = currentDate.getDate();
    const month = currentDate.toLocaleString("default", {month: "long"});
    const year = currentDate.getFullYear();
  return (
    <div className={style.nav}>
        <span>Welcome to T-Mart</span>
        <div className={style.datenow}>
            <span>Sekarang : {`${today}`}, {`${day} ${month} ${year}`}</span> 
            
        </div>
    </div>
  )
}

export default Nav