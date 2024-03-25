import { useState} from 'react';
// import 'animate.css';
import '../styles/Dev.scss';
import cvImg from '../assets/cv/cv-image.jpg';
import githubIcon from '../assets/icons/icons8-github-50.png';
import linkedinIcon from '../assets/icons/icons8-linkedin-50.png';
import downloadIcon from '../assets/icons/icons8-download-50.png';
import cvPdf from '../assets/cv/iwanskicv.pdf';

const Dev = () => {

    const [showDownload, setShowDownload] = useState(true);

    const handleMouseEnter = () => {
        setShowDownload(false);
      };
    
      const handleMouseLeave = () => {
        setShowDownload(true);
      }; 

    // download pdf with cv from my page
    const onDownloadPdf = () => {
        // using Java Script method to get PDF file
        fetch(cvPdf).then((response) => {
            response.blob().then((blob) => {
                // Creating new object of PDF file
                const fileURL =
                    window.URL.createObjectURL(blob);
                     
                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "piotr-iwanski-cv.pdf";
                alink.click();
            });
        });
    };

    return (
        <>
            <div className='dev-wrapper'>
                <div className='dev-container'>
                    <div className='dev-header'>
                        <h1 className='dev-header__title'>Frontend Developer <span>(only EN)</span></h1>
                        <div className="dev-header__icons">
                            <a href='https://github.com/PIvSky' target='_blank' rel="noreferrer"><img alt='githubIcon' src={githubIcon} ></img></a>
                            <a href='https://www.linkedin.com/in/pivsky/' target='_blank' rel="noreferrer"><img alt='githubIcon' src={linkedinIcon} ></img></a>
                        </div>
                    </div>
                    <div className='dev-about' >
                        <h2 className='dev-about__title'>About</h2>
                        <p className='dev-about__content'>I've studied knowledge and tools in Frontend Development from the beginning of 2022 on my own. After 10 years spent in music business I want to change my profession to one, where I can learn and develop new skills. I would like to use my professionalism, curiosity and determination on a new path.</p>
                        <p className='dev-about__content'> During almost two years I've been learned technologies like:</p>    
                        <ul className='dev-about__technologies'>
                            <li>React JS</li>
                            <li>Javascript</li>
                            <li>HTML 5</li>
                            <li>CSS</li>
                            <li>SASS</li>
                            <li>JEST/ VITEST</li>
                            <li>GIT</li>
                        </ul>
                    </div>
                    <div className='dev-projects'>
                        <h2 className='dev-projects__title'>Main Projects</h2>
                        <div className='dev-projects__container'>
                            <div>
                                <h4>Personal Website</h4>
                                <p>My personal website shows my main profession to this time - being the pianist. I started from making a design, frames of layout and project architecture. After all configuration (like implementing SASS) I started writing code in Mobile First approach.  I used React Router to divide different elements of webpage content. I used React Router for my navbar and Nested Routes in components like Pianist and Arranger. I also used some standard React features like Hooks, Props. All styles in this project were made using SASS - popular CSS preprocessor. I used SASS for maps, mixins, nesting and others. Design and all styles were invented entirely by me - included postproduction of photos. In Contact page I used EmailJS for message redirection for my personal email box.</p>
                            </div>
                            <div>
                                <h4>Jazz Questionaire</h4>
                                <p>Jazz Questionairy is invented by me quiz, which show how much you fit for being jazz musician :). I focused on javascript solutions, less on style of application. In this project I explore JS issues like: forms with validation, input checks, music player, couting of answears, etc. App is made in React framework where I use different hooks, props in both ways between components. I styled app on my own but I used Animate.css library for some animation. I used in simple form API to fetch user icons. This project will be developed in future.</p>
                                <button>
                                    <a href='https://jazz-questionaire.netlify.app/' target='_blank' rel="noreferrer">Let's check!</a>
                                </button>
                            </div>
                        </div>
                        <h2 className='dev-projects__other'>Other Projects</h2>
                        <ul>
                            <li>Add expenses list</li>
                            <li>Weather App</li>
                            <li>Quiz Project</li>
                            <li>TODO List</li>
                            <li>Shop Webpage</li>
                        </ul>
                    </div>    
                    <div className='dev-cv'>
                        <div className='dev-header'>
                            <h2 className='dev-header__title'>Curriculum Vitae</h2>
                            <button 
                                onClick={onDownloadPdf}
                                className='dev-header__button'
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}>
                                    <img alt='downloadIcon' src={downloadIcon}></img>
                                </button>
                            {showDownload ? '' 
                            :
                            <span >download cv</span>
                            }
                        </div>
                        <div className='dev-img'>
                            <img 
                                className='dev-img__item'
                                alt='cv-img' 
                                src={cvImg}></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dev;