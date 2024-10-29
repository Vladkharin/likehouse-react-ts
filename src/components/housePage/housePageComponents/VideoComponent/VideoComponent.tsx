import styles from "./VideoComponent.module.css";

import { typeItemHouse } from "../../../typesAndIntefaces";

export function VideoComponent({ myRef, house }: { myRef: React.RefObject<HTMLElement>; house: typeItemHouse | undefined }) {
  return (
    <section ref={myRef} className={styles.videos}>
      <div className="container">
        <div className={styles.header}>Видеообзор построенных домов</div>
        <div className={styles.wrapper}>
          {house?.videos?.map((item, index) => {
            return (
              <iframe
                key={index}
                className={styles.iframe}
                src={`https://vk.com/video_ext.php?oid=-${item.oid}&id=${item.id}&hd=2&autoplay=0`}
                frameBorder="0"
                allow="clipboard-write; autoplay; fullscreen; picture-in-picture; screen-wake-lock;"
                allowFullScreen
              ></iframe>
            );
          })}
        </div>
      </div>
    </section>
  );
}
