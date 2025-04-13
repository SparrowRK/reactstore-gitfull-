import './_form.scss';
import './_media__form.scss';


import Formdone from './Formdone';

import { useTranslation } from 'react-i18next';


const Form = ({ form, setForm, restartForm, submit, setSubmit }) => {

    const { t } = useTranslation();

    const closeForm = () => {
        setForm(false);
        setSubmit(false);
    }

    const sendForm = (e) => {
        e.preventDefault();
        setSubmit(true);
    };



    return (

        form && (
            <div className={`request ${form ? 'active' : ''}`}>

                {submit ? (
                    <Formdone restartForm={restartForm} submit={submit} />
                ) : (

                    <form className="request__form" method="POST" action="#" onSubmit={sendForm}>

                        <img className="request__close" src="/Store/img/icons/close.svg" alt="close" onClick={closeForm} />

                        <p className="request__title">{t("requestP1")} <br />{t("requestP2")} <br /> <br />
                            {t("requestP3")}</p>

                        <label className="request__email-title" htmlFor="useremail">{t("requestEm")}</label>
                        <input className="request__email-input" type="email" id="useremail" name="email" required autoFocus />

                        <label className="request__name-title" htmlFor="name">{t("requestNm")}</label>
                        <input className="request__name-input" type="text" id="name" name="name" required />

                        <label className="request__text-title" htmlFor="usertext">{t("requestT")}</label>
                        <textarea className="request__text-input" id="usertext" name="usertext" required></textarea>

                        <button className="request__btn" type="submit">{t("requestSend")}</button>

                    </form>
                )}
            </div>
        )
    )
}

export default Form;