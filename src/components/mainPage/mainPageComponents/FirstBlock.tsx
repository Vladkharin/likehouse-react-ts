import React, { useState } from "react";
import { arrayNameAndNumber, arrayPositionBG } from "../../../houses";

export function FirstBlock() {
  const [stateModal, setStateModal] = useState<boolean>(false);
  const [stateContextMenu, setStateContextMenu] = useState<boolean>(false);
  return (
    <div className="firstBlock">
      <div className="container">
        <div className="firstBlock__wrapper">
          <div className="firstBlock__header">
            Лайк <span>Хаус</span>
          </div>
          <div className="line smallLine"></div>
          <h1 className="firstBlock__title">Строим каркасные дома и бани с ориентированием на честное отношение к клиентам</h1>
        </div>
        <div className="firstBlock__buttons">
          <div className="firstBlock__buttonMediaMax940px">
            <a href="tel:+74951277452">
              <button>Позвонить</button>
            </a>
          </div>
          <div className="firstBlock__buttonMediaMin940px">
            <button onClick={() => setStateModal(true)}>Бесплатная консультация</button>
          </div>
          <div className="firstBlock__buttonMap">
            <a href="#map">
              <button>Земельные участки</button>
            </a>
          </div>
          <div className="firstBlock__buttonMap blink">
            <p>РАБОТАЕМ ЧЕРЕЗ ЭСКРОУ-СЧЁТ</p>
          </div>
        </div>
      </div>
      <div className="animation">
        <img src="./icons/partner.svg?ver=1" alt="partner" className="animation__spin" />
      </div>

      {modal(stateModal, setStateModal, stateContextMenu, setStateContextMenu)}
    </div>
  );
}

function modal(
  stateModal: boolean,
  setStateModal: React.Dispatch<React.SetStateAction<boolean>>,
  stateContextMenu: boolean,
  setStateContextMenu: React.Dispatch<React.SetStateAction<boolean>>
) {
  let modalActiveStyle = "none";
  let contextMenuActiveStyle = "none";
  if (stateModal) {
    modalActiveStyle = "flex";
  }

  if (stateContextMenu) {
    contextMenuActiveStyle = "flex";
  }
  return (
    <div className="feedBack" style={{ display: modalActiveStyle }}>
      <div className="feedBack__wrapper">
        <img className="feedBack__mainImg" src="./img/Видовой_кадр_01_9.5x14.jpg?v=1" alt="feedback" />
        <form action="sendmail.php" className="feedBack__form">
          <div className="feedBack__form-header">Оставьте заявку</div>
          <input className="feedBack__from-inputText _req" name="user_name" type="text" placeholder="Ваше имя" />
          <div className="feedBack__menu">
            <div
              className="feedBack__menu-flag"
              onClick={() => {
                if (stateContextMenu) {
                  setStateContextMenu(false);
                } else {
                  setStateContextMenu(true);
                }
              }}></div>
            <div
              className="feedBack__menu-arrow"
              onClick={() => {
                if (stateContextMenu) {
                  setStateContextMenu(false);
                } else {
                  setStateContextMenu(true);
                }
              }}></div>
            <div className="feedBack__menu-number">+7</div>
          </div>
          <input
            className="feedBack__from-inputPhone _req"
            name="user_phone"
            type="tel"
            placeholder="(999) 999-99-99"
            data-phonemask="+7"
          />
          <button type="submit" className="feedBack__form-submit">
            <div className="loader none"></div>
            <div className="feedBack__form-submitText block">Отправить</div>
          </button>
          <div className="feedBack__form-text">Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности</div>
          <div className="feedBack__form-imgs">
            <a href="https://vk.com/like_house">
              <img src="./icons/Tilda_Icons_26snw_vk.svg" alt="" className="feedBack__form-img" />
            </a>
            <a href="https://wa.clck.bar/79251047452">
              <img src="./icons/Tilda_Icons_26snw_wh.svg" alt="" className="feedBack__form-img" />
            </a>
          </div>

          <img src="./icons/touch.svg" alt="" className="feedBack__form-touch" />
          <div className="feedBack__menu-buttons" style={{ display: contextMenuActiveStyle }}>
            {" "}
            {contextMenu()}
          </div>
          <div className="error tl17585 notVisible">Обязательное поле</div>
          <div className="errorBig tl17585">Слишком длиное значение</div>
          <div className="error tl24085 notVisible">Обязательное поле</div>
          <div className="errorTel tl24085">Слишком короткое значение</div>
          <div className="crestik" onClick={() => setStateModal(false)}>
            <img src="./icons/crestik.svg" alt="" />
          </div>
        </form>
        <div className="feedBackModal none">
          <div className="feedBackModal__wrapper">
            <img src="./icons/crestikBlack.svg" alt="" className="crestikBlack" />
            <div className="feedBackModal__complete"></div>
            <div className="feedBackModal__text">Спасибо! Данные успешно отправлены.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function contextMenu() {
  return (
    <>
      {createArrCountryCatalog().map((item, index) => {
        return (
          <div key={index + 919923} className="feedBack__menu-button">
            <div className="feedBack__menu-buttonLeft">{item.name}</div>
            <div className="feedBack__menu-buttonRight">
              <div className="feedBack__menu-buttonNumber" data-position={item.position}>
                {item.number}
              </div>
              <div className="img" style={{ backgroundPosition: item.position }}></div>
            </div>
          </div>
        );
      })}
    </>
  );
}

function createArrCountryCatalog() {
  const countryCatalog = [];

  for (let i = 0; i < arrayNameAndNumber.length; i++) {
    const indexPosition = arrayPositionBG.indexOf(arrayNameAndNumber[i]);

    if (indexPosition != -1) {
      let task = {
        name: arrayNameAndNumber[i + 1],
        number: arrayNameAndNumber[i + 2],
        position: `${arrayPositionBG[indexPosition + 1]} ${arrayPositionBG[indexPosition + 2]}`,
      };

      countryCatalog.push(task);
    }
  }

  return countryCatalog;
}
