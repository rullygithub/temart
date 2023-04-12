import React from 'react'
import styles from './Product.module.css';

const Product = (props) => {
  return (
    <div className={styles.boxProduct}>
      
        <h2 className={styles.title}>{props.name}</h2>
        <p className={styles.description}>{props.desc}</p>
        <p className={styles.price}>{props.price}</p>
      
    </div>
  )
}

export default Product