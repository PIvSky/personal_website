import BandTemplate from './BandTemplate';

const data = {
    title: "KAROLINA GWÓŹDŹ",
    content: "Cześć! Skupienie, podróże wgłąb siebie, lawirowanie między jawą a snem, między słowami a dźwiękami - to cała ja. Ja, mam na myśli Karolina Gwóźdź. Oddaje kontrolę wyobraźni, snuję opowieści, znajduję dla nich miejsce w muzyce i...śpiewam. Pragnę zabrać Cię w zakamarki swojej głowy, dzielić się strzępkami wspomnień - nie tylko tych, które sama przeżyłam, ale również tych zasłyszanych, wyczytanych, przyuważonych ukradkiem na peronie. Chcę być miękkim kocem w deszczowy dzień, soczystym kompotem wypitym duszkiem, kiedy pali słońce, zduszonym przez poduszkę szlochem po rozstaniu i silnym wiatrem na szczycie.",
    src: [
        'https://www.youtube.com/embed/e6jcLdLMbcQ?si=ri8cs1XxqyD08Te2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
        'https://www.youtube.com/embed/rAJ7D0SB_I0?si=SSVg8NywSyJWSMII" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
        'https://www.youtube.com/embed/CImHPhclNDQ?si=guLX0aocP2qqs0Sp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
    ],
}

const Gwozdz = () => {
    return (
        <BandTemplate
            title={data.title}
            content={data.content}
            src={data.src}
        />
    )
}

export default Gwozdz;