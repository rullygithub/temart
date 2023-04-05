import React from 'react'
import style from './styles/Navbar.module.css'

const Nav = () => {
    const cuurentDate = new Date();
    const day = cuurentDate.getDate();
    const month = cuurentDate.toLocaleString("default", {month: "long"});
    const year = cuurentDate.getFullYear();
  return (
    <div className={style.nav}>
        <span>Welcome to T-Mart</span>
        <div className={style.datenow}>
            <span>Tanggal Hari Ini : </span>
            <p>{`${day} ${month} ${year}`}</p>
        </div>
    </div>
  )
}

export default Nav