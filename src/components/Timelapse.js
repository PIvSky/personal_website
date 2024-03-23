import { useTranslation } from 'react-i18next';
import BandTemplate from './BandTemplate';

const Timelapse = () => {

    const [t] = useTranslation("global")

    const content = t("timelapse")

    const data = {
        title: "GCH+",
        content: content ,
        src: [
            'https://www.youtube.com/embed/FqSJ0MV2W3c?si=J-ZulpOzTA5aadGV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
            'https://www.youtube.com/embed/BsostpRvY1Q?si=2PkWpqkpamxnh9VK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
            'https://www.youtube.com/embed/l2OmXkb8bfA?si=anWMLF0cQG-iznHG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'        
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

export default Timelapse;