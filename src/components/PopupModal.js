import { useTranslation } from 'react-i18next';
import '../styles/PopupModal.scss';

const PopupModal = ({name, onClick}) => {

    const [t] = useTranslation("global");

    return (
        <div className='popup-wrapper'>
            <div className="popup" open>
                <h2 className="popup-title">{t("pop-up.thanks")} {name}!</h2>
                <p className="popup-text">{t("pop-up.info")}</p>
                <form method="dialog">
                    <button 
                        className="popup-button"
                        onClick={onClick}
                        >{t("pop-up.close")}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default PopupModal;