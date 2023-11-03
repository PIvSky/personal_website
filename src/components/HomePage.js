import ImageSlider from './ImageSlider';
import './HomePage.scss';
import photo1 from '../assets/img/photo-1.jpg';
import photo2 from '../assets/img/photo-2.jpg';
import photo3 from '../assets/img/photo-3.jpg';
import photo4 from '../assets/img/photo-4.jpg';
import photo5 from '../assets/img/photo-5.jpg';
import photo6 from '../assets/img/photo-6.jpg';
import photo7 from '../assets/img/photo-7.jpg';

const HomePage = () => {

    const photos = [
        {url: photo1, title: 'photo-1'},
        {url: photo2, title: 'photo-2'},
        {url: photo3, title: 'photo-3'},
        {url: photo4, title: 'photo-4'},
        {url: photo5, title: 'photo-5'},
        {url: photo6, title: 'photo-6'},
        {url: photo7, title: 'photo-7'},

    ]

    return (
        <>
            {/* <div className='home-container'>
                <h1>HOME</h1>
            </div> */}
            <div className='home-container'>
                <div className='slides-wrapper'>
                    <ImageSlider slides={photos}></ImageSlider>
                </div>
            </div>
        </>
    )
}

export default HomePage;
