import {useState, useRef, useEffect} from 'react';
import '../styles/ImageSlider.scss';
import arrowBack from '../assets/slider-img/arrow-back.png';
import arrowForward from '../assets/slider-img/arrow-forward.png';
import dot from '../assets/slider-img/dot.png';

const ImageSlider = ({slides}) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLeftRotated, setIsLeftRotated] = useState(false);
    const [isRightRotated, setIsRightRotated] = useState(false);
    const imageBackArrowRef = useRef(null);
    const imageForwardArrowRef = useRef(null);

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

    // ROTATE ARROW ANIMATION

    useEffect(() => {
        const rotateLeftValue = isLeftRotated ? 360 : 0;
        const rotateRightValue = isRightRotated ? 360 : 0;
    
        imageBackArrowRef.current.style.transform = `rotate(${rotateLeftValue}deg)`;
        imageForwardArrowRef.current.style.transform = `rotate(${rotateRightValue}deg)`;
      }, [isLeftRotated, isRightRotated]);
    
      const rotateLeftArrow = () => {
        setIsLeftRotated(!isLeftRotated);
      };
    
      const rotateRightArrow = () => {
        setIsRightRotated(!isRightRotated);
      };

    // DOTS FUNCTIONALITIES
    const currentSlide = (index) => {
        setCurrentIndex(index)
    }

    // SLIDE SHOW
    // TODO - some problem - after I click arrow couple of time, this slide show is going crazy --> is fasterl
    // setTimeout(() => {
    //     if (currentIndex < slides.length - 1) {
    //         setCurrentIndex(currentIndex + 1)
    //         } else {
    //             setCurrentIndex(0)
    //         }
    // }, 5700)

    return (
        <div className='slides-container'>
            <div className='left-arrow' onClick={prevSlide}>
                    {/* <svg height="100" width="100">
                        <circle className='left-arrow__circle' cx="50" cy="50" r="25" fill="white"></circle> 
                        <image className='left-arrow__image' href={arrowBack} x="40" y="35" width="30" height="30"></image>
                    </svg>  */}
                    <img 
                        onClick={rotateLeftArrow} 
                        ref={imageBackArrowRef} 
                        alt='arrow-forward' 
                        src={arrowBack} 
                        className='left-arrow__image'>
                    </img>
            </div>
            <div 
                style={{backgroundImage: `url(${slides[currentIndex].url})`,}}
                className='slides-container__item'
            >
            <div className='dots-container'>
            {slides.map((slides ,index) => (
                <div className='dots-container__items' key={index} onClick={() => currentSlide(index)}>
                    {/* <img alt='slider-dot' src={dot} className='dot-image'></img> */}
                    <svg height="100" width="80" onClick={prevSlide}>
                        <circle className='dot-image' cx="50" cy="50" r="12" fill={currentIndex === index ? '#F88017' : '#fff'} />
                    </svg> 
                </div>
            ))}
            </div>
            </div>
            <div className='right-arrow' onClick={nextSlide}>
                <img 
                    ref={imageForwardArrowRef} 
                    onClick={rotateRightArrow}
                    alt='arrow-forward' 
                    src={arrowForward} 
                    className='right-arrow__image'>
                </img>
            </div>
            {/* <div className='dots-container'>
                {slides.map((slides ,index) => (
                    <div className='dots-container__items' key={index} onClick={() => currentSlide(index)}>&#183;</div>
                ))}
            </div> */}
        </div>
    )

}

export default ImageSlider;
