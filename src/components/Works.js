import { Routes, Route } from 'react-router-dom';
import Arranger from './Arranger';
import Composer from './Composer';
import Nav from './WorksNav';
import '../styles/Works.scss';
import biophoto from '../assets/works-img/photo-1.jpg';
import { useState } from 'react';

const Works = () => {

    const [show, setShow] = useState(true);

    const showContent = () => {
        setShow(false);
    };
    
    return (
        <>
            <div className='works-wrapper'>
                <Nav onClick={showContent}/>
                {show ? 
                <div className='works-image'>
                    <img 
                        alt='bio-pic' 
                        className='works-image__content'
                        src={biophoto}
                    >
                    </img>
                </div>
                :
                <Routes>
                    <Route path='arranger' element={<Arranger/>}></Route>
                    <Route path='composer' element={<Composer/>}></Route>
                </Routes>
                }
            </div>
        </>
    );
};

export default Works;