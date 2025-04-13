import './_promos.scss'
import './_media__promos.scss'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'

const Promos = ({ slides }) => {

    const { t } = useTranslation();

    return (
        <section className="promos">
            <div className="container">
                <div className="promos__wrapper">
                    {slides.map(item => (
                        <div className="promos__block" key={item.id}>
                            <Link to={`/Store/promos/promo/${item.id}`} ><img className="promos__img" src={item.src} alt={item.alt} /></Link>
                            <li className="promos__link" >
                                <Link to={`/Store/promos/promo/${item.id}`} >
                                    {t("promoSbtn")}
                                </Link>
                            </li>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Promos;
