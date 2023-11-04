import {useState} from 'react';
import '../styles/ImageSlider.scss';

const ImageSlider = ({slides}) => {

    const [currentIndex, setCurrentIndex] = useState(0)

    //  ARROW FUNCTIONALITIES
    const prevSlide = () => {
        if (currentIndex > 0){
            setCurrentIndex(currentIndex - 1)
        } else {
            setCurrentIndex(slides.length - 1)
        }
    }

    const nextSlide = () => {
        if (currentIndex < slides.length - 1) {
        setCurrentIndex(currentIndex + 1)
        } else {
            setCurrentIndex(0)
        }
    }   

    // DOTS FUNCTIONALITIES
    const currentSlide = (index) => {
        setCurrentIndex(index)
    }

    // SLIDE SHOW
    // TODO - some problem - after I click arrow couple of time, this slide show is going crazy --> is fasterl
    setTimeout(() => {
        if (currentIndex < slides.length - 1) {
            setCurrentIndex(currentIndex + 1)
            } else {
                setCurrentIndex(0)
            }
    }, 5700)

    return (
        <div className='slides-container'>
            <div className='left-arrow' onClick={prevSlide}>&#129168;</div>
            <div 
                style={{backgroundImage: `url(${slides[currentIndex].url})`,}}
                className='slides-container__item'
            >
                <div className='dots-container'>
                {slides.map((slides ,index) => (
                    <div className='dots-container__items' key={index} onClick={() => currentSlide(index)}>&#183;</div>
                ))}
            </div>
            </div>
            <div className='right-arrow' onClick={nextSlide}>&#129170;</div>
            {/* <div className='dots-container'>
                {slides.map((slides ,index) => (
                    <div className='dots-container__items' key={index} onClick={() => currentSlide(index)}>&#183;</div>
                ))}
            </div> */}
        </div>
    )

}

export default ImageSlider;
