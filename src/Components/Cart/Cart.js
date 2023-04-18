import React from 'react'
import styles from './cart.module.css'
import CartItem from './CartItem'


const Cart = ({cartItems, removeFromCart}) => {
  return (
    <div className={styles.cart}>
        <h2>Cart</h2>
        {cartItems.length === 0 ? (<span>Your Cart is Empty</span>) : (cartItems.map(item => (
            <CartItem
                key={item.id}
                item={item}
                removeFromCart={removeFromCart}
                
            />
            
        ))
        )}
        
    </div>
  )
}

export default Cart