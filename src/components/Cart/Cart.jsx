import './_cart.scss';
import './_media__cart.scss';

import EmptyCart from './EmptyCart';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const Cart = ({ onCart, setonCart, toCart, addToCart, currency }) => {
    const { t } = useTranslation();

    const navigate = useNavigate();

    let cart = toCart;

    const [quantity, setQuantity] = useState(() => {
        const savedQuantity = localStorage.getItem('cartQuantity');
        return savedQuantity ? JSON.parse(savedQuantity) : {};
    });


    useEffect(() => {
        setQuantity((prevQuant) => {
            const newQuant = { ...prevQuant };

            cart.forEach(item => {

                if (!newQuant[item.id]) {
                    newQuant[item.id] = 1;
                }
            });

            Object.keys(newQuant).forEach(itemId => {
                if (!cart.some(item => item.id === parseInt(itemId) || item.id === itemId)) {
                    delete newQuant[itemId];
                }
            });

            return newQuant;
        });
    }, [cart]);

    useEffect(() => {
        if (Object.keys(quantity).length > 0) {
            localStorage.setItem('cartQuantity', JSON.stringify(quantity));
        } else {
            localStorage.removeItem('cartQuantity');
        }
    }, [quantity]);


    const plusQuantity = (itemId) => {
        setQuantity((prevQuant) => {
            const newQuant = { ...prevQuant };
            newQuant[itemId] = (newQuant[itemId] || 0) + 1;
            return newQuant;
        });
    };

    const minusQuantity = (itemId) => {
        setQuantity((prevQuant) => {
            const newQuant = { ...prevQuant };
            if (newQuant[itemId] > 1) {
                newQuant[itemId] -= 1;
            } else {
                newQuant[itemId] = 1;
            }
            return newQuant;
        });
    };


    const removeFromCart = (itemId) => {
        setQuantity((prevQuant) => {
            const newQuant = { ...prevQuant };
            delete newQuant[itemId];
            return newQuant;
        });

        addToCart((prevQuant) => prevQuant.filter((item) => item.id !== itemId));
    };

    const itemTotalPrice = (item) => {
        return item.price * (quantity[item.id] || 0);
    };

    const fullPriceOfCart = cart.reduce((sum, item) => {
        const itemQuantity = quantity[item.id] || 0;
        return sum + item.price * itemQuantity;
    }, 0);



    const [convertedFullPrice, setConvertedFullPrice] = useState(null);
    const [currencyType, setCurrencyType] = useState("initial");


    const toUSD = () => {
        if (currencyType === "USD") {
            setCurrencyType("initial");
        } else {
            const fullpriceUsd = (fullPriceOfCart / currency.usd).toFixed(2) + "$";
            setConvertedFullPrice(fullpriceUsd);
            setCurrencyType("USD");
        }
    };

    const toEUR = () => {
        if (currencyType === "EUR") {
            setCurrencyType("initial");
        } else {
            const fullpriceEur = (fullPriceOfCart / currency.eur).toFixed(2) + "€";
            setConvertedFullPrice(fullpriceEur);
            setCurrencyType("EUR");
        }
    };


    return (
        <>
            {cart.length === 0 ? (
                <EmptyCart onCart={onCart} setonCart={setonCart} />
            ) : (
                <div className={`cart ${onCart ? 'active' : ''}`}>
                    <div className="cart__wrapper">

                        <div className="cart__head">
                            <h4 className="cart__head-title">{t("cartF")}</h4>
                            <img
                                src="/Store/img/icons/close.svg"
                                alt="exit"
                                className="cart__exit"
                                onClick={() => setonCart(false)}
                            />
                        </div>

                        <div className="cart__divider1"></div>

                        <div className="cart__menu">

                            <div className="cart__menu-head">
                                <div className="cart__menu-total">{t("cartC")} {cart.length}</div>
                                {cart.length > 0 ? (
                                    <button className="cart__menu-clear" onClick={() => addToCart([])}>{t("cartClean")}</button>
                                ) : ""}
                            </div>


                            <div className="cart__menu-wrapper">

                                <div className="cart__divider2"></div>

                                {cart.map((item) => (
                                    <div className="cart__menu-item" key={item.id}>
                                        <img
                                            src={`/Store/${item.pic}`}
                                            alt={item.alt}
                                            className="cart__item-img"
                                            onClick={() => {
                                                setonCart(false);
                                                navigate(`/Store/${item.id}`);
                                            }}
                                        />
                                        <div className="cart__item-name"
                                            onClick={() => {
                                                setonCart(false);
                                                navigate(`/Store/${item.id}`);
                                            }}>
                                            {item.name}
                                        </div>
                                        <img
                                            src="/Store/img/icons/close.svg"
                                            alt="removeitem"
                                            className="cart__item-remove"
                                            onClick={() => removeFromCart(item.id)}
                                        />
                                        <div className="cart__value">
                                            <button className="cart__item-incr" onClick={() => plusQuantity(item.id)}>+</button>
                                            <div className="cart__item-count">
                                                <input
                                                    id="cartitemcount"
                                                    name="cartitemcount"
                                                    type="number"
                                                    value={quantity[item.id] || 1}
                                                    min="1"
                                                    max="99"
                                                    onChange={(e) => {
                                                        const newQuantity = Math.max(1, Math.min(99, parseInt(e.target.value)));
                                                        setQuantity((prevQuant) => ({
                                                            ...prevQuant,
                                                            [item.id]: newQuantity,
                                                        }));
                                                    }}
                                                    onKeyDown={(e) => {
                                                        if ((e.key === 'Backspace' || e.key === 'Delete') &&
                                                            (e.target.value === '1' || e.target.value === '')) {
                                                            e.preventDefault();
                                                        }
                                                    }}
                                                />
                                            </div>
                                            <button className="cart__item-decr" onClick={() => minusQuantity(item.id)}>-</button>
                                            <div className="cart__item-price">
                                                {itemTotalPrice(item)}
                                            </div>
                                        </div>
                                    </div>

                                ))}


                            </div>

                            <div className="cart__currency">
                                <div className="cart__usd">
                                    <button onClick={toUSD}>
                                        {currencyType === "USD" ? "To UAH" : "To USD"}
                                    </button>
                                </div>
                                <div className="cart__eur">
                                    <button onClick={toEUR}>
                                        {currencyType === "EUR" ? "To UAH" : "To EUR"}
                                    </button>
                                </div>
                            </div>

                            <div className="cart__divider1"></div>

                            <div className="cart__confirm">
                                <button
                                    className="cart__confirm-exit"
                                    onClick={() => setonCart(false)}
                                >
                                    {t("cartEx")}
                                </button>

                                <div className="cart__confirm-total">
                                    <div className="cart__confirm-total-price">
                                        {currencyType === "initial" ? fullPriceOfCart : convertedFullPrice}
                                    </div>
                                    <button className="cart__confirm-total-btn">{t("cartOr")}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            )}
        </>
    );
};

export default Cart;
