import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  typeItemHouse,
  basicConfigurationOfTwoStoreyHouses,
  choiceAdditionalServices,
  typeChoiceAdditionalServices,
} from "../../houses.ts";

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

type typeInputValue = {
  Колодец: number;
  Скважина: number;
};

type typeActiveAdditionalService = {
  name: string;
  code: string;
  count: number;
};

type typeListActiveAdditionalServices = typeActiveAdditionalService[];

export function HousePage() {
  const location = useLocation();
  const { task } = location.state as LocationState;
  const [additionalService, setAdditionalService] = useState<typeAdditionalService>();
  const [house] = useState<typeItemHouse>(task);
  const [coustHouse, setCoustHouse] = useState<string | undefined>(house.coust);
  const [inputCoust, setInputCoust] = useState<number>(0);
  const [inputValue, setInputValue] = useState<typeInputValue>({
    Колодец: 0,
    Скважина: 0,
  });
  const [stateInput, setStateInput] = useState<typeInputValue>({
    Колодец: 0,
    Скважина: 0,
  });

  const [listActiveAdditionalServices, setListActiveAdditionalServices] = useState<typeListActiveAdditionalServices>([
    {
      name: "Имитация бруса",
      code: "000000144",
      count: 1,
    },
    {
      name: "Стены и потолки: имитация бруса",
      code: "000000132",
      count: 1,
    },
  ]);

  const fetchAdditionalServices = async () => {
    const response = await fetch("./../1c_site.json", { method: "GET" });
    const data: typeAdditionalServices = await response.json();

    data["Дома"].forEach((item: typeAdditionalService) => {
      if (item["ДомКод"] == task.code) {
        setAdditionalService(item);

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
        });
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
            additionalServiceItems(
              additionalService,
              setCoustHouse,
              coustHouse,
              setInputCoust,
              inputValue,
              stateInput,
              setStateInput,
              listActiveAdditionalServices,
              setListActiveAdditionalServices,
              choiceAdditionalServices
            )
          ) : (
            <div>Загружается</div>
          )}
        </div>
      </div>
      <div className="stylePagecost">
        СТОИМОСТЬ:<span className="stylePagecost__span">{Number(coustHouse) + inputCoust}</span> руб.
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
  coustHouse: string,
  setInputCoust: React.Dispatch<React.SetStateAction<number>>,
  inputValue: typeInputValue,
  stateInput: typeInputValue,
  setStateInput: React.Dispatch<React.SetStateAction<typeInputValue>>,
  listActiveAdditionalServices: typeListActiveAdditionalServices,
  setListActiveAdditionalServices: React.Dispatch<React.SetStateAction<typeListActiveAdditionalServices>>,
  choiceAdditionalServices: typeChoiceAdditionalServices
) {
  function mutuallyExclusive(code: string) {
    let choiceArray: typeActiveAdditionalService[] = [];
    choiceAdditionalServices["mutually exclusive"][code].forEach((item) => {
      const choiceItem = listActiveAdditionalServices.find((el) => el.code == item);

      if (choiceItem !== undefined) {
        choiceArray.push(choiceItem)
      }
    });
    return choiceArray
  }

  function onBtn(code: string, name: string, count = 1) {
    // console.log(choiceAdditionalServices["cant be removed without"][code]);
    // console.log(choiceAdditionalServices["mutually exclusive"][code]);
    // console.log(choiceAdditionalServices["cant choose without"][code]);

    let array = [];

    if (choiceAdditionalServices["mutually exclusive"][code]) {
      array.push(...mutuallyExclusive(code));
    }

    const s = listActiveAdditionalServices.filter(e => !array.includes(e))

      const object: typeActiveAdditionalService = {
      name: name,
      code: code,
      count: count,
    };

    s.push(object)
    setListActiveAdditionalServices([...s]);
  }

  function offBtn(code: string) {

    let endArray = listActiveAdditionalServices.filter((item) => item.code != code)
    if (listActiveAdditionalServices.filter((item) => item.code == '000000144').length == 1) {
      endArray.push({
        code: '000000144',
        name: 'Имитация бруса',
        count: 1
      })
    }
    setListActiveAdditionalServices([...endArray]);
  }

  const addorSubtractPriceOnButton = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    setCoustHouse: React.Dispatch<React.SetStateAction<string | undefined>>,
    coustHouse: string,
    code: string,
    name: string
  ) => {
    if (event.target instanceof HTMLButtonElement) {
      if (event.target.classList[1] === "stylePageinactiveBtn") {
        onBtn(code, name);
        setCoustHouse((Number(coustHouse) - Number(event.target.value)).toString());
      } else if (event.target.classList[1] === "stylePageactiveBtn") {
        offBtn(code);
        setCoustHouse((Number(coustHouse) - Number(event.target.value)).toString());
      }
    }
  };

  const addorSubtractPriceOnDiv = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    setCoustHouse: React.Dispatch<React.SetStateAction<string | undefined>>,
    coustHouse: string,
    code: string,
    name: string
  ) => {
    if (event.target instanceof HTMLDivElement) {
      const children = event.target.children[0];
      if (children instanceof HTMLButtonElement) {
        if (children.classList[1] === "stylePageinactiveBtn") {
          onBtn(code, name);
          setCoustHouse((Number(coustHouse) + Number(children.value)).toString());
        } else if (children.classList[1] === "stylePageactiveBtn") {
          offBtn(code);
          setCoustHouse((Number(coustHouse) - Number(children.value)).toString());
        }
      }
    }
  };

  function cnslLog(
    event: React.FormEvent<HTMLInputElement>,
    setInputCoust: React.Dispatch<React.SetStateAction<number>>,
    inputValue: typeInputValue,
    setStateInput: React.Dispatch<React.SetStateAction<typeInputValue>>,
    code: string,
    name: string
  ) {
    if (event.target instanceof HTMLInputElement) {
      const element = event.target.parentElement?.previousSibling as HTMLButtonElement;
      let coust = 0;
      if (isNaN(event.target.valueAsNumber)) {
        coust = 0;
        event.target.valueAsNumber = 0;
        setStateInput({ Скважина: 0, Колодец: 0 });
      } else if (event.target.valueAsNumber > 0) {
        onBtn(code, name, event.target.valueAsNumber);
        coust = 0;
        if (element.getAttribute("id") === "000000126") {
          if (event.target.valueAsNumber >= 100) {
            event.target.valueAsNumber = 100;
          }
          coust = event.target.valueAsNumber * inputValue.Скважина;
          setStateInput({ Колодец: 0, Скважина: event.target.valueAsNumber });
        } else if (element.getAttribute("id") === "000000127") {
          if (event.target.valueAsNumber >= 10) {
            event.target.valueAsNumber = 10;
          }
          coust = event.target.valueAsNumber * inputValue.Колодец;
          setStateInput({ Скважина: 0, Колодец: event.target.valueAsNumber });
        }
      } else if (event.target.valueAsNumber == 0) {
        coust = 0;
        setStateInput({ Скважина: 0, Колодец: 0 });
        offBtn(code);
      }
      setInputCoust(coust);
    }
  }

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

              listActiveAdditionalServices.forEach((service) => {
                if (section.Код == service.code) {
                  activeClass = "stylePageactiveBtn";
                }
              });

              if (section.Подраздел === "Колодец (кольцо)") {
                return (
                  <React.Fragment key={secondIndex}>
                    <div className="stylePagesecondBlock__service">
                      <div className="stylePagesecondBlock__service-button" id={section.Код}>
                        <button
                          className={`stylePagesecondBlock__service-buttonSelector ${
                            stateInput.Колодец ? "stylePageactiveBtn" : "stylePageinactiveBtn"
                          }`}></button>
                      </div>
                      <div className="stylePagesecondBlock__service-text">
                        Устройство колодца <b>(колец)</b>
                        <input
                          className="stylePagesecondBlock__service-input"
                          type="number"
                          min="0"
                          max="10"
                          value={stateInput.Колодец}
                          onInput={(event) =>
                            cnslLog(event, setInputCoust, inputValue, setStateInput, section.Код, section.Подраздел)
                          }
                        />
                      </div>
                    </div>
                  </React.Fragment>
                );
              } else if (section.Подраздел === "Скважина (метр)") {
                return (
                  <React.Fragment key={secondIndex}>
                    <div className="stylePagesecondBlock__service">
                      <div className="stylePagesecondBlock__service-button" id={section.Код}>
                        <button
                          className={`stylePagesecondBlock__service-buttonSelector ${
                            stateInput.Скважина ? "stylePageactiveBtn" : "stylePageinactiveBtn"
                          }`}></button>
                      </div>
                      <div className="stylePagesecondBlock__service-text">
                        Скважина Пластик <b>(метров)</b>
                        <input
                          className="stylePagesecondBlock__service-input"
                          type="number"
                          min="0"
                          max="100"
                          value={stateInput.Скважина}
                          onInput={(event) =>
                            cnslLog(event, setInputCoust, inputValue, setStateInput, section.Код, section.Подраздел)
                          }
                        />
                      </div>
                    </div>
                  </React.Fragment>
                );
              } else {
                return (
                  <React.Fragment key={secondIndex}>
                    <div className="stylePagesecondBlock__service">
                      <div
                        className="stylePagesecondBlock__service-button"
                        id={section.Код}
                        onClick={(event) =>
                          addorSubtractPriceOnDiv(event, setCoustHouse, coustHouse, section.Код, section.Подраздел)
                        }>
                        <button
                          className={`stylePagesecondBlock__service-buttonSelector ${activeClass}`}
                          value={section.Стоимость}
                          onClick={(event) =>
                            addorSubtractPriceOnButton(event, setCoustHouse, coustHouse, section.Код, section.Подраздел)
                          }></button>
                      </div>
                      <div className="stylePagesecondBlock__service-text">
                        {section.Подраздел} + {section.Стоимость.toString()} руб.
                      </div>
                    </div>
                  </React.Fragment>
                );
              }
            })}
          </React.Fragment>
        );
      })}
    </div>
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
