import { MaskedInput, createDefaultMaskGenerator } from "react-hook-mask";
import { typeInputsError, typeListActiveAdditionalServices } from "../../../typesAndIntefaces";
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
}: {
  stateModalForm: boolean;
  setStateModalForm: React.Dispatch<React.SetStateAction<boolean>>;
  listActiveAdditionalServices: typeListActiveAdditionalServices;
  coustHouse: string;
  priceAdditionalServices: number;
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
        <form method="post" onSubmit={(event) => postData(event, setInputsError, inputsError, setFetchStatus)}>
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

          <button type="submit">
            <div className={fetchStatus === "Загрузка..." ? `${styles.loader} ${styles.block}` : ` ${styles.loader} ${styles.none}`}></div>
            <div className={fetchStatus === "Загрузка..." ? styles.none : styles.block}>Потдвердить</div>
          </button>
          <div
            className={`${styles.error_text} ${styles.position_error_first_input} ${
              inputsError.inputName == "Обязательное поле" || inputsError.inputName == "Слишком длинное значение"
                ? styles.visible
                : styles.invisible
            }`}
          >
            {inputsError.inputName}
          </div>
          <div
            className={`${styles.error_text} ${styles.position_error_second_input} ${
              inputsError.inputPhone == "Такого номера в Whatsapp нету" ||
              inputsError.inputPhone == "Слишком короткое значение" ||
              inputsError.inputPhone == "Обязательное поле"
                ? styles.visible
                : styles.invisible
            }`}
          >
            {inputsError.inputPhone}
          </div>
        </form>
        <div className={styles.orders}>
          <p>Вы выбрали:</p>
          <div className={styles.orders_wrapper}>
            {listActiveAdditionalServices.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <div className={styles.orders_item}>
                    {index + 1}. {item.name} - {item.count}
                  </div>
                </React.Fragment>
              );
            })}
          </div>
          <p>{"Итого: " + `${stringConversion(coustHouse, priceAdditionalServices)} руб.`}</p>
        </div>
        <button className={styles.button_close} onClick={() => setStateModalForm(false)} />
      </div>
      <div
        className={` ${styles.modal}
          ${fetchStatus === "Спасибо! Скоро мы с вами свяжемся" || fetchStatus === "Что-то пошло не так..." ? "" : styles.none}
        `}
      >
        <div className={styles.modal_wrapper}>
          <img src="./icons/crestikBlack.svg" alt="" className={styles.modal_btn_close} onClick={() => setFetchStatus("")} />
          <div className={fetchStatus === "Спасибо! Скоро мы с вами свяжемся" ? styles.complete : styles.failure}></div>
          <div className={styles.modal_text}>{fetchStatus}</div>
        </div>
      </div>
    </div>
  );
}
