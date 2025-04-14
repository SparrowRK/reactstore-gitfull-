import './_reminder.scss'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Reminder = ({ upLink }) => {

    const { t } = useTranslation();

    const [isClosed, setIsClosed] = useState(() => {
        return sessionStorage.getItem('reminderClosed') === 'true';
    });

    const [reminder, setReminder] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const windowWidth = window.innerWidth;
            // Устанавливаем разные пороги для разных разрешений
            const scrollThreshold = windowWidth <= 576 ? 2100 : 800;

            if (window.scrollY > scrollThreshold && !isClosed) {
                setReminder(true);
            } else {
                setReminder(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isClosed]);

    const closeReminder = () => {
        setIsClosed(true);
        setReminder(false);
        sessionStorage.setItem('reminderClosed', 'true');
    };

    return (
        <div className={`reminder ${reminder ? 'show' : ''}`}>
            <img
                className="reminder__close"
                src="img/icons/close.svg"
                alt="close"
                onClick={closeReminder}
            />

            <h4 className="reminder__title">{t("reminderT")}</h4>
            <button
                className="reminder__btn"
                onClick={() => {
                    closeReminder();
                    upLink();
                }}
            >
                <Link to='/Store/promos'>{t("reminderBtn")}</Link>
            </button>
        </div>
    )
}

export default Reminder