import React from 'react'
import styles from './Product.module.css';
import cartIcon from '../../../assets/logo/cartIcon.png'

const Product = (props, product, addToCart) => {
  return (
    <div className={styles.boxProduct}>
        {/* <img src={props.img} alt='' /> */}
        {/* <h2 className={styles.title}>{props.name}</h2>
        <p className={styles.description}>{props.desc}</p> */}
        {/* <div className={styles.footerCard}>
        <p className={styles.price}>{props.price}</p>
        <button onClick={() => addToCart(product)} className={styles.addCartButton} ><img src={cartIcon} alt=""/></button>
        </div> */}
        
    </div>
  )
}

export default Product