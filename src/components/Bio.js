import '../styles/Bio.scss';
import biophoto from '../assets/img/photo-3.jpg';

const data = {
    title: 'Bio',
    content: 'Piotr Iwański - pianist, arranger, composer, teacher. He got piano education from mentors such as Wojciech Majewski, Michał Tokaj, Andrzej Jagodziński and Marcin Banaszek. In center of his musical interests are jazz, songs, classical and film music. He performs as a solo pianist, accompanist and member of several bands of various musical natures (including Grzeczni Chłopcy, Gant & Sava, GCh+). As a pianist and director of a musical bands he performs in theaters (Komedia Theater, Jewish Theater, Lalka Theater). He cooperated with e.g: Czesław Mozil, Maja Kleszcz and Joanna Kulig. Piotr teaches in Jazz Piano Class at the Authors School of Popular Music and Jazz. in Warsaw. In music he appreciate frugality and restraint - so that each sound played carries greater responsibility.',
}

function Bio() {

    return (
        <div className='bio-wrapper'>
            <div className="bio-container">
                <h1 className='bio-title'>{data.title}</h1>
                <p className='bio-content'>{data.content}</p>
            </div>
            <div className='bio-image__wrapper'>
                <img 
                    alt='bio-pic' 
                    className='bio-image__content'
                    src={biophoto}
                    >
                </img>
            </div>
        </div>
    );
}

export default Bio;
