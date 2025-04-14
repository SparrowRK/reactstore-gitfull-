import './_promotionfull.scss'
import './_media__promotionfull.scss'

import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Timer from '../Timer/Timer';

const PromotionFull = ({ products, addToCart }) => {

    const navigate = useNavigate();

    const { t } = useTranslation();

    const goMain = () => {
        navigate('/Store/');
    };

    const promoSpecial = 'promoSp';

    return (
        <section className="promotionfull">

            <div className="container">

                <div className="promotionfull__wrapper">
                    <div className="promotionfull__main">
                        <div className="promotionfull__descr">
                            <Timer />

                            <p className="promotionfull__text">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe nobis quaerat odio impedit voluptate culpa voluptatum aliquid dolor natus cupiditate animi dolore earum porro fugit laborum, qui obcaecati laudantium incidunt! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit molestias facere molestiae at doloribus rerum nihil nemo iste a, quas illo aperiam, nesciunt tenetur et, similique beatae necessitatibus exercitationem deleniti.
                            </p>
                        </div>

                        <div className="promotionfull__catalog">
                            <div className="promotionfull__list">


                                {products
                                    .filter(product => product.promo === promoSpecial)
                                    .map((product) => (

                                        <div className="promotionfull__list-item" key={product.id}>
                                            <img className="promotionfull__list-item-img" src={product.pic} alt="Tv" onClick={() => navigate(`/Store/${product.id}`)} />
                                            <h4 className="promotionfull__list-item-name" onClick={() => navigate(`/Store/${product.id}`)} >{product.name}</h4>

                                            <div className="promotionfull__list-item-status"
                                                style={{ color: product.status === "Есть" ? "blue" : "grey" }}>
                                                {product.status === "Есть" ? t("available") : t("notAvalaible")}
                                            </div>

                                            <div className="promotionfull__list-item-buy">
                                                <div className="promotionfull__list-item-price">{product.price}</div>
                                                {product.status === "Есть" &&
                                                    (<img className="promotionfull__list-item-cart" src="img/icons/cart.svg" alt="Cart" onClick={() =>
                                                        addToCart(prev => {
                                                            if (prev.find(cartItem => cartItem.id === product.id)) return prev;
                                                            return [...prev, product];
                                                        })
                                                    } />)}
                                            </div>
                                        </div>
                                    ))}

                            </div>
                        </div>
                    </div>

                    <button className="promotionfull__link" onClick={goMain}>
                        {t("promoSgomain")}
                    </button>
                </div>
            </div>
        </section>
    )
}

export default PromotionFull;