import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.img} />
          <div className={styles.items}>
            <div className={styles.item}>
              <div className={styles.item_header}>АДРЕС</div>
              {footerAddressRu()}
            </div>
            <div className={styles.item}>
              <div className={styles.item_header}>КОНТАКТЫ</div>
              {footerContactsRu()}
            </div>
            {/* <div className={styles.social_item}>
              <div className={styles.item_header}>СОЦ.СЕТИ</div>
              {footerSocialRu()}
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );

  function footerAddressRu() {
    return (
      <div className={styles.item_title}>
        Офис: г. Подольск <br />
        ул. Советская 33/44 <br />
        <a target="_blank" className={styles.item_link_with_line} href="https://yandex.ru/maps/-/CDaJyP8G">
          Показать на карте
        </a>{" "}
      </div>
    );
  }

  function footerContactsRu() {
    return (
      <div className={styles.item_title}>
        <a className={styles.item_link} href="mailto:info@stroitdoma.org">
          INFO@STROITDOMA.PRO
        </a>{" "}
        <br />
        <a className={styles.item_link} href="tel:+79197843396">
          +7 (919) 784 3396
        </a>{" "}
        <br />
        <span className={styles.item_span}>(WhatsApp)</span>
      </div>
    );
  }

  // function footerSocialRu() {
  //   return (
  //     <div className={styles.socials}>
  //       <a target="_blank" href="https://vk.com/like_house">
  //         <img src="../icons/VKIcon.svg" alt="" className={styles.social} />
  //       </a>
  //       <a target="_blank" href="https://wa.clck.bar/79251047452">
  //         <img src="../icons/WhatsappIcon.svg" alt="" className={styles.social} />
  //       </a>
  //       <a target="_blank" href="https://www.youtube.com/@likehouse_org">
  //         <img src="../icons/YouTubeIcon.svg" alt="" className={styles.social} />
  //       </a>
  //       <a target="_blank" href="https://teleg.run/Like_House_org">
  //         <img src="../icons/TelegramIcon.svg" alt="" className={styles.social} />
  //       </a>
  //     </div>
  //   );
  // }
}
