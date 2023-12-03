import WorksTemplate from "./WorksTemplate";

const data = [
    {
        title: "RESERVED",
        id: Math.random(), // question: does it need to be random? It's not well suited for a key and not seen as a good practice. For the sake of this exercise, it's better to use 1,2,3,4...
        content: "Arrangement and play on the piano song 'Yes Sir, I Can Boogie' by Baccara. You can also watch me on this movie.",
        src: 'https://www.youtube.com/embed/OuMAGX6es7I?si=JVInVY9Y4LpCEgD6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"'
    },
    {
        title: "POZYTYWKA - Czesław Mozil & Grajkowie Przyszłości",
        id: Math.random(),
        content: "Arrangment for symphony orchestra a song of popular Polish Band Farben Lehre.",
        src: 'https://www.youtube.com/embed/4Va-JIez21E?si=M6h_SxkW84KnctXG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"'
    },
    {
        title: "Grzeczni Chłopcy: Swigin' Boys- Moves Like Jagger (Maroon 5 Cover)",
        id: Math.random(),
        content: "Swingin arrangement of popular Marron 5 song for jazz quintet.",
        src: 'https://www.youtube.com/embed/aVFOHu9FRfw?si=n0HRasvarrXN8r7g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"'
    },
    {
        title: "Grzeczni Chłopcy - Human Nature",
        id: Math.random(),
        content: "Arrangment of Michael Jackson's song for jazz quintet. ",
        src: 'https://www.youtube.com/embed/oQsftb7ppCA?si=l3zFE2wlEmv_fuSX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
    }
]

// suggestion: you can put data in a separate file in the "utils" folder and import it here

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