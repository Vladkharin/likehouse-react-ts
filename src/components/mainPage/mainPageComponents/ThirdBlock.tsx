import { useEffect, useState } from "react";
import React from "react";
import { itemsHouse } from "../../../houses";
import { typeItemsHouse, typeItemHouse } from "../../typesAndIntefaces";
import { Link } from "react-router-dom";

type typeAdditionalServices = {
  ДатаФормирования: string;
  Дома: [];
};

type typeChoiceTypeHouse = { type: "all" | "cottage" | "two-storey house" | "bathhouse" };

export function ThirdBlock() {
  const [additionalServices, setAdditionalServices] = useState<typeAdditionalServices>();
  const [choiceTypeHouse, setChoiceTypeHouse] = useState<typeChoiceTypeHouse>({ type: "all" });

  const fetchUrl = "./1c_site.json";

  const fetchAdditionalServices = async (fetchUrl: string) => {
    const response = await fetch(fetchUrl, { method: "GET" });
    const data: typeAdditionalServices = await response.json();
    setAdditionalServices(data);
  };

  useEffect(() => {
    fetchAdditionalServices(fetchUrl);
  }, [fetchUrl]);

  function findHouseTypes(houses: typeItemsHouse): string[] {
    const typesHouseArray: string[] = [];

    houses.forEach((item) => {
      if (typesHouseArray.indexOf(item.typeHouse) == -1) {
        typesHouseArray.push(item.typeHouse);
      }
    });

    return typesHouseArray;
  }

  function createEntireCatalogOfHouses(houses: typeItemsHouse) {
    const entireCatalogOfHouses: typeItemsHouse = [];

    findHouseTypes(houses).forEach((typeHouse, index) => {
      index = 10000 + index;
      const typeHouseObject = { typeHouse: typeHouse, code: index.toString() };
      entireCatalogOfHouses.push(typeHouseObject);

      houses.forEach((item) => {
        if (item.typeHouse == typeHouse) {
          entireCatalogOfHouses.push(item);
        }
      });
    });

    return entireCatalogOfHouses;
  }

  function getActiveTypeHouses() {
    let activeAllCatalog: typeItemsHouse = [];
    let typeHouse: string = "";

    if (choiceTypeHouse.type != "all") {
      createEntireCatalogOfHouses(itemsHouse).forEach((item, index) => {
        if (item.type == choiceTypeHouse.type) {
          const arr = activeAllCatalog.filter((item) => item.typeHouse == typeHouse);

          if (arr.length === 0 || typeHouse != item.typeHouse) {
            typeHouse = item.typeHouse;
            const houseObject = { typeHouse: item.typeHouse, code: index.toString() };
            activeAllCatalog.push(houseObject);
          } else {
            if (arr[0].typeHouse != typeHouse) {
              index = 9999 + index;
              const houseObject = { typeHouse: item.typeHouse, code: index.toString() };
              activeAllCatalog.push(houseObject);
            }
          }
          activeAllCatalog.push(item);
        }
      });
    } else {
      activeAllCatalog = [...createEntireCatalogOfHouses(itemsHouse)];
    }

    return activeAllCatalog;
  }

  type serviceSections = {
    ДомНаименование: string;
    ДомКод: string;
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
  if (additionalServices) {
    itemsHouse.forEach((item) => {
      let coust = 0;
      additionalServices["Дома"].forEach((service: serviceSections) => {
        if (service["ДомКод"] == item.code) {
          service["Разделы"].forEach((section) => {
            if (section["Раздел"] == "Отделка фасада") {
              coust = coust + section["Подразделы"][0]["Стоимость"];
            }
            if (section["Раздел"] == "Внутренняя отделка и комфорт") {
              coust = coust + section["Подразделы"][0]["Стоимость"];
            }
            if (section["Раздел"] == "Строительство дома в базовой комплектации") {
              coust = coust + section["Подразделы"][0]["Стоимость"];
            }
          });
        }
      });

      if (coust == 0) {
        item.coust = "Скоро будет доступна";
      } else {
        if (item.type != "bathhouse") {
          item.mortgage = (coust / 5).toString();
        }
        item.coust = coust.toString();
      }
    });
  }

  function ThirdBlockTiles() {
    return (
      <div className="fourthAndThirdBlockTogether__inner" key={1000001}>
        {getActiveTypeHouses().map((task) => ThirdBlockTile(task))}
      </div>
    );
  }

  return (
    <div id="catalog" className="fourthAndThirdBlockTogether">
      <div className="container width">
        <div className="fourthAndThirdBlockTogether__wrapper">
          <div className="fourthAndThirdBlockTogether__header">Каталог</div>
          <div className="fourthAndThirdBlockTogether__menuWrapper">
            <button
              className={`fourthAndThirdBlockTogether__text ${choiceTypeHouse.type === "all" ? "changesBg" : ""}`}
              data-modal="all"
              onClick={() => setChoiceTypeHouse({ type: "all" })}
            >
              Весь каталог
            </button>
            <button
              className={`fourthAndThirdBlockTogether__text ${choiceTypeHouse.type === "cottage" ? "changesBg" : ""}`}
              data-modal="cottage"
              onClick={() => setChoiceTypeHouse({ type: "cottage" })}
            >
              1 этаж. дома
            </button>
            <button
              className={`fourthAndThirdBlockTogether__text ${choiceTypeHouse.type === "two-storey house" ? "changesBg" : ""}`}
              data-modal="two-storey house"
              onClick={() => setChoiceTypeHouse({ type: "two-storey house" })}
            >
              2 этаж. дома
            </button>
            <button
              className={`fourthAndThirdBlockTogether__text ${choiceTypeHouse.type === "bathhouse" ? "changesBg" : ""}`}
              data-modal="bathhouse"
              onClick={() => setChoiceTypeHouse({ type: "bathhouse" })}
            >
              Бани
            </button>
          </div>
          <ThirdBlockTiles />
        </div>
      </div>
    </div>
  );
}

function ThirdBlockTile(task: typeItemHouse) {
  switch (Object.keys(task).length) {
    case 12:
      return modalHouse(task);
    case 11:
      return modalBathHouse(task);
    case 2:
      return modalTypeHousesOrBathHouses(task);
  }
}

function stringConversion(task: string) {
  const array: string[] = [];

  // const number = Number(task) - Number(task) * 0.15;

  // task = number.toString();

  // const round = (number: number, accumulator: number) => Math.round(number / accumulator) * accumulator;

  // task = round(number, 1000).toString();

  task?.split("").forEach((item, index) => {
    if (task?.length - index == 7) {
      item = item + " ";
    } else if (task?.length - index == 4) {
      item = item + " ";
    }
    array.push(item);
  });

  return array.join("");
}

function modalHouse(task: typeItemHouse) {
  if (!task.coust || !task.mortgage) {
    return;
  }

  return (
    <React.Fragment key={task.code}>
      <Link to={`/houses/${task.link}`} state={{ task: task }} className="fourthAndThirdBlockTogether__tile">
        <img className="fourthAndThirdBlockTogether__tile-img" src={task.img} alt={task.alt} />
        <div className="fourthAndThirdBlockTogether__tile-text">{task.information ? task.information[0] : false}</div>
        <div className="fourthAndThirdBlockTogether__tile-text">{task.information ? task.information[1] : false}</div>
        <div className="fourthAndThirdBlockTogether__tile-text" id={task.code}>
          Стоимость: {stringConversion(task.coust)} руб.
        </div>
        <div className={"fourthAndThirdBlockTogether__tile-text"}>В ипотеку: от {stringConversion(task.mortgage)} руб.</div>
        <div className="fourthAndThirdBlockTogether__link">
          <img src="./icons/textSvg.svg" alt="link" />
        </div>
      </Link>
    </React.Fragment>
  );
}

function modalBathHouse(task: typeItemHouse) {
  return (
    <React.Fragment key={task.code}>
      <Link to={`/houses/${task.link}`} state={{ task: task }} className="fourthAndThirdBlockTogether__tile">
        <img className="fourthAndThirdBlockTogether__tile-img" src={task.img} alt={task.alt} />
        <div className="fourthAndThirdBlockTogether__tile-text">{task.information ? task.information[0] : false}</div>
        <div className="fourthAndThirdBlockTogether__tile-text">{task.information ? task.information[1] : false}</div>
        <div className="fourthAndThirdBlockTogether__tile-text" id={task.code}>
          Стоимость: {task.coust === "Скоро будет доступна" ? "Скоро будет доступна" : task.coust + " руб."}
        </div>
        <div className="fourthAndThirdBlockTogether__link">
          <img src="./icons/textSvg.svg" alt="link" />
        </div>
      </Link>
    </React.Fragment>
  );
}

function modalTypeHousesOrBathHouses(task: typeItemHouse) {
  return (
    <React.Fragment key={task.code}>
      <div className="fourthBlock__headers">
        {task.typeHouse}
        <div className="fullScreenLine"></div>
      </div>
    </React.Fragment>
  );
}
