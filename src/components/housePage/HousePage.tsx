import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  typeItemHouse,
  typeAdditionalService,
  typeInputValue,
  typeListActiveAdditionalServices,
  typeAdditionalServices,
  typeActiveAdditionalService,
} from "../typesAndIntefaces.tsx";

import {
  choiceAdditionalServices,
  basicConfigurationOfTwoStoreyHouses,
  basicConfigurationOfCottage,
  basicConfigurationBathHouse,
  basicConfigurationArchitectCottageHouse,
  basicConfigurationCloverCottageHouse,
  itemsHouse,
} from "../../houses.ts";

import { AdditionalServiceItems } from "./housePageComponents/AdditionalServiceItems.tsx";

export function HousePage() {
  const location = useLocation();

  const [additionalService, setAdditionalService] = useState<typeAdditionalService>();
  const [house, setHouse] = useState<typeItemHouse>();
  const [coustHouse, setCoustHouse] = useState<string | undefined>(house?.coust);
  const [priceAdditionalServices, setPriceAdditionalServices] = useState<number>(0);
  const [listActiveAdditionalServices, setListActiveAdditionalServices] = useState<typeListActiveAdditionalServices>([]);
  const [activeImgIndex, setActiveImgIndex] = useState<number>(0);
  const [stateModal, setStateModal] = useState<boolean>(false);

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

  const getHouse = () => {
    const pathName = location.pathname.split("/")[2];
    const house = itemsHouse.filter((item) => item.link === pathName)[0];
    setHouse(house);

    return house;
  };

  const fetchAdditionalServices = async () => {
    const house = getHouse();

    const response = await fetch("./../1c_site.json", { method: "GET" });
    const data: typeAdditionalServices = await response.json();

    data["Дома"].forEach((item: typeAdditionalService) => {
      if (item["ДомКод"] == house?.code) {
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
              }
            });
          }

          if (section["Раздел"] === "Строительство дома в базовой комплектации") {
            setCoustHouse(section["Подразделы"][0].Стоимость.toString());
          }
        });

        if (house.coust) {
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

  useEffect(() => {
    document.title = house?.houseName as string;
  });

  function viewAddtionalServicesBlock() {
    return (
      <>
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
      </>
    );
  }

  return (
    <React.Fragment>
      <div className="stylePagefirstBlock bath">
        <div className="stylePagecontainer">
          <div className="stylePagefirstBlock__header">{house ? house["houseName"] : "Загружается!"}</div>
          <div className="stylePagefirstBlock__wrapper">
            <div className="stylePagefirstBlock__carousel">
              <img
                src={house?.imgs ? house.imgs[activeImgIndex] : ""}
                className="stylePagefirstBlock__carousel-item"
                data-modal="imgs"
                onClick={() => setStateModal(true)}
              />
              <button
                className="stylePagefirstBlock__carousel-right"
                onClick={() => (house ? mainSlider(activeImgIndex, setActiveImgIndex, house, "plus") : false)}>
                <img src="../icons/NextArrow.png" alt="next" />
              </button>
              <button
                className="stylePagefirstBlock__carousel-left"
                onClick={() => (house ? mainSlider(activeImgIndex, setActiveImgIndex, house, "minus") : false)}>
                <img src="../icons/PrevArrow.png" alt="prev" />
              </button>
              {house ? houseImgs(house, activeImgIndex, setStateModal, setActiveImgIndex) : <div>Загружается</div>}
            </div>
            {coustHouse && house ? houseInformation(house, coustHouse, priceAdditionalServices) : <div>Загружается</div>}
          </div>
        </div>
      </div>
      <div className="stylePagesecondBlock">
        <div className="stylePagecontainer">
          <div className="stylePagesecondBlock__header">Базовая комплектация проекта</div>
          {house ? basicConfiguration(house) : false}

          {house?.type != "bathhouse" ? viewAddtionalServicesBlock() : ""}
        </div>
      </div>
      <div className="stylePagecost">
        СТОИМОСТЬ:
        <span className="stylePagecost__span">
          {coustHouse == "Скоро будет доступна" ? "Скоро будет" : Number(coustHouse) + priceAdditionalServices + " руб."}
        </span>
      </div>
      <div id="id" className="stylePagenone">
        {house?.code}
      </div>
      {house ? modal(stateModal, house, setStateModal, activeImgIndex, setActiveImgIndex) : false}
    </React.Fragment>
  );
}

function houseInformation(house: typeItemHouse, coustHouse: string, priceAdditionalServices: number) {
  return (
    <div className="stylePagefirstBlock__information">
      {house.information
        ? house.information.map((item, index) => {
            index = 10140 + index;
            if (item.split(":")[0] === "Размер") {
              if (house.type != "bathhouse") {
                item = item.split(":")[0] + " дома: " + item.split(":")[1].split(" ")[1];
              } else {
                item = item.split(":")[0] + " бани: " + item.split(":")[1].split(" ")[1];
              }
            }

            if (item.split(":")[0] === "Площадь") {
              if (house.type != "bathhouse") {
                item = item.split(":")[0] + " дома: " + item.split(":")[1];
              } else {
                item = item.split(":")[0] + " бани: " + item.split(":")[1];
              }
            }

            return (
              <div key={index} className="stylePagefirstBlock__information-text">
                {item}
              </div>
            );
          })
        : false}
      <div className="stylePagefirstBlock__button">
        СТОИМОСТЬ:{" "}
        <span>
          {coustHouse == "Скоро будет доступна" ? "Скоро будет" : Number(coustHouse) + priceAdditionalServices + " руб."}
        </span>
      </div>
    </div>
  );
}

function houseImgs(
  house: typeItemHouse,
  activeImgIndex: number,
  setStateModal: React.Dispatch<React.SetStateAction<boolean>>,
  setActiveImgIndex: React.Dispatch<React.SetStateAction<number>>
) {
  let translate = 0;
  if (house.imgs && activeImgIndex > 1 && activeImgIndex < house.imgs.length - 1) {
    translate = -180 * (activeImgIndex - 1);
  } else if (house.imgs && activeImgIndex == house.imgs.length - 1) {
    translate = -180 * (activeImgIndex - 2);
  }
  return (
    <div className="stylePagefirstBlock__wrapper-field">
      <div className="stylePagefirstBlock__field" style={{ transform: `translateX(${translate}px)` }}>
        {house.imgs
          ? house.imgs.map((item, index) => {
              let activeClass = "";
              if (index == activeImgIndex) {
                activeClass = "stylePageactive";
              }

              index = 10201 + index;
              return (
                <img
                  key={index}
                  className={`stylePagefirstBlock__field-img ` + activeClass}
                  src={item}
                  alt=""
                  onClick={() => {
                    setActiveImgIndex(index - 10201);
                    setStateModal(true);
                  }}></img>
              );
            })
          : false}
      </div>
    </div>
  );
}

function mainSlider(
  activeImgIndex: number,
  setActiveImgIndex: React.Dispatch<React.SetStateAction<number>>,
  house: typeItemHouse,
  action: string
) {
  let number = 0;
  if (action == "plus") {
    number = activeImgIndex + 1;
  } else {
    number = activeImgIndex - 1;
  }

  if (house.imgs && number >= house.imgs.length) {
    number = 0;
  } else if (house.imgs && number < 0) {
    number = house.imgs.length - 1;
  }
  setActiveImgIndex(number);
}

function basicConfiguration(house: typeItemHouse) {
  let arrayConf: string[] = [];
  switch (house.type) {
    case "two-storey house":
      if (
        house.typeHouse === "Клевер" ||
        house.typeHouse === "Шварц" ||
        house.typeHouse === "Эркерия" ||
        house.typeHouse === "Классик"
      ) {
        arrayConf = basicConfigurationCloverCottageHouse;
      } else {
        arrayConf = basicConfigurationOfTwoStoreyHouses;
      }
      break;
    case "cottage":
      switch (house.typeHouse) {
        case "Архитект":
          arrayConf = basicConfigurationArchitectCottageHouse;
          break;
        default:
          arrayConf = basicConfigurationOfCottage;
          break;
      }
      break;
    case "bathhouse":
      arrayConf = basicConfigurationBathHouse;
      break;
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

function modal(
  stateModal: boolean,
  house: typeItemHouse,
  setStateModal: React.Dispatch<React.SetStateAction<boolean>>,
  activeImgIndex: number,
  setActiveImgIndex: React.Dispatch<React.SetStateAction<number>>
) {
  let activeStyleWrapper = "stylePagenotVisible";

  if (stateModal) {
    activeStyleWrapper = "";
  }

  return (
    <div className={"stylePagemodalMain stylePagebgwhite " + activeStyleWrapper}>
      <div className="stylePagemodalMain__wrapper">
        <button className="stylePagemodal__closeBlack" onClick={() => setStateModal(false)}>
          {" "}
        </button>
        {house.imgs
          ? house.imgs.map((img, index) => {
              index += 123234432;

              let activeClassSlide = "stylePagenone";

              if (house.imgs && house.imgs[activeImgIndex] == img) {
                activeClassSlide = "stylePageBlock";
              }
              return (
                <img
                  key={index}
                  className={"stylePagemodalMain__img stylePageslider stylePagemodalBig " + activeClassSlide}
                  src={img}
                  alt=""
                />
              );
            })
          : false}
        <button
          className="stylePagemodal__right"
          onClick={() => {
            let number = activeImgIndex + 1;
            if (house.imgs && number >= house.imgs.length) {
              setActiveImgIndex(0);
            } else {
              setActiveImgIndex(number);
            }
          }}>
          <img src="../icons/NextArrow.png" alt="next" />
        </button>
        <button
          className="stylePagemodal__left"
          onClick={() => {
            let number = activeImgIndex - 1;
            if (house.imgs && number < 0) {
              setActiveImgIndex(house.imgs.length - 1);
            } else {
              setActiveImgIndex(number);
            }
          }}>
          <img src="../icons/PrevArrow.png" alt="prev" />
        </button>
      </div>
    </div>
  );
}
