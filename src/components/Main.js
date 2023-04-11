import React from 'react';
import pencil from '../images/edit_profile.svg';
import api from '../utils/Api.js';
import Card from './Card.js';

function Main(props) {
    const [userName, setUserName] = React.useState("");
    const [userDescription, setUserDescription] = React.useState("");
    const [userAvatar, setUserAvatar] = React.useState("");
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getAllData()
            .then(([cards, user]) => {
                setUserName(user.name);
                setUserDescription(user.about);
                setUserAvatar(user.avatar);
                setCards(cards);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <main className="main">
            <section className="profile">
                <img className="profile__image-edit" src={pencil} alt="Белый карандаш" onClick={props.onEditAvatar} />
                <img className="profile__image" src={userAvatar} alt="Фото профиля" />
                <h1 className="profile__title">{userName}</h1>
                <button className="profile__edit-btn" type="button" onClick={props.onEditProfile} ></button>
                <p className="profile__subtitle">{userDescription}</p>
                <button className="profile__add-btn" type="button" onClick={props.onAddPlace} ></button>
            </section>

            <section className="elements">
                {cards.map((card) => (
                    <Card card={card} onCardClick={props.onCardClick} key={card._id} />
                ))}
            </section>
        </main>
    );
}

export default Main;