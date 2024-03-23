import { useTranslation } from "react-i18next";
import WorksTemplate from "./WorksTemplate";

const Arranger = () => {

    const [t] = useTranslation("global");
    const reserved = t("arranger.reserved");
    const mozil = t("arranger.mozil");
    const maroon = t("arranger.maroon");
    const jackson = t("arranger.jackson")

    const data = [
        {
            title: "RESERVED",
            id: Math.random(),
            content: reserved,
            src: 'https://www.youtube.com/embed/OuMAGX6es7I?si=JVInVY9Y4LpCEgD6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"'
        },
        {
            title: "POZYTYWKA - Czesław Mozil & Grajkowie Przyszłości",
            id: Math.random(),
            content: mozil,
            src: 'https://www.youtube.com/embed/4Va-JIez21E?si=M6h_SxkW84KnctXG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"'
        },
        {
            title: "Grzeczni Chłopcy: Swigin' Boys- Moves Like Jagger (Maroon 5 Cover)",
            id: Math.random(),
            content: maroon,
            src: 'https://www.youtube.com/embed/aVFOHu9FRfw?si=n0HRasvarrXN8r7g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"'
        },
        {
            title: "Grzeczni Chłopcy - Human Nature",
            id: Math.random(),
            content: jackson,
            src: 'https://www.youtube.com/embed/oQsftb7ppCA?si=l3zFE2wlEmv_fuSX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        }
    ]

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