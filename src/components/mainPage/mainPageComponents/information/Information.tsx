import React, { useState } from "react";
import { FormModal } from "./formModal/FormModal";

type Props = {
  setBodyStyle: React.Dispatch<React.SetStateAction<string>>;
};

export function Information({ setBodyStyle }: Props) {
  const [stateModal, setStateModal] = useState<boolean>(false);

  return (
    <>
      <div className={"firstBlock"}>
        <div className="container">{firstBlockRu(setStateModal)}</div>
        <div className={"animation"}>
          <img src="./icons/partner.svg?ver=1" alt="partner" className="animation__spin" />
        </div>
      </div>
      {FormModal(stateModal, setStateModal, setBodyStyle)}
    </>
  );
}

function firstBlockRu(setStateModal: React.Dispatch<React.SetStateAction<boolean>>) {
  return (
    <>
      <div className="firstBlock__wrapper">
        <h1 className="firstBlock__header desc">
          <p style={{ margin: 0 }}>ЭКСЛЮЗИВНОЕ ПРЕДЛОЖЕНИЕ</p>
        </h1>
        <div className="line smallLine"></div>
        <div className="firstBlock__texts desc">
          <p className="firstBlock__text big">ИПОТЕКА НА СТРОИТЕЛЬСТВО БЕЗ ПЕРВОНАЧАЛЬНОГО ВЗНОСА</p>
          <img src="./icons/эскроу-десктоп.svg" alt="" />
          <p className="firstBlock__text small">Честно строим каркасные дома и бани для жизни круглый год по цене как на сайте</p>
        </div>
        <div className="firstBlock__texts mob">
          <p className="firstBlock__text small">Честно строим каркасные дома и бани для жизни круглый год по цене как на сайте</p>
          <p className="firstBlock__text big">ИПОТЕКА НА СТРОИТЕЛЬСТВО БЕЗ ПЕРВОНАЧАЛЬНОГО ВЗНОСА</p>
          <p className="firstBlock__text small">эксклюзивное предложение для наших клиентов</p>
          <img src="./icons/эскроу-десктоп.svg" alt="" />
        </div>
        <img className="firstBlock__logo" src="./icons/лого.svg" alt="logo" />
      </div>
      <div className="firstBlock__buttons">
        <div className="firstBlock__buttonMediaMax940px">
          <a href="tel:+74951277452">
            <button>Позвонить</button>
          </a>
        </div>

        <div className="firstBlock__buttonMap">
          <a href="#map">
            <button>Земельные участки</button>
          </a>
        </div>

        <div className="firstBlock__buttonMediaMin940px">
          <button onClick={() => setStateModal(true)}>Узнать условия</button>
        </div>
      </div>
    </>
  );
}
