/*
 * DESIGN: Premium Sketch / Hand-drawn Elevated
 * Page: Main landing — Doodle Jump Casino
 * SEO: Full keyword coverage for Yandex top-1
 * Keys: doodle jump casino, дудл джамп казино, казино дудл джамп, doodle jump на деньги,
 *       doodle jump игра с выводом денег, дудл джамп на деньги, дудл джамп с выводом денег,
 *       казино дудл джамп ставки, игровой автомат дудл джамп, doodle jump казино играть онлайн,
 *       doodle jump демо игра, играть в дудл джамп казино, слот doodle jump играть,
 *       дудл джамп казино без регистрации, вывод денег doodle jump casino,
 *       doodle jump максимальный выигрыш, слот дудл джамп
 */

import { useEffect, useRef, useState } from "react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663588131980/k4LqmXXoJssc6FQkm8iknF/hero-banner-9vyUu7sS8noQJPCWL9eCAv.webp";
const CHAR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663588131980/k4LqmXXoJssc6FQkm8iknF/doodle-character-hH5bpPb4JadrQdZgQC3Fx5.webp";
const PLATFORMS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663588131980/k4LqmXXoJssc6FQkm8iknF/casino-platforms-63ZbTnyw3foEztYZK6ywkQ.webp";

function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (started.current) return;
    started.current = true;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration]);
  return count;
}

function LiveBalance() {
  const [balance, setBalance] = useState(1_420_500);
  useEffect(() => {
    const interval = setInterval(() => {
      setBalance(prev => prev + Math.floor(Math.random() * 500 + 100));
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <span className="font-black text-lg tabular-nums">
      ₽ {balance.toLocaleString("ru-RU")} +
    </span>
  );
}

const FEATURES = [
  { icon: "🎲", title: "Демо-режим", desc: "Пробуйте без вложений — бесплатно и без регистрации" },
  { icon: "💸", title: "Вывод от 500₽", desc: "На карты, ЮMoney, USDT — за 15 минут" },
  { icon: "📊", title: "Ставки от 10₽", desc: "Для любого бюджета — начни с минимума" },
  { icon: "🏆", title: "Множитель x500", desc: "Максимальный выигрыш — x500 от ставки" },
  { icon: "🔒", title: "Честный рандом", desc: "Лицензионное ПО, прозрачные алгоритмы" },
  { icon: "⚡", title: "Мгновенный старт", desc: "Без скачивания — играй прямо в браузере" },
];

const MULTIPLIERS = [
  { label: "Старт", value: "x1", color: "#41D36B" },
  { label: "Разгон", value: "x3", color: "#2aa6ff" },
  { label: "Высота", value: "x10", color: "#F5C842" },
  { label: "Пик", value: "x50", color: "#ff6b35" },
  { label: "Максимум", value: "x500", color: "#ff4d4d" },
];

const FAQ = [
  {
    q: "Как играть в Doodle Jump Casino на деньги?",
    a: "Зарегистрируйтесь, пополните баланс от 500₽, выберите ставку от 10₽ и нажмите «Играть». Персонаж начнёт прыгать вверх — множитель растёт с каждым прыжком. Нажмите «Забрать» в любой момент для фиксации выигрыша. Если персонаж упадёт — ставка сгорает.",
  },
  {
    q: "Можно ли играть в Дудл Джамп казино бесплатно без регистрации?",
    a: "Да! В Doodle Jump Casino есть бесплатный демо-режим без регистрации. Вы получаете виртуальные деньги и можете изучить механику игры перед реальными ставками. Демо-игра доступна сразу — просто нажмите «Демо».",
  },
  {
    q: "Какой максимальный выигрыш в Doodle Jump Casino?",
    a: "Максимальный выигрыш в Doodle Jump Casino — x500 от ставки. При ставке 1000₽ вы можете выиграть 500 000₽. Чем выше прыгает персонаж, тем больше множитель: x1 → x3 → x10 → x50 → x500.",
  },
  {
    q: "Как вывести деньги из Doodle Jump Casino?",
    a: "Вывод денег доступен от 500₽. Поддерживаются банковские карты (Visa, MasterCard, МИР), ЮMoney, USDT, Tether. Обработка заявки — от 15 минут до 24 часов. Лимиты на вывод зависят от уровня верификации.",
  },
  {
    q: "Что такое слот Дудл Джамп — это казино или игра?",
    a: "Doodle Jump Casino — это игровой автомат (слот) в формате краш-игры, основанный на механике легендарного мобильного раннера Doodle Jump. Вы делаете ставку, персонаж прыгает вверх, множитель растёт. В любой момент можно «забрать» выигрыш или рискнуть прыгнуть выше.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const playersCount = useCountUp(48_392, 2500);

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Nunito', sans-serif" }}>

      {/* ===== TOPBAR ===== */}
      <header
        style={{
          position: "fixed",
          top: 10,
          left: 10,
          right: 10,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            background: "white",
            border: "3px solid #0F2A44",
            borderRadius: 16,
            padding: "8px 16px",
            fontWeight: 900,
            fontSize: "clamp(16px, 4vw, 22px)",
            color: "#0F2A44",
            boxShadow: "0 6px 0 rgba(15,42,68,0.2), 0 12px 20px rgba(0,0,0,0.1)",
            pointerEvents: "auto",
            letterSpacing: 0.5,
            textTransform: "uppercase",
          }}
        >
          🎰 Doodle Casino
        </div>
        <div
          style={{
            background: "#eafff2",
            border: "2px solid rgba(20,122,55,0.3)",
            borderRadius: 30,
            padding: "7px 14px",
            fontWeight: 800,
            fontSize: 14,
            color: "#147a37",
            display: "flex",
            alignItems: "center",
            gap: 6,
            pointerEvents: "auto",
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              background: "#41D36B",
              borderRadius: "50%",
              display: "inline-block",
              animation: "pulse-glow 1.5s ease-in-out infinite",
            }}
          />
          LIVE
        </div>
      </header>

      {/* ===== MAIN CONTENT ===== */}
      <main style={{ paddingTop: 70 }}>
        <div className="container" style={{ maxWidth: 960, margin: "0 auto" }}>

          {/* ===== HERO SECTION ===== */}
          <section
            aria-label="Doodle Jump Casino — главная"
            style={{ paddingTop: 20, paddingBottom: 32 }}
          >
            {/* Hero image */}
            <div
              className="doodle-card fade-in-up"
              style={{
                overflow: "hidden",
                marginBottom: 20,
                padding: 0,
                borderRadius: 24,
              }}
            >
              <img
                src={HERO_IMG}
                alt="Doodle Jump Casino — игра на деньги с выводом"
                width={960}
                height={540}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  maxHeight: 420,
                  objectFit: "cover",
                }}
                loading="eager"
                fetchPriority="high"
              />
            </div>

            {/* Hero text block */}
            <div
              className="doodle-card fade-in-up fade-in-up-delay-1"
              style={{ padding: "28px 28px 24px" }}
            >
              {/* H1 */}
              <h1
                style={{
                  fontSize: "clamp(28px, 7vw, 46px)",
                  fontWeight: 900,
                  color: "#0F2A44",
                  lineHeight: 1.1,
                  margin: "0 0 12px 0",
                }}
              >
                Doodle Jump Casino
                <span
                  style={{
                    display: "block",
                    fontSize: "clamp(16px, 4vw, 22px)",
                    fontWeight: 700,
                    color: "#1b4f6e",
                    marginTop: 6,
                  }}
                >
                  игра на деньги с выводом — казино дудл джамп онлайн
                </span>
              </h1>

              <p
                style={{
                  fontSize: "clamp(15px, 3.5vw, 18px)",
                  fontWeight: 600,
                  color: "rgba(15,42,68,0.85)",
                  lineHeight: 1.6,
                  margin: "0 0 22px 0",
                }}
              >
                Забудьте про обычные слоты. <strong>Doodle Jump Casino</strong> — это легендарный раннер
                Дудл Джамп, где каждый прыжок умножает ваш баланс. Демо-режим для новичков,
                реальные <strong>ставки</strong> и мгновенный <strong>вывод денег</strong>.
                Чем выше — тем больше множитель!
              </p>

              {/* CTA Buttons */}
              <div
                style={{
                  display: "flex",
                  gap: 12,
                  flexWrap: "wrap",
                  marginBottom: 20,
                }}
              >
                <a href="#play" className="btn-doodle btn-primary" style={{ fontSize: "clamp(16px, 4vw, 20px)" }}>
                  🎰 Играть на деньги
                </a>
                <a href="#demo" className="btn-doodle btn-secondary" style={{ fontSize: "clamp(16px, 4vw, 20px)" }}>
                  🎮 Демо бесплатно
                </a>
              </div>

              {/* SEO keyword tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 10px", marginBottom: 20 }}>
                {[
                  "казино дудл джамп", "дудл джамп на деньги", "слот с выводом",
                  "ставки doodle jump", "демо игра", "doodle jump онлайн",
                  "игровой автомат дудл", "без регистрации",
                ].map((kw) => (
                  <span key={kw} className="kw-tag">🎰 {kw}</span>
                ))}
              </div>

              {/* Live balance */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "12px 18px",
                  borderRadius: 40,
                  border: "2px dashed rgba(15,42,68,0.2)",
                  background: "white",
                  flexWrap: "wrap",
                  gap: 8,
                }}
              >
                <span style={{ fontWeight: 800, fontSize: 15, color: "#0F2A44" }}>
                  🔴 LIVE баланс выплат:
                </span>
                <div className="live-badge pulse-glow">
                  <span className="live-dot" />
                  <LiveBalance />
                </div>
              </div>
            </div>
          </section>

          {/* ===== MULTIPLIERS SECTION ===== */}
          <section aria-label="Множители Doodle Jump Casino" style={{ marginBottom: 24 }}>
            <div className="doodle-card fade-in-up fade-in-up-delay-2" style={{ padding: "24px 28px" }}>
              <h2
                style={{
                  fontSize: "clamp(22px, 5vw, 30px)",
                  fontWeight: 900,
                  color: "#0F2A44",
                  margin: "0 0 6px 0",
                }}
              >
                ⚡ Как работает слот Дудл Джамп
              </h2>
              <p style={{ color: "rgba(15,42,68,0.75)", fontWeight: 600, marginBottom: 20, fontSize: 16 }}>
                Культовый раннер превратился в динамичный <strong>игровой автомат с уникальной механикой</strong>.
                Вы делаете ставку — персонаж начинает бесконечный подъём. С каждым десятком платформ
                множитель растёт. В любой момент нажмите «забрать» — сумма с множителем фиксируется
                как заявка на <strong>вывод денег</strong>. Если упадёте — ставка сгорает.
              </p>

              {/* Multiplier track */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  flexWrap: "wrap",
                  marginBottom: 20,
                }}
              >
                {MULTIPLIERS.map((m, i) => (
                  <div key={m.value} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div
                      style={{
                        background: `linear-gradient(135deg, ${m.color}22, ${m.color}44)`,
                        border: `2px solid ${m.color}`,
                        borderRadius: 14,
                        padding: "10px 16px",
                        textAlign: "center",
                        minWidth: 80,
                      }}
                    >
                      <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(15,42,68,0.6)", marginBottom: 2 }}>
                        {m.label}
                      </div>
                      <div style={{ fontSize: 22, fontWeight: 900, color: m.color }}>{m.value}</div>
                    </div>
                    {i < MULTIPLIERS.length - 1 && (
                      <span style={{ fontSize: 20, color: "#0F2A44", fontWeight: 900 }}>→</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Platforms image */}
              <img
                src={PLATFORMS_IMG}
                alt="Платформы казино Doodle Jump — множители x1 x2 x5 x10"
                style={{
                  width: "100%",
                  maxHeight: 280,
                  objectFit: "contain",
                  borderRadius: 16,
                  background: "rgba(250,250,250,0.5)",
                }}
                loading="lazy"
              />
            </div>
          </section>

          {/* ===== TWO COLUMN: Features + Character ===== */}
          <section
            aria-label="Преимущества Doodle Jump Casino"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: 20,
              marginBottom: 24,
              alignItems: "start",
            }}
          >
            <div className="doodle-card fade-in-up fade-in-up-delay-3" style={{ padding: "24px 28px" }}>
              <h2
                style={{
                  fontSize: "clamp(20px, 4.5vw, 28px)",
                  fontWeight: 900,
                  color: "#0F2A44",
                  margin: "0 0 18px 0",
                }}
              >
                💎 Почему выбирают Doodle Casino?
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: 12,
                }}
              >
                {FEATURES.map((f) => (
                  <div key={f.title} className="feature-card">
                    <div style={{ fontSize: 22, marginBottom: 4 }}>{f.icon}</div>
                    <div style={{ fontWeight: 900, fontSize: 15, color: "#0F2A44", marginBottom: 3 }}>
                      {f.title}
                    </div>
                    <div style={{ fontWeight: 600, fontSize: 13, color: "rgba(15,42,68,0.7)" }}>
                      {f.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Character */}
            <div
              style={{
                width: 180,
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
              }}
            >
              <img
                src={CHAR_IMG}
                alt="Персонаж Дудл Джамп казино"
                className="bounce-slow"
                style={{
                  width: 160,
                  height: 160,
                  objectFit: "contain",
                  filter: "drop-shadow(0 8px 16px rgba(65,211,107,0.3))",
                }}
                loading="lazy"
              />
              <div
                style={{
                  background: "linear-gradient(135deg, #ffd84d, #F5C842)",
                  border: "2px solid rgba(58,40,0,0.2)",
                  borderRadius: 12,
                  padding: "8px 14px",
                  fontWeight: 900,
                  fontSize: 13,
                  color: "#3a2800",
                  textAlign: "center",
                  boxShadow: "0 4px 0 rgba(58,40,0,0.12)",
                }}
              >
                🏆 Топ игрок<br />
                <span style={{ fontSize: 18 }}>₽ 245,000</span>
              </div>
            </div>
          </section>

          {/* ===== WHERE TO PLAY ===== */}
          <section
            id="play"
            aria-label="Где играть в Doodle Jump Casino"
            style={{ marginBottom: 24 }}
          >
            <div className="doodle-card" style={{ padding: "24px 28px" }}>
              <h2
                style={{
                  fontSize: "clamp(20px, 4.5vw, 28px)",
                  fontWeight: 900,
                  color: "#0F2A44",
                  margin: "0 0 12px 0",
                }}
              >
                📌 Где играть в Doodle Jump на реальные деньги?
              </h2>
              <p style={{ fontWeight: 600, color: "rgba(15,42,68,0.8)", lineHeight: 1.6, marginBottom: 20, fontSize: 16 }}>
                Официальное <strong>казино Doodle Jump</strong> работает через сайт и Telegram-бота.
                После регистрации открывается личный баланс, пополнение и <strong>вывод средств</strong>.
                Для всех новых игроков — <strong>демо-режим</strong> с виртуальными деньгами, чтобы
                изучить стратегию перед реальными ставками.
              </p>

              {/* Stats row */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                  gap: 12,
                  marginBottom: 24,
                }}
              >
                {[
                  { label: "Игроков онлайн", value: playersCount.toLocaleString("ru-RU"), icon: "👥" },
                  { label: "Выплачено сегодня", value: "₽ 4.2M+", icon: "💰" },
                  { label: "Макс. выигрыш", value: "x500", icon: "🏆" },
                  { label: "Мин. ставка", value: "10₽", icon: "🎲" },
                ].map((s) => (
                  <div
                    key={s.label}
                    style={{
                      background: "linear-gradient(135deg, #f0f9ff, #e8f5ff)",
                      border: "2px solid rgba(15,42,68,0.12)",
                      borderRadius: 16,
                      padding: "14px 16px",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontSize: 24, marginBottom: 4 }}>{s.icon}</div>
                    <div style={{ fontWeight: 900, fontSize: 20, color: "#0F2A44" }}>{s.value}</div>
                    <div style={{ fontWeight: 600, fontSize: 12, color: "rgba(15,42,68,0.6)" }}>{s.label}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="#play" className="btn-doodle btn-primary" style={{ fontSize: 18 }}>
                  🎰 Играть на сайте
                </a>
                <a href="#demo" className="btn-doodle btn-gold" style={{ fontSize: 18 }}>
                  🎮 Демо-счёт
                </a>
              </div>
            </div>
          </section>

          {/* ===== DEMO SECTION ===== */}
          <section
            id="demo"
            aria-label="Демо игра Doodle Jump Casino бесплатно"
            style={{ marginBottom: 24 }}
          >
            <div
              className="doodle-card"
              style={{
                padding: "24px 28px",
                background: "linear-gradient(135deg, #f0fff6, #e8fff2)",
                borderColor: "rgba(65,211,107,0.4)",
              }}
            >
              <h2
                style={{
                  fontSize: "clamp(20px, 4.5vw, 28px)",
                  fontWeight: 900,
                  color: "#0F2A44",
                  margin: "0 0 12px 0",
                }}
              >
                🎮 Doodle Jump демо игра — бесплатно без регистрации
              </h2>
              <p style={{ fontWeight: 600, color: "rgba(15,42,68,0.8)", lineHeight: 1.6, marginBottom: 16, fontSize: 16 }}>
                Хотите попробовать <strong>слот Дудл Джамп</strong> перед игрой на деньги?
                Запустите <strong>демо-режим</strong> — вы получаете виртуальный баланс и можете
                играть сколько угодно <strong>без регистрации</strong> и без вложений.
                Идеально для изучения стратегии и механики игры.
              </p>
              <div
                style={{
                  background: "rgba(255,255,255,0.8)",
                  border: "2px dashed rgba(65,211,107,0.5)",
                  borderRadius: 16,
                  padding: "16px 20px",
                  marginBottom: 20,
                }}
              >
                <div style={{ fontWeight: 800, fontSize: 15, color: "#0F2A44", marginBottom: 8 }}>
                  В демо-режиме вы получаете:
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                  {[
                    "✅ Виртуальный баланс 10 000₽ для тренировки",
                    "✅ Полный доступ ко всем функциям без ограничений",
                    "✅ Возможность изучить все множители до x500",
                    "✅ Без регистрации и без вложений реальных денег",
                  ].map((item) => (
                    <li key={item} style={{ fontWeight: 700, fontSize: 14, color: "rgba(15,42,68,0.85)" }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a href="#demo" className="btn-doodle btn-primary" style={{ fontSize: 18 }}>
                🎮 Запустить демо бесплатно
              </a>
            </div>
          </section>

          {/* ===== DETAILED DESCRIPTION ===== */}
          <section
            aria-label="Описание игрового автомата Дудл Джамп"
            style={{ marginBottom: 24 }}
          >
            <div className="doodle-card" style={{ padding: "24px 28px" }}>
              <h2
                style={{
                  fontSize: "clamp(20px, 4.5vw, 28px)",
                  fontWeight: 900,
                  color: "#0F2A44",
                  margin: "0 0 12px 0",
                }}
              >
                🎯 Игровой автомат Дудл Джамп — полное описание
              </h2>

              <h3
                style={{
                  fontSize: "clamp(17px, 3.5vw, 22px)",
                  fontWeight: 900,
                  color: "#0F2A44",
                  margin: "18px 0 8px 0",
                }}
              >
                Что такое Doodle Jump Casino?
              </h3>
              <p style={{ fontWeight: 600, color: "rgba(15,42,68,0.8)", lineHeight: 1.7, fontSize: 15 }}>
                <strong>Doodle Jump Casino</strong> — это инновационный <strong>игровой автомат</strong> в жанре
                краш-игры, созданный на основе механики легендарного мобильного раннера Doodle Jump.
                В отличие от классических <strong>слотов</strong>, здесь нет барабанов и линий выплат —
                вместо этого ваш персонаж прыгает по платформам, а <strong>множитель ставки</strong> растёт
                с каждым успешным прыжком. Игра сочетает азарт казино с ностальгией по культовой игре.
              </p>

              <h3
                style={{
                  fontSize: "clamp(17px, 3.5vw, 22px)",
                  fontWeight: 900,
                  color: "#0F2A44",
                  margin: "18px 0 8px 0",
                }}
              >
                Как делать ставки в Дудл Джамп казино?
              </h3>
              <p style={{ fontWeight: 600, color: "rgba(15,42,68,0.8)", lineHeight: 1.7, fontSize: 15 }}>
                Процесс прост: выберите размер <strong>ставки</strong> (от 10₽ до 100 000₽),
                нажмите «Играть» и наблюдайте, как персонаж прыгает вверх. Множитель начинается с x1
                и растёт по мере подъёма. Ключевой момент — вовремя нажать кнопку «Забрать», чтобы
                зафиксировать выигрыш. Если персонаж упадёт до того, как вы нажмёте «Забрать» —
                ставка сгорает. Это и есть суть <strong>казино Дудл Джамп</strong>.
              </p>

              <h3
                style={{
                  fontSize: "clamp(17px, 3.5vw, 22px)",
                  fontWeight: 900,
                  color: "#0F2A44",
                  margin: "18px 0 8px 0",
                }}
              >
                Вывод денег из Doodle Jump Casino
              </h3>
              <p style={{ fontWeight: 600, color: "rgba(15,42,68,0.8)", lineHeight: 1.7, fontSize: 15 }}>
                <strong>Вывод денег</strong> из Doodle Jump Casino доступен от 500₽. Поддерживаемые
                методы: банковские карты Visa/MasterCard/МИР, электронные кошельки ЮMoney, криптовалюта
                USDT (TRC-20, ERC-20). Среднее время обработки — 15–60 минут. Максимальная сумма вывода
                в сутки зависит от уровня верификации аккаунта.
              </p>

              <hr className="section-divider" style={{ margin: "20px 0" }} />

              {/* Bottom links */}
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
                <span
                  style={{
                    background: "#229ed9",
                    color: "white",
                    borderRadius: 40,
                    padding: "5px 14px",
                    fontSize: 13,
                    fontWeight: 800,
                  }}
                >
                  🤖 Telegram бот
                </span>
                <a href="#play" style={{ color: "#0F2A44", fontWeight: 900, textDecoration: "none", fontSize: 14 }}>
                  Играть на деньги
                </a>
                <a href="#demo" style={{ color: "#0F2A44", fontWeight: 900, textDecoration: "none", fontSize: 14 }}>
                  Демо-счёт
                </a>
                <a href="#faq" style={{ color: "#0F2A44", fontWeight: 900, textDecoration: "none", fontSize: 14 }}>
                  Вопросы и ответы
                </a>
              </div>
            </div>
          </section>

          {/* ===== FAQ SECTION ===== */}
          <section
            id="faq"
            aria-label="Часто задаваемые вопросы о Doodle Jump Casino"
            style={{ marginBottom: 32 }}
          >
            <div className="doodle-card" style={{ padding: "24px 28px" }}>
              <h2
                style={{
                  fontSize: "clamp(20px, 4.5vw, 28px)",
                  fontWeight: 900,
                  color: "#0F2A44",
                  margin: "0 0 20px 0",
                }}
              >
                ❓ Часто задаваемые вопросы
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {FAQ.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      border: "2px solid rgba(15,42,68,0.12)",
                      borderRadius: 16,
                      overflow: "hidden",
                      transition: "border-color 0.2s",
                      borderColor: openFaq === i ? "rgba(65,211,107,0.5)" : "rgba(15,42,68,0.12)",
                    }}
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      style={{
                        width: "100%",
                        textAlign: "left",
                        padding: "14px 18px",
                        background: openFaq === i ? "rgba(65,211,107,0.06)" : "white",
                        border: "none",
                        fontFamily: "'Nunito', sans-serif",
                        fontWeight: 800,
                        fontSize: "clamp(14px, 3vw, 16px)",
                        color: "#0F2A44",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 12,
                        transition: "background 0.2s",
                      }}
                      aria-expanded={openFaq === i}
                    >
                      <span>{item.q}</span>
                      <span
                        style={{
                          fontSize: 20,
                          transform: openFaq === i ? "rotate(45deg)" : "rotate(0)",
                          transition: "transform 0.2s",
                          flexShrink: 0,
                          color: "#41D36B",
                        }}
                      >
                        +
                      </span>
                    </button>
                    {openFaq === i && (
                      <div
                        style={{
                          padding: "0 18px 16px",
                          fontWeight: 600,
                          fontSize: 15,
                          color: "rgba(15,42,68,0.8)",
                          lineHeight: 1.65,
                          background: "rgba(65,211,107,0.04)",
                        }}
                      >
                        {item.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ===== FINAL CTA ===== */}
          <section
            aria-label="Играть в Doodle Jump Casino"
            style={{ marginBottom: 40 }}
          >
            <div
              className="doodle-card"
              style={{
                padding: "32px 28px",
                textAlign: "center",
                background: "linear-gradient(135deg, #0F2A44, #1b4f6e)",
                borderColor: "#0F2A44",
              }}
            >
              <h2
                style={{
                  fontSize: "clamp(22px, 5vw, 32px)",
                  fontWeight: 900,
                  color: "white",
                  margin: "0 0 12px 0",
                }}
              >
                🚀 Начни играть в Doodle Jump Casino прямо сейчас!
              </h2>
              <p
                style={{
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.85)",
                  fontSize: 16,
                  marginBottom: 24,
                  lineHeight: 1.6,
                }}
              >
                Демо бесплатно без регистрации. Реальные ставки от 10₽.
                Вывод от 500₽. Максимальный выигрыш x500.
              </p>
              <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                <a href="#play" className="btn-doodle btn-primary" style={{ fontSize: 20 }}>
                  🎰 Играть на деньги
                </a>
                <a href="#demo" className="btn-doodle btn-gold" style={{ fontSize: 20 }}>
                  🎮 Демо бесплатно
                </a>
              </div>
            </div>
          </section>

          {/* ===== FOOTER ===== */}
          <footer
            style={{
              textAlign: "center",
              padding: "20px 0 30px",
              borderTop: "2px dashed rgba(15,42,68,0.12)",
            }}
          >
            <p style={{ fontSize: 12, color: "rgba(15,42,68,0.5)", fontWeight: 600, margin: "0 0 8px 0" }}>
              * Казино Doodle Jump (Дудл Джамп) — игра на деньги с выводом. 18+. Играйте ответственно.
            </p>
            <p style={{ fontSize: 11, color: "rgba(15,42,68,0.4)", fontWeight: 600, margin: 0 }}>
              doodle jump casino · дудл джамп казино · казино дудл джамп · doodle jump на деньги ·
              слот дудл джамп · дудл джамп с выводом денег · игровой автомат дудл джамп
            </p>
          </footer>

        </div>
      </main>
    </div>
  );
}
