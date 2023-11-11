import BandTemplate from './BandTemplate';

const data = {
    title: "GRZECZNI CHŁOPCY",
    content: "Nietuzinkowi muzycy grają koncert w naszej okolicy. Piosenki, które wszyscy dobrze znają, ale nikt nie słyszał. Najlepsze przeboje, chórki, choreografia, styl, dancing, szyk, elegancja, dziarska publika i pełen wigoru zespół - to przepis na udany bal. Tak właśnie bawią ludzi Grzeczni Chłopcy - nieokiełznani przodownicy dobrego humoru i pogody ducha. Zaopatrzeni w doskonałe instrumenty, modną odzież i szerokie uśmiechy przemierzają kraj. W każdym mieście, w każdej wsi, które odwiedzą, Polacy z entuzjazmem oddają się zabawie. W repertuarze mają najlepsze piosenki krajowej produkcji: Kombi, Anna Jantar, Lady Pank, Krzysztof Krawczyk, Feel, czy Elektryczne Gitary. To tylko część długiej listy artystów goszczących w muzycznym arsenale zespołu. Gdy zjawiają się Grzeczni Chłopcy, panie mdleją, chłopcy szaleją. Takiej fety Polska nie widziała, od brzegu Bałtyku aż po Tatry. Obywatelu! Nie czekaj! Szkoda życia! Nie zadzieraj nosa, nie rób takiej miny, nieudawaj Greka - baw się razem z nami!",
    src: [
        'https://www.youtube.com/embed/Si6HLWRcrKE?si=hemtqpmToDwoHeMJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
        'https://www.youtube.com/embed/_d3rBDJxfrw?si=NxnSLfRfzskm0bB5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
        'https://www.youtube.com/embed/Omwwmj1V__I?si=wSRD8kx_WzbMPqs9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
    ],
}

const GrzeczniChlopcy = () => {
    return (
        <BandTemplate
            title={data.title}
            content={data.content}
            src={data.src}
        />
    )
}

export default GrzeczniChlopcy;