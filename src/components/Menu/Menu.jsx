import './_menu.scss';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const Menu = ({ onMenu, setonMenu, setonCart, setLog, upLink, setfullDescr, setfullDell, changeLanguage, toCart, currency }) => {

    const { t, i18n } = useTranslation();

    useEffect(() => {
        setLang(i18n.language);
    }, [i18n.language]);

    const langChange = (e) => {
        const newLang = e.target.value;
        setLang(newLang);
        changeLanguage(newLang);
    };

    const openCart = () => {
        setonMenu(false);
        setonCart(true);
    };

    const openLogin = () => {
        setonMenu(false);
        setLog(true);
    };

    const [lang, setLang] = useState('ru');

    return (
        <div
            className={`menu ${onMenu ? 'active' : ''}`}>

            <div className="menu__wrapper">
                <div className="menu__head">

                    <img className="menu__head-logo" src="img/mainlogo.png" alt="Mainlogo" />

                    <div className="menu__head-language">
                        <select
                            className="menu__head-language-select"
                            aria-label="Выбор языка"
                            value={lang}
                            onChange={langChange}>
                            <option className="language-options-ru" value="ru">Ru</option>
                            <option className="language-options-ua" value="ua">Ua</option>
                            <option className="language-options-en" value="en">En</option>
                        </select>
                    </div>

                    <div className="menu__head-close" onClick={() => setonMenu(false)}>
                        <img src="img/icons/close.svg" alt="close" />
                    </div>

                </div>

                <nav>
                    <ul className="menu__list">

                        <li><div className="menu__link" onClick={openLogin}>
                            <img src="img/icons/enter.svg" alt="Enter" />{t('enter')}</div>
                        </li>

                        <li onClick={(e) => { e.preventDefault(); upLink(setonMenu) }}><Link className="menu__link" to="/promos" >
                            <img src="img/icons/promo.svg" alt="Promos" />{t("promoBtn")}</Link>
                        </li>

                        <li>
                            <div className="menu__link" onClick={openCart}><img src="img/icons/cart.svg" alt="Cart" />{t('cart')}
                                {toCart.length > 0 ? (
                                    <span className="menu__link-cart">{toCart.length}</span>) : ""
                                }
                            </div>

                        </li>

                        <li>
                            <a className="menu__link" href="#about" onClick={() => { setfullDescr(true); setonMenu(false) }}>
                                <img src="img/icons/about.svg" alt="About us" />{t('aboutBtn')}</a>
                        </li>
                        <li>
                            <a className="menu__link" href="#delivery" onClick={() => { setfullDell(true); setonMenu(false) }}>
                                <img src="img/icons/delivery.svg" alt="Delivery" />{t('deliveryBtn1')} {t('deliveryBtn2')}</a>
                        </li>

                        <li>
                            <a className="menu__link" href="tel:+00000000000"><img src="img/icons/phone.svg" alt="Phone" />+0 000
                                000 00 00</a>
                        </li>
                        <li>
                            <a className="menu__link" href="mailto:MyStore@gmail.com"><img src="img/icons/email.svg"
                                alt="Email" />MyStore@gmail.com</a>
                        </li>
                    </ul>
                </nav>

                <div className="menu__currency">
                    <h4>{t('currency')}</h4>
                    <ul className="menu__currency-info">
                        <li>$-{currency.usd}</li>
                        <li>€-{currency.eur}</li>
                    </ul>
                </div>

                <div className="menu__social">
                    <h4 className="menu__social-title">{t('social')}</h4>
                    <div className="menu__social-links">
                        <a href="https://www.instagram.com/" className="menu__social-link1" target="_blank" rel="noopener noreferrer">
                            <img src="img/social/instagram.png" alt="Instagram" /></a>
                        <a href="https://web.telegram.org/k/" className="menu__social-link2" target="_blank" rel="noopener noreferrer">
                            <img src="img/social/tgicon.png" alt="TG" /></a>
                        <a href="https://www.facebook.com/" className="menu__social-link3" target="_blank" rel="noopener noreferrer">
                            <img src="img/social/facebook.png" alt="Facebook" /></a>
                        <a href="https://surli.cc/byyagi" className="menu__social-link4" target="_blank" rel="noopener noreferrer">
                            <img src="img/social/youtube.png" alt="YouTube" /></a>
                    </div>
                </div>

                <div className="menu__apps">

                    <h4 className="menu__apps-title">{t('app')}</h4>

                    <div className="menu__apps-links">
                        <a href="#" className="menu__apps-link1"><img src="img/icons/playstore.svg" alt="Playstore" /></a>
                        <a href="#" className="menu__apps-link2"><img src="img/icons/appstore.svg" alt="AppStore" /></a>
                    </div>

                </div>

                <div className="menu__adress">
                    {t('adress')} Example str,10
                </div>
            </div>
        </div >

    )
}

export default Menu;



