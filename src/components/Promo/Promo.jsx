import './_promo.scss'
import './_media__promo.scss'

import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';


const Promo = ({ slides, upLink, products, addToCart }) => {

    const navigate = useNavigate();
    const { t } = useTranslation();

    const { promoId } = useParams();

    const promoIdnum = parseInt(promoId);

    const promoData = slides.find(item => item.id === promoIdnum);

    if (!promoData) {
        return <div>Акция не найдена</div>;
    }

    const currentPromoTag = promoData.promoTag || `promo${promoIdnum + 1}`;

    return (
        <section className="promo">
            <div className="container">
                <div className="promo__wrapper">
                    <div className="promo__main">
                        <div className="promo__descr">
                            <img src={promoData.src} alt={promoData.alt} />
                            <p className="promo__text">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, recusandae nostrum nisi sequi iste repellat accusamus. Mollitia, dolor quisquam. Qui quae deserunt quidem ratione soluta enim, iure illo nihil rerum.Mollitia, dolor quisquam. Qui quae deserunt quidem ratione soluta enim, iure illo nihil rerum.
                            </p>
                        </div>

                        <div className="promo__catalog">
                            <div className="promo__list">
                                {products
                                    .filter(promo => promo.promo === currentPromoTag)
                                    .map((promo) => (
                                        <div className="promo__list-item" key={promo.id}>
                                            <img className="promo__list-item-img" src={`/Store/${promo.pic}`} alt={promo.alt} onClick={() => navigate(`/Store/${promo.id}`)} />
                                            <h4 className="promo__list-item-name" onClick={() => navigate(`/Store/${promo.id}`)} >{promo.name}</h4>
                                            <div className="promo__list-item-status" style={{ color: promo.status === "Есть" ? "blue" : "grey" }}>{promo.status === "Есть" ? t("available") : t("notAvalaible")}</div>
                                            <div className="promo__list-item-buy">
                                                <div className="promo__list-item-price">{promo.price}</div>
                                                {promo.status === "Есть" &&
                                                    (<img className="promo__list-item-cart" src="/Store/img/icons/cart.svg" alt="Cart" onClick={() =>
                                                        addToCart(prev => {
                                                            if (prev.find(cartItem => cartItem.id === promo.id)) return prev;
                                                            return [...prev, promo];
                                                        })
                                                    } />)}

                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>

                    <button className="promo__link" onClick={upLink}>
                        <Link to="/Store/promos">{t("allPromoBtn")}</Link>
                    </button>
                </div>
            </div>
        </section >
    );
}

export default Promo;