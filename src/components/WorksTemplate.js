import '../styles/WorksTemplate.scss';

const WorksTemplate = ({title, content, src, key}) => {
    return (
        <>
            <div className="works-container">
                <h1 className="works-title">{title}</h1>
                <p className='works-content'>{content}</p>
                <div className="works-video-container">
                        <iframe 
                        key={key}
                        width="300" 
                        height="300" 
                        src={src} allowfullscreen> 
                        </iframe>
                </div>
            </div>
        </>
    );
};

export default WorksTemplate;