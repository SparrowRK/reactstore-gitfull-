import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import './_header.scss';
import './_media__head.scss';


const Header = ({ setonMenu, setonCart, setLog, upLink, currency, setfullDell, setfullDescr, setSearch, startSearch, toCart, search, setCurrentSearchTerm, changeLanguage }) => {
    const { t, i18n } = useTranslation();
    const [lang, setLang] = useState(i18n.language);

    const navigate = useNavigate();


    useEffect(() => {
        setLang(i18n.language);
    }, [i18n.language]);

    const langChange = (e) => {
        const newLang = e.target.value;
        setLang(newLang);
        changeLanguage(newLang);
    };


    startSearch = () => {
        if (search.trim() === '') return;

        setCurrentSearchTerm(search.toLowerCase());
        navigate('/Store/');
    };

    return (
        <header className="head">

            <div className="container">
                <div className="head__wrapper">

                    <div className="head__burger" onClick={() => setonMenu(true)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <a className="head__logo" href="/Store/"><img src="/Store/img/mainlogo.png" alt="Mainlogo" /></a>

                    <div className="head__search">
                        <img className="head__search-icon" src="/Store/img/icons/search.svg" alt="search" />
                        <input className="head__search-input" type="text" placeholder={t('search')} onChange={(e) => setSearch(e.target.value)} onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                startSearch();
                            }
                        }} />
                        <button className="head__search-btn" onClick={startSearch}>{t('searchButton')}</button>
                    </div>

                    <ul className="head__links">
                        <li onClick={upLink} ><Link to="/Store/promos">{t('promoBtn')}</Link></li>
                        <li ><a href="#delivery" onClick={() => setfullDell(true)}> {t("deliveryBtn1")}<br /> {t("deliveryBtn2")}</a></li>
                        <li ><a href="#about" onClick={() => setfullDescr(true)}>{t("aboutBtn")}</a></li>
                    </ul>

                    <div className="head__currency">
                        <p>{t("currency")}</p>
                        <ul className="head__currency-info">
                            <li>$-{currency.usd}</li>
                            <li>€-{currency.eur}</li>
                        </ul>
                    </div>

                    <div className="head__info">
                        <p className="head__info-adress">Example str,10</p>
                        <ul className="head__info-social">
                            <li>
                                <a href="https://www.instagram.com/" className="head__info-social-link1"
                                    target="_blank" rel="noopener noreferrer" ><img src="/Store/img/social/instagram.png"
                                        alt="Instagram" /></a>
                            </li>
                            <li>
                                <a href="https://web.telegram.org/k/" className="head__info-social-link2"
                                    target="_blank" rel="noopener noreferrer"  ><img src="/Store/img/social/tgicon.png" alt="Telegram" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/" className="head__info-social-link3"
                                    target="_blank" rel="noopener noreferrer"  ><img src="/Store/img/social/facebook.png"
                                        alt="Facebook" /></a>
                            </li>
                            <li>
                                <a href="https://surli.cc/byyagi" className="head__info-social-link4"
                                    target="_blank" rel="noopener noreferrer"  ><img src="/Store/img/social/youtube.png"
                                        alt="Youtube" /></a>
                            </li>
                        </ul>
                    </div>

                    <div className="head__language">
                        <div className="head__language-select">
                            <select
                                className="head__language-options"
                                aria-label="Выбор языка"
                                value={lang}
                                onChange={langChange}>
                                <option className="language-options-ru" value="ru">Ru</option>
                                <option className="language-options-ua" value="ua">Ua</option>
                                <option className="language-options-en" value="en">En</option>
                            </select>
                        </div>
                    </div>


                    <div className="head__cart" onClick={() => setonCart(true)}>
                        <img src="/Store/img/icons/cart.svg" alt="cart" />
                        {toCart.length > 0 ? (
                            <span className="head__cart-count">{toCart.length}</span>) : ""
                        }

                    </div>


                    <div className="head__profile" onClick={() => setLog(true)} >
                        <img src="/Store/img/icons/profile.svg" alt="Profile" />
                    </div>

                </div>
            </div >
        </header >
    )
};

export default Header;