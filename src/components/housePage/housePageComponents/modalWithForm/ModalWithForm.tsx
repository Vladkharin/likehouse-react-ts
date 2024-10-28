import { MaskedInput, createDefaultMaskGenerator } from "react-hook-mask";
import { typeInputsError, typeListActiveAdditionalServices, typeItemHouse } from "../../../typesAndIntefaces";
import React, { useState } from "react";
import styles from "./ModalWithForm.module.css";

import { stringConversion } from "../../function.ts";
import { postData } from "./function.ts";

const maskGenerator = createDefaultMaskGenerator("+7 999 999 99 99");

export function ModalWithForm({
  stateModalForm,
  setStateModalForm,
  listActiveAdditionalServices,
  coustHouse,
  priceAdditionalServices,
  house,
}: {
  stateModalForm: boolean;
  setStateModalForm: React.Dispatch<React.SetStateAction<boolean>>;
  listActiveAdditionalServices: typeListActiveAdditionalServices;
  coustHouse: string;
  priceAdditionalServices: number;
  house: typeItemHouse;
}) {
  const [fetchStatus, setFetchStatus] = useState<string>("");
  const [inputPhoneValue, setInputPhoneValue] = useState<string>("");
  const [inputsError, setInputsError] = useState<typeInputsError>({
    inputName: "",
    inputPhone: "",
  });

  return (
    <div className={`${styles.modal} ${stateModalForm ? styles.visible : styles.invisible}`}>
      <div className={styles.wrapper}>
        <form
          method="post"
          onSubmit={(event) =>
            postData(
              event,
              setInputsError,
              inputsError,
              setFetchStatus,
              listActiveAdditionalServices,
              coustHouse,
              priceAdditionalServices,
              house
            )
          }
        >
          <label>
            <div>Получить предложение</div>
          </label>
          <label>
            <p>Введите имя</p>{" "}
            <input
              type="text"
              name="user_name"
              className={`${styles.required} ${inputsError.inputName != "" ? styles.error : ""}`}
              onChange={() => {
                setInputPhoneValue;
                setInputsError({
                  inputName: "",
                  inputPhone: "",
                });
                setFetchStatus("");
              }}
            />
          </label>
          <label>
            <p>Введите номер WhatsApp</p>{" "}
            <MaskedInput
              maskGenerator={maskGenerator}
              className={`${styles.required} ${inputsError.inputPhone != "" ? styles.error : ""}`}
              style={{
                paddingLeft: "70px",
              }}
              name="user_phone"
              type="tel"
              placeholder="+7 999 999 99 99"
              value={inputPhoneValue}
              onChange={() => {
                setInputPhoneValue;
                setInputsError({
                  inputName: "",
                  inputPhone: "",
                });
                setFetchStatus("");
              }}
              data-phonemask={"+7"}
            />
          </label>

          <button type="submit">Потдвердить</button>
          <div
            className={
              inputsError.inputName == "Обязательное поле" || inputsError.inputName == "Слишком длинное значение"
                ? "errorBig tl17585 show"
                : "errorBig tl17585 notVisible"
            }
          >
            {inputsError.inputName}
          </div>
          <div
            className={
              inputsError.inputPhone == "Такого номера в Whatsapp нету" ||
              inputsError.inputPhone == "Слишком короткое значение" ||
              inputsError.inputPhone == "Обязательное поле"
                ? "errorBig tl24085 show"
                : "errorBig tl24085 notVisible"
            }
          >
            {inputsError.inputPhone}
          </div>
        </form>
        <div className="stylePageorders">
          <p>Вы выбрали:</p>
          <div className="stylePageorderWrapper">
            {listActiveAdditionalServices.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <div className="stylePageorderItem">
                    {index + 1}. {item.name} - {item.count}
                  </div>
                </React.Fragment>
              );
            })}
          </div>
          <p className="stylePagetotal">{"Итого: " + `${stringConversion(coustHouse, priceAdditionalServices)} руб.`}</p>
        </div>
        <button className="stylePageorderModal__close" onClick={() => setStateModalForm(false)} />
      </div>
      <div
        className={
          fetchStatus === "Спасибо! Скоро мы с вами свяжемся" || fetchStatus === "Что-то пошло не так..."
            ? "feedBackModal smallFeedBackModal"
            : "feedBackModal smallFeedBackModal " + styles.none
        }
      >
        <div className="feedBackModal__wrapper">
          <img src="../icons/crestikBlack.svg" alt="" className="crestikBlack" onClick={() => setFetchStatus("")} />
          <div className={fetchStatus === "Спасибо! Скоро мы с вами свяжемся" ? "feedBackModal__complete" : "feedBackModal__failure"}></div>
          <div className="feedBackModal__text">{fetchStatus}</div>
        </div>
      </div>
    </div>
  );
}
