
import './_delivery.scss';
import './_media__delivery.scss';

import { useTranslation } from 'react-i18next';

const Delivery = ({ fullDell, setfullDell }) => {

    const { t } = useTranslation();


    return (
        <section className="delivery" id="delivery">

            <div className="container">

                <div className="delivery__wrapper">

                    <div className="divider2"></div>

                    <div className="delivery__head">
                        <h3 className="delivery-title">{t("deliveryBtn1")} {t("deliveryBtn2")}</h3>
                        <button className="delivery__btn"
                            onClick={() => setfullDell(!fullDell)}
                        >{fullDell ? t("aboutHide") : t("aboutShow")}</button>
                    </div>


                    {fullDell && (
                        <div className={`delivery__descr ${fullDell ? 'active' : ''}`}>
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
                            <br />
                            <p className="delivery__question">{t("deliveryQ")}</p>
                            <p className="delivery__contacts">{t("deliveryQT")}<a href=""> +00 000 000
                                00 000</a> <br />
                                {t("deliveryQE")}<a href=""> example@gmail.com</a> </p>
                        </div>
                    )}
                </div>
            </div>
        </section>

    )
}

export default Delivery;