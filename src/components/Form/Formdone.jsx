

const Formdone = ({ restartForm, submit }) => {


    return submit ? (

        <div className="formsend" >
            <img className="formsend__close" src="/Store/img/icons/close.svg" alt="close" onClick={restartForm} />
            <p>Спасибо за Ваш отзыв. <br /> Письмо успешно отправлено</p>
        </div >
    )
        : null;
    // <div className="formsend" >
    //     <img className="formsend__close" src="img/icons/close.svg" alt="close" onClick={restartForm} />
    //     <p>Произошла ошибка <br /> Попробуйте пожалуйста позже</p>
    // </div >

}

export default Formdone;