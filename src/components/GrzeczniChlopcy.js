import { useTranslation } from 'react-i18next';
import BandTemplate from './BandTemplate';

const GrzeczniChlopcy = () => {

    const [t] = useTranslation("global");

    const content = t("grzeczni-chlopcy")

    const data = {
        title: "GRZECZNI CHŁOPCY",
        content: t("grzeczni-chlopcy"),
        src: [
            'https://www.youtube.com/embed/Si6HLWRcrKE?si=hemtqpmToDwoHeMJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
            'https://www.youtube.com/embed/_d3rBDJxfrw?si=NxnSLfRfzskm0bB5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
            'https://www.youtube.com/embed/Omwwmj1V__I?si=wSRD8kx_WzbMPqs9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        ],
    }

    return (
        <BandTemplate
            title={data.title}
            content={data.content}
            src={data.src}
        />
    )
}

export default GrzeczniChlopcy;