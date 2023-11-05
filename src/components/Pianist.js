// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Nav from './PianoNav';
import Timelapse from './Timelapse';
import GrzeczniChlopcy from './GrzeczniChlopcy';
import Gwozdz from './Gwozdz';
import GantSava from './GansSava';
import '../styles/Pianist.scss';

const Pianist = () => {

    return (
        <>
            <div className='pianist-wrapper'>
                <Nav></Nav>
                <Routes>
                    <Route path='timelapse' element={<Timelapse/>}></Route>
                    <Route path='grzecznichlopcy' element={<GrzeczniChlopcy/>}></Route>
                    <Route path='gwo' element={<Gwozdz/>}></Route>
                    <Route path='gant&sava' element={<GantSava/>}></Route>
                </Routes>
            </div>
        </>
    );
};

export default Pianist;