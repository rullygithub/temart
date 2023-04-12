import React, { useEffect } from 'react'
import { useState } from 'react'
import styles from './styles.module.css'

import slide1 from '../../assets/slider/slider-1.jpg';
import slide2 from '../../assets/slider/slider-2.jpg';
import slide3 from '../../assets/slider/slider-3.jpg';
import slide4 from '../../assets/slider/slider-4.jpg';
import slide5 from '../../assets/slider/slider-5.png';
import leftIcon from '../../assets/logo/left.png'
import rightIcon from '../../assets/logo/right.png'

const SliderCarousel = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const images = [
        slide1, slide2, slide3, slide4, slide5
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1 );
        }, 5000);
        return () => clearInterval(interval)
    }, [currentSlide])

    const goToPrevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    }
    const goToNextSlide = () => {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    }

    const Indicator = ({active}) => (
        <span style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: active ? 'red' : '#ababab',
            display: 'inline-block',
            margin: '0 5px',

        }} />
    )
    

  return (
    <div className={styles.slider}>
        <div className={styles.btn_act}>
        <button onClick={goToPrevSlide}><img src={leftIcon} alt="" /></button>
        <button onClick={goToNextSlide}><img src={rightIcon} alt="" /></button>
        </div>

        {images.map((img, index) => (
            <img key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            style={{display: currentSlide === index ? 'block' : 'none'}}
            />
        ))}
        <div style={{textAlign: 'center', position:'absolute', left: '50%', bottom: '50px'}}>
            {images.map((img, index) => (
                <Indicator key={index} active={currentSlide === index}/>
            ))}
        </div>
    </div>
  )
}

export default SliderCarousel