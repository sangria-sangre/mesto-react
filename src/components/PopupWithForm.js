function PopupWithForm(props) {
    return (
        <section className={`popup popup_${props.name} ${props.isOpen ? "popup_opened" : ""}`}>
            <div className="popup__container">
                <button className="popup__close-btn" type="button" onClick={props.isClose}></button>
                <form className="popup__form" action="get" name={`${props.name}`} noValidate>
                    <h2 className="popup__title"> {props.title} </h2>
                    {props.children}
                    <button className="popup__save-btn popup__save-btn_profile" type="submit">
                        <span className="popup__btn-default-name">{props.btn}</span>
                        <span className="popup__loading">{props.btnOn}</span></button>
                </form>
            </div>
        </section>
    );
}

export default PopupWithForm;