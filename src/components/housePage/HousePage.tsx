import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  typeItemHouse,
  LocationState,
  typeAdditionalService,
  typeInputValue,
  typeListActiveAdditionalServices,
  typeAdditionalServices,
  typeActiveAdditionalService,
} from "../typesAndIntefaces.tsx";

import { basicConfigurationOfTwoStoreyHouses, choiceAdditionalServices } from "../../houses.ts";

import { AdditionalServiceItems } from "./housePageComponents/AdditionalServiceItems.tsx";

export function HousePage() {
  const location = useLocation();
  const { task } = location.state as LocationState;
  const [additionalService, setAdditionalService] = useState<typeAdditionalService>();
  const [house] = useState<typeItemHouse>(task);
  const [coustHouse, setCoustHouse] = useState<string | undefined>(house.coust);
  const [priceAdditionalServices, setPriceAdditionalServices] = useState<number>(0);
  const [inputCoust, setInputCoust] = useState<number>(0);
  const [listActiveAdditionalServices, setListActiveAdditionalServices] = useState<typeListActiveAdditionalServices>([]);

  const [imitationOfTimber, setImitationOfTimber] = useState<typeActiveAdditionalService>({
    name: "",
    code: "",
    count: 0,
    coust: 0,
  });

  const [wallsAndCeilings, setWallsAndCeilings] = useState<typeActiveAdditionalService>({
    name: "",
    code: "",
    count: 0,
    coust: 0,
  });

  const [inputValue, setInputValue] = useState<typeInputValue>({
    Колодец: 0,
    Скважина: 0,
  });
  const [stateInput, setStateInput] = useState<typeInputValue>({
    Колодец: 0,
    Скважина: 0,
  });

  const fetchAdditionalServices = async () => {
    const response = await fetch("./../1c_site.json", { method: "GET" });
    const data: typeAdditionalServices = await response.json();

    data["Дома"].forEach((item: typeAdditionalService) => {
      if (item["ДомКод"] == task.code) {
        setAdditionalService(item);
        let array: typeActiveAdditionalService[] = [];

        item["Разделы"].forEach((section) => {
          if (section["Код"] === "000000008") {
            let wellValue = 0;
            let sumpValue = 0;
            section["Подразделы"].forEach((subsection) => {
              if (subsection["Код"] === "000000126") {
                sumpValue = subsection.Стоимость;
              }

              if (subsection["Код"] === "000000127") {
                wellValue = subsection.Стоимость;
              }
            });

            setInputValue({
              Колодец: wellValue,
              Скважина: sumpValue,
            });
          }

          if (section["Код"] === "000000002") {
            section["Подразделы"].forEach((subsection) => {
              if (subsection["Код"] === "000000144") {
                array.push({
                  name: subsection.Подраздел,
                  code: subsection.Код,
                  count: 1,
                  coust: subsection.Стоимость,
                });

                setImitationOfTimber({
                  name: subsection.Подраздел,
                  code: subsection.Код,
                  count: 1,
                  coust: subsection.Стоимость,
                });

                setInputCoust(inputCoust + subsection.Стоимость);
              }
            });
          }

          if (section["Код"] === "000000003") {
            section["Подразделы"].forEach((subsection) => {
              if (subsection["Код"] === "000000132") {
                array.push({
                  name: subsection.Подраздел,
                  code: subsection.Код,
                  count: 1,
                  coust: subsection.Стоимость,
                });

                setWallsAndCeilings({
                  name: subsection.Подраздел,
                  code: subsection.Код,
                  count: 1,
                  coust: subsection.Стоимость,
                });

                setInputCoust(inputCoust + subsection.Стоимость);
              }
            });
          }
        });

        if (house.coust) {
          setCoustHouse((+house.coust - array.reduce((acc, currentValue) => acc + currentValue.coust, 0)).toString());
          setPriceAdditionalServices(array.reduce((acc, currnetValue) => acc + currnetValue.coust, 0));
        }

        setListActiveAdditionalServices([...array]);
      }
    });
  };

  const scrollToTop = () => {
    const y = window.scrollY;
    window.scrollBy(0, -y);
  };

  useEffect(() => {
    fetchAdditionalServices();

    scrollToTop();
  }, []);

  console.log(listActiveAdditionalServices);
  // console.log(coustHouse);
  // console.log(inputCoust);
  // console.log(coustHouse);
  // console.log(priceAdditionalServices);

  return (
    <React.Fragment>
      <div className="stylePagefirstBlock bath">
        <div className="stylePagecontainer">
          <div className="stylePagefirstBlock__header">{house ? house["houseName"] : "Загружается!"}</div>
          <div className="stylePagefirstBlock__wrapper">
            <div className="stylePagefirstBlock__carousel">
              <img src="../pages/6x6Images/02.jpg" className="stylePagefirstBlock__carousel-item" data-modal="imgs" />
              <button className="stylePagefirstBlock__carousel-right">
                <img src="../icons/NextArrow.png" alt="next" />
              </button>
              <button className="stylePagefirstBlock__carousel-left">
                <img src="../icons/PrevArrow.png" alt="prev" />
              </button>
              {house ? houseImgs(house) : <div>Загружается</div>}
            </div>
            {coustHouse ? houseInformation(house, coustHouse, inputCoust) : <div>Загружается</div>}
          </div>
        </div>
      </div>
      <div className="stylePagesecondBlock">
        <div className="stylePagecontainer">
          <div className="stylePagesecondBlock__header">Базовая комплектация проекта</div>
          {house ? basicConfiguration(house) : false}

          <div className="stylePagesecondBlock__header">Дополнительные услуги</div>
          {additionalService && coustHouse ? (
            AdditionalServiceItems(
              additionalService,
              inputValue,
              stateInput,
              setStateInput,
              listActiveAdditionalServices,
              setListActiveAdditionalServices,
              choiceAdditionalServices,
              setPriceAdditionalServices,
              imitationOfTimber,
              wallsAndCeilings
            )
          ) : (
            <div>Загружается</div>
          )}
        </div>
      </div>
      <div className="stylePagecost">
        СТОИМОСТЬ:<span className="stylePagecost__span">{Number(coustHouse) + priceAdditionalServices}</span> руб.
      </div>
      <div id="id" className="stylePagenone">
        {house.code}
      </div>
    </React.Fragment>
  );
}

function houseInformation(house: typeItemHouse, coustHouse: string, inputCoust: number) {
  return (
    <div className="stylePagefirstBlock__information">
      {house.information
        ? house.information.map((item, index) => {
            index = 10140 + index;
            return (
              <div key={index} className="stylePagefirstBlock__information-text">
                {item}
              </div>
            );
          })
        : false}
      <div className="stylePagefirstBlock__button">
        СТОИМОСТЬ: <span>{Number(coustHouse) + inputCoust} руб.</span>
      </div>
    </div>
  );
}

function houseImgs(house: typeItemHouse) {
  return (
    <div className="stylePagefirstBlock__wrapper-field">
      <div className="stylePagefirstBlock__field">
        {house.imgs
          ? house.imgs.map((item, index) => {
              index = 10201 + index;
              return <img key={index} className="stylePagefirstBlock__field-img" src={item} alt=""></img>;
            })
          : false}
      </div>
    </div>
  );
}

function basicConfiguration(house: typeItemHouse) {
  let arrayConf: string[] = [];
  if (house.type === "two-storey house") {
    arrayConf = basicConfigurationOfTwoStoreyHouses;
  }

  return (
    <div className="stylePagesecondBlock__items">
      {arrayConf.map((item, index) => {
        index = 200212 + index;
        const itemArray = item.split(" ? ");
        return (
          <React.Fragment key={index}>
            <div className="stylePageline"></div>
            <div className="stylePagesecondBlock__item">
              <div className="stylePagesecondBlock__item-name">{itemArray[0]}</div>
              <div className="stylePagesecondBlock__item-key">{itemArray[1]}</div>
            </div>
          </React.Fragment>
        );
      })}
      <div className="stylePageline"></div>
    </div>
  );
}
