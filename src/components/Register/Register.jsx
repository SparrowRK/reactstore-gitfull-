import './_register.scss';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';


const Register = ({ onReg, setReg, setLog }) => {
    const { t } = useTranslation();

    const openLog = () => {
        setReg(false);
        setLog(true);
    }

    const [pass, setPass] = useState("");

    const [showPass, setShowPass] = useState(false);

    const togglePass = () => {
        setShowPass((prev) => !prev)
    }

    const noSpaces = (e) => {
        const removeSpace = e.target.value.replace(/\s+/g, '');
        setPass(removeSpace);
    }


    const stopsub = (e) => {
        e.preventDefault();
    }

    return (
        <div className={`register ${onReg ? 'active' : ''}`}>

            <img className="register__close" src="/Store/img/icons/close.svg" alt="close" onClick={() => setReg(false)} />

            <form className="register__form" method="POST" action="#" onSubmit={stopsub}>
                <h2 className="register__title">{t('register')}</h2>

                <label className="register__email-title" htmlFor="registeruseremail">{t('emailR')}</label>
                <input className="register__email-input" type="email" id="registeruseremail" name="email" required autoFocus={onReg} autoComplete="off" />

                <label className="register__number-title" htmlFor="registerusernumber">{t('phoneR')}</label>
                <input className="register__number-input" type="tel" id="registerusernumber" name="number" required autoComplete="off" />

                <div className="register__password">
                    <label className="register__password-title" htmlFor="registeruserpassword" >{t('passwordR')}</label>
                    <input className="register__password-input" type={showPass ? 'text' : 'password'}
                        value={pass} id="registeruserpassword" name="password" required
                        minLength="6" onChange={noSpaces} autoComplete="off" />
                    {pass && (
                        <span className="register__password-toggle" id="togglePassword" onClick={togglePass}>{showPass ? "👁️" : "🙈"}</span>
                    )}
                </div>

                <label className="register__password-reptitle" htmlFor="registeruserpasswordRepeat">{t('repeatpassR')}</label>
                <input className="register__password-repinput" type="password" id="registeruserpasswordRepeat" name="passwordRepeat"
                    required minLength="6" autoComplete="new-passwordrepeat" />


                <button className="register__btn" type="submit">{t('enterR')}</button>

                <p className="register__ask">{t('alreadyR')}</p>
                <a className="register__login" onClick={openLog}>{t('loginW')}</a>

            </form>
        </div>

    )
}

export default Register;