import { typeInputsError } from "../../../typesAndIntefaces";

// import { sendOrder } from "../../../../API/routes.ts";

const FORM_STATUS_MESSAGE = {
  loading: "Загрузка...",
  success: "Спасибо! Скоро мы с вами свяжемся",
  failure: "Что-то пошло не так...",
};

// const VITE_API_URL = "https://api.green-api.com";
// const VITE_ID_INSTANCE = "1101773268";
// const VITE_API_TOKEN_INSTANCE = "b0e2453f8a344435ad674f4fa5b2b1fbf340229d23674e45a7";

export async function postData(
  event: React.FormEvent<HTMLFormElement>,
  setInputsError: React.Dispatch<React.SetStateAction<typeInputsError>>,
  inputsError: typeInputsError,
  setFetchStatus: React.Dispatch<React.SetStateAction<string>>
) {
  event.preventDefault();

  const form = event.nativeEvent.target as HTMLFormElement;

  const inputTel = (form.childNodes[2].childNodes[2] as HTMLInputElement).value;

  const error = await formValidate(form, setInputsError, inputsError, setFetchStatus);

  setFetchStatus(FORM_STATUS_MESSAGE.loading);

  console.log();

  if (await checkingTheNumberForWhatsApp(inputTel)) {
    console.log(await sendMessageInWA(inputTel));
  }

  if (error === 0) {
    setFetchStatus("");
    // const formData = new FormData(form);

    // const userName = formData.get("user_name");

    // const jsonObject = {
    //   houseName: house.houseName,
    //   houseCode: house.code,
    //   name: userName,
    //   phone: inputTel,
    //   basicEquipment: Number(coustHouse),
    //   services: listActiveAdditionalServices,
    //   totalCoust: Number(coustHouse) + priceAdditionalServices,
    // };

    // const response = await sendOrder(JSON.stringify(jsonObject));

    // if (response.success) {
    setFetchStatus(FORM_STATUS_MESSAGE.success);
    // form.reset();
    // } else {
    // setFetchStatus(FORM_STATUS_MESSAGE.failure);
    form.reset();
    // }
  } else {
    setFetchStatus("");
    form.reset();
  }
}

async function sendMessageInWA(inputTel: string) {
  const VITE_API_URL = "https://api.green-api.com";
  const VITE_ID_INSTANCE = "1101773268";
  const VITE_API_TOKEN_INSTANCE = "b0e2453f8a344435ad674f4fa5b2b1fbf340229d23674e45a7";

  const body = {
    chatId: `${inputTel.slice(1).split(" ").join("")}@c.us`,
    message: "ку",
  };

  const url = VITE_API_URL + "/waInstance" + VITE_ID_INSTANCE + "/sendMessage/" + VITE_API_TOKEN_INSTANCE;

  const responseFetchPhone = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });

  return await responseFetchPhone.json();
}

async function checkingTheNumberForWhatsApp(inputTel: string) {
  const VITE_API_URL = "https://api.green-api.com";
  const VITE_ID_INSTANCE = "1101773268";
  const VITE_API_TOKEN_INSTANCE = "b0e2453f8a344435ad674f4fa5b2b1fbf340229d23674e45a7";

  const body = {
    phoneNumber: inputTel.slice(1).split(" ").join(""),
  };

  const url = VITE_API_URL + "/waInstance" + VITE_ID_INSTANCE + "/checkWhatsapp/" + VITE_API_TOKEN_INSTANCE;

  const responseFetchPhone = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });

  const data = await responseFetchPhone.json();

  return data;
}

async function formValidate(
  form: HTMLFormElement,
  setInputsError: React.Dispatch<React.SetStateAction<typeInputsError>>,
  inputsError: typeInputsError,
  setFetchStatus: React.Dispatch<React.SetStateAction<string>>
  // inputTel: string
) {
  let error = 0;

  const formReq = [form.childNodes[1].childNodes[2], form.childNodes[2].childNodes[2]];

  formRemoveError(form.childNodes[1].childNodes[2] as HTMLInputElement, setInputsError, inputsError);
  formRemoveError(form.childNodes[2].childNodes[2] as HTMLInputElement, setInputsError, inputsError);

  // const errorChecking = await checkingTheNumberForWhatsApp(inputTel);

  // if (!errorChecking.existsWhatsapp) {
  //   error++;
  // }

  let obj: typeInputsError = {
    inputName: "",
    inputPhone: "",
  };

  // errorChecking.existsWhatsapp ? "" : "Такого номера в Whatsapp нету"
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
