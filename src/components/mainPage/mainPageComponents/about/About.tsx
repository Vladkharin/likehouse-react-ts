import React from "react";
import { INFORMATION, ADVANTAGES, listItem } from "./data";
import { SliderWithForm } from "./sliderWithForm/SliderWithForm";

export function About() {
  return (
    <div id="about" className="secondBlock">
      <div className="container">
        <SliderWithForm />
        <div className="secondBlock__wrapper">
          <div className="secondBlock__header"> О нас</div>
          <div className="secondBlock__title">
            Лайк Хаус — это строительная компания, которая создавалась с ориентированием на честное отношение к клиентам, это подтверждают
            наши многочисленные отзывы и хорошая репутация.
            <span>МЫ ЧЕСТНО ПОСТРОИМ ВАМ НАДЕЖНЫЙ ДОМ, ПО ЦЕНЕ УКАЗАННОЙ НА САЙТЕ</span>
            При выборе дома в первую очередь стоит обращать внимание не только на стоимость, но и на комплектацию. В Стоимость наших домов
            (базовая комплектация) включено все, чтобы вы могли круглогодично (ПМЖ) в нем проживать без лишних вложений. Вам останется
            ввести коммуникации, которые также смогут вам установить наши специалисты.
          </div>
          <SecondBlockLists />
        </div>
      </div>
    </div>
  );
}

function SecondBlockFirstItem(item: listItem): JSX.Element {
  return (
    <React.Fragment key={item.uniqueId}>
      <div className="secondBlock__item">
        <div className="secondBlock__item-number">{item.value}</div>
        <div className="secondBlock__item-title">{item.text}</div>
      </div>
    </React.Fragment>
  );
}

function SecondBlockSecondItem(item: listItem): JSX.Element {
  return (
    <React.Fragment key={item.uniqueId}>
      <div className="line"></div>
      <div className="secondBlock__secondListItem">
        <div className="secondBlock__secondItem-number">{item.value}</div>
        <div className="secondBlock__item-title2">{item.text}</div>
      </div>
    </React.Fragment>
  );
}

function SecondBlockLists(): JSX.Element {
  return (
    <>
      <div className="secondBlock__list" key={999}>
        {ADVANTAGES.map((item: listItem) => SecondBlockFirstItem(item))}
      </div>
      <div className="secondBlock__secondList" key={998}>
        {INFORMATION.map((item: listItem) => SecondBlockSecondItem(item))}
      </div>
    </>
  );
}
