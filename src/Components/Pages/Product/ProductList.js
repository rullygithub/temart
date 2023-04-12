import React, { useEffect, useState } from 'react'
import styles from './Product.module.css';
import Product from './Product'

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://api.nal.usda.gov/fdc/v1/foods/list?api_key=Q5biEsB6gz3tBxlmfJWEZEbfRO3YPalCa4O9mYbI')
        .then(response => response.json())
        .then(data => setProducts(data));
    }, []);
  return (
    <div className={styles.boxes}>
        {products.map(product => (
            <Product
                key={product.fdcId}
                name={product.dataType}
                desc={product.description}
                price={product.ndbNumber}
            />
        ))}
    </div>
  )
}

export default ProductList