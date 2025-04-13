import './_overlay.scss';

const Overlay = ({ onMenu, setonMenu, onCart, setonCart, onLog, setLog, onReg, setReg, form, setForm, restartForm, filters, setFilters }) => {

    const closeOverlay = () => {
        setonMenu(false);
        setonCart(false);
        setReg(false)
        setLog(false);
        setForm(false);
        restartForm();
        setFilters(false);
    };

    return (
        <div className="overlay"
            style={{ display: (onMenu || onCart || onLog || onReg || form || filters) ? "block" : "none" }}
            onClick={closeOverlay} >
        </div>
    )

}

export default Overlay;