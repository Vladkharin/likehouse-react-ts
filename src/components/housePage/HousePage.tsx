import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { typeItemHouse, basicConfigurationOfTwoStoreyHouses } from "../../houses.ts";

type typeAdditionalServices = {
  ДатаФормирования: string;
  Дома: [];
};

type typeAdditionalService = {
  ДомКод: string;
  ДомНаименование: string;
  Разделы: {
    Раздел: string;
    Код: string;
    Подразделы: {
      Подраздел: string;
      Код: string;
      Стоимость: number;
    }[];
  }[];
};

interface LocationState {
  task: typeItemHouse;
}

export function HousePage() {
  const location = useLocation();
  const { task } = location.state as LocationState;
  const [additionalService, setAdditionalService] = useState<typeAdditionalService>();
  const [house] = useState<typeItemHouse>(task);
  const [coustHouse, setCoustHouse] = useState<string | undefined>(house.coust);

  const fetchAdditionalServices = async () => {
    const response = await fetch("./../1c_site.json", { method: "GET" });
    const data: typeAdditionalServices = await response.json();

    // let totalCoust = 0;

    data["Дома"].forEach((item: typeAdditionalService) => {
      if (item["ДомКод"] == task.code) {
        setAdditionalService(item);
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
            {coustHouse ? houseInformation(house, coustHouse) : <div>Загружается</div>}
          </div>
        </div>
      </div>
      <div className="stylePagesecondBlock">
        <div className="stylePagecontainer">
          <div className="stylePagesecondBlock__header">Базовая комплектация проекта</div>
          {house ? basicConfiguration(house) : false}

          <div className="stylePagesecondBlock__header">Дополнительные услуги</div>
          {additionalService && coustHouse ? (
            additionalServiceItems(additionalService, setCoustHouse, coustHouse)
          ) : (
            <div>Загружается</div>
          )}
        </div>
      </div>
      <div className="stylePagecost">
        СТОИМОСТЬ:<span className="stylePagecost__span">{coustHouse}</span> руб.
      </div>
      <div id="id" className="stylePagenone">
        {house.code}
      </div>
    </React.Fragment>
  );
}

function additionalServiceItems(
  services: typeAdditionalService,
  setCoustHouse: React.Dispatch<React.SetStateAction<string | undefined>>,
  coustHouse: string
) {
  const addorSubtractPriceOnButton = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    setCoustHouse: React.Dispatch<React.SetStateAction<string | undefined>>,
    coustHouse: string
  ) => {
    if (event.target instanceof HTMLButtonElement) {
      if (event.target.classList[1] === "stylePageinactiveBtn") {
        event.target.classList.remove("stylePageinactiveBtn");
        event.target.classList.add("stylePageactiveBtn");
        setCoustHouse((Number(coustHouse) - Number(event.target.value)).toString());
      } else if (event.target.classList[1] === "stylePageactiveBtn") {
        event.target.classList.add("stylePageinactiveBtn");
        event.target.classList.remove("stylePageactiveBtn");
        setCoustHouse((Number(coustHouse) - Number(event.target.value)).toString());
      }
    }
  };

  const addorSubtractPriceOnDiv = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    setCoustHouse: React.Dispatch<React.SetStateAction<string | undefined>>,
    coustHouse: string
  ) => {
    if (event.target instanceof HTMLDivElement) {
      const children = event.target.children[0];
      if (children instanceof HTMLButtonElement) {
        if (children.classList[1] === "stylePageinactiveBtn") {
          children.classList.remove("stylePageinactiveBtn");
          children.classList.add("stylePageactiveBtn");
          setCoustHouse((Number(coustHouse) + Number(children.value)).toString());
        } else if (children.classList[1] === "stylePageactiveBtn") {
          children.classList.add("stylePageinactiveBtn");
          children.classList.remove("stylePageactiveBtn");
          setCoustHouse((Number(coustHouse) - Number(children.value)).toString());
        }
      }
    }
  };

  return (
    <div className="stylePagesecondBlock__services">
      {services["Разделы"].map((service, index) => {
        if (service["Раздел"] == "Строительство дома в базовой комплектации") {
          return;
        }
        index = 19192 + index;
        return (
          <React.Fragment key={index}>
            <div className="stylePagesecondBlock__services-header">{service["Раздел"]}</div>
            {service["Подразделы"].map((section, secondIndex: number) => {
              let activeClass = "stylePageinactiveBtn";
              secondIndex = 95959 + secondIndex;

              if (section.Подраздел === "Имитация бруса" || section.Подраздел === "Стены и потолки: имитация бруса") {
                activeClass = "stylePageactiveBtn";
              }

              return (
                <React.Fragment key={secondIndex}>
                  <div className="stylePagesecondBlock__service">
                    <div
                      className="stylePagesecondBlock__service-button"
                      id={section.Код}
                      onClick={(event) => addorSubtractPriceOnDiv(event, setCoustHouse, coustHouse)}>
                      <button
                        className={`stylePagesecondBlock__service-buttonSelector ${activeClass}`}
                        value={section.Стоимость}
                        onClick={(event) => addorSubtractPriceOnButton(event, setCoustHouse, coustHouse)}></button>
                    </div>
                    <div className="stylePagesecondBlock__service-text">
                      {section.Подраздел} + {section.Стоимость.toString()} руб.
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </React.Fragment>
        );
      })}
    </div>
  );
}

function houseInformation(house: typeItemHouse, coustHouse: string) {
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
        СТОИМОСТЬ: <span>{coustHouse} руб.</span>
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
