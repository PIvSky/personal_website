import BandTemplate from './BandTemplate';

const data = {
    title: "GANT&SAVA",
    content: "Gant&Sava is band formed by Antoni Gustowski. Based in Warsaw quartet combines Vistula with Seine - jazz with french songs. All translations are made by band leader - Antoni." ,
    src: [
        'https://www.youtube.com/embed/yab_269ndjY?si=T2WROzflfkpxlvwy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"',
        'https://www.youtube.com/embed/tSdLninKLts?si=KJ5OGx7UvOrMaceq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"',
        'https://www.youtube.com/embed/d3SI2xydY2Q?si=glMp0Vlx32b120Uo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"'
    ],
}

const GantSava = () => {
    return (
        <BandTemplate
            title={data.title}
            content={data.content}
            src={data.src}
        />
    )
};

export default GantSava;