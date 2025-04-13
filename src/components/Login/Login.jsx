import './_login.scss';
import { useTranslation } from 'react-i18next';


import { useState } from 'react';

const Login = ({ onLog, setLog, setReg }) => {

    const { t } = useTranslation();


    const openReg = () => {
        setLog(false);
        setReg(true);
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
        <div className={`login ${onLog ? 'active' : ''}`}>
            <img className="login__close" src="/Store/img/icons/close.svg" alt="close" onClick={() => setLog(false)} />
            {onLog && (
                <form className="login__form" method="POST" action="#" onSubmit={stopsub} >
                    <h2 className="login__title">{t("login")}</h2>

                    <label className="login__email-title" htmlFor="useremail">{t("email")}</label>
                    <input className="login__email-input" type="email" id="useremail" name="email" required autoComplete="email" autoFocus={onLog} />

                    <div className="login__password">
                        <label className="login__password-title" htmlFor="userpassword">{t("password")}</label>
                        <input className="login__password-input" type={showPass ? 'text' : 'password'}
                            value={pass} id="userpassword" name="password" autoComplete="current-password" required
                            onChange={noSpaces}
                            tabIndex={onLog ? 0 : -1}
                        />
                        {pass && (
                            <span className="login__password-toggle" id="togglePassword" onClick={togglePass}>{showPass ? "👁️" : "🙈"}</span>
                        )}
                    </div>

                    <button className="login__btn" type="submit" disabled={!onLog} >{t("enter")}</button>
                    <p className="login__ask">{t("firstT")}</p>
                    <button className="login__register" type="button" onClick={openReg}>{t("registerW")}</button>
                </form>
            )}
        </div>
    )
}

export default Login;