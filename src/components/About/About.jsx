import './_about.scss';
import './_media__about.scss';


import { useTranslation } from 'react-i18next';

const About = ({ fullDescr, setfullDescr }) => {

    const { t } = useTranslation();



    return (
        <section className="about" id="about">
            <div className="container">

                <div className="about__wrapper">

                    <div className="divider2"></div>

                    <div className="about__head">

                        <div className="about__main">
                            <h3 className="about__title">{t("aboutBtn")}</h3>
                        </div>
                        <button className="about__btn" onClick={() => setfullDescr(!fullDescr)}>
                            {fullDescr ? t("aboutHide") : t("aboutShow")}
                        </button>
                    </div>

                    <p className="about__minidescr"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                        mollitia
                        dolorum sapiente veritatis!</p>


                    {fullDescr && (
                        <div className={`about__descr ${fullDescr ? 'active' : ''}`}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi mollitia dolorum sapiente
                                veritatis!
                                Quisquam, quidem, accusamus, aspernatur harum perspiciatis non sequi sed officia praesentium in
                                eum
                                molestias. Corporis, harum quasi?
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi mollitia dolorum sapiente
                                veritatis!
                                Quisquam, quidem, accusamus, aspernatur harum perspiciatis non sequi sed officia praesentium in
                                eum
                                molestias. Corporis, harum quasi?</p>

                            <ul className="about__descr-certificate">
                                <li><img src="/Store/img/certifs/certif1.jpg" alt="sertificate1" /></li>
                                <li><img src="/Store/img/certifs/certif2.jpg" alt="sertificate2" /></li>
                                <li><img src="/Store/img/certifs/certif3.jpg" alt="sertificate3" /></li>
                            </ul>


                            <div className="about__adress">

                                <div className="about__adress-descr">
                                    <h4 className="about__adress-title">{t("aboutAdressT")} </h4>
                                    <p className="about__adress-place">{t("aboutAdress")} : Example str,10</p>
                                    <p className="about__adress-phone">{t("aboutContact")}  <a href="">+00 000 0000 00 00</a></p>

                                    <div className="about__adress-social">
                                        <p>{t("aboutSocial")} </p>
                                        <ul className="about__adress-social-links">
                                            <li>
                                                <a href="https://www.instagram.com/" className="about__adress-social-link1"
                                                    target="_blank" rel="noopener noreferrer">
                                                    <img src="/Store/img/social/instagram.png" alt="Instagram" /></a>
                                            </li>
                                            <li>
                                                <a href="https://web.telegram.org/k/" className="about__adress-social-link2"
                                                    target="_blank" rel="noopener noreferrer">
                                                    <img src="/Store/img/social/tgicon.png" alt="Tg" /></a>
                                            </li>
                                            <li>
                                                <a href="https://www.facebook.com/" className="about__adress-ocial-link3"
                                                    target="_blank" rel="noopener noreferrer">
                                                    <img src="/Store/img/social/facebook.png" alt=" Facebook" /></a>
                                            </li>
                                            <li>
                                                <a href="https://surli.cc/byyagi" className="about__adress-social-link4"
                                                    target="_blank" rel="noopener noreferrer"><img src="/Store/img/social/youtube.png"
                                                        alt="Youtube" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>


                                <div className="about__adress-map">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d45775416.37471267!2d-6.063173882828734!3d45.55214221885591!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1742054418037!5m2!1sru!2sua"
                                        width="400" height="250" style={{ border: "0" }} allowFullScreen="" loading="lazy"
                                        referrerolicy="no-referrer-when-downgrade"></iframe>

                                </div>

                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default About;