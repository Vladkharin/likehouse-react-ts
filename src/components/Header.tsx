import { Link } from "react-router-dom";

type typeHeaderProps = {
  scroll: number;
  setMainPage: React.Dispatch<React.SetStateAction<boolean>>;
  mainPage: boolean;
};

export function Header({ scroll, setMainPage, mainPage }: typeHeaderProps) {
  if (mainPage) {
    return (
      <nav className={`nav ${scroll > 93 ? "changeBgNav" : ""}`}>
        <div className="container">
          <div className="nav__wrapper">
            <div className="nav__menu">
              <img className="menu__Open" src="assets/icons/MenuIcon.svg" alt="MenuIcon" />
              <div className="nav__links">
                <Link to={"/about"} className="menu__link">
                  О нас
                </Link>
                <Link to={"/catalog"} className="menu__link l481">
                  Каталог
                </Link>
                <a href="#tech" className="menu__link">
                  Технология
                </a>
                <a href="#dop" className="menu__link">
                  Доп. услуги
                </a>
                <a href="#feedback" className="menu__link">
                  Отзывы
                </a>
                <Link to={"/payment"} className="menu__link" onClick={() => setMainPage(false)}>
                  Оплата
                </Link>
                <a href="payment.html#mortgage" className="menu__link">
                  Ипотека
                </a>
              </div>
            </div>
            <div className="nav__icons">
              <a href="https://teleg.run/Like_House_org" className="nav__icon">
                <img src="./icons/TelegramIcon.svg" alt="" />
              </a>
              <a href="https://wa.clck.bar/79251047452" className="nav__icon">
                <img src="./icons/WhatsappIcon.svg" alt="" />
              </a>
              <a id="phone" href="tel:+74951277452" className="nav__icon">
                <img src="./icons/PhoneIcon.svg" alt="" />
              </a>
              <a href="https://www.youtube.com/@likehouse_org" className="nav__icon">
                <img src="./icons/YouTubeIcon.svg" alt="" />
              </a>
              <a href="mailto:info@likehouse.org" className="nav__icon">
                <img src="./icons/EmailIcon.svg" alt="" />
              </a>
              <a href="https://vk.com/like_house" className="nav__icon">
                <img src="./icons/VKIcon.svg" alt="" />
              </a>
            </div>
            <div className="nav__item-title">
              <a className="nav__item-linkWithOutdecoration" href="tel:+79251047452">
                +7 (925) 104-74-52
              </a>{" "}
              <br />
              <a className="nav__item-linkWithOutdecoration margin" href="tel:+74951277452">
                +7 (495) 127-74-52
              </a>{" "}
              <br />
              <span>(WhatsApp)</span>
            </div>
          </div>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="stylePagenav">
        <div className="stylePagecontainer">
          <div className="stylePagenav__wrapper">
            <div className="stylePagenav__menu">
              <Link to={"/"} className="stylePagemenu__linkMainPage" onClick={() => setMainPage(true)}>
                На главную
              </Link>
            </div>
            <div className="stylePagenav__icons">
              <a href="https://teleg.run/Like_House_org" className="stylePagenav__icon">
                <img src="./assets/icons/TelegramGreyIcon.svg" alt="" />
              </a>
              <a href="https://wa.clck.bar/79251047452" className="stylePagenav__icon">
                <img src="./assets/icons/WhatsappGreyIcon.svg" alt="" />
              </a>
              <a id="phone" href="tel:+74951277452" className="stylePagenav__icon">
                <img src="./assets/icons/PhoneGreyIcon.svg" alt="" />
              </a>
              <a href="https://www.youtube.com/@likehouse_org" className="stylePagenav__icon">
                <img src="./assets/icons/YouTubeGreyIcon.svg" alt="" />
              </a>
              <a href="mailto:info@likehouse.org" className="stylePagenav__icon">
                <img src="./assets/icons/EmailGreyIcon.svg" alt="" />
              </a>
              <a href="https://vk.com/like_house" className="stylePagenav__icon">
                <img src="./assets/icons/VKGreyIcon.svg" alt="" />
              </a>
            </div>
            <div className="stylePagenav__item-title">
              <a className="stylePagenav__item-linkWithOutdecoration" href="tel:+79251047452">
                +7 (925) 104-74-52
              </a>{" "}
              <br />
              <a className="stylePagenav__item-linkWithOutdecoration margin" href="tel:+74951277452">
                +7 (495) 127-74-52
              </a>{" "}
              <br />
              <span>(WhatsApp)</span>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
