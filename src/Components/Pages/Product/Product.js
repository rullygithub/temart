import React from 'react'
import styles from './Product.module.css';
import cartIcon from '../../../assets/logo/cartIcon.png'

const Product = ({prod}) => {
  return (
    <div className={styles.boxProduct}>
        <img src={prod.image} alt={prod.name} />
        {/* <h2 className={styles.title}>{props.name}</h2>
        <p className={styles.description}>{props.desc}</p> */}
        {<div className={styles.footerCard}>
          <span className={styles.names__item}>{prod.name}</span>
        <p className={styles.price__item}>{prod.price}</p>
        {/* <button onClick={() => addToCart(product)} className={styles.addCartButton} ><img src={cartIcon} alt=""/></button> */}
        </div>}
        
        
    </div>
  )
}

export default Product