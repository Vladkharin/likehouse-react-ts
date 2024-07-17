import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { itemsHouse, typeItemHouse } from "../../houses.ts";

export function HousePage() {
  const [house, setHouse] = useState<typeItemHouse>();
  const param = useParams();

  console.log(param.houseName);
  useEffect(() => {
    const y = window.scrollY;
    window.scrollBy(0, -y);

    itemsHouse.forEach((item) => {
      if (item.link === param.houseName) {
        setHouse(item);
      }
    });
  }, []);
  return (
    <React.Fragment>
      <div className="stylePagefirstBlock bath">
        <div className="stylePagecontainer">
          <div className="stylePagefirstBlock__header">Микра 5x7</div>
          <div className="stylePagefirstBlock__wrapper">
            <div className="stylePagefirstBlock__carousel">
              <img src="./assets/pages/5x7Images/01.jpg" className="stylePagefirstBlock__carousel-item" data-modal="imgs" />
              <button className="stylePagefirstBlock__carousel-right">
                <img src="./assets/icons/NextArrow.png" alt="next" />
              </button>
              <button className="stylePagefirstBlock__carousel-left">
                <img src="./assets/icons/PrevArrow.png" alt="prev" />
              </button>
              {house ? houseImgs(house) : <div>Загружается</div>}
            </div>
            {house ? houseInformation(house) : <div>Загружается</div>}
          </div>
        </div>
      </div>
      <div className="stylePagesecondBlock">
        <div className="stylePagecontainer">
          <div className="stylePagesecondBlock__header">Базовая комплектация проекта</div>
          <div className="stylePagesecondBlock__items">
            <div className="stylePageline"></div>
            <div className="stylePagesecondBlock__item">
              <div className="stylePagesecondBlock__item-name">Фундамент</div>
              <div className="stylePagesecondBlock__item-key">ЖБ сваи (длинна 3000 мм сечение 150х150 мм)</div>
            </div>
            <div className="stylePageline"></div>
            <div className="stylePagesecondBlock__item">
              <div className="stylePagesecondBlock__item-name">Обработка огнебиозащита</div>
              <div className="stylePagesecondBlock__item-key">Нижний венец дома</div>
            </div>
            <div className="stylePageline"></div>
            <div className="stylePagesecondBlock__item">
              <div className="stylePagesecondBlock__item-name">Обвязка</div>
              <div className="stylePagesecondBlock__item-key">Брус 150х150 мм</div>
            </div>
            <div className="stylePageline"></div>
            <div className="stylePagesecondBlock__item">
              <div className="stylePagesecondBlock__item-name">Перекрытие этажа</div>
              <div className="stylePagesecondBlock__item-key">Доска сечением 45х195 мм (+-5мм) калиброванная камерной сушки</div>
            </div>
            <div className="stylePageline"></div>
            <div className="stylePagesecondBlock__item">
              <div className="stylePagesecondBlock__item-name">Перекрытие чердачное</div>
              <div className="stylePagesecondBlock__item-key">Доска сечением 45х145 мм (+-5мм) калиброванная камерной сушки</div>
            </div>
            <div className="stylePageline"></div>
            <div className="stylePagesecondBlock__item">
              <div className="stylePagesecondBlock__item-name">Наружные стены</div>
              <div className="stylePagesecondBlock__item-key">Доска сечением 45х145 мм (+-5мм) калиброванная камерной сушки</div>
            </div>
            <div className="stylePageline"></div>
            <div className="stylePagesecondBlock__item">
              <div className="stylePagesecondBlock__item-name">Внутренние несущие стены</div>
              <div className="stylePagesecondBlock__item-key">Доска сечением 45х145 мм (+-5мм) калиброванная камерной сушки</div>
            </div>
            <div className="stylePageline"></div>
            <div className="stylePagesecondBlock__item">
              <div className="stylePagesecondBlock__item-name">Перегородки</div>
              <div className="stylePagesecondBlock__item-key">Доска сечением 45х95 мм (+-5мм) калиброванная камерной сушки</div>
            </div>
            <div className="stylePageline"></div>
            <div className="stylePagesecondBlock__item">
              <div className="stylePagesecondBlock__item-name">Обрешётка</div>
              <div className="stylePagesecondBlock__item-key">Доска 25х100/25х150 мм</div>
            </div>
            <div className="stylePageline"></div>
            <div className="stylePagesecondBlock__item">
              <div className="stylePagesecondBlock__item-name">Наружная отделка стен</div>
              <div className="stylePagesecondBlock__item-key">«Имитация бруса» класс AB, 16х136 мм</div>
            </div>
            <div className="stylePageline"></div>
            <div className="stylePagesecondBlock__item">
              <div className="stylePagesecondBlock__item-name">Внутренняя отделка стен</div>
              <div className="stylePagesecondBlock__item-key">«Имитация бруса» класс AB, 16х136 мм</div>
            </div>
            <div className="stylePageline"></div>
            <div className="stylePagesecondBlock__item">
              <div className="stylePagesecondBlock__item-name">Полы</div>
              <div className="stylePagesecondBlock__item-key">Шпунтованная доска толщина 36 мм</div>
            </div>
            <div className="stylePageline"></div>
            <div className="stylePagesecondBlock__item">
              <div className="stylePagesecondBlock__item-name">Отделка потолка</div>
              <div className="stylePagesecondBlock__item-key">«Имитация бруса» класс AB, 16х136 мм</div>
            </div>
            <div className="stylePageline"></div>
            <div className="stylePagesecondBlock__item">
              <div className="stylePagesecondBlock__item-name">Материал кровля</div>
              <div className="stylePagesecondBlock__item-key">Металлочерепица (0,5 мм)</div>
            </div>
            <div className="stylePageline"></div>
            <div className="stylePagesecondBlock__item">
              <div className="stylePagesecondBlock__item-name">Стропильная система</div>
              <div className="stylePagesecondBlock__item-key">Доска сечением 45х145 мм (+-5мм) калиброванная камерной сушки</div>
            </div>
            <div className="stylePageline"></div>
            <div className="stylePagesecondBlock__item">
              <div className="stylePagesecondBlock__item-name">Окна</div>
              <div className="stylePagesecondBlock__item-key">
                Оконные блоки ПВХ двухкамерные (профиль 70мм) (размеры по проекту) с москитными сетками, отливами, наличниками,
                тепло сберегающее покрытие
              </div>
            </div>
            <div className="stylePageline"></div>
            <div className="stylePagesecondBlock__item">
              <div className="stylePagesecondBlock__item-name">Двери межкомнатные</div>
              <div className="stylePagesecondBlock__item-key">Деревянные филёнчатые, наличники</div>
            </div>
            <div className="stylePageline"></div>
            <div className="stylePagesecondBlock__item">
              <div className="stylePagesecondBlock__item-name">Двери входные</div>
              <div className="stylePagesecondBlock__item-key">
                Дверные блоки ПВХ (размеры по проекту), усиленный дверной профиль, двухкамерный стеклопакет (размеры по проекту),
                наличники
              </div>
            </div>
            <div className="stylePageline"></div>
            <div className="stylePagesecondBlock__item">
              <div className="stylePagesecondBlock__item-name">Утепление наружных стен</div>
              <div className="stylePagesecondBlock__item-key">
                ROCKWOOL КАРКАС БАТТС в 3 слоя (150 мм), с укладкой гидроизоляции и пароизоляции ОНДУТИС
              </div>
            </div>
            <div className="stylePageline"></div>
            <div className="stylePagesecondBlock__item">
              <div className="stylePagesecondBlock__item-name">Шумоизоляция</div>
              <div className="stylePagesecondBlock__item-key">
                ROCKWOOL КАРКАС БАТТС Внутренние несущие стены (150мм) и перегородки (100мм)
              </div>
            </div>
            <div className="stylePageline"></div>
            <div className="stylePagesecondBlock__item">
              <div className="stylePagesecondBlock__item-name">Утепление пола</div>
              <div className="stylePagesecondBlock__item-key">
                ROCKWOOL КАРКАС БАТТС в 4 слоя (200 мм),с укладкой гидроизоляции и пароизоляции ОНДУТИС
              </div>
            </div>
            <div className="stylePageline"></div>
            <div className="stylePagesecondBlock__item">
              <div className="stylePagesecondBlock__item-name">Утепление чердачного перекрытия</div>
              <div className="stylePagesecondBlock__item-key">
                ROCKWOOL КАРКАС БАТТС в 3 слоя (150 мм), с укладкой гидроизоляции и пароизоляции ОНДУТИС
              </div>
            </div>
            <div className="stylePageline"></div>
            <div className="stylePagesecondBlock__item">
              <div className="stylePagesecondBlock__item-name">Высота этажа</div>
              <div className="stylePagesecondBlock__item-key">2700 мм</div>
            </div>
            <div className="stylePageline"></div>
          </div>
          <div className="stylePagesecondBlock__header">Дополнительные услуги</div>
          <div className="stylePagesecondBlock__services"></div>
        </div>
      </div>{" "}
      <div className="stylePagethirdBlock">
        <div className="stylePagecontainer">
          <div className="stylePagethirdBlock__header">Видео обзоры</div>
          <div className="stylePagethirdBlock__items">
            <div className="stylePagethirdBlock__item">
              <iframe
                width="186"
                height="330"
                src="https://www.youtube.com/embed/3LRdSvI9eK0?si=KHFOfI24TUCBXmvF"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

function houseInformation(house: typeItemHouse) {
  return (
    <div className="stylePagefirstBlock__information">
      {house.information
        ? house.information.map((item, index) => {
            index = 101 + index;
            return (
              <div key={index} className="stylePagefirstBlock__information-text">
                {item}
              </div>
            );
          })
        : false}
      <div className="stylePagefirstBlock__button">
        СТОИМОСТЬ: <span>{house.coust}</span> руб.
      </div>
    </div>
  );
}

function houseImgs(house: typeItemHouse) {
  return (
    <div className="stylePagefirstBlock__field">
      {house.imgs
        ? house.imgs.map((item, index) => {
            index = 102 + index;
            return <img key={index} className="firstBlock__field-img active" src={item} alt=""></img>;
          })
        : false}
    </div>
  );
}
