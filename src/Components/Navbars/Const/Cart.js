import React from 'react'
import Image from '../../../assets/logo/cart.png'
import styles from '../Const/cart.module.css'

const Cart = () => {
  return (
    <div className={styles.cart}>
      <img className={styles.cartImg} src={Image} alt="Cart" />
      <span>Keranjang anda : Rp. 0000</span>
    </div>
  )
}

export default Cart