import React from "react";
import dayjs from "dayjs";
<<<<<<< HEAD
import styles from './Navbar.module.css';
=======
import styles from './Navbar.module.css'
>>>>>>> 12161eada669eacf9b682f86ddc59f1e1be8d75e

const Navheader = () => {
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

export default Navheader;
