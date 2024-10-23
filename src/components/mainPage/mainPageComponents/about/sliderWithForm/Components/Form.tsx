import { MaskedInput, createDefaultMaskGenerator } from "react-hook-mask";
import { typeInputsError } from "../../../../../typesAndIntefaces";
import React, { useState } from "react";
import { FORM_STATUS_MESSAGE } from "../../data";
import styles from "./Form.module.css";

const maskGenerator = createDefaultMaskGenerator("+7 (999) 999-99-99");

export function Form({ slide }: { slide: number }) {
  const [inputPhoneValue, setInputPhoneValue] = useState<string>("");
  const [fetchStatus, setFetchStatus] = useState<string>("");
  const [inputsError, setInputsError] = useState<typeInputsError>({
    inputName: "",
    inputPhone: "",
  });

  return (
    <div className={styles.form}>
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
          <div className={fetchStatus === "Спасибо! Скоро мы с вами свяжемся" ? "feedBackModal__complete" : "feedBackModal__failure"}></div>
          <div className="feedBackModal__text">{fetchStatus}</div>
        </div>
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
