import './_cart.scss';
import './_media__cart.scss';

import { useTranslation } from 'react-i18next';


const EmptyCart = ({ onCart, setonCart }) => {

    const { t } = useTranslation();

    return (
        <div className={`cart ${onCart ? 'active' : ''}`}>
            <div className="cart__wrapper">

                <div className="cart__head">
                    <h4 className="cart__head-title">{t("cartF")}</h4>
                    <img src="/Store/img/icons/close.svg" alt="exit" className="cart__exit" onClick={() => setonCart(false)}></img>
                </div>

                <div className="cart__divider1"></div>
                <div className="cart__menu">

                    <img className='cartempty-img' src="/Store/img/icons/emptycart.svg" alt="EmptyCart" />

                    <div className="cart__divider1"></div>

                    <div className="cartempty__confirm">
                        <button className="cartempty__confirm-exit" onClick={() => setonCart(false)} >{t("cartEx")}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmptyCart;