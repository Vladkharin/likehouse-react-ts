export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__img" />
          <div className="footer__items">
            <div className="footer__item">
              <div className="footer__item-header">АДРЕС</div>
              <div className="footer__item-title">
                Офис: г. Подольск <br />
                ул. Советская 33/44 <br />
                <a target="_blank" className="footer__item-linkWithdecoration" href="https://yandex.ru/maps/-/CDaJyP8G">
                  Показать на карте
                </a>{" "}
              </div>
            </div>
            <div className="footer__item">
              <div className="footer__item-header">КОНТАКТЫ</div>
              <div className="footer__item-title">
                <a className="footer__item-linkWithOutdecoration" href="mailto:info@likehouse.org">
                  INFO@LIKEHOUSE.ORG
                </a>{" "}
                <br />
                <a className="footer__item-linkWithOutdecoration" href="tel:+79251047452">
                  +7 (925) 104-74-52
                </a>{" "}
                <br />
                <a className="footer__item-linkWithOutdecoration" href="tel:+74951277452">
                  +7 (495) 127-74-52
                </a>{" "}
                <br />
                <span>(WhatsApp)</span>
              </div>
            </div>
            <div className="footer__socialItem">
              <div className="footer__item-header">СОЦ.СЕТИ</div>
              <div className="footer__socials">
                <a target="_blank" href="https://vk.com/like_house">
                  <img src="../icons/VKIcon.svg" alt="" className="footer__social" />
                </a>
                <a target="_blank" href="https://wa.clck.bar/79251047452">
                  <img src="../icons/WhatsappIcon.svg" alt="" className="footer__social" />
                </a>
                <a target="_blank" href="https://www.youtube.com/@likehouse_org">
                  <img src="../icons/YouTubeIcon.svg" alt="" className="footer__social" />
                </a>
                <a target="_blank" href="https://teleg.run/Like_House_org">
                  <img src="../icons/TelegramIcon.svg" alt="" className="footer__social" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
