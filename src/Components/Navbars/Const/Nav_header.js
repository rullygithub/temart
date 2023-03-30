import React from "react";
import dayjs from "dayjs";
import styles from './Navbar.module.css';

const Nav_header = () => {
  const today = dayjs(); // mengambil tanggal hari ini
//   const date = dayjs("2022-03-17"); // mengambil tanggal tertentu (format yyyy-mm-dd)

  return (
    <div className={styles.nav}>
      <span>Selamat Datang di T-Mart, Selamat Berbelanja</span>
      <div>
        <span>Today: {today.format('DD MMMM YYYY')}</span>
 
    </div>
    </div>
  );
};

export default Nav_header;
