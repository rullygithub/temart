import React from 'react'
import styles from './cart.module.css';

const CartItem = ({item, removeFromCart}) => {
  return (
    <div className={styles.cartItem}>
        <div className={styles.itemDetail}>
            <span className={styles.spanName}>Product</span>
            <span>Number</span>

            <button onClick={() => removeFromCart(item)} className={styles.removeCart}>Remove</button>
        </div>

    </div>
  )
}

export default CartItem