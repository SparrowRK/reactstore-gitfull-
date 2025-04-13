import './_item.scss'
import './_media__item.scss'

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const Item = ({ products, slides, addToCart }) => {

    const { t } = useTranslation();

    const { itemId } = useParams();
    const [currImg, setCurrImg] = useState(null);


    const item = products.find(p => String(p.id) === itemId);

    useEffect(() => {
        if (item) {
            setCurrImg(item.pic);
        }
    }, [item]);

    if (!item) return null;
    const showAnotherPic = (currentImg) => {
        setCurrImg(currentImg);
    }

    const promoImg = slides.find(slide => slide.alt === item.promo);

    return (

        <section className="item">
            <div className="container">

                {item && (

                    <div className="item__wrapper">

                        <div className="item__visual">
                            <img className="item__visual-img" src={currImg} alt={item.alt} />

                            <div className="item__visual-photos">
                                <img className="item__visual-photos1" src={item.pic} alt={item.alt} onClick={() => showAnotherPic(item.pic)} />
                                {item.picalt1 && item.picalt2 ? (
                                    <>
                                        <img className="item__visual-photos2" src={item.picalt1} alt={item.alt} onClick={() => showAnotherPic(item.picalt1)} />
                                        <img className="item__visual-photos3" src={item.picalt2} alt={item.alt} onClick={() => showAnotherPic(item.picalt2)} />
                                    </>
                                ) : item.picalt1 && (
                                    <img className="item__visual-photos2" src={item.picalt1} alt={item.alt} onClick={() => showAnotherPic(item.picalt1)} />
                                )}

                            </div>

                            {item.promo && (
                                <div className="item__visual-promo" key={item.id}>
                                    {item.promo !== 'promoSp' ? (
                                        promoImg && (
                                            <Link to={`/Store/promos/promo/${promoImg.id}`} key={promoImg.id}>
                                                <img className="item__visual-promo-img" src={promoImg.src} alt={promoImg.alt} />
                                            </Link>
                                        )
                                    ) : (
                                        <Link to="/Store/special" key={item.promo}>
                                            <img className="item__visual-promo-img" src="img/promo/specialpromo.png" alt="Special Promo" />
                                        </Link>
                                    )}
                                </div>
                            )}


                        </div>

                        <div className="item__info">
                            <div className="item__info-main">
                                <h3 className="item__info-title">{item.name} </h3>
                                <div className="item__info-status" style={{ color: item.status === "Есть" ? "blue" : "grey" }}>
                                    {item.status === "Есть" ? t("available") : t("notAvalaible")}</div>
                                <div className="item__info-seller">{t("sellerI")} Example</div>
                                <div className="item__info-country">{t("countryI")} {item.country} </div>

                                <div className="item__info-checkout">
                                    <div className="item__info-checkout-price">{item.price} </div>
                                    {item.status === "Есть" &&
                                        <button className="item__info-checkout-cart"
                                            onClick={() =>
                                                addToCart(prev => {
                                                    if (prev.find(cartItem => cartItem.id === item.id)) return prev;
                                                    return [...prev, item];
                                                })}
                                        >{t("buyI")}<img src="img/icons/cart.svg"
                                            alt="tocart" /></button>}
                                    <div className="item__info-checkout-addinfo">Lorem ipsum dolor sit amet</div>
                                </div>
                            </div>


                            <div className="item__info-descr">
                                <div className="item__info-descr-type">{t("typeI")} {item.category} </div>
                                <div className="item__info-descr-weight">{t("weightI")} example</div>
                                <div className="item__info-descr-specifics">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Rem, delectus corporis nisi quam asperiores in dicta impedit velit minus at eius libero, vel
                                    nulla quod molestiae eveniet ipsum unde odio!</div>
                                <div className="item__info-descr-warranty">{t("warantyI")} example</div>
                            </div>
                        </div>

                    </div>
                )}

            </div>
        </section>
    )
}

export default Item;