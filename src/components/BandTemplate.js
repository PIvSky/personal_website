import '../styles/BandTemplate.scss';

const BandTemplate = ({title, content, src}) => {
    return (
        <>
            <div className="band-container">
                <h1 className="band-title">{title}</h1>
                <p className='band-content'>{content}</p>
                <div className="band-video-container">
                    {src.map((url, index) => (
                        <iframe 
                        key={index}
                        title={`Video ${index}`}
                        width="300" 
                        height="300" 
                        src={url} allowfullscreen> 
                        </iframe>
                    ))}
                </div>
            </div>
        </>
    )
}

export default BandTemplate;