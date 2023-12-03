import '../styles/PopupModal.scss';

const PopupModal = ({name, onClick}) => {
    return (
        <div className='popup-wrapper'>
            <div className="popup" open>
                <h2 className="popup-title">Thank You {name}!</h2>
                <p className="popup-text">Your message was send!</p> 
                {/* issue: typo: should be 'sent' */}
                <form method="dialog">
                    <button 
                        className="popup-button"
                        onClick={onClick}
                        >Close
                    </button>
                </form>
            </div>
        </div>
    )
}

export default PopupModal;