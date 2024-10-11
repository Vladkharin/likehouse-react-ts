import React, { useState } from "react";
import { MaskedInput, createDefaultMaskGenerator } from "react-hook-mask";
import { typeInputsError } from "../../typesAndIntefaces";

const maskGenerator = createDefaultMaskGenerator("+7 (999) 999-99-99");

const FORM_STATUS_MESSAGE = {
  loading: "Загрузка...",
  success: "Спасибо! Скоро мы с вами свяжемся",
  failure: "Что-то пошло не так...",
};

type list = listItem[];

type listItem = {
  value: string;
  text: string;
  uniqueId: number;
};

const slides = ["./img/firstSlide.jpg", "./img/secondSlide.jpg", "./img/thirdSlide.jpg", "./img/fourthSlide.jpg"];

const firstListItems: list = [
  {
    value: "01",
    text: "Выезд специалиста на участок",
    uniqueId: 410,
  },
  {
    value: "02",
    text: "Экскурсии на строящиеся и готовые объекты",
    uniqueId: 411,
  },
  {
    value: "03",
    text: "Видео обзоры проектов",
    uniqueId: 412,
  },
  {
    value: "04",
    text: "Строим по своим и индивидуальным проектам",
    uniqueId: 413,
  },
  {
    value: "05",
    text: "Адаптируем проект под особенности вашего участка",
    uniqueId: 414,
  },
  {
    value: "06",
    text: "Полный спектр услуг по коммуникациям",
    uniqueId: 415,
  },
];

const secondListItems: list = [
  {
    value: "с 2016",
    text: "года на рынке строительства",
    uniqueId: 97,
  },
  {
    value: "150",
    text: "счастливых семей в год",
    uniqueId: 98,
  },
  {
    value: "20+",
    text: "бригад в штате компании",
    uniqueId: 99,
  },
  {
    value: "от 30",
    text: "дней срок строительства дома",
    uniqueId: 100,
  },
];

export function SecondBlock() {
  const [slide, setSlide] = useState<number>(0);
  const [inputPhoneValue, setInputPhoneValue] = useState<string>("");
  const [fetchStatus, setFetchStatus] = useState<string>("");
  const [inputsError, setInputsError] = useState<typeInputsError>({
    inputName: "",
    inputPhone: "",
  });

  return (
    <div id="about" className="secondBlock">
      <div className="container">
        {slider(slide, setSlide, inputsError, setInputsError, inputPhoneValue, setInputPhoneValue, fetchStatus, setFetchStatus)}
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

function slider(
  slide: number,
  setSlide: React.Dispatch<React.SetStateAction<number>>,
  inputsError: typeInputsError,
  setInputsError: React.Dispatch<React.SetStateAction<typeInputsError>>,
  inputPhoneValue: string,
  setInputPhoneValue: React.Dispatch<React.SetStateAction<string>>,
  fetchStatus: string,
  setFetchStatus: React.Dispatch<React.SetStateAction<string>>
) {
  const pageWidth = document.documentElement.scrollWidth;

  let accumulator = 0;

  if (pageWidth > 319 && pageWidth < 481) {
    accumulator = -300;
  } else if (pageWidth > 480 && pageWidth < 640) {
    accumulator = -460;
  } else if (pageWidth > 639 && pageWidth < 960) {
    accumulator = -620;
  } else if (pageWidth > 959 && pageWidth < 1200) {
    accumulator = -520;
  } else if (pageWidth > 1199) {
    accumulator = -650;
  }
  const number = accumulator * slide;
  return (
    <div className="secondBlock__slider">
      <div className="secondBlock__form">
        <div className="secondBlock__formHeader">Оставьте заявку</div>
        <form
          action="sendPromotion.php"
          onSubmit={(event) => postData(event, setInputsError, inputsError, setFetchStatus, slide, setInputPhoneValue)}
        >
          <input
            name="user_name"
            type="text"
            placeholder="Ваше имя"
            onChange={() => {
              setInputsError({
                inputName: "",
                inputPhone: "",
              });
              setFetchStatus("");
            }}
          />
          <MaskedInput
            maskGenerator={maskGenerator}
            value={inputPhoneValue}
            type="tel"
            name="user_phone"
            placeholder="Телефон"
            onChange={() => {
              setInputPhoneValue;
              setInputsError({
                inputName: "",
                inputPhone: "",
              });
              setFetchStatus("");
            }}
          />
          <button type="submit">
            <div className={fetchStatus === "Загрузка..." ? "loader block" : "loader none"}></div>
            <div className={fetchStatus === "Загрузка..." ? "feedBack__form-submitText none" : "feedBack__form-submitText block"}>
              Оставить заявку
            </div>
          </button>
          <p>Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности</p>
          <div className={inputsError.inputName == "Обязательное поле" ? "error tl15585 show" : "error tl15585 notVisible"}>
            Обязательное поле
          </div>
          <div className={inputsError.inputName == "Слишком длинное значение" ? "errorBig tl15585 show" : "errorBig tl15585 notVisible"}>
            Слишком длинное значение
          </div>
          <div className={inputsError.inputPhone == "Обязательное поле" ? "error tl23085 show" : "error tl23085 notVisible"}>
            Обязательное поле
          </div>
          <div className={inputsError.inputPhone == "Слишком короткое значение" ? "errorTel tl23085 show" : "errorTel tl23085 notVisible"}>
            Слишком короткое значение
          </div>
        </form>
        <div
          className={
            fetchStatus === "Спасибо! Скоро мы с вами свяжемся" || fetchStatus === "Что-то пошло не так..."
              ? "secondFeedBack__modal"
              : "secondFeedBack__modal none"
          }
        >
          <div className="secondFeedBack__wrapper">
            <img src="./icons/crestikBlack.svg" alt="" className="crestikBlack" onClick={() => setFetchStatus("")} />
            <div
              className={fetchStatus === "Спасибо! Скоро мы с вами свяжемся" ? "feedBackModal__complete" : "feedBackModal__failure"}
            ></div>
            <div className="feedBackModal__text">{fetchStatus}</div>
          </div>
        </div>
      </div>
      <div className="secondBlock__slides">
        <div className="secondBlock__field" style={{ transform: `translateX(${number}px)` }}>
          {slides.map((item, index) => {
            return <img key={index} className={"secondBlock__slide"} src={item} alt="" />;
          })}
        </div>
      </div>
      <div className="secondBlock__sliderButtons">
        <button onClick={() => setSlide(slide - 1)} disabled={slide == 0 ? true : false}>
          <div
            className="secondBlock__sliderButtons_leftLineUp"
            style={slide == 0 ? { top: "50%", left: "50%", transform: "translate(-50%, -50%)" } : {}}
          ></div>
          <div
            className="secondBlock__sliderButtons_leftLineDown"
            style={slide == 0 ? { top: "50%", left: "50%", transform: "translate(-50%, -50%)" } : {}}
          ></div>
        </button>
        <button onClick={() => setSlide(slide + 1)} disabled={slide == slides.length - 1 ? true : false}>
          <div
            className="secondBlock__sliderButtons_rightLineDown"
            style={slide == slides.length - 1 ? { top: "50%", left: "50%", transform: "translate(-50%, -50%)" } : {}}
          ></div>
          <div
            className="secondBlock__sliderButtons_rightLineUp"
            style={slide == slides.length - 1 ? { top: "50%", left: "50%", transform: "translate(-50%, -50%)" } : {}}
          ></div>
        </button>
      </div>
    </div>
  );
}

async function postData(
  event: React.FormEvent<HTMLFormElement>,
  setInputsError: React.Dispatch<React.SetStateAction<typeInputsError>>,
  inputsError: typeInputsError,
  setFetchStatus: React.Dispatch<React.SetStateAction<string>>,
  slide: number,
  setInputPhoneValue: React.Dispatch<React.SetStateAction<string>>
) {
  event.preventDefault();

  const form = event.nativeEvent.target as HTMLFormElement;

  const error = formValidate(form, setInputsError, inputsError, setFetchStatus);

  setFetchStatus(FORM_STATUS_MESSAGE.loading);

  if (error === 0) {
    setFetchStatus("");
    const formData = new FormData(form);

    let choice = "";

    if (slide == 0) {
      choice = "Наличные";
    } else if (slide == 1) {
      choice = "Рассрочка";
    } else if (slide == 2) {
      choice = "Субсидированная";
    } else if (slide == 3) {
      choice = "Социальная";
    }

    formData.set("choice", choice);

    const response = await fetch("sendPromotion.php", {
      method: "POST",
      body: formData,
    });

    // const user_name = formData.get("user_name") as string;

    // const object = {
    //   first_name: user_name,
    //   telephoneCode: indexNumber,
    //   telephone: inputTel,
    // };

    // const response = await sendEmail(JSON.stringify(object));

    form.reset();
    setInputPhoneValue("");

    if (response.status === 200) {
      setFetchStatus(FORM_STATUS_MESSAGE.success);
    } else {
      setFetchStatus(FORM_STATUS_MESSAGE.failure);
    }
  } else {
    setFetchStatus("");
  }
}

function formValidate(
  form: HTMLFormElement,
  setInputsError: React.Dispatch<React.SetStateAction<typeInputsError>>,
  inputsError: typeInputsError,
  setFetchStatus: React.Dispatch<React.SetStateAction<string>>
) {
  let error = 0;

  const formReq = [form.childNodes[0], form.childNodes[1]];

  formRemoveError(form.childNodes[1] as HTMLInputElement, setInputsError, inputsError);
  formRemoveError(form.childNodes[0] as HTMLInputElement, setInputsError, inputsError);

  let obj: typeInputsError = {
    inputName: "",
    inputPhone: "",
  };

  for (let index = 0; index < formReq.length; index++) {
    const input = formReq[index] as HTMLInputElement;

    if (input.name === "user_name") {
      if (input.value.length > 25) {
        obj = { ...obj, inputName: "Слишком длинное значение" };
        error++;
      }

      if (input.value.trim() === "") {
        obj = { ...obj, inputName: "Обязательное поле" };
        error++;
      }
    }

    if (input.name === "user_phone") {
      if (input.value === "") {
        obj = { ...obj, inputPhone: "Обязательное поле" };
        error++;
      }

      if (input.value.length < 15 && input.value.length > 0) {
        obj = { ...obj, inputPhone: "Слишком короткое значение" };
        error++;
      }
    }
  }
  setFetchStatus("");
  setInputsError(obj);

  return error;
}

function formRemoveError(
  input: HTMLInputElement,
  setInputsError: React.Dispatch<React.SetStateAction<typeInputsError>>,
  inputsError: typeInputsError
) {
  if (input.name === "user_phone") {
    setInputsError({ ...inputsError, inputPhone: "" });
  } else if (input.name === "user_name") {
    setInputsError({ ...inputsError, inputName: "" });
  }
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
        {firstListItems.map((item: listItem) => SecondBlockFirstItem(item))}
      </div>
      <div className="secondBlock__secondList" key={998}>
        {secondListItems.map((item: listItem) => SecondBlockSecondItem(item))}
      </div>
    </>
  );
}
