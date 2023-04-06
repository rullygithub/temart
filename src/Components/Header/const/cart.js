import React from 'react'
import styles from './cart.module.css'
import iconCart from '../../../assets/logo/cart.png'
const Cart = () => {
  return (
    <div className={styles.cart}>
        <div className={styles.logoCart}>
        <img src={iconCart} alt=''/>

        </div>
        <span>Keranjang anda : 0</span>
    </div>
  )
}

export default Cart