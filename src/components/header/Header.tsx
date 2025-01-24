import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import styles from "./Header.module.css";

type typeHeaderProps = {
  scroll: number;
  mainPage: string;
  setBodyStyle: React.Dispatch<React.SetStateAction<string>>;
};

export function Header({ scroll, mainPage, setBodyStyle }: typeHeaderProps) {
  const [menuTel, setMenuTel] = useState<boolean>(false);

  if (useLocation().pathname == mainPage) {
    return (
      <nav className={`${styles.nav} ${scroll > 93 ? styles.nav_blue : ""}`}>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.menu}>
              <img
                className={styles.burger}
                src="./icons/MenuIcon.svg"
                alt="MenuIcon"
                onClick={() => {
                  setMenuTel(true);
                  setBodyStyle("hidden");
                }}
              />
              <div className={styles.links}>
                <a href="#about" className={styles.link}>
                  О нас
                </a>
                <a href="#catalog" className={styles.link}>
                  Каталог
                </a>
                <a href="#tech" className={styles.link}>
                  Технология
                </a>
                <a href="#dop" className={styles.link}>
                  Доп. услуги
                </a>
                <a href="#feedback" className={styles.link}>
                  Отзывы
                </a>
                {MenuLinkRu()}
              </div>
            </div>
            {/* {MenuIconsRu()} */}
            {MenuTelehoneRu()}
          </div>
        </div>
        {Menu(menuTel, setMenuTel, setBodyStyle)}
      </nav>
    );
  } else {
    return (
      <nav className={styles.page_nav}>
        <div className="stylePagecontainer">
          <div className={styles.page_wrapper}>
            <div className={styles.page_menu}>
              <Link to={"/"} className={styles.page_link_to_main_page}>
                На главную
              </Link>
            </div>
            {/* {MenuGreyIconsRu()} */}
          </div>
        </div>
      </nav>
    );
  }
}

function Menu(
  menuTel: boolean,
  setMenuTel: React.Dispatch<React.SetStateAction<boolean>>,
  setBodyStyle: React.Dispatch<React.SetStateAction<string>>
) {
  let overlayClass = "overlay";
  let menuClass = "menu";
  if (menuTel) {
    overlayClass = "overlay block";
    menuClass = "menu visible";
  }

  return (
    <>
      <div className={overlayClass} onClick={() => setMenuTel(false)}></div>
      <div className={menuClass}>
        <div className={styles.menu_links}>
          <a
            href="#about"
            className={styles.link}
            onClick={() => {
              setMenuTel(false);
              setBodyStyle("");
            }}
          >
            О нас
          </a>
          <a
            href="#catalog"
            className={styles.link}
            onClick={() => {
              setMenuTel(false);
              setBodyStyle("");
            }}
          >
            Каталог
          </a>
          <a
            href="#tech"
            className={styles.link}
            onClick={() => {
              setMenuTel(false);
              setBodyStyle("");
            }}
          >
            Технология
          </a>
          <a
            href="#dop"
            className={styles.link}
            onClick={() => {
              setMenuTel(false);
              setBodyStyle("");
            }}
          >
            Доп. услуги
          </a>
          <a
            href="#feedback"
            className={styles.link}
            onClick={() => {
              setMenuTel(false);
              setBodyStyle("");
            }}
          >
            Отзывы
          </a>
          {MenuLinkRu()}
        </div>
        <button
          className={styles.close_button}
          onClick={() => {
            setMenuTel(false);
            setBodyStyle("");
          }}
        >
          {" "}
        </button>
      </div>
    </>
  );
}

function MenuLinkRu() {
  return (
    <>
      <Link to={"/payment"} className={styles.link}>
        Оплата
      </Link>
      <a href={"/payment#mortgage"} className={styles.link}>
        Ипотека
      </a>
    </>
  );
}

// function MenuGreyIconsRu() {
//   return (
//     <div className={styles.page_icons}>
//       <a href="https://teleg.run/Like_House_org" className={styles.page_icon}>
//         <img src="../icons/TelegramGreyIcon.svg" alt="" />
//       </a>
//       <a href="https://wa.clck.bar/79251047452" className={styles.page_icon}>
//         <img src="../icons/WhatsappGreyIcon.svg" alt="" />
//       </a>
//       <a id="phone" href="tel:+74951277452" className={`${styles.page_icon} ${styles.phone}`}>
//         <img src="../icons/PhoneGreyIcon.svg" alt="" />
//       </a>
//       <a href="https://www.youtube.com/@likehouse_org" className={styles.page_icon}>
//         <img src="../icons/YouTubeGreyIcon.svg" alt="" />
//       </a>
//       <a href="mailto:info@likehouse.org" className={styles.page_icon}>
//         <img src="../icons/EmailGreyIcon.svg" alt="" />
//       </a>
//       <a href="https://vk.com/like_house" className={styles.page_icon}>
//         <img src="../icons/VKGreyIcon.svg" alt="" />
//       </a>
//     </div>
//   );
// }

// function MenuIconsRu() {
//   return (
//     <div className={styles.icons}>
//       <a target="_blank" href="https://teleg.run/Like_House_org" className={styles.icon}>
//         <img src="./icons/TelegramIcon.svg" alt="" />
//       </a>
//       <a target="_blank" href="https://wa.clck.bar/79251047452" className={styles.icon}>
//         <img src="./icons/WhatsappIcon.svg" alt="" />
//       </a>
//       <a id="phone" href="tel:+74951277452" className={`${styles.icon} ${styles.phone}`}>
//         <img src="./icons/PhoneIcon.svg" alt="" />
//       </a>
//       <a target="_blank" href="https://www.youtube.com/@likehouse_org" className={styles.icon}>
//         <img src="./icons/YouTubeIcon.svg" alt="" />
//       </a>
//       <a href="mailto:info@likehouse.org" className={styles.icon}>
//         <img src="./icons/EmailIcon.svg" alt="" />
//       </a>
//       <a target="_blank" href="https://vk.com/like_house" className={styles.icon}>
//         <img src="./icons/VKIcon.svg" alt="" />
//       </a>
//     </div>
//   );
// }

function MenuTelehoneRu() {
  return (
    <div className={styles.item_title}>
      <a className={styles.item_link} href="tel:+79197843396">
        +7 919 784 3396
      </a>{" "}
      <br />
      <span>(WhatsApp)</span>
    </div>
  );
}
