import { useState } from "react";

const dishes = [
  {
    name: "Паэлья",
    country: "🇪🇸 Испания",
    tag: "Хит",
    tagColor: "var(--primary)",
    tagTextColor: "white",
    img: "https://cdn.poehali.dev/projects/163a35ef-faf7-4d89-bafe-906d3923c21b/files/b6388f56-c8a7-412d-b4e5-3ac12fae7f12.jpg",
    method: "Плита",
    description: "Классическое испанское блюдо из риса с морепродуктами, шафраном и паприкой.",
    recipe: [
      "Обжарь лук и чеснок на оливковом масле 3 минуты.",
      "Добавь куриные бёдра, обжарь до золотистой корочки.",
      "Всыпь рис (арборио или специальный для паэльи), перемешай.",
      "Добавь шафран, паприку, томаты, влей бульон 1:2 к рису.",
      "Разложи морепродукты сверху, не перемешивай.",
      "Туши без крышки 20 минут на среднем огне до готовности риса.",
    ],
    device: "🍳 Плита",
  },
  {
    name: "Пад Тай",
    country: "🇹🇭 Таиланд",
    tag: "Популярное",
    tagColor: "var(--accent)",
    tagTextColor: "var(--dark)",
    img: "https://cdn.poehali.dev/projects/163a35ef-faf7-4d89-bafe-906d3923c21b/files/874a1d31-6ffe-4291-9006-ed349bf70fbb.jpg",
    method: "Плита",
    description: "Жареная рисовая лапша с яйцом, ростками сои, арахисом и соусом тамаринд.",
    recipe: [
      "Замочи рисовую лапшу в тёплой воде на 20 минут.",
      "Разогрей вок на сильном огне, добавь масло.",
      "Обжарь креветки или курицу 3 минуты, сдвинь в сторону.",
      "Вбей яйца, перемешай, соедини с мясом.",
      "Добавь лапшу, соус тамаринд, рыбный соус, сахар.",
      "Жарь на сильном огне 3–4 минуты. Подавай с арахисом и лаймом.",
    ],
    device: "🍳 Плита",
  },
  {
    name: "Ризотто с грибами",
    country: "🇮🇹 Италия",
    tag: "Мультиварка",
    tagColor: "var(--secondary)",
    tagTextColor: "white",
    img: "https://cdn.poehali.dev/projects/163a35ef-faf7-4d89-bafe-906d3923c21b/files/366eea2e-a5b9-475d-97b8-abbeac8b3229.jpg",
    method: "Мультиварка",
    description: "Кремовый рис с белыми грибами, пармезаном и белым вином.",
    recipe: [
      "Замочи сухие грибы в горячей воде на 20 минут, воду сохрани.",
      "В мультиварке на режиме «Жарка» обжарь лук на сливочном масле.",
      "Добавь рис арборио, обжарь 2 минуты до прозрачности.",
      "Влей белое вино, помешивай до впитывания.",
      "Переключи на режим «Тушение», добавляй грибной бульон порциями.",
      "Через 25 минут добавь пармезан и сливочное масло, перемешай.",
    ],
    device: "🥘 Мультиварка",
  },
  {
    name: "Куриные крылья",
    country: "🇺🇸 США",
    tag: "Аэрогриль",
    tagColor: "#ff8c00",
    tagTextColor: "white",
    img: "https://cdn.poehali.dev/projects/163a35ef-faf7-4d89-bafe-906d3923c21b/files/9132f69b-73f0-4b79-9f7a-e3f99a94565a.jpg",
    method: "Аэрогриль",
    description: "Хрустящие крылья в соусе буффало — культовое американское блюдо.",
    recipe: [
      "Замаринуй крылья в смеси соуса буффало, чеснока и паприки на 1 час.",
      "Обсуши бумажным полотенцем — это ключ к хрусту.",
      "Разложи в один слой в корзине аэрогриля.",
      "Готовь при 200°C 12 минут, переверни.",
      "Ещё 10 минут до золотистой корочки.",
      "Подавай с соусом ранч и стеблями сельдерея.",
    ],
    device: "🔥 Аэрогриль",
  },
  {
    name: "Борщ",
    country: "🇺🇦 Украина",
    tag: "Классика",
    tagColor: "#c0392b",
    tagTextColor: "white",
    img: "https://cdn.poehali.dev/projects/163a35ef-faf7-4d89-bafe-906d3923c21b/files/cd374ddb-2e9c-4756-843a-ae8d94c481af.jpg",
    method: "Плита / Мультиварка",
    description: "Наваристый свекольный суп со сметаной — символ восточноевропейской кухни.",
    recipe: [
      "Отвари говядину на кости 1,5 часа, сними пену.",
      "Свёклу натри и потуши с уксусом и томатом 15 минут.",
      "В бульон добавь картофель, варённую свёклу, морковь, лук.",
      "Нашинкуй капусту, добавь за 15 минут до готовности.",
      "В мультиварке — режим «Суп» 60 минут, всё сразу.",
      "Подавай со сметаной, зеленью и чёрным хлебом.",
    ],
    device: "🍳 Плита / 🥘 Мультиварка",
  },
  {
    name: "Сёмга на гриле",
    country: "🇳🇴 Норвегия",
    tag: "Аэрогриль",
    tagColor: "#ff8c00",
    tagTextColor: "white",
    img: "https://cdn.poehali.dev/projects/163a35ef-faf7-4d89-bafe-906d3923c21b/files/5dbd6564-d12a-4374-9dbe-c3cd199c0b35.jpg",
    method: "Аэрогриль",
    description: "Нежное филе лосося с лимоном и травами — быстрый и полезный ужин.",
    recipe: [
      "Натри филе оливковым маслом, солью, перцем и лимонной цедрой.",
      "Оставь мариноваться 15 минут.",
      "Разогрей аэрогриль до 180°C.",
      "Положи рыбу кожей вниз, готовь 10–12 минут.",
      "Проверь готовность: мясо должно легко расслаиваться.",
      "Подавай с запечёнными овощами или рисом.",
    ],
    device: "🔥 Аэрогриль",
  },
];

const places = [
  {
    name: "Барселона",
    country: "🇪🇸 Испания",
    type: "Для всех",
    solo: true,
    family: true,
    img: "https://cdn.poehali.dev/projects/163a35ef-faf7-4d89-bafe-906d3923c21b/files/a4f5b7e0-4bb2-4143-a2f6-d38e148ab079.jpg",
    why: "Барселона — это город, который невозможно не полюбить. Здесь соседствуют пляж и горы, уличная еда мирового уровня и великие архитекторы. Это одна из самых гастрономически богатых столиц Европы.",
    description: "Архитектура Гауди, пляжи, тапас-бары и живой рынок Бокерия. Идеально для семьи и соло.",
    sights: [
      { icon: "🏛️", name: "Саграда Фамилия", desc: "Незаконченный шедевр Гауди — символ города. Бронируй билеты заранее." },
      { icon: "🌿", name: "Парк Гуэль", desc: "Мозаичный парк с потрясающим видом на город. Лучше приходить к открытию." },
      { icon: "🐟", name: "Рынок Бокерия", desc: "Главный рынок Барселоны — свежие морепродукты, фрукты и местные деликатесы." },
      { icon: "🏖️", name: "Пляж Барселонета", desc: "Городской пляж в 15 минутах от центра. Идеален для семейного отдыха." },
      { icon: "🎨", name: "Музей Пикассо", desc: "Одна из лучших коллекций Пикассо в мире — более 4000 работ." },
    ],
    tips: ["Посети рынок Бокерия утром — меньше туристов", "Попробуй пан кон томате — хлеб с помидором и оливковым маслом", "Метро дешевле и быстрее такси"],
    food: "Паэлья, тапас, хамон, крема каталана, чуррос с горячим шоколадом",
    bestTime: "Май – июнь, сентябрь – октябрь",
  },
  {
    name: "Киото",
    country: "🇯🇵 Япония",
    type: "Для двоих",
    solo: true,
    family: false,
    img: "https://cdn.poehali.dev/projects/163a35ef-faf7-4d89-bafe-906d3923c21b/files/4b19acfd-fdca-4ff1-9843-434508208cc6.jpg",
    why: "Киото — настоящая душа Японии. Более 1600 буддийских храмов, традиционные чайные церемонии, гейши и цветение сакуры. Здесь время замедляется.",
    description: "Тысячи храмов, чайные церемонии и цветение сакуры. Медитативный отдых для двоих.",
    sights: [
      { icon: "⛩️", name: "Фусими Инари", desc: "Тысячи красных тории ведут на гору — самый фотогеничный маршрут Японии." },
      { icon: "🎋", name: "Бамбуковый лес Арашияма", desc: "Мистический лес из гигантского бамбука. Приходи на рассвете — без толп." },
      { icon: "🏯", name: "Замок Нидзё", desc: "Резиденция сёгунов с «соловьиными полами» — половицы скрипят для охраны." },
      { icon: "🌸", name: "Марусяма-парк", desc: "Лучшее место для ханами — наблюдения за цветением сакуры в апреле." },
      { icon: "🍵", name: "Чайный квартал Гион", desc: "Исторический район гейш — вечером можно встретить майко в кимоно." },
    ],
    tips: ["Встань рано — туристов нет, атмосфера магическая", "IC-карта Suica удобнее наличных в транспорте", "Сними кимоно на прокат — это незабываемо"],
    food: "Кайсэки, матча-десерты, тофу юдофу, нисин соба, юдзу-мochi",
    bestTime: "Март – апрель (сакура), ноябрь (осенние листья)",
  },
  {
    name: "Тбилиси",
    country: "🇬🇪 Грузия",
    type: "Соло / Семья",
    solo: true,
    family: true,
    img: "https://cdn.poehali.dev/projects/163a35ef-faf7-4d89-bafe-906d3923c21b/files/36dc3545-ca72-473e-9e9b-fe87d82a3639.jpg",
    why: "Тбилиси — город контрастов, где средневековые башни соседствуют с хипстерскими кофейнями. Грузинская кухня входит в топ-10 лучших в мире, а люди здесь невероятно гостеприимны.",
    description: "Уютные переулки, вкуснейшая кухня, хачапури и хинкали. Один из лучших гастро-городов мира.",
    sights: [
      { icon: "🏰", name: "Крепость Нарикала", desc: "Древняя крепость IV века с панорамным видом на весь город." },
      { icon: "♨️", name: "Серные бани Абанотубани", desc: "Уникальные серные источники под куполами — традиция Тбилиси веками." },
      { icon: "🌉", name: "Мост Мира", desc: "Стеклянный пешеходный мост через Куру — архитектурный символ нового Тбилиси." },
      { icon: "🍷", name: "Район Маргиани", desc: "Старый город с балконами, увитыми виноградом и красочными дворами." },
      { icon: "⛪", name: "Собор Самеба", desc: "Крупнейший собор Грузии — величественный и духовный символ страны." },
    ],
    tips: ["Хинкали едят руками — это правило", "Маршрутки дешевле такси в 5 раз", "Попробуй чачу — местную виноградную водку"],
    food: "Хинкали, хачапури по-аджарски, шашлык, чакапули, пхали, ткемали",
    bestTime: "Апрель – июнь, сентябрь – октябрь",
  },
  {
    name: "Амстердам",
    country: "🇳🇱 Нидерланды",
    type: "Соло",
    solo: true,
    family: false,
    img: "https://cdn.poehali.dev/projects/163a35ef-faf7-4d89-bafe-906d3923c21b/files/0baeed3d-12a8-4c6b-8db2-c066c50b1fb2.jpg",
    why: "Амстердам — один из самых свободных и велосипедных городов мира. Здесь больше каналов, чем в Венеции, а музеи входят в мировой топ. Идеален для вдумчивого соло-путешествия.",
    description: "Каналы, велосипеды, музеи Ван Гога и Рембрандта. Идеален для культурного соло.",
    sights: [
      { icon: "🎨", name: "Музей Ван Гога", desc: "Крупнейшая в мире коллекция работ Ван Гога — более 200 картин. Бронируй заранее." },
      { icon: "🖼️", name: "Рейксмюзеум", desc: "Национальный музей с шедеврами Рембрандта, Вермеера и Хальса." },
      { icon: "🚲", name: "Велопрогулка по каналам", desc: "Арендуй байк — это главный способ познать город как местный житель." },
      { icon: "🧀", name: "Рынок Альберт Кёйп", desc: "Самый большой рынок города — сыры, строп-вафли и местный стрит-фуд." },
      { icon: "🌷", name: "Кёкенхоф (апрель)", desc: "В 30 км от города — парк с 7 млн тюльпанов. Один из главных садов мира." },
    ],
    tips: ["Арендуй велосипед на первый день", "OV-chipkaart — единая карта для всего транспорта", "Строп-вафли свежие — только на рынке"],
    food: "Строп-вафли, сельдь харинг, сырный фондю, пофферчес, дроп (солёная лакрица)",
    bestTime: "Апрель – май (тюльпаны), сентябрь",
  },
  {
    name: "Стамбул",
    country: "🇹🇷 Турция",
    type: "Для всех",
    solo: true,
    family: true,
    img: "https://cdn.poehali.dev/projects/163a35ef-faf7-4d89-bafe-906d3923c21b/files/29735ad0-ae0f-4a69-adc6-949099a0694c.jpg",
    why: "Стамбул — город на двух континентах, Европе и Азии. Здесь пять тысяч лет истории, базары с пряностями, мечети с золотыми куполами и уличная еда, от которой невозможно оторваться.",
    description: "На стыке Европы и Азии — мечети, базары, Босфор и лучшая уличная еда мира.",
    sights: [
      { icon: "🕌", name: "Голубая мечеть", desc: "Единственная в мире мечеть с шестью минаретами. Вход бесплатный, нужен платок." },
      { icon: "🏛️", name: "Собор Айя-София", desc: "1500 лет истории в одном здании — сначала церковь, потом мечеть, теперь снова мечеть." },
      { icon: "🛍️", name: "Гранд Базар", desc: "Старейший крытый рынок мира — 4000 магазинов, ковры, специи, украшения." },
      { icon: "🚢", name: "Пролив Босфор", desc: "Прокатись на пароме — единственный способ пересечь два континента за 15 минут." },
      { icon: "🌅", name: "Район Галата", desc: "Старинная башня, богемные кафе, уличные музыканты и лучший вид на залив." },
    ],
    tips: ["Истанбул Карт — обязательно, без неё туристические цены", "Торгуйся на базаре — это норма", "Симит с чаем на набережной — лучший завтрак за копейки"],
    food: "Кебаб, симит, балык экмек (рыбный сэндвич), баклава, турецкий чай, мезе",
    bestTime: "Апрель – май, сентябрь – ноябрь",
  },
  {
    name: "Прага",
    country: "🇨🇿 Чехия",
    type: "Семья / Соло",
    solo: true,
    family: true,
    img: "https://cdn.poehali.dev/projects/163a35ef-faf7-4d89-bafe-906d3923c21b/files/ec13b877-0cf4-4098-a540-fb7b6119207d.jpg",
    why: "Прага — один из самых красивых средневековых городов Европы. Здесь практически нетронутая историческая застройка, лучшее пиво в мире и уютные погребки с трдлами.",
    description: "Средневековые улочки, замок, пиво №1 в мире и сказочная атмосфера.",
    sights: [
      { icon: "🏰", name: "Пражский Град", desc: "Крупнейший средневековый замок в мире с собором Святого Вита внутри." },
      { icon: "🌉", name: "Карлов мост", desc: "Пешеходный мост со статуями святых — встречай рассвет здесь, до толпы." },
      { icon: "🕰️", name: "Астрономические часы", desc: "Каждый час фигурки апостолов выходят из дверок — зрелище с 1410 года." },
      { icon: "🍺", name: "Пивоварня U Fleků", desc: "Старейшая пивоварня Праги с 1499 года — тёмное пиво прямо из чана." },
      { icon: "🏘️", name: "Район Мала Страна", desc: "Тихие мощёные улочки под замком — здесь живёт настоящая романтика Праги." },
    ],
    tips: ["Трдло (трдельник) вкуснее в пекарнях, не у туристических лотков", "Пражская карта туриста окупается за 1,5 дня", "Обязательно попробуй кнедлики со свечкой"],
    food: "Свичкова, кнедлики, печёная свинина, трдло, шопский салат, пиво",
    bestTime: "Март – май, сентябрь – октябрь",
  },
];

const deviceFilter = ["Все", "Плита", "Мультиварка", "Аэрогриль"];

export default function Index() {
  const [activeDevice, setActiveDevice] = useState("Все");
  const [openRecipe, setOpenRecipe] = useState<string | null>(null);
  const [openCity, setOpenCity] = useState<string | null>(null);
  const [travelFilter, setTravelFilter] = useState("Все");

  const filteredDishes = activeDevice === "Все"
    ? dishes
    : dishes.filter((d) => d.method.includes(activeDevice));

  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">ВКУС&nbsp;*&nbsp;МИР</div>
        <nav>
          <a href="#dishes">Блюда</a>
          <a href="#recipes">Рецепты</a>
          <a href="#travel">Путешествия</a>
          <a href="#devices">Способы готовки</a>
        </nav>
        <button className="btn-cta">Смотреть рецепты</button>
      </header>

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="hero-content">
            <p style={{ fontSize: "12px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "3px", color: "var(--primary)", marginBottom: "12px" }}>
              Кулинария · Путешествия
            </p>
            <h1 className="hero-title">
              ГОТОВЬ,
              <br />
              <span>путешествуй</span>,
              <br />
              ВДОХНОВЛЯЙСЯ
            </h1>
            <p className="text-base md:text-lg mb-8 md:mb-10 leading-relaxed text-[#555]">
              Блюда со всего мира, подробные рецепты и лучшие места для поездок — всё в одном месте.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <a href="#dishes">
                <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                  Смотреть блюда
                </button>
              </a>
              <a href="#travel">
                <button className="btn-cta" style={{ background: "white" }}>
                  Куда поехать
                </button>
              </a>
            </div>
            <p style={{ marginTop: "32px", fontSize: "13px", color: "#999", fontWeight: 700, fontStyle: "italic" }}>
              Делал Савенков Тимофей
            </p>
          </div>
          <div className="hero-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80')" }}>
            <div className="sticker">
              РЕЦЕПТЫ
              <br />
              МИРА
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              🍜 АЗИЯ
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              ✈️ ЕВРОПА
            </div>
          </div>
        </section>

        {/* Marquee */}
        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * ПАЭЛЬЯ ИЗ ИСПАНИИ * ПАД ТАЙ ИЗ ТАИЛАНДА * БОРЩ ИЗ УКРАИНЫ * РИЗОТТО ИЗ ИТАЛИИ * КРЫЛЬЯ ИЗ США * СЁМГА ИЗ НОРВЕГИИ * РЕЦЕПТЫ МИРА * ПУТЕШЕСТВИЯ * ВКУС * МИР *&nbsp;
            ПАЭЛЬЯ ИЗ ИСПАНИИ * ПАД ТАЙ ИЗ ТАИЛАНДА * БОРЩ ИЗ УКРАИНЫ * РИЗОТТО ИЗ ИТАЛИИ * КРЫЛЬЯ ИЗ США * СЁМГА ИЗ НОРВЕГИИ * РЕЦЕПТЫ МИРА * ПУТЕШЕСТВИЯ * ВКУС * МИР
          </div>
        </div>

        {/* Dishes & Recipes */}
        <section id="dishes" className="section-padding">
          <div className="section-header">
            <h2 className="section-title">БЛЮДА МИРА</h2>
            <p style={{ fontWeight: 700, textTransform: "uppercase", fontSize: "14px" }}>
              {dishes.length} рецептов
            </p>
          </div>

          {/* Device filter */}
          <div id="devices" style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "40px" }}>
            {deviceFilter.map((f) => (
              <button
                key={f}
                onClick={() => setActiveDevice(f)}
                className="btn-cta"
                style={{
                  background: activeDevice === f ? "var(--dark)" : "white",
                  color: activeDevice === f ? "white" : "var(--dark)",
                  fontSize: "12px",
                }}
              >
                {f === "Все" && "🌍 Все"}
                {f === "Плита" && "🍳 Плита"}
                {f === "Мультиварка" && "🥘 Мультиварка"}
                {f === "Аэрогриль" && "🔥 Аэрогриль"}
              </button>
            ))}
          </div>

          <div className="menu-grid" id="recipes">
            {filteredDishes.map((dish) => (
              <div key={dish.name} className="menu-card">
                <span className="menu-tag" style={{ background: dish.tagColor, color: dish.tagTextColor }}>
                  {dish.tag}
                </span>
                <img src={dish.img} alt={dish.name} />
                <div className="menu-card-body">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                    <h3 style={{ fontSize: "20px" }}>{dish.name}</h3>
                    <span className="price" style={{ fontSize: "14px", whiteSpace: "nowrap" }}>{dish.country}</span>
                  </div>
                  <p style={{ fontSize: "13px", color: "#666", marginBottom: "8px" }}>{dish.description}</p>
                  <p style={{ fontSize: "12px", fontWeight: 700, color: "var(--primary)", marginBottom: "12px" }}>
                    {dish.device}
                  </p>
                  <button
                    className="btn-cta"
                    style={{ width: "100%", background: openRecipe === dish.name ? "var(--dark)" : "var(--accent)", color: openRecipe === dish.name ? "white" : "var(--dark)" }}
                    onClick={() => setOpenRecipe(openRecipe === dish.name ? null : dish.name)}
                  >
                    {openRecipe === dish.name ? "▲ Скрыть рецепт" : "▼ Показать рецепт"}
                  </button>
                  {openRecipe === dish.name && (
                    <div style={{ marginTop: "16px", borderTop: "2px solid var(--dark)", paddingTop: "16px" }}>
                      <p style={{ fontSize: "12px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px", color: "var(--primary)" }}>
                        Пошаговый рецепт:
                      </p>
                      <ol style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                        {dish.recipe.map((step, i) => (
                          <li key={i} style={{ fontSize: "13px", lineHeight: "1.5", color: "#333" }}>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Vibe section — про атмосферу кухни */}
        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">ЕДА — ЭТО ПУТЕШЕСТВИЕ.</h2>
            <p className="vibe-text">
              Каждое блюдо хранит историю народа и страны. Готовя паэлью, ты слышишь шум барселонских рынков. Варя борщ — чувствуешь тепло украинской деревни. Кухня мира — в твоих руках.
            </p>
            <a href="#devices">
              <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
                Выбрать способ готовки
              </button>
            </a>
          </div>
          <div className="vibe-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=800&q=80')" }}></div>
        </section>

        {/* Travel */}
        <section id="travel" className="section-padding">
          <div className="section-header">
            <h2 className="section-title">КУДА ПОЕХАТЬ</h2>
            <p style={{ fontWeight: 700, textTransform: "uppercase", fontSize: "14px" }}>{places.length} направлений</p>
          </div>

          {/* Travel filter */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "40px" }}>
            {["Все", "Соло", "Семья"].map((f) => (
              <button
                key={f}
                onClick={() => setTravelFilter(f)}
                className="btn-cta"
                style={{
                  background: travelFilter === f ? "var(--secondary)" : "white",
                  color: travelFilter === f ? "white" : "var(--dark)",
                  fontSize: "12px",
                }}
              >
                {f === "Все" && "🌍 Все города"}
                {f === "Соло" && "🧳 Соло-путешествие"}
                {f === "Семья" && "👨‍👩‍👧 С семьёй"}
              </button>
            ))}
          </div>

          <div className="menu-grid">
            {places
              .filter((p) =>
                travelFilter === "Все" ? true : travelFilter === "Соло" ? p.solo : p.family
              )
              .map((place) => (
              <div key={place.name} className="menu-card">
                <span className="menu-tag" style={{ background: "var(--secondary)", color: "white" }}>
                  {place.type}
                </span>
                <img src={place.img} alt={place.name} />
                <div className="menu-card-body">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                    <h3 style={{ fontSize: "20px" }}>{place.name}</h3>
                    <span className="price" style={{ fontSize: "14px", whiteSpace: "nowrap" }}>{place.country}</span>
                  </div>

                  {/* Лучшее время */}
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "var(--accent)", border: "2px solid var(--dark)", padding: "3px 10px", fontSize: "11px", fontWeight: 800, marginBottom: "10px" }}>
                    📅 {place.bestTime}
                  </div>

                  <p style={{ fontSize: "13px", color: "#555", lineHeight: "1.6", marginBottom: "12px" }}>{place.why}</p>

                  {/* Советы */}
                  <div style={{ marginBottom: "12px" }}>
                    {place.tips.map((tip, i) => (
                      <div key={i} style={{ display: "flex", gap: "8px", fontSize: "12px", color: "#444", marginBottom: "5px" }}>
                        <span style={{ color: "var(--primary)", fontWeight: 800, flexShrink: 0 }}>→</span>
                        <span>{tip}</span>
                      </div>
                    ))}
                  </div>

                  {/* Еда */}
                  <div style={{ background: "#fdf9f0", border: "2px solid var(--dark)", padding: "10px 12px", marginBottom: "12px", fontSize: "12px" }}>
                    <span style={{ fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px", color: "var(--primary)" }}>🍴 Попробуй: </span>
                    <span style={{ color: "#555" }}>{place.food}</span>
                  </div>

                  {/* Достопримечательности — разворачиваемые */}
                  <button
                    className="btn-cta"
                    style={{
                      width: "100%",
                      background: openCity === place.name ? "var(--dark)" : "var(--accent)",
                      color: openCity === place.name ? "white" : "var(--dark)",
                    }}
                    onClick={() => setOpenCity(openCity === place.name ? null : place.name)}
                  >
                    {openCity === place.name ? "▲ Скрыть места" : `▼ Что посмотреть (${place.sights.length} мест)`}
                  </button>

                  {openCity === place.name && (
                    <div style={{ marginTop: "16px", borderTop: "2px solid var(--dark)", paddingTop: "16px" }}>
                      <p style={{ fontSize: "11px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px", color: "var(--secondary)" }}>
                        Топ достопримечательности:
                      </p>
                      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                        {place.sights.map((sight, i) => (
                          <div key={i} style={{ display: "flex", gap: "10px", padding: "10px", background: "white", border: "2px solid var(--dark)", boxShadow: "3px 3px 0 var(--dark)" }}>
                            <span style={{ fontSize: "22px", flexShrink: 0 }}>{sight.icon}</span>
                            <div>
                              <div style={{ fontWeight: 800, fontSize: "13px", marginBottom: "3px" }}>{sight.name}</div>
                              <div style={{ fontSize: "12px", color: "#666", lineHeight: "1.4" }}>{sight.desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section className="section-padding" style={{ borderTop: "var(--border)" }}>
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            🌍 ГАСТРО-ГАЛЕРЕЯ
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img src="https://cdn.poehali.dev/projects/163a35ef-faf7-4d89-bafe-906d3923c21b/files/b6388f56-c8a7-412d-b4e5-3ac12fae7f12.jpg" alt="Паэлья" />
            </div>
            <div className="social-item">
              <img src="https://cdn.poehali.dev/projects/163a35ef-faf7-4d89-bafe-906d3923c21b/files/a4f5b7e0-4bb2-4143-a2f6-d38e148ab079.jpg" alt="Барселона" />
            </div>
            <div className="social-item">
              <img src="https://cdn.poehali.dev/projects/163a35ef-faf7-4d89-bafe-906d3923c21b/files/874a1d31-6ffe-4291-9006-ed349bf70fbb.jpg" alt="Пад Тай" />
            </div>
            <div className="social-item">
              <img src="https://cdn.poehali.dev/projects/163a35ef-faf7-4d89-bafe-906d3923c21b/files/4b19acfd-fdca-4ff1-9843-434508208cc6.jpg" alt="Киото" />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">ВКУС * МИР</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Рецепты со всего мира, секреты приготовления и лучшие маршруты для гастро-путешествий.
          </p>
          <p style={{ color: "#999", marginTop: "12px", fontSize: "13px", fontStyle: "italic" }}>
            Делал Савенков Тимофей
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li><a href="#dishes" style={{ color: "inherit", textDecoration: "none" }}>Блюда мира</a></li>
            <li><a href="#recipes" style={{ color: "inherit", textDecoration: "none" }}>Рецепты</a></li>
            <li><a href="#travel" style={{ color: "inherit", textDecoration: "none" }}>Путешествия</a></li>
            <li><a href="#devices" style={{ color: "inherit", textDecoration: "none" }}>Способы готовки</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Способы готовки</h4>
          <ul>
            <li>🍳 На плите</li>
            <li>🥘 Мультиварка</li>
            <li>🔥 Аэрогриль</li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Страны кухни</h4>
          <ul>
            <li>🇪🇸 Испания</li>
            <li>🇹🇭 Таиланд</li>
            <li>🇮🇹 Италия</li>
            <li>🇺🇦 Украина</li>
            <li>🇺🇸 США</li>
            <li>🇳🇴 Норвегия</li>
          </ul>
        </div>
      </footer>
    </>
  );
}