import React, { useState } from 'react'
import Nav from './Header/Nav'
import Navbar from './Header/Navbar'
import styles from './Main.module.css'
import SliderCarousel from './Carousel/sliderCarousel'
import ProductList from './Pages/Product/ProductList'
import Context from '../Context/Context'

const Main = () => {


  return (
    <Context>
      <div>
        <Nav/>
        <Navbar/>
        <SliderCarousel/>
        <div className={styles.box_title_product}>
          <div>
            <h2>Semua Kategori Produk</h2>
          </div>
        <ProductList/>

        </div>
    </div>
    </Context>
  )
}

export default Main