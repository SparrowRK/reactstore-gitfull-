import './_footer.scss';
import './_media__footer.scss';

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = ({ setForm, upLink, setfullDell, setfullDescr }) => {

    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">

                    <div className="footer__social">
                        <p>{t("social")}</p>
                        <ul className="footer__social-links">
                            <li>
                                <a href="https://www.instagram.com/" className="footer__social-link1"
                                    target="_blank" rel="noopener noreferrer"><img src="/Store/img/social/instagram.png"
                                        alt="Instagram" /></a>
                            </li>
                            <li>
                                <a href="https://web.telegram.org/k/" className="footer__social-link2"
                                    target="_blank" rel="noopener noreferrer" ><img src="/Store/img/social/tgicon.png" alt=" Tg" /></a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/" className="footer__social-link3"
                                    target="_blank" rel="noopener noreferrer" ><img src=" /Store/img/social/facebook.png"
                                        alt=" Facebook" /></a>
                            </li>
                            <li>
                                <a href="https://surli.cc/byyagi" className="footer__social-link4"
                                    target="_blank" rel="noopener noreferrer" ><img src="/Store/img/social/youtube.png"
                                        alt="Youtube" /></a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__company">
                        <ul>
                            <li>{t("companyF")}</li>
                            <li ><a href="#about" onClick={() => setfullDescr(true)}></a></li>
                            <li ><a href="#delivery" onClick={() => setfullDell(true)}> {t("deliveryBtn1")} <br /> {t("deliveryBtn2")}</a></li>
                            <li onClick={upLink} ><Link to="/Store/promos">{t("promoBtn")}</Link></li>
                        </ul>
                    </div>

                    <div className="footer__support">
                        <ul>
                            <li>{t("contactsF")}</li>
                            <li><a href="">+00 000 0000 00 00</a></li>
                            <li><a href="">MyStore@gmail.com</a></li>
                            <li>
                                <p>Example str,10</p>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__better">
                        <p>{t("request")}</p>
                        <button className="footer__better-btn" onClick={() => setForm(true)}>{t("requestBtn")}</button>


                    </div>

                </div>

                <div className="divider"></div>

                <div className="footer__info">
                    <p>© 2025</p>
                    <p>MyStore. All rights reserved.</p>
                </div>

            </div>
        </footer>
    )
}

export default Footer;