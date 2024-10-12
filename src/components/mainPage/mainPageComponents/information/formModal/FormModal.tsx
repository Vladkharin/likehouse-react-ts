import { MaskedInput, createDefaultMaskGenerator } from "react-hook-mask";
import styles from "./Form.module.css";
import { arrayNameAndNumber, arrayPositionBG } from "../../../../../houses";
import { typeInputsError } from "../../../../typesAndIntefaces";
import { sendEmail } from "../../../../../API/routes";

const maskGenerator = createDefaultMaskGenerator("(999) 999-99-99");

type typeTelInputInfo = {
  backgroundPosition: string;
  codeCountry: string;
};

const FORM_STATUS_MESSAGE = {
  loading: "Загрузка...",
  success: "Спасибо! Скоро мы с вами свяжемся",
  failure: "Что-то пошло не так...",
};

export function FormModal(
  stateModal: boolean,
  setStateModal: React.Dispatch<React.SetStateAction<boolean>>,
  stateContextMenu: boolean,
  setStateContextMenu: React.Dispatch<React.SetStateAction<boolean>>,
  inputsError: typeInputsError,
  setInputsError: React.Dispatch<React.SetStateAction<typeInputsError>>,
  inputPhoneValue: string,
  setInputPhoneValue: React.Dispatch<React.SetStateAction<string>>,
  fetchStatus: string,
  setFetchStatus: React.Dispatch<React.SetStateAction<string>>,
  telInputInfo: typeTelInputInfo,
  setTelInputInfo: React.Dispatch<React.SetStateAction<typeTelInputInfo>>
) {
  return (
    <div className={styles.feedBack} style={{ display: stateModal ? "flex" : "none" }}>
      <div className={styles.wrapper}>
        <img className={styles.main_img} src="./img/Видовой_кадр_01_9.5x14.jpg?v=1" alt="feedback" />
        <form className={styles.form} onSubmit={(event) => postData(event, setInputsError, inputsError, setFetchStatus)}>
          <div className={styles.header}>Оставьте заявку</div>
          <input
            className={`${styles.text_input} ${styles.required} ${inputsError.inputName != "" ? styles.error : ""}`}
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
          <div
            className={styles.menu}
            onClick={() => {
              if (stateContextMenu) {
                setStateContextMenu(false);
              } else {
                setStateContextMenu(true);
              }
            }}
          >
            <div className={styles.flag} style={{ backgroundPosition: telInputInfo.backgroundPosition }}></div>
            <div className={styles.arrow} style={stateContextMenu ? { rotate: "180deg" } : { rotate: "360deg" }}></div>
            <div className={styles.telephone_code}>{telInputInfo.codeCountry}</div>
          </div>
          <MaskedInput
            maskGenerator={maskGenerator}
            className={`${styles.phone_input} ${styles.required} ${inputsError.inputName != "" ? styles.error : ""}`}
            style={{
              paddingLeft: telInputInfo.codeCountry.trim().length > 5 ? "110px" : telInputInfo.codeCountry.trim().length * 10 + 50 + "px",
            }}
            name="user_phone"
            type="tel"
            placeholder="(999) 999-99-99"
            value={inputPhoneValue}
            onChange={() => {
              setInputPhoneValue;
              setInputsError({
                inputName: "",
                inputPhone: "",
              });
              setFetchStatus("");
            }}
            data-phonemask={telInputInfo.codeCountry.trim()}
          />
          <button type="submit" className="feedBack__form-submit">
            <div className={fetchStatus === "Загрузка..." ? "loader block" : "loader none"}></div>
            <div className={fetchStatus === "Загрузка..." ? "feedBack__form-submitText none" : "feedBack__form-submitText block"}>
              Отправить
            </div>
          </button>
          <div className="feedBack__form-text">Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности</div>
          <div className="feedBack__form-imgs">
            <a href="https://vk.com/like_house">
              <img src="./icons/Tilda_Icons_26snw_vk.svg" alt="" className="feedBack__form-img" />
            </a>
            <a href="https://wa.clck.bar/79251047452">
              <img src="./icons/Tilda_Icons_26snw_wh.svg" alt="" className="feedBack__form-img" />
            </a>
          </div>

          <img src="./icons/touch.svg" alt="" className="feedBack__form-touch" />
          <div className="feedBack__menu-buttons" style={{ display: stateContextMenu ? "flex" : "none" }}>
            {" "}
            {contextMenu(setTelInputInfo, setStateContextMenu)}
          </div>
          <div className={inputsError.inputName == "Обязательное поле" ? "error tl17585 show" : "error tl17585 notVisible"}>
            Обязательное поле
          </div>
          <div className={inputsError.inputName == "Слишком длинное значение" ? "errorBig tl17585 show" : "errorBig tl17585 notVisible"}>
            Слишком длинное значение
          </div>
          <div className={inputsError.inputPhone == "Обязательное поле" ? "error tl24085 show" : "error tl24085 notVisible"}>
            Обязательное поле
          </div>
          <div className={inputsError.inputPhone == "Слишком короткое значение" ? "errorTel tl24085 show" : "errorTel tl24085 notVisible"}>
            Слишком короткое значение
          </div>
          <div className="crestik" onClick={() => setStateModal(false)}>
            <img src="./icons/crestik.svg" alt="" />
          </div>
        </form>
        <div
          className={
            fetchStatus === "Спасибо! Скоро мы с вами свяжемся" || fetchStatus === "Что-то пошло не так..."
              ? "feedBackModal"
              : "feedBackModal none"
          }
        >
          <div className="feedBackModal__wrapper">
            <img src="./icons/crestikBlack.svg" alt="" className="crestikBlack" onClick={() => setFetchStatus("")} />
            <div
              className={fetchStatus === "Спасибо! Скоро мы с вами свяжемся" ? "feedBackModal__complete" : "feedBackModal__failure"}
            ></div>
            <div className="feedBackModal__text">{fetchStatus}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

async function postData(
  event: React.FormEvent<HTMLFormElement>,
  setInputsError: React.Dispatch<React.SetStateAction<typeInputsError>>,
  inputsError: typeInputsError,
  setFetchStatus: React.Dispatch<React.SetStateAction<string>>
) {
  event.preventDefault();

  const form = event.nativeEvent.target as HTMLFormElement;

  const error = formValidate(form, setInputsError, inputsError, setFetchStatus);

  const indexNumber = form.childNodes[2].childNodes[2].textContent;
  const inputTel = (form.childNodes[3] as HTMLInputElement).value;

  setFetchStatus(FORM_STATUS_MESSAGE.loading);

  if (error === 0) {
    const formData = new FormData(form);

    const phone = indexNumber + inputTel;

    formData.set("user_phone", phone);

    const user_name = formData.get("user_name") as string;

    const object = {
      first_name: user_name,
      telephoneCode: indexNumber,
      telephone: inputTel,
    };

    const response = await sendEmail(JSON.stringify(object));

    console.log(response);
    if (response.success) {
      setFetchStatus(FORM_STATUS_MESSAGE.success);
      form.reset();
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

  const formReq = [form.childNodes[1], form.childNodes[3]];

  formRemoveError(form.childNodes[3] as HTMLInputElement, setInputsError, inputsError);
  formRemoveError(form.childNodes[1] as HTMLInputElement, setInputsError, inputsError);

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

function contextMenu(
  setTelInputInfo: React.Dispatch<React.SetStateAction<typeTelInputInfo>>,
  setStateContextMenu: React.Dispatch<React.SetStateAction<boolean>>
) {
  return (
    <>
      {createArrCountryCatalog().map((item, index) => {
        return (
          <div
            key={index + 919923}
            className="feedBack__menu-button"
            onClick={() => {
              setTelInputInfo({
                backgroundPosition: item.position,
                codeCountry: item.number,
              });
              setStateContextMenu(false);
            }}
          >
            <div className="feedBack__menu-buttonLeft">{item.name}</div>
            <div className="feedBack__menu-buttonRight">
              <div className="feedBack__menu-buttonNumber" data-position={item.position}>
                {item.number}
              </div>
              <div className="img" style={{ backgroundPosition: item.position }}></div>
            </div>
          </div>
        );
      })}
    </>
  );
}

function createArrCountryCatalog() {
  const countryCatalog = [];

  for (let i = 0; i < arrayNameAndNumber.length; i++) {
    const indexPosition = arrayPositionBG.indexOf(arrayNameAndNumber[i]);

    if (indexPosition != -1) {
      const task = {
        name: arrayNameAndNumber[i + 1],
        number: arrayNameAndNumber[i + 2],
        position: `${arrayPositionBG[indexPosition + 1]} ${arrayPositionBG[indexPosition + 2]}`,
      };

      countryCatalog.push(task);
    }
  }

  return countryCatalog;
}
