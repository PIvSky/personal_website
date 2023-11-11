import BandTemplate from './BandTemplate';

const data = {
    title: "GCH+",
    content: "GCh+ is Warsaw based quintet, experiment between jazz, ambient and electronic music. They combined accoustic instruments with synthesizers to create a wide and warm music landscapes. After 7 years spending together on playing lots of different projects, they decide to return to their roots - to composing together, exploring new musical areas, searching common sound. GCh+ is about music friendship and collective experiments, which are their priorities. GCh+ debut album is called 'Timelapse'. Timelapse is photographic technique making it possible to show a long period of time in a few seconds. This is metaphoricaly named time. Time they have spent together on rehearsals, concerts, journeys and conversations. A kind of ”music diary” of this time. On 'Timelapse' band uses classical accoustic and electronic instruments and that less expected like oud, bansuri flute, tunk drum or absolutly unique glissando flute headjoint made by Robert Dick. GCh+ does it all, so that you can immerse yourself in their stories." ,
    src: [
        'https://www.youtube.com/embed/FqSJ0MV2W3c?si=J-ZulpOzTA5aadGV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
        'https://www.youtube.com/embed/BsostpRvY1Q?si=2PkWpqkpamxnh9VK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
        'https://www.youtube.com/embed/l2OmXkb8bfA?si=anWMLF0cQG-iznHG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'        
    ],
}

const Timelapse = () => {
    return (
        <BandTemplate
            title={data.title}
            content={data.content}
            src={data.src}
        />
    )
}

export default Timelapse;