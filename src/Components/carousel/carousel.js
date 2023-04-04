import React, { useEffect, useState } from 'react'
import styles from './carousel.module.css'
import carousel1 from '../../assets/slider/slider-1.jpg'
import carousel2 from '../../assets/slider/slider-2.jpg'
import carousel3 from '../../assets/slider/slider-3.jpg'
import carousel4 from '../../assets/slider/slider-4.jpg'


const Carousel = () => {
    const images = [carousel1,carousel2,carousel3,carousel4];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1 );
        }, 5000);
        return () => clearInterval(interval);
    }, [currentSlide]);

    return (
    <div className={styles.carousel}>
        {images.map((img, index) => (
            <img 
                key={index}
                src={img}
                alt={`slide ${index + 1}`}
                style={{display: currentSlide === index ? 'block' : 'none' }}

            />
        ))}
    </div>
  )
}

export default Carousel