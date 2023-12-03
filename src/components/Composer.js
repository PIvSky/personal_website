import WorksTemplate from "./WorksTemplate";

const data = [
    {
        title: "GCH+ - ŚWINA",
        id: Math.random(), // suggestion: I'd rather not use Math.random here. Use integers instead. 
        content: "Composed for 'Timelapse'. This composition is inspired by the river flowing through Świnoujście.",
        src: 'https://www.youtube.com/embed/7CHfIw1VXBo?si=eun4KCvmzrA3U8e-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
    },
    {
        title: "GCH+ - HIGHWAY",
        id: Math.random(),
        content: "Composed for 'Timelapse'. This composition is a result of combination of hip-hop and jazz music.",
        src: 'https://www.youtube.com/embed/BsostpRvY1Q?si=eRw8ZTcuTaasnUwi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
    },
    {
        title: "GCH+ - S3",
        id: Math.random(),
        content: "Also composed for 'Timelapse'. S3 is a name of road in West Poland. This composition is about beeing on tour as a common part of musician life.",
        src: 'https://www.youtube.com/embed/FqSJ0MV2W3c?si=I9s-3eM8-VPSR2Ge" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
    }
]

const Composer  = () => {
    return (
        <>
            {data.map((data) => (
                <WorksTemplate
                key={data.id}
                title={data.title}
                content={data.content}
                src={data.src}
            />
            ))}
        </>
    )
};

export default Composer;