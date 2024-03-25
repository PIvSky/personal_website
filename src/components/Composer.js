import { useTranslation } from "react-i18next";
import WorksTemplate from "./WorksTemplate";

const Composer  = () => {

    const [t] = useTranslation("global");

    const swinaContent = t("composer.swina");
    const highwayContent = t("composer.highway");
    const s3Content = t("composer.s3")

    const data = [
        {
            title: "GCH+ - ŚWINA",
            id: Math.random(),
            content: swinaContent,
            src: 'https://www.youtube.com/embed/7CHfIw1VXBo?si=eun4KCvmzrA3U8e-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        },
        {
            title: "GCH+ - HIGHWAY",
            id: Math.random(),
            content: highwayContent,
            src: 'https://www.youtube.com/embed/BsostpRvY1Q?si=eRw8ZTcuTaasnUwi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        },
        {
            title: "GCH+ - S3",
            id: Math.random(),
            content: s3Content,
            src: 'https://www.youtube.com/embed/FqSJ0MV2W3c?si=I9s-3eM8-VPSR2Ge" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        }
    ];

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