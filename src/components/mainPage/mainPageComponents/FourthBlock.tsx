import React from "react";

type typeItems = typeItem[];

type typeItem = {
  value: string;
  title: string;
  subtitle: string;
};

const items: typeItems = [
  {
    value: "01",
    title: "ЭКОНОМИЯ НА ОТДЕЛКЕ",
    subtitle:
      "Стоимость каркасных домов обычно ниже каменных и брусовых, но не уступают в надежности и теплосберегающих свойствах. Строительные материалы остаются более доступными по цене. Также их можно собрать вручную, не нанимая строительную технику и не организуя площадку для нее.",
  },
  {
    value: "02",
    title: "МАЛЫЙ ВЕС",
    subtitle:
      "В каменном доме без внутренней отделки не обойтись – невозможно жить в голых кирпичных стенах. А вот дерево в дополнительной отделке не нуждается.",
  },
  {
    value: "03",
    title: "МАЛЫЙ ВЕС",
    subtitle:
      "Это важное преимущество – благодаря небольшому весу самого дома, можно обойтись облегченным фундаментом, а не устанавливать усиленный.",
  },
  {
    value: "04",
    title: "РЕГУЛИРОВКА МИКРОКЛИМАТА",
    subtitle:
      "Каркасные стены создают оптимальный микроклимат – нет избыточной влажности, чрезмерной сухости. Вот почему находиться в таком доме всегда комфортно.",
  },
  {
    value: "05",
    title: "СОКРАЩЕННЫЕ СРОКИ СТРОИТЕЛЬСТВА",
    subtitle:
      "Сроки строительства зависят от выбранной технологии и материала – в случае с каркасным домом не нужно ждать усадки конструкции, что позволяет сократить сроки строительства, в других же без этого обойтись нельзя.",
  },
  {
    value: "06",
    title: "ДОЛГОВЕЧНОСТЬ",
    subtitle: "При должном уходе каркасный дом может прослужить до 100 лет.",
  },
];

export function FourthBlock() {
  return (
    <div id="tech" className="fifthBlock">
      <div className="container">
        <div className="fifthBlock__header">Технология</div>
        <div className="fifthBlock__imgs">
          <img src="./assets/img/fifthBlockFirstimg.png" alt="img" className="fifthBlock__img" />
          <img src="./assets/img/fifthBlockSecondimg.png" alt="img" className="fifthBlock__img" />
          <img src="./assets/img/fifthBlockThirdimg.png" alt="img" className="fifthBlock__img" />
          <img src="./assets/img/fifthBlockFourthimg.webp" alt="img" className="fifthBlock__img" />
        </div>
        {renderItems()}
      </div>
    </div>
  );
}

function renderItems() {
  return (
    <React.Fragment>
      <div className="fifthBlock__items">{items.map((item: typeItem, index: number) => createItem(item, index))}</div>
    </React.Fragment>
  );
}

function createItem(item: typeItem, index: number) {
  index = 1000222 + index;
  return (
    <React.Fragment key={index.toString()}>
      <div className="fifthBlock__item">
        <div className="fifthBlock__item-number">{item.value}</div>
        <div className="fifthBlock__item-text">{item.title}</div>
        <img src="./assets/icons/plus.svg" alt="" className="fifthBlock__item-plus" />
        <div className="fifthBlock__item-subtitle">{item.subtitle}</div>
      </div>
      <div className="line gold"></div>
    </React.Fragment>
  );
}
