import WorksTemplate from "./WorksTemplate";

const data = [
    {
        title: "RESERVED",
        id: Math.random(),
        content: "Arrangement and play on the piano song 'Yes Sir, I Can Boogie' by Baccara. You can also watch me on this movie.",
        src: 'https://www.youtube.com/embed/OuMAGX6es7I?si=JVInVY9Y4LpCEgD6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"'
    },
    {
        title: "POZYTYWKA - Czesław Mozil & Grajkowie Przyszłości",
        id: Math.random(),
        content: "Arrangment for symphony orchestra a song of popular Polish Band Farben Lehre.",
        src: 'https://www.youtube.com/embed/4Va-JIez21E?si=M6h_SxkW84KnctXG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"'
    }
]

const Arranger = () => {
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

export default Arranger;