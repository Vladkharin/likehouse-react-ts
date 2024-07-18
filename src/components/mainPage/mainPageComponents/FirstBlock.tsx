export function FirstBlock() {
  return (
    <div className="firstBlock">
      <div className="container">
        <div className="firstBlock__wrapper">
          <div className="firstBlock__header">
            Лайк <span>Хаус</span>
          </div>
          <div className="line smallLine"></div>
          <h1 className="firstBlock__title">Строим каркасные дома и бани с ориентированием на честное отношение к клиентам</h1>
        </div>
        <div className="firstBlock__buttons">
          <div className="firstBlock__buttonMediaMax940px">
            <a href="tel:+74951277452">
              <button>Позвонить</button>
            </a>
          </div>
          <div className="firstBlock__buttonMediaMin940px">
            <button>Бесплатная консультация</button>
          </div>
          <div className="firstBlock__buttonMap">
            <a href="#map">
              <button>Земельные участки</button>
            </a>
          </div>
        </div>
      </div>
      <div className="animation">
        <img src="./icons/partner.svg?ver=1" alt="partner" className="animation__spin" />
      </div>
    </div>
  );
}
