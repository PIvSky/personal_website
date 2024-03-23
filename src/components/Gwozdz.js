import { useTranslation } from 'react-i18next';
import BandTemplate from './BandTemplate';



const Gwozdz = () => {

    const [t] = useTranslation("global")

    const content = t("karolina-gwozdz")

    const data = {
        title: "KAROLINA GWÓŹDŹ",
        content: content,
        src: [
            'https://www.youtube.com/embed/e6jcLdLMbcQ?si=ri8cs1XxqyD08Te2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
            'https://www.youtube.com/embed/rAJ7D0SB_I0?si=SSVg8NywSyJWSMII" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
            'https://www.youtube.com/embed/CImHPhclNDQ?si=guLX0aocP2qqs0Sp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
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

export default Gwozdz;