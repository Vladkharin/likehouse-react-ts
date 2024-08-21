import {typeChoiceAdditionalServices, typeItemsHouse} from "./components/typesAndIntefaces"

export let basicConfigurationOfTwoStoreyHouses = [
  'Фундамент ? ЖБ сваи (длинна 3000 мм сечение 150х150 мм)',
  'Обработка огнебиозащита ? Нижний венец дома',
  'Обвязка ? Брус 150х150 мм',
  'Перекрытие этажа ? Доска сечением 45х195 мм (+-5мм) калиброванная камерной сушки',
  'Наружные стены ? Доска сечением 45х145 мм (+-5мм) калиброванная камерной сушки',
  'Внутренние несущие стены ? Доска сечением 45х145 мм (+-5мм) калиброванная камерной сушки',
  'Перегородки ? Доска сечением 45х95 мм (+-5мм) калиброванная камерной сушки',
  'Обрешётка ? Доска 25х100/25х150 мм',
  'Наружная отделка стен ? «Имитация бруса» класс AB, 16х136 мм',
  'Внутренняя отделка стен ? «Имитация бруса» класс AB, 16х136 мм',
  'Полы ? Шпунтованная доска толщина 36 мм',
  'Отделка потолка ? «Имитация бруса» класс AB, 16х136 мм',
  'Материал кровля ? Металлочерепица (0,5 мм)',
  'Водосточная система ? Döcke PREMIUM или аналог, цвет на выбор',
  'Стропильная система ? Доска сечением 45х145 мм (+-5мм) калиброванная камерной сушки',
  'Окна ? Оконные блоки ПВХ двухкамерные (профиль 70мм) (размеры по проекту) с москитными сетками, отливами, наличниками, тепло сберегающее покрытие',
  'Двери межкомнатные ? Деревянные филёнчатые, наличники',
  'Двери входные ? Дверные блоки ПВХ (размеры по проекту), усиленный дверной профиль, двухкамерный стеклопакет (размеры по проекту), наличники',
  'Терраса по проекту ? Покрытие Террасная доска',
  'Утепление наружных стен ? ROCKWOOL КАРКАС БАТТС в 3 слоя (150 мм), с укладкой гидроизоляции и пароизоляции ОНДУТИС',
  'Шумоизоляция ? ROCKWOOL КАРКАС БАТТС Внутренние несущие стены (150мм) и перегородки (100мм), Междуэтажное перекрытие (100 мм)',
  'Утепление цокольного перекрытия ? ROCKWOOL КАРКАС БАТТС в 4 слоя (200 мм),с укладкой гидроизоляции и пароизоляции ОНДУТИС',
  'Утепление перекрытия второго этажа ? ROCKWOOL КАРКАС БАТТС в 3 слоя (150 мм), с укладкой гидроизоляции и пароизоляции ОНДУТИС',
  'Лестница внутренняя ? Из строганной доски',
  'Высота первого этажа ? 2400 мм',
  'Высота второго этажа ? 2400 мм',
]

export const choiceAdditionalServices: typeChoiceAdditionalServices = {
  "mutually exclusive": {
    "000000102": ["000000101", "000000105", "000000144"],
    "000000101": ["000000102", "000000105"],
    "000000105": ["000000102", "000000144"],
    "000000144": ["000000102", "000000105"],
    "000000106": ["000000132"],
    "000000108": ["000000107"],
    "000000107": ["000000108"],
    "000000114": ["000000138"],
    "000000138": ["000000114", "000000132", "000000131", "000000122"],
    "000000120": ["000000121"],
    "000000121": ["000000120"],
    "000000131": ["000000130", "000000138"],
    "000000132": ["000000130", "000000138", "000000106"],
    "000000130": ["000000131"],
    "000000133": ["000000134", "000000135"],
    "000000134": ["000000133", "000000135"],
    "000000135": ["000000134", "000000133"],
    "000000124": ["000000125"],
    "000000125": ["000000124"],
    "000000110": ["000000109"],
    "000000109": ["000000110"],
  },
  "cant choose without": {
    "000000131": ["000000122"],
    "000000138": ["000000130"],
    "000000101": ['000000144']
  },
  "cant be removed without": {
    "000000130": ["000000138"],
    "000000122": ["000000131"],
    "000000101": ["000000144"],
  },
};

export let itemsHouse: typeItemsHouse = [
  {
    img: "./img/Видовой_кадр_01_6x6.jpg",
    alt: "firstTile",
    information: [
      "Размер: 6x6",
      "Площадь: 54 м2",
      "Размер террасы: 6х2.5",
      "Площадь террасы: 15 м2",
      "Кол-во спален: 2",
      "Кол-во санузлов: 1",
      "Кухня - гостиная: 16 м2",
      "Сроки строительства: 60 дней",
    ],
    imgs: [
      "../pages/6x6Images/02.jpg",
      "../pages/6x6Images/01.jpg",
      "../pages/6x6Images/03.jpg",
      "../pages/6x6Images/04.jpg",
    ],
    coust:"0",
    mortgage:"0",
    type: "two-storey house",
    link: "6x6",
    typeHouse: "Мансардия",
    code: "000000003",
    houseName: 'Мансардия 6x6'
  },
  {
    img: "./assets/img/Видовой_кадр_01_7x7.jpg",
    alt: "firstTile",
    size: "Размер: 7x7",
    square: "Площадь: 82 м2",
    coust:"0",
    mortgage:"0",
    type: "two-storey house",
    link: "7x7",
    typeHouse: "Клевер",
    code: "000000033",
  },
  {
    img: "./assets/img/Видовой_кадр_01_7x7_с_котельной.jpg",
    alt: "firstTile",
    size: "Размер: 7x7 с котельной",
    square: "Площадь: 82 м2",
    coust:"0",
    mortgage:"0",
    type: "two-storey house",
    link: "7x7_with_boiler_room",
    typeHouse: "Клевер",
    code: "000000034",
  },
  {
    img: "./assets/img/Видовой_кадр_01_6x7.jpg",
    alt: "firstTile",
    size: "Размер: 6x7",
    square: "Площадь: 71 м2",
    coust:"0",
    mortgage:"0",
    type: "two-storey house",
    link: "6x7",
    typeHouse: "Мансардия",
    code: "000000004",
  },
  {
    img: "./assets/img/Видовой_кадр_01_8x11.jpg",
    alt: "firstTile",
    size: "Размер: 8x11",
    square: "Площадь: 124 м2",
    coust:"0",
    mortgage:"0",
    type: "two-storey house",
    link: "8x11",
    typeHouse: "Шварц",
    code: "000000035",
  },
  {
    img: "./assets/img/Видовой_кадр_01_8x11.8.jpg",
    alt: "firstTile",
    size: "Размер: 8x11.8",
    square: "Площадь: 136 м2",
    coust:"0",
    mortgage:"0",
    type: "two-storey house",
    link: "8x11.8",
    typeHouse: "Шварц",
    code: "000000007",
  },
  {
    img: "./assets/img/Видовой_кадр_01_7.5х10.png",
    alt: "firstTile",
    size: "Размер: 7.5x10",
    square: "Площадь: 114 м2",
    coust:"0",
    mortgage:"0",
    type: "two-storey house",
    link: "7.5x10",
    typeHouse: "Эркерия",
    code: "000000036",
  },
  {
    img: "./assets/img/Видовой_кадр_01_8.5x11.jpg",
    alt: "firstTile",
    size: "Размер: 8.5x11",
    square: "Площадь: 130 м2",
    coust:"0",
    mortgage:"0",
    type: "two-storey house",
    link: "8.5x11",
    typeHouse: "Эркерия",
    code: "000000037",
  },
  {
    img: "./assets/img/Видовой_кадр_01_9.5x10.jpg",
    alt: "firstTile",
    size: "Размер: 9.5x10",
    square: "Площадь: 133 м2",
    coust:"0",
    mortgage:"0",
    type: "two-storey house",
    link: "9.5x10",
    typeHouse: "Эркерия",
    code: "000000038",
  },
  {
    img: "./assets/img/Видовой_кадр_01_9.5x12.jpg",
    alt: "firstTile",
    size: "Размер: 9.5x12",
    square: "Площадь: 163 м2",
    coust:"0",
    mortgage:"0",
    type: "two-storey house",
    link: "9.5x12",
    typeHouse: "Эркерия",
    code: "000000039",
  },
  {
    img: "./assets/img/Видовой_кадр_01_10x10.jpg",
    alt: "firstTile",
    size: "Размер: 10x10",
    square: "Площадь: 73 м2",
    coust:"0",
    mortgage:"0",
    type: "cottage",
    link: "10x10",
    typeHouse: "Галант",
    code: "000000040",
  },
  {
    img: "./assets/img/Видовой_кадр_01_8x10.jpg",
    alt: "firstTile",
    size: "Размер: 8x10",
    square: "Площадь: 73 м2",
    coust:"0",
    mortgage:"0",
    type: "cottage",
    link: "8x10",
    typeHouse: "Кантри",
    code: "000000013",
  },
  {
    img: "./assets/img/Видовой_кадр_01_8x10_(2_спальни).jpg",
    alt: "firstTile",
    size: "Размер: 8х10 (2 спальни)",
    square: "Площадь: 73 м2",
    coust:"0",
    mortgage:"0",
    type: "cottage",
    link: "8х10_2_bedrooms",
    typeHouse: "Кантри",
    code: "000000041",
  },
  {
    img: "./assets/img/Видовой_кадр_01_8x12.jpg",
    alt: "firstTile",
    size: "Размер: 8х12",
    square: "Площадь: 87 м2",
    coust:"0",
    mortgage:"0",
    type: "cottage",
    link: "8x12_country",
    typeHouse: "Кантри",
    code: "000000019",
  },
  {
    img: "./assets/img/Видовой_кадр_01_8x13_country.jpg",
    alt: "firstTile",
    size: "Размер: 8х13",
    square: "Площадь: 94 м2",
    coust:"0",
    mortgage:"0",
    type: "cottage",
    link: "8x13_country",
    typeHouse: "Кантри",
    code: "000000016",
  },
  {
    img: "./assets/img/Видовой_кадр_01_8x13_country2.jpg",
    alt: "firstTile",
    size: "Размер: 8х13",
    square: "Площадь: 93 м2",
    coust:"0",
    mortgage:"0",
    type: "cottage",
    link: "8x13_country_2",
    typeHouse: "Кантри",
    code: "000000042",
  },
  {
    img: "./assets/img/Видовой_кадр_01_7x8.jpg",
    alt: "firstTile",
    size: "Размер: 7x8",
    square: "Площадь: 94.7 м2",
    coust:"0",
    mortgage:"0",
    type: "two-storey house",
    link: "7x8",
    typeHouse: "Классик",
    code: "000000031",
  },
  {
    img: "./assets/img/Видовой_кадр_01_7x10.jpg",
    alt: "firstTile",
    size: "Размер: 7x10",
    square: "Площадь: 119 м2",
    coust:"0",
    mortgage:"0",
    type: "two-storey house",
    link: "7x10",
    typeHouse: "Классик",
    code: "000000043",
  },
  {
    img: "./assets/img/Видовой_кадр_01_8x8.jpg",
    alt: "firstTile",
    size: "Размер: 8x8",
    square: "Площадь: 109 м2",
    coust:"0",
    mortgage:"0",
    type: "two-storey house",
    link: "8x8",
    typeHouse: "Классик",
    code: "000000001",
  },
  {
    img: "./assets/img/Видовой_кадр_01_8x9.jpg",
    alt: "firstTile",
    size: "Размер: 8x9",
    square: "Площадь: 126 м2",
    coust:"0",
    mortgage:"0",
    type: "two-storey house",
    link: "8x9",
    typeHouse: "Классик",
    code: "000000005",
  },
  {
    img: "./assets/img/Видовой_кадр_01_9.5x14.jpg",
    alt: "firstTile",
    size: "Размер: 9.5x14",
    square: "Площадь: 108 м2",
    coust:"0",
    mortgage:"0",
    type: "cottage",
    link: "9.5x14",
    typeHouse: "Архитект",
    code: "000000045",
  },
  {
    img: "./assets/img/Видовой_кадр_01_9.5x13.jpg",
    alt: "firstTile",
    size: "Размер: 9.5x13",
    square: "Площадь: 100 м2",
    coust:"0",
    mortgage:"0",
    type: "cottage",
    link: "9.5x13",
    typeHouse: "Архитект",
    code: "000000044",
  },
  {
    img: "./assets/img/Видовой_кадр_01_8.5x12.jpg",
    alt: "firstTile",
    size: "Размер: 8.5x12",
    square: "Площадь: 81 м2",
    coust:"0",
    mortgage:"0",
    type: "cottage",
    link: "8.5x12",
    typeHouse: "Архитект",
    code: "000000046",
  },
  {
    img: "./assets/img/Видовой_кадр_01_7x8_cottage.jpg",
    alt: "firstTile",
    size: "Размер: 7x8",
    square: "Площадь: 50 м2",
    coust:"0",
    mortgage:"0",
    type: "cottage",
    link: "7x8_cottage",
    typeHouse: "Микра",
    code: "000000008",
  },
  {
    img: "./assets/img/Видовой_кадр_01_5x7.jpg",
    alt: "firstTile",
    size: "Размер: 5x7",
    square: "Площадь: 31 м2",
    coust:"0",
    mortgage:"0",
    type: "cottage",
    link: "5x7",
    typeHouse: "Микра",
    code: "000000047",
  },
  {
    img: "./assets/img/Видовой_кадр_01_7x7_attic.jpg",
    alt: "firstTile",
    size: "Размер: 7x7",
    square: "Площадь: 82 м2",
    coust:"0",
    mortgage:"0",
    type: "two-storey house",
    link: "7x7_attic",
    typeHouse: "Мансардия",
    code: "000000014",
  },
  {
    img: "./assets/img/Видовой_кадр_01_5x6_bathhouse.jpg",
    alt: "twentyFourthTile",
    size: "Размер: 5х6",
    square: "Площадь: 26 м2",
    coust:"0" ,
    type:"bathhouse",
    link: "5x6-bath",
    typeHouse: "Бани",
    code: "000000096",
  },
  {
    img: "./assets/img/Видовой_кадр_01_8x7_bathhouse.jpg",
    alt: "twentyFifthTile",
    size: "Размер: 8х7",
    square: "Площадь: 33 м2",
    coust:"0" ,
    type:"bathhouse",
    link: "8x7-bath",
    typeHouse: "Бани",
    code: "000000097",
  },
];

export const arrayNameAndNumber = [
  "af",
  "    Aghanistan (افغانستان)    ",
  "    +93",
  "    al",
  "    Albania (Shqipëri)",
  "    +355",
  "    dz",
  "    Algeria (الجزائر)",
  "    +213",
  "    ad",
  "    Andorr",
  "    +376",
  "    ao",
  "    Angol",
  "    +244",
  "    am",
  "    Armenia (Հայաստան)",
  "    +374",
  "    ag",
  "    Antigua and Barbud",
  "    +1 (268)",
  "    ar",
  "    Argentin",
  "    +54",
  "    au",
  "    Australi",
  "    +61",
  "    at",
  "    Austria (Österreich)",
  "    +43",
  "    az",
  "    Azerbaijan (Azərbaycan)",
  "    +994",
  "    bs",
  "    Bahama",
  "    +1 (242)",
  "    bh",
  "    Bahrain (البحرين)",
  "    +973",
  "    bd",
  "    Bangladesh (বাংলাদেশ)",
  "    +880",
  "    bb",
  "    Barbado",
  "    +1 (246)",
  "    by",
  "    Belarus (Беларусь)",
  "    +375",
  "    be",
  "    Belgium (België)",
  "    +32",
  "    bz",
  "    Beliz",
  "    +501",
  "    bj",
  "    Benin (Bénin)",
  "    +229",
  "    bt",
  "    Bhutan (འབྲུག)",
  "    +975",
  "    bo",
  "    Bolivi",
  "    +591",
  "    ba",
  "    Bosnia and Herzegovin",
  "    +387",
  "    bw",
  "    Botswan",
  "    +267",
  "    br",
  "    Brazil (Brasil)",
  "    +55",
  "    bn",
  "    Brune",
  "    +673",
  "    bg",
  "    Bulgaria (България)",
  "    +359",
  "    bf",
  "    Burkina Fas",
  "    +226",
  "    bi",
  "    Burundi (Uburundi)",
  "    +257",
  "    kh",
  "    Cambodia (កម្ពុជា)",
  "    +855",
  "    cm",
  "    Cameroon (Cameroun)",
  "    +237",
  "    ca",
  "    Canad",
  "    +1",
  "    cv",
  "    Cape Verde (Kabu Verdi)",
  "    +238",
  "    cf",
  "    Central African Republic (République centrafricaine)",
  "    +236    ",
  "    td",
  "    Chad (Tchad)",
  "    +235",
  "    cl",
  "    Chil",
  "    +56",
  "    cn",
  "    China (中国)",
  "    +86",
  "    co",
  "    Colombi",
  "    +57",
  "    km",
  "    Comoros (جزر القمر)",
  "    +269",
  "    cd",
  "    Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)",
  "    +243    ",
  "    gc",
  "    Congo (Republic) (Congo-Brazzaville)",
  "    +242    ",
  "    ck",
  "    Cook Island",
  "    +682",
  "    cr",
  "    Costa Ric",
  "    +506",
  "    ci",
  "    Cote d’Ivoir",
  "    +225",
  "    hr",
  "    Croatia (Hrvatska)",
  "    +385",
  "    cu",
  "    Cub",
  "    +53",
  "    cy",
  "    Cyprus (Κύπρος)",
  "    +357",
  "    cz",
  "    Czech Republic (Česká republika)",
  "    +420",
  "    dk",
  "    Denmark (Danmark)",
  "    +45",
  "    dj",
  "    Djibout",
  "    +253",
  "    dm",
  "    Dominic",
  "    +1 (767)",
  "    do",
  "    Dominican Republic (República Dominicana)",
  "    +1    ",
  "    ec",
  "    Ecuador",
  "    +593",
  "    eg",
  "    Egypt (مصر)",
  "    +20",
  "    sv",
  "    El Salvado",
  "    +503",
  "    gq",
  "    Equatorial Guinea (Guinea Ecuatorial)",
  "    +240    ",
  "    e",
  "    Eritre",
  "    +291",
  "    ee",
  "    Estonia (Eesti)",
  "    +372",
  "    et",
  "    Ethiopi",
  "    +251",
  "    fj",
  "    Fij",
  "    +679",
  "    fi",
  "    Finland (Suomi)",
  "    +358",
  "    fr",
  "    Franc",
  "    +33",
  "    ga",
  "    Gabo",
  "    +241",
  "    gm",
  "    Gambi",
  "    +220",
  "    ge",
  "    Georgia (საქართველო)",
  "    +995",
  "    de",
  "    Germany (Deutschland)",
  "    +49",
  "    gh",
  "    Ghana (Gaana)",
  "    +233",
  "    gr",
  "    Greece (Ελλάδα)",
  "    +30",
  "    gd",
  "    Grenad",
  "    +1 (473)",
  "    gt",
  "    Guatemal",
  "    +502",
  "    gn",
  "    Guinea (Guinée)",
  "    +224",
  "    gw",
  "    Guinea-Bissau (Guiné Bissau)",
  "    +245",
  "    gy",
  "    Guyan",
  "    +592",
  "    ht",
  "    Hait",
  "    +509",
  "    hn",
  "    Hondura",
  "    +504",
  "    hk",
  "    Hong Kong (香港)",
  "    +852",
  "    hu",
  "    Hungary (Magyarország)",
  "    +36",
  "    is",
  "    Iceland (Ísland)",
  "    +354",
  "    in",
  "    India (भारत)",
  "    +91",
  "    id",
  "    Indonesi",
  "    +62",
  "    ir",
  "    Iran (ایران)",
  "    +98",
  "    iq",
  "    Iraq (العراق)",
  "    +964",
  "    ie",
  "    Irelan",
  "    +353",
  "    il",
  "    Israel (ישראל)",
  "    +972",
  "    it",
  "    Italy (Italia)",
  "    +39",
  "    jm",
  "    Jamaic",
  "    +1",
  "    jp",
  "    Japan (日本)",
  "    +81",
  "    jo",
  "    Jordan (الأردن)",
  "    +962",
  "    kz",
  "    Kazakhstan (Казахстан)",
  "    +7",
  "    ke",
  "    Keny",
  "    +254",
  "    ki",
  "    Kiribat",
  "    +686",
  "    xk",
  "    Kosovo (Republic)",
  "    +383",
  "    kw",
  "    Kuwait (الكويت)",
  "    +965",
  "    kg",
  "    Kyrgyzstan (Кыргызстан)",
  "    +996",
  "    la",
  "    Laos (ລາວ)",
  "    +856",
  "    lv",
  "    Latvia (Latvija)",
  "    +371",
  "    lb",
  "    Lebanon (لبنان)",
  "    +961",
  "    ls",
  "    Lesoth",
  "    +266",
  "    lr",
  "    Liberi",
  "    +231",
  "    ly",
  "    Libya (ليبيا)",
  "    +218",
  "    li",
  "    Liechtenstei",
  "    +423",
  "    lt",
  "    Lithuania (Lietuva)",
  "    +370",
  "    lu",
  "    Luxembour",
  "    +352",
  "    mo",
  "    Maca",
  "    +853",
  "    mk",
  "    Macedonia (FYROM) (Македонија)",
  "    +389",
  "    mg",
  "    Madagascar (Madagasikara)",
  "    +261",
  "    mw",
  "    Malaw",
  "    +265",
  "    my",
  "    Malaysi",
  "    +60",
  "    mv",
  "    Maldive",
  "    +960",
  "    ml",
  "    Mal",
  "    +223",
  "    mt",
  "    Malt",
  "    +356",
  "    mh",
  "    Marshall Island",
  "    +692",
  "    mr",
  "    Mauritania (موريتانيا)",
  "    +222",
  "    mu",
  "    Mauritius (Moris)",
  "    +230",
  "    mx",
  "    Mexico (México)",
  "    +52",
  "    mb",
  "    Mexico (México)",
  "    +521",
  "    fm",
  "    Micronesi",
  "    +691",
  "    md",
  "    Moldova (Republica Moldova)",
  "    +373",
  "    mc",
  "    Monac",
  "    +377",
  "    mn",
  "    Mongolia (Монгол)",
  "    +976",
  "    me",
  "    Montenegro (Crna Gora)",
  "    +382",
  "    ma",
  "    Morocco (المغرب)",
  "    +212",
  "    mz",
  "    Mozambique (Moçambique)",
  "    +258",
  "    mm",
  "    Myanmar (Burma) (မြန်မာ)",
  "    +95",
  "    na",
  "    Namibia (Namibië)",
  "    +264",
  "    nr",
  "    Naur",
  "    +674",
  "    np",
  "    Nepal (नेपाल)",
  "    +977",
  "    nl",
  "    Netherlands (Nederland)",
  "    +31",
  "    nz",
  "    New Zealan",
  "    +64",
  "    ni",
  "    Nicaragu",
  "    +505",
  "    ne",
  "    Niger (Nijar)",
  "    +227",
  "    ng",
  "    Nigeri",
  "    +234",
  "    nu",
  "    Niue",
  "    +683",
  "    kp  ",
  "    North Korea (조선 민주주의 인민 공화국)",
  "    +850    ",
  "    no",
  "    Norway (Norge)",
  "    +47",
  "    om",
  "    Oman (عُمان)",
  "    +968",
  "    pa",
  "    Panam",
  "    +507",
  "    pk",
  "    Pakistan (پاکستان)",
  "    +92",
  "    pw",
  "    Pala",
  "    +680",
  "    ps",
  "    Palestinian Territor",
  "    +970",
  "    pg",
  "    Papua New Guine",
  "    +675",
  "    py",
  "    Paragua",
  "    +595",
  "    pe",
  "    Peru (Perú)",
  "    +51",
  "    ph",
  "    Philippine",
  "    +63",
  "    pl",
  "    Poland (Polska)",
  "    +48",
  "    pt",
  "    Portuga",
  "    +351",
  "    qa",
  "    Qatar (قطر)",
  "    +974",
  "    ro",
  "    Romania (România)",
  "    +40",
  "    ru",
  "    Russian Federation (Российская Федерация)",
  "    +7    ",
  "    rw",
  "    Rwand",
  "    +250",
  "    kn",
  "    Saint Kitts and Nevi",
  "    +1 (869)",
  "    lc",
  "    Saint Luci",
  "    +1 (758)",
  "    vc",
  "    Saint Vincent and the Grenadine",
  "    +1 (784)",
  "    ws",
  "    Samo",
  "    +685",
  "    sm",
  "    San Marin",
  "    +378",
  "    st",
  "    Sao Tome and Principe (São Tomé e Príncipe)",
  "    +239    ",
  "    sa",
  "    Saudi Arabia (المملكة العربية السعودية)",
  "    +966    ",
  "    sn",
  "    Senegal (Sénégal)",
  "    +221",
  "    rs",
  "    Serbia (Србија)",
  "    +381",
  "    sc",
  "    Seychelle",
  "    +248",
  "    sl",
  "    Sierra Leon",
  "    +232",
  "    sg",
  "    Singapor",
  "    +65",
  "    sk",
  "    Slovakia (Slovensko)",
  "    +421",
  "    si",
  "    Slovenia (Slovenija)",
  "    +386",
  "    sb",
  "    Solomon Island",
  "    +677",
  "    so",
  "    Somalia (Soomaaliya)",
  "    +252",
  "    za",
  "    South Afric",
  "    +27",
  "    kr",
  "    South Korea (대한민국)",
  "    +82",
  "    ss",
  "    South Sudan (جنوب السودان)",
  "    +211",
  "    es",
  "    Spain (España)",
  "    +34",
  "    lk",
  "    Sri Lanka (ශ්‍රී ලංකාව)",
  "    +94",
  "    sd",
  "    Sudan (السودان)",
  "    +249",
  "    sr",
  "    Surinam",
  "    +597",
  "    sz",
  "    Swazilan",
  "    +268",
  "    se",
  "    Sweden (Sverige)",
  "    +46",
  "    ch",
  "    Switzerland (Schweiz)",
  "    +41",
  "    sy",
  "    Syria (سوريا)",
  "    +963",
  "    tw",
  "    Taiwan (台灣)",
  "    +886",
  "    tj",
  "    Tajikista",
  "    +992",
  "    tz",
  "    Tanzani",
  "    +255",
  "    th",
  "    Thailand (ไทย)",
  "    +66",
  "    tg",
  "    Togo",
  "    +228",
  "    to",
  "    Tonga",
  "    +676",
  "    tt",
  "    Trinidad and Tobag    ",
  "    1 (868)",
  "    tn",
  "    Tunisia (تونس)",
  "    +216",
  "    tr",
  "    Turkey (Türkiye)",
  "    +90",
  "    tm",
  "    Turkmenista",
  "    +993",
  "    tv",
  "    Tuval",
  "    +688",
  "    ug",
  "    Ugand",
  "    +256",
  "    ua",
  "    Ukraine (Україна)",
  "    +380",
  "    ae",
  "    United Arab Emirates (الإمارات العربية المتحدة)",
  "    +971    ",
  "    gb",
  "    United Kingdom",
  "    +44",
  "    us",
  "    US",
  "    +1",
  "    uy",
  "    Urugua",
  "    +598",
  "    uz",
  "    Uzbekistan (Oʻzbekiston)",
  "    +998",
  "    vu",
  "    Vanuat",
  "    +678",
  "    va",
  "    Vatican City (Città del Vaticano)",
  "    +39",
  "    ve",
  "    Venezuel",
  "    +58",
  "    vn",
  "    Vietnam (Việt Nam)",
  "    +84",
  "    ye",
  "    Yemen (اليمن)",
  "    +967",
  "    zm",
  "    Zambi",
  "    +260",
  "    zw",
  "    Zimbabw",
  "    +263",
];

export const arrayPositionBG = [
  "ad",
  "    -5px",
  "    -5px",
  "    ae",
  "    -33px",
  "    -5px",
  "    af",
  "    -61px",
  "    -5px",
  "    ag",
  "    -89px",
  "    -5px",
  "    al",
  "    -117px",
  "    -5px",
  "    am",
  "    -145px",
  "    -5px",
  "    ao",
  "    -173px",
  "    -5px",
  "    ar",
  "    -201px",
  "    -5px",
  "    at",
  "    -229px",
  "    -5px",
  "    au",
  "    -257px",
  "    -5px",
  "    az",
  "    -285px",
  "    -5px",
  "    ba",
  "    -313px",
  "    -5px",
  "    bb",
  "    -5px",
  "    -28px",
  "    bd",
  "    -33px",
  "    -28px",
  "    be",
  "    -61px",
  "    -28px",
  "    bf",
  "    -89px",
  "    -28px",
  "    bg",
  "    -117px",
  "    -28px",
  "    bh",
  "    -145px",
  "    -28px",
  "    bi",
  "    -173px",
  "    -28px",
  "    bj",
  "    -201px",
  "    -28px",
  "    bm",
  "    -229px",
  "    -28px",
  "    bn",
  "    -257px",
  "    -28px",
  "    bo",
  "    -285px",
  "    -28px",
  "    br",
  "    -313px",
  "    -28px",
  "    bs",
  "    -5px",
  "    -51px",
  "    bt",
  "    -33px",
  "    -51px",
  "    bw",
  "    -61px",
  "    -51px",
  "    by",
  "    -89px",
  "    -51px",
  "    bz",
  "    -117px",
  "    -51px",
  "    ca",
  "    -145px",
  "    -51px",
  "    cd",
  "    -173px",
  "    -51px",
  "    cf",
  "    -201px",
  "    -51px",
  "    cg",
  "    -229px",
  "    -51px",
  "    ch",
  "    -257px",
  "    -51px",
  "    ci",
  "    -285px",
  "    -51px",
  "    ck",
  "    -313px",
  "    -51px",
  "    cl",
  "    -5px",
  "    -74px",
  "    cm",
  "    -33px",
  "    -74px",
  "    cn",
  "    -61px",
  "    -74px",
  "    co",
  "    -89px",
  "    -74px",
  "    cr",
  "    -117px",
  "    -74px",
  "    cu",
  "    -145px",
  "    -74px",
  "    cv",
  "    -173px",
  "    -74px",
  "    cy",
  "    -201px",
  "    -74px",
  "    cz",
  "    -229px",
  "    -74px",
  "    de",
  "    -257px",
  "    -74px",
  "    dj",
  "    -285px",
  "    -74px",
  "    dk",
  "    -313px",
  "    -74px",
  "    dm",
  "    -5px",
  "    -97px",
  "    do",
  "    -33px",
  "    -97px",
  "    dz",
  "    -61px",
  "    -97px",
  "    ec",
  "    -89px",
  "    -97px",
  "    ee",
  "    -117px",
  "    -97px",
  "    eg",
  "    -145px",
  "    -97px",
  "    eh",
  "    -173px",
  "    -97px",
  "    er",
  "    -201px",
  "    -97px",
  "    es",
  "    -229px",
  "    -97px",
  "    et",
  "    -257px",
  "    -97px",
  "    fi",
  "    -285px",
  "    -97px",
  "    fj",
  "    -313px",
  "    -97px",
  "    fm",
  "    -5px",
  "    -120px",
  "    fr",
  "    -33px",
  "    -120px",
  "    ga",
  "    -61px",
  "    -120px",
  "    gb",
  "    -89px",
  "    -120px",
  "    gd",
  "    -117px",
  "    -120px",
  "    ge",
  "    -145px",
  "    -120px",
  "    gh",
  "    -173px",
  "    -120px",
  "    gm",
  "    -201px",
  "    -120px",
  "    gn",
  "    -229px",
  "    -120px",
  "    gq",
  "    -257px",
  "    -120px",
  "    gr",
  "    -285px",
  "    -120px",
  "    gt",
  "    -313px",
  "    -120px",
  "    gw",
  "    -5px",
  "    -143px",
  "    gy",
  "    -33px",
  "    -143px",
  "    hk",
  "    -61px",
  "    -143px",
  "    hn",
  "    -89px",
  "    -143px",
  "    hr",
  "    -117px",
  "    -143px",
  "    ht",
  "    -145px",
  "    -143px",
  "    hu",
  "    -173px",
  "    -143px",
  "    id",
  "    -201px",
  "    -143px",
  "    ie",
  "    -229px",
  "    -143px",
  "    il",
  "    -257px",
  "    -143px",
  "    in",
  "    -285px",
  "    -143px",
  "    iq",
  "    -313px",
  "    -143px",
  "    ir",
  "    -5px",
  "    -166px",
  "    is",
  "    -33px",
  "    -166px",
  "    it",
  "    -61px",
  "    -166px",
  "    jm",
  "    -89px",
  "    -166px",
  "    jo",
  "    -117px",
  "    -166px",
  "    jp",
  "    -145px",
  "    -166px",
  "    ke",
  "    -173px",
  "    -166px",
  "    kg",
  "    -201px",
  "    -166px",
  "    kh",
  "    -229px",
  "    -166px",
  "    ki",
  "    -257px",
  "    -166px",
  "    km",
  "    -285px",
  "    -166px",
  "    kn",
  "    -313px",
  "    -166px",
  "    kp",
  "    -5px",
  "    -189px",
  "    kr",
  "    -33px",
  "    -189px",
  "    ks",
  "    -61px",
  "    -189px",
  "    kw",
  "    -89px",
  "    -189px",
  "    kz",
  "    -117px",
  "    -189px",
  "    la",
  "    -145px",
  "    -189px",
  "    lb",
  "    -173px",
  "    -189px",
  "    lc",
  "    -201px",
  "    -189px",
  "    li",
  "    -229px",
  "    -189px",
  "    lk",
  "    -257px",
  "    -189px",
  "    lr",
  "    -285px",
  "    -189px",
  "    ls",
  "    -313px",
  "    -189px",
  "    lt",
  "    -5px",
  "    -212px",
  "    lu",
  "    -33px",
  "    -212px",
  "    lv",
  "    -61px",
  "    -212px",
  "    ly",
  "    -89px",
  "    -212px",
  "    ma",
  "    -117px",
  "    -212px",
  "    mc",
  "    -145px",
  "    -212px",
  "    md",
  "    -173px",
  "    -212px",
  "    me",
  "    -201px",
  "    -212px",
  "    mg",
  "    -229px",
  "    -212px",
  "    mh",
  "    -257px",
  "    -212px",
  "    mk",
  "    -285px",
  "    -212px",
  "    ml",
  "    -313px",
  "    -212px",
  "    mm",
  "    -5px",
  "    -235px",
  "    mn",
  "    -33px",
  "    -235px",
  "    mo",
  "    -61px",
  "    -235px",
  "    mr",
  "    -89px",
  "    -235px",
  "    mt",
  "    -117px",
  "    -235px",
  "    mu",
  "    -145px",
  "    -235px",
  "    mv",
  "    -173px",
  "    -235px",
  "    mw",
  "    -201px",
  "    -235px",
  "    mb",
  "    -229px",
  "    -235px",
  "    mx",
  "    -229px",
  "    -235px",
  "    my",
  "    -257px",
  "    -235px",
  "    mz",
  "    -285px",
  "    -235px",
  "    na",
  "    -313px",
  "    -235px",
  "    ne",
  "    -5px",
  "    -258px",
  "    ng",
  "    -33px",
  "    -258px",
  "    ni",
  "    -61px",
  "    -258px",
  "    nl",
  "    -89px",
  "    -258px",
  "    no",
  "    -117px",
  "    -258px",
  "    np",
  "    -341px",
  "    -5px",
  "    nr",
  "    -145px",
  "    -258px",
  "    nu",
  "    -173px",
  "    -258px",
  "    nz",
  "    -201px",
  "    -258px",
  "    om",
  "    -229px",
  "    -258px",
  "    pa",
  "    -257px",
  "    -258px",
  "    pe",
  "    -285px",
  "    -258px",
  "    pg",
  "    -313px",
  "    -258px",
  "    ph",
  "    -5px",
  "    -281px",
  "    pk",
  "    -33px",
  "    -281px",
  "    pl",
  "    -61px",
  "    -281px",
  "    ps",
  "    -89px",
  "    -281px",
  "    pt",
  "    -117px",
  "    -281px",
  "    pw",
  "    -145px",
  "    -281px",
  "    py",
  "    -173px",
  "    -281px",
  "    qa",
  "    -201px",
  "    -281px",
  "    ro",
  "    -229px",
  "    -281px",
  "    rs",
  "    -257px",
  "    -281px",
  "    ru",
  "    -285px",
  "    -281px",
  "    rw",
  "    -313px",
  "    -281px",
  "    sa",
  "    -5px",
  "    -304px",
  "    sb",
  "    -33px",
  "    -304px",
  "    sc",
  "    -61px",
  "    -304px",
  "    sd",
  "    -89px",
  "    -304px",
  "    se",
  "    -117px",
  "    -304px",
  "    sg",
  "    -145px",
  "    -304px",
  "    si",
  "    -173px",
  "    -304px",
  "    sk",
  "    -201px",
  "    -304px",
  "    sl",
  "    -229px",
  "    -304px",
  "    sm",
  "    -257px",
  "    -304px",
  "    sn",
  "    -285px",
  "    -304px",
  "    so",
  "    -313px",
  "    -304px",
  "    sr",
  "    -5px",
  "    -327px",
  "    ss",
  "    -33px",
  "    -327px",
  "    st",
  "    -61px",
  "    -327px",
  "    sv",
  "    -89px",
  "    -327px",
  "    sy",
  "    -117px",
  "    -327px",
  "    sz",
  "    -145px",
  "    -327px",
  "    td",
  "    -173px",
  "    -327px",
  "    tg",
  "    -201px",
  "    -327px",
  "    th",
  "    -229px",
  "    -327px",
  "    tj",
  "    -257px",
  "    -327px",
  "    tl",
  "    -285px",
  "    -327px",
  "    tm",
  "    -313px",
  "    -327px",
  "    tn",
  "    -367px",
  "    -5px",
  "    to",
  "    -341px",
  "    -28px",
  "    tr",
  "    -341px",
  "    -51px",
  "    tt",
  "    -341px",
  "    -74px",
  "    tv",
  "    -341px",
  "    -97px",
  "    tw",
  "    -341px",
  "    -120px",
  "    tz",
  "    -341px",
  "    -143px",
  "    ua",
  "    -341px",
  "    -166px",
  "    ug",
  "    -341px",
  "    -189px",
  "    us",
  "    -341px",
  "    -212px",
  "    uy",
  "    -341px",
  "    -235px",
  "    uz",
  "    -341px",
  "    -258px",
  "    va",
  "    -341px",
  "    -281px",
  "    vc",
  "    -341px",
  "    -304px",
  "    ve",
  "    -341px",
  "    -327px",
  "    vn",
  "    -5px",
  "    -350px",
  "    vu",
  "    -33px",
  "    -350px",
  "    ws",
  "    -61px",
  "    -350px",
  "    xk",
  "    -89px",
  "    -350px",
  "    ye",
  "    -117px",
  "    -350px",
  "    za",
  "    -145px",
  "    -350px",
  "    zm",
  "    -173px",
  "    -350px",
  "    zw",
  "    -201px",
  "    -350px",
];
