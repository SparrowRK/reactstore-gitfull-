import './_promotion.scss';
import './_media__promotion.scss';


import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Timer from '../Timer/Timer';

const Promotion = () => {

    const { t } = useTranslation();


    return (
        <section className="promotion">
            <div className="container">
                <div className="divider2"></div>
                <div className="promotion__wrapper">
                    <div className="promotion__descr">
                        <h4 className="promotion__title">{t('promoST')}</h4>
                        <p className="promotion__conditions">{t('promoSD')} <br /> {t('promoSD2')} </p>
                        <p className="promotion__conditions-link">{t('promoSLT')} <Link to="/Store/special">{t('promoSL')}</Link></p>
                    </div>

                    <Timer />

                </div>
            </div>
        </section >
    )
}

export default Promotion;