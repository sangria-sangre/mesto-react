import React from 'react';

function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <article className="element">
            <img className="element__image" src={props.card.link} alt={props.card.name} onClick={handleClick} />
            <h2 className="element__title">{props.card.name}</h2>
            <div className="element__column">
                <button className="element__like-btn" type="button"></button>
                <p className="element__likes-number">{props.card.likes.length}</p>
            </div>
            <button className="element__delete-btn" type="button"></button>
        </article>
    );
}

export default Card;