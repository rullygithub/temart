import React, { useEffect, useState } from 'react'
import styles from './Product.module.css';
import Product from './Product'
import Cart from '../../Cart/Cart';
import { CartState } from '../../../Context/Context';

const ProductList = () => {

    const {state: {product},} = CartState();
    console.log(product)
    // const [products, setProducts] = useState([]);

    // const [cartItems, setCartItems] = useState([]);



    // useEffect(() => {
    //     fetch('https://api.nal.usda.gov/fdc/v1/foods/list?api_key=Q5biEsB6gz3tBxlmfJWEZEbfRO3YPalCa4O9mYbI')
    //     .then(response => response.json())
    //     .then(data => setProducts(data));
    // }, []);

    // const addToCart = product => {
    //     const existingItem = cartItems.find(item => item.fdcId === product.fdcId);
    //     if(existingItem) {
    //         setCartItems(
    //             cartItems.map(item => item.fdcId === product.fdcId ? {...item, quantity: item.quantity + 1 } : item)
    //         )
    //     } else {
    //         setCartItems([...cartItems, {...product, quantity: 1 }])
    //     }
    // } 
    // const removeFromCart = itemToRemove => {
    //     setCartItems(cartItems.filter(item => item.fdcId !== itemToRemove.fdcId));
    // };

  return (
    <div className={styles.boxes}>
        {/* {products.map(product => (
            <Product
                key={product.fdcId}
                name={product.dataType}
                desc={product.description}
                price={product.ndbNumber}
                addToCart={addToCart}
            />
        ))}
        <Cart cartItems={cartItems} removeFromCart={removeFromCart}/> */}
      {product.map((prod) => {
        return <Product prod={prod} key={prod.id}></Product>
      })}
    </div>
  )
}

export default ProductList