import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
  const [isEditProfilePopupOpen, setProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({name: '', link: ''});

  function handleEditAvatarClick() {
    setAvatarPopupOpen(true);

  }

  function handleEditProfileClick() {
    setProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setPlacePopupOpen(true);
  }

  function handleCardClick(element) {
    setSelectedCard(element);
  }

  function closeAllPopups() {
    setProfilePopupOpen(false);
    setAvatarPopupOpen(false);
    setPlacePopupOpen(false);
    setSelectedCard({name: '', link: ''});
  }

  return (
    <div className="body">

      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} />
        <Footer />
      </div>

      <PopupWithForm isOpen={isEditProfilePopupOpen} isClose={closeAllPopups} name="profile"
        title="Редактировать профиль" btn="Сохранить" btnOn="Сохранение..."
        children={
          <>
            <input className="popup__input popup__input_profile_title" id="title-input" type="text" name="name"
              minLength="2" maxLength="40" required noValidate />
            <span className="popup__input-error title-input-error"></span>
            <input className="popup__input popup__input_profile_subtitle" id="subtitle-input" type="text" name="about"
              minLength="2" maxLength="200" required />
            <span className="popup__input-error subtitle-input-error"></span>
          </>
        } />
      <PopupWithForm isOpen={isEditAvatarPopupOpen} isClose={closeAllPopups} name="avatar-update"
        title="Обновить аватар" btn="Сохранить" btnOn="Сохранение..." children={
          <>
            <input className="popup__input popup__input_avatar-update" id="url-avatar" type="url" name="avatar"
              placeholder="Ссылка на картинку" required />
            <span className="popup__input-error url-avatar-error"></span>
          </>} />
      <PopupWithForm isOpen={isAddPlacePopupOpen} isClose={closeAllPopups} name="item"
        title="Новое место" btn="Создать" btnOn="Создание..." children={
          <>
            <input className="popup__input popup__input_item_title" id="name-input" type="text" name="name"
              placeholder="Название" minLength="2" maxLength="30" required />
            <span className="popup__input-error name-input-error"></span>
            <input className="popup__input popup__input_item_image" id="url-input" type="url" name="link"
              placeholder="Ссылка на картинку" required />
          </>} />
      <PopupWithForm isOpen={false} isClose={closeAllPopups} name="delete-item" title="Вы уверены?" children="" />
      <ImagePopup isOpen={selectedCard} isClose={closeAllPopups} />

    </div>
  );
}

export default App;
