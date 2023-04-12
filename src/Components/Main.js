import React from 'react'
import Nav from './Header/Nav'
import Navbar from './Header/Navbar'
import styles from './Main.module.css'
import SliderCarousel from './Carousel/sliderCarousel'
import ProductList from './Pages/Product/ProductList'

const Main = () => {
  return (
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
  )
}

export default Main