import { useState } from "react";

const dishes = [
  {
    name: "Паэлья",
    country: "🇪🇸 Испания",
    tag: "Хит",
    tagColor: "var(--primary)",
    tagTextColor: "white",
    img: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=600&q=80",
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
    img: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=600&q=80",
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
    img: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=600&q=80",
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
    img: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&q=80",
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
    img: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80",
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
    img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80",
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
    img: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=600&q=80",
    description: "Архитектура Гауди, пляжи, тапас-бары и живой рынок Бокерия. Отлично для семьи и соло-путешествий.",
    tips: ["Посети рынок Бокерия утром", "Покатайся на велосипеде по набережной", "Попробуй пан кон томате — хлеб с помидором"],
  },
  {
    name: "Киото",
    country: "🇯🇵 Япония",
    type: "Для двоих",
    img: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=600&q=80",
    description: "Тысячи храмов, чайные церемонии и цветение сакуры. Идеальное место для медитативного отдыха.",
    tips: ["Встань рано — туристов ещё нет", "Попробуй рамен в местной лавке", "Посети бамбуковый лес Арашияма"],
  },
  {
    name: "Тбилиси",
    country: "🇬🇪 Грузия",
    type: "Соло / Семья",
    img: "https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=600&q=80",
    description: "Уютные переулки, вкуснейшая кухня, хачапури и хинкали. Один из лучших гастро-городов мира.",
    tips: ["Хинкали едят руками — это традиция", "Посети Нарикала — старую крепость", "Сходи на серные бани в Абанотубани"],
  },
  {
    name: "Амстердам",
    country: "🇳🇱 Нидерланды",
    type: "Соло",
    img: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=600&q=80",
    description: "Каналы, велосипеды, музеи Ван Гога и Рембрандта. Идеален для культурного соло-путешествия.",
    tips: ["Арендуй велосипед на первый день", "Рынок Альберт Кёйп — лучшие сыры", "Плыви по каналам на лодочке"],
  },
];

const deviceFilter = ["Все", "Плита", "Мультиварка", "Аэрогриль"];

export default function Index() {
  const [activeDevice, setActiveDevice] = useState("Все");
  const [openRecipe, setOpenRecipe] = useState<string | null>(null);

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
            <p style={{ fontWeight: 700, textTransform: "uppercase", fontSize: "14px" }}>Соло и с семьёй</p>
          </div>
          <div className="menu-grid">
            {places.map((place) => (
              <div key={place.name} className="menu-card">
                <span className="menu-tag" style={{ background: "var(--secondary)", color: "white" }}>
                  {place.type}
                </span>
                <img src={place.img} alt={place.name} />
                <div className="menu-card-body">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                    <h3 style={{ fontSize: "20px" }}>{place.name}</h3>
                    <span className="price" style={{ fontSize: "14px" }}>{place.country}</span>
                  </div>
                  <p style={{ fontSize: "13px", color: "#666", marginBottom: "12px" }}>{place.description}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    {place.tips.map((tip, i) => (
                      <div key={i} style={{ display: "flex", gap: "8px", fontSize: "12px", color: "#444" }}>
                        <span style={{ color: "var(--primary)", fontWeight: 800 }}>→</span>
                        <span>{tip}</span>
                      </div>
                    ))}
                  </div>
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
              <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=400&q=80" alt="Ресторан" />
            </div>
            <div className="social-item">
              <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=400&q=80" alt="Еда" />
            </div>
            <div className="social-item">
              <img src="https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=400&q=80" alt="Приготовление" />
            </div>
            <div className="social-item">
              <img src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=400&q=80" alt="Путешествие и еда" />
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
