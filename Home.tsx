/*
Design Philosophy Reminder:
方案一「當代日式靜奢旅遊美學」。本頁所有段落必須維持精品旅遊型錄般的留白、
不對稱編排、松針綠與沙霧米白主色，以及克制但清楚的高端轉換節奏。
*/

import { useEffect, useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import {
  ArrowRight,
  CalendarDays,
  CarFront,
  ChevronDown,
  CircleCheck,
  Flag,
  Hotel,
  Languages,
  Mail,
  MapPinned,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
  Trees,
  Users,
} from "lucide-react";
import { toast } from "sonner";
import { assets, type Locale, siteContent, whatsappQrUrl, whatsappUrl } from "@/lib/content";

type FormState = {
  departureDate: string;
  people: string;
  rounds: string;
  nights: string;
  transfer: string;
  dining: string;
  email: string;
  whatsapp: string;
  notes: string;
};

const localeOrder: Locale[] = ["zh-TW", "en", "zh-HK"];

const createInitialFormState = (): FormState => ({
  departureDate: "",
  people: "",
  rounds: "",
  nights: "",
  transfer: "",
  dining: "",
  email: "",
  whatsapp: "",
  notes: "",
});

const iconMap = [Users, Flag, CarFront] as const;

export default function Home() {
  const [locale, setLocale] = useState<Locale>("zh-TW");
  const [menuOpen, setMenuOpen] = useState(false);
  const [formState, setFormState] = useState<FormState>(createInitialFormState);

  const content = siteContent[locale];
  const heroTitleLines = locale === "en" ? null : ["北台灣", "頂級高球", "自由行"];
  const featuredCourses = useMemo(
    () => content.courses.items.filter((item) => item.type === "featured"),
    [content.courses.items],
  );
  const alternateCourses = useMemo(
    () => content.courses.items.filter((item) => item.type === "alternate"),
    [content.courses.items],
  );

  const restaurantRecommendation = useMemo(
    () => ({
      eyebrow:
        locale === "en"
          ? "Jensen Huang's Must-Eat in Taiwan"
          : locale === "zh-HK"
            ? "黃仁勳來台必食美食"
            : "黃仁勳來台必吃美食",
      title:
        locale === "en"
          ? "Recommended Dining Picks"
          : locale === "zh-HK"
            ? "推薦餐廳"
            : "推薦餐廳",
      note:
        locale === "en"
          ? "A good restaurant for gathering after the round."
          : locale === "zh-HK"
            ? "一間好餐廳，適合收桿後嘅歡聚"
            : "一間好餐廳，適合收桿後的歡聚",
      image:
        "https://d2xsxph8kpxj0f.cloudfront.net/310519663396090936/YX5JNN9d6ExP9T7Pu98y4K/restaurant-jensen-recommendation-S95CWordPuaMTxWJyEsvqX.webp",
      helper:
        locale === "en"
          ? "Ideal for golf groups, business hosting, and custom dinner requests"
          : locale === "zh-HK"
            ? "適合高球小團、商務招待同客製晚餐安排"
            : "適合高球小團、商務招待與客製晚餐安排",
      listTitle:
        locale === "en"
          ? "Dining Recommendations"
          : locale === "zh-HK"
            ? "餐飲推薦"
            : "餐飲推薦",
      listIntro:
        locale === "en"
          ? ""
          : locale === "zh-HK"
            ? ""
            : "",
      items:
        locale === "en"
          ? [
              "Seafood Pick: Xiao Zhang Guishan Island",
              "Fu Ba Wang Pork Knuckle",
              "Brick Kiln Traditional Restaurant",
              "Ji Yuan Sichuan Restaurant",
              "Zou Ji Shi Pu",
              "Chun Jiu",
              "36 Shifu",
              "Li Yuan Soup Dumpling",
              "Mao Yuan Restaurant",
              "Hua Niang Xiao Guan",
            ]
          : [
              "海鮮首選~小張龜山島",
              "富霸王豬腳",
              "磚窯古早味餐廳",
              "驥園川菜餐廳",
              "鄒記食舖",
              "春韭",
              "三六食府粉專",
              "犁園湯包館",
              "茂園餐廳",
              "花娘小館",
            ],
    }),
    [locale],
  );

  const structuredData = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "TravelAgency",
      name: content.contact.company,
      description: content.seo.description,
      telephone: "+88675337989",
      email: "chang950912@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: locale === "en" ? "Kaohsiung City" : "高雄市",
        addressRegion: locale === "en" ? "Yancheng District" : "鹽埕區",
        addressCountry: "TW",
      },
      areaServed: "Hong Kong",
      url: typeof window !== "undefined" ? window.location.href : "",
      sameAs: [whatsappUrl],
    }),
    [content, locale],
  );

  useEffect(() => {
    document.title = content.seo.title;
    document.documentElement.lang = content.seo.lang;

    const ensureMeta = (name: string, attribute: "name" | "property" = "name") => {
      let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}='${name}']`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      return element;
    };

    ensureMeta("description").content = content.seo.description;
    ensureMeta("keywords").content = content.seo.keywords;
    ensureMeta("og:title", "property").content = content.seo.title;
    ensureMeta("og:description", "property").content = content.seo.description;
    ensureMeta("og:type", "property").content = "website";
    ensureMeta("og:image", "property").content = assets.hero;
    ensureMeta("twitter:card", "name").content = "summary_large_image";
    ensureMeta("twitter:title", "name").content = content.seo.title;
    ensureMeta("twitter:description", "name").content = content.seo.description;
    ensureMeta("twitter:image", "name").content = assets.hero;
  }, [content]);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const closeOnScroll = () => setMenuOpen(false);
    const closeOnOutsideClick = (event: MouseEvent) => {
      const target = event.target;
      if (target instanceof Element && !target.closest(".language-switcher")) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", closeOnScroll, true);
    document.addEventListener("mousedown", closeOnOutsideClick);

    return () => {
      window.removeEventListener("scroll", closeOnScroll, true);
      document.removeEventListener("mousedown", closeOnOutsideClick);
    };
  }, [menuOpen]);

  const handleChange =
    (key: keyof FormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setFormState((previous) => ({
        ...previous,
        [key]: event.target.value,
      }));
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const lines = [
      `${content.form.fields.departureDate}: ${formState.departureDate || "-"}`,
      `${content.form.fields.people}: ${formState.people || "-"}`,
      `${content.form.fields.rounds}: ${formState.rounds || "-"}`,
      `${content.form.fields.nights}: ${formState.nights || "-"}`,
      `${content.form.fields.transfer}: ${formState.transfer || "-"}`,
      `${content.form.fields.dining}: ${formState.dining || "-"}`,
      `${content.form.fields.email}: ${formState.email || "-"}`,
      `${content.form.fields.whatsapp}: ${formState.whatsapp || "-"}`,
      `${content.form.fields.notes}: ${formState.notes || "-"}`,
    ];

    const subject = encodeURIComponent(`${content.nav.brand}｜${content.form.title}`);
    const body = encodeURIComponent(lines.join("\n"));

    toast.success(content.form.success);
    window.location.href = `mailto:chang950912@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(14,24,21,0.82)] backdrop-blur-xl">
        <div className="container">
          <div className="flex items-center justify-between gap-4 py-4">
            <a href="#hero" className="brand-mark">
              <span className="brand-mark__crest">TG</span>
              <span>
                <strong>{content.nav.brand}</strong>
                <small>{content.hero.eyebrow}</small>
              </span>
            </a>

            <nav className="hidden items-center gap-6 lg:flex">
              {content.nav.menu.map((item) => (
                <a key={item.href} href={item.href} className="nav-link">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <div className="language-switcher">
                <button
                  type="button"
                  className="language-switcher__button"
                  aria-expanded={menuOpen}
                  onClick={() => setMenuOpen((previous) => !previous)}
                >
                  <Languages size={16} />
                  <span>{content.nav.languageNames[locale]}</span>
                  <ChevronDown size={16} className={menuOpen ? "rotate-180 transition" : "transition"} />
                </button>

                {menuOpen ? (
                  <div className="language-switcher__menu">
                    {localeOrder.map((item) => (
                      <button
                        key={item}
                        type="button"
                        className={item === locale ? "language-switcher__item active" : "language-switcher__item"}
                        onClick={() => {
                          setLocale(item);
                          setMenuOpen(false);
                        }}
                      >
                        {content.nav.languageNames[item]}
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>

              <a href="#form" className="button-primary hidden md:inline-flex">
                {content.nav.cta}
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="hero" className="hero-shell hero-shell--airy">
          <div className="hero-background" style={{ backgroundImage: `url(${assets.hero})` }} />
          <div className="hero-overlay hero-overlay--airy" />
          <div className="container relative z-10 py-6 md:py-10 lg:py-14">
            <div className="hero-grid hero-grid--airy hero-grid--single">
              <div className="hero-copy hero-copy--compact hero-copy--spotlight">
                <span className="eyebrow">{content.hero.eyebrow}</span>
                <h1 aria-label={content.hero.title}>
                  {heroTitleLines
                    ? heroTitleLines.map((line) => (
                        <span key={line} className="hero-title-line-break">
                          {line}
                        </span>
                      ))
                    : content.hero.title}
                </h1>
                <p className="hero-subtitle">{content.hero.subtitle}</p>
                <p className="hero-description">{content.hero.description}</p>

                <div className="hero-actions hero-actions--compact">
                  <a href="#form" className="button-primary">
                    {content.hero.primaryCta}
                    <ArrowRight size={18} />
                  </a>
                  <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button-secondary">
                    {content.hero.secondaryCta}
                    <MessageCircle size={18} />
                  </a>
                </div>

                <div className="hero-stats hero-stats--floating">
                  {content.hero.stats.map((item) => (
                    <article key={item.label} className="stat-card">
                      <strong>{item.value}</strong>
                      <span>{item.label}</span>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" className="section-shell section-soft">
          <div className="container">
            <div className="section-heading section-heading--split">
              <div>
                <span className="eyebrow">Golf Travel Highlights</span>
                <h2 className={locale !== "en" ? "benefits-title-single-line" : undefined}>{content.benefits.title}</h2>
              </div>
              <p>{content.benefits.intro}</p>
            </div>

            <div className="benefit-grid">
              {content.benefits.items.map((item, index) => {
                const Icon = iconMap[index];
                return (
                  <article key={item.title} className="benefit-card">
                    <span className="benefit-card__icon">
                      <Icon size={20} />
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="packages" className="section-shell">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Custom Quotation</span>
              <h2>{content.packages.title}</h2>
              <p>{content.packages.intro}</p>
            </div>

            <div className="package-grid">
              <article className="package-card package-card--featured">
                <div className="package-card__header">
                  <span className="pill-tag">{content.packages.featured.badge}</span>
                  <h3>{content.packages.featured.title}</h3>
                </div>
                <p>{content.packages.featured.description}</p>
                <ul className="feature-list">
                  {content.packages.featured.includes.map((item, index) => (
                    <li key={item} style={index === 1 ? { color: "#c2c7c5" } : undefined}>
                      <CircleCheck size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="package-card">
                <div className="package-card__header">
                  <span className="pill-tag pill-tag--quiet">{content.packages.custom.badge}</span>
                  <h3>{content.packages.custom.title}</h3>
                </div>
                <ul className="feature-list">
                  {content.packages.custom.points.map((item) => (
                    <li key={item}>
                      <ArrowRight size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="package-note">{content.packages.note}</p>
              </article>
            </div>
          </div>
        </section>

        <section id="courses" className="section-shell section-deep">
          <div className="container">
            <div className="section-heading section-heading--split">
              <div>
                <span className="eyebrow">North Taiwan Golf Courses</span>
                <h2>{content.courses.title}</h2>
              </div>
              <p>{content.courses.intro}</p>
            </div>

            <div className="course-band">
              <div className="course-band__label">{content.courses.featuredLabel}</div>
              <div className="course-grid course-grid--featured">
                {featuredCourses.map((course) => (
                  <article key={course.name} className="course-card">
                    <div className="course-card__image-wrap">
                      <img src={course.image} alt={course.name} loading="lazy" className="course-card__image" />
                    </div>
                    <div className="course-card__body">
                      <span className="course-tag" style={{ color: "#8a9193" }}>Featured</span>
                      <h3>
                        <a href={course.officialUrl} target="_blank" rel="noreferrer" className="course-link">
                          {course.name}
                        </a>
                      </h3>
                      <p>{course.blurb}</p>
                      <dl>
                        <div>
                          <dt>{locale === "en" ? "Challenge" : locale === "zh-HK" ? "難度" : "難度"}</dt>
                          <dd>{course.difficulty}</dd>
                        </div>
                        <div>
                          <dt>{locale === "en" ? "Drive Time" : locale === "zh-HK" ? "車程" : "車程"}</dt>
                          <dd>{course.drive}</dd>
                        </div>
                      </dl>
                      <a href={course.officialUrl} target="_blank" rel="noreferrer" className="course-link course-link--cta">
                        {locale === "en" ? "Visit Official Site" : locale === "zh-HK" ? "前往球場官網" : "前往球場官網"}
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="course-band course-band--alternate">
              <div className="course-band__label">{content.courses.alternateLabel}</div>
              <div className="course-grid course-grid--alternate">
                {alternateCourses.map((course) => (
                  <article key={course.name} className="course-card course-card--alternate">
                    <div className="course-card__image-wrap">
                      <img src={course.image} alt={course.name} loading="lazy" className="course-card__image" />
                    </div>
                    <div className="course-card__body">
                      <span className="course-tag course-tag--soft" style={{ color: "#98a09d" }}>Alternate</span>
                      <h3>
                        <a href={course.officialUrl} target="_blank" rel="noreferrer" className="course-link">
                          {course.name}
                        </a>
                      </h3>
                      <p>{course.blurb}</p>
                      <dl>
                        <div>
                          <dt>{locale === "en" ? "Challenge" : locale === "zh-HK" ? "難度" : "難度"}</dt>
                          <dd>{course.difficulty}</dd>
                        </div>
                        <div>
                          <dt>{locale === "en" ? "Drive Time" : locale === "zh-HK" ? "車程" : "車程"}</dt>
                          <dd>{course.drive}</dd>
                        </div>
                      </dl>
                      <a href={course.officialUrl} target="_blank" rel="noreferrer" className="course-link course-link--cta">
                        {locale === "en" ? "Visit Official Site" : locale === "zh-HK" ? "前往球場官網" : "前往球場官網"}
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="stay-transport" className="section-shell">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Stay & Transfer</span>
              <h2>{content.stayTransport.title}</h2>
              <p>{content.stayTransport.intro}</p>
            </div>

            <div className="experience-grid">
              <article className="experience-card experience-card--wide">
                <div className="experience-card__image-wrap">
                  <img src={assets.hotel} alt={content.stayTransport.hotel.title} loading="lazy" />
                </div>
                <div className="experience-card__body">
                  <div className="experience-card__icon"><Hotel size={18} /></div>
                  <span className="pill-tag pill-tag--quiet">Hotel</span>
                  <h3>{content.stayTransport.hotel.title}</h3>
                  <p className="card-meta">{content.stayTransport.hotel.meta}</p>
                  <p>{content.stayTransport.hotel.description}</p>
                  <ul className="feature-list feature-list--compact">
                    {content.stayTransport.hotel.bullets.map((item) => (
                      <li key={item}>
                        <CircleCheck size={16} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>

              <article className="experience-card">
                <div className="experience-card__image-wrap">
                  <img src={assets.transport} alt={content.stayTransport.transport.title} loading="lazy" />
                </div>
                <div className="experience-card__body">
                  <div className="experience-card__icon"><CarFront size={18} /></div>
                  <span className="pill-tag pill-tag--quiet">Transfer</span>
                  <h3>{content.stayTransport.transport.title}</h3>
                  <p className="card-meta">{content.stayTransport.transport.meta}</p>
                  <p>{content.stayTransport.transport.description}</p>
                  <ul className="feature-list feature-list--compact">
                    {content.stayTransport.transport.bullets.map((item) => (
                      <li key={item}>
                        <CircleCheck size={16} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="restaurants" className="section-shell restaurant-shell">
          <div className="container">
            <article className="restaurant-showcase">
              <div className="restaurant-showcase__media">
                <img src={restaurantRecommendation.image} alt={restaurantRecommendation.title} loading="lazy" className="restaurant-showcase__image" />
                <span className="restaurant-showcase__disclaimer">AI 示意圖，以實景為準</span>
              </div>

              <div className="restaurant-showcase__content">
                <span className="eyebrow">{restaurantRecommendation.eyebrow}</span>
                <span className="pill-tag pill-tag--quiet">{locale === "en" ? "Dining Pick" : locale === "zh-HK" ? "餐飲推介" : "餐飲推薦"}</span>
                <h2>{locale === "en" ? "Recommended Restaurant" : locale === "zh-HK" ? "推薦餐廳" : "推薦餐廳"}</h2>
                <p className="restaurant-showcase__lead">{restaurantRecommendation.note}</p>
                <p className="restaurant-showcase__support">{restaurantRecommendation.listIntro}</p>
                <ul className="restaurant-name-list">
                  {restaurantRecommendation.items.map((item) => (
                    <li key={item} className="restaurant-name-list__item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section className="section-shell section-soft">
          <div className="container">
            <div className="section-heading section-heading--split">
              <div>
                <span className="eyebrow">Client Experience</span>
                <h2>{content.testimonials.title}</h2>
              </div>
            </div>

            <div className="testimonial-grid">
              {content.testimonials.items.map((item) => (
                <article key={item.name} className="testimonial-card">
                  <div className="testimonial-stars">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                  <p>“{item.quote}”</p>
                  <strong>{item.name}</strong>
                  <span>{item.trip}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="container">
            <div className="about-grid">
              <div className="section-heading">
                <span className="eyebrow">Trusted Local Partner</span>
                <h2>{content.about.title}</h2>
                <p>{content.about.intro}</p>
              </div>

              <div className="about-stack">
                {content.about.blocks.map((item) => (
                  <article key={item.title} className="about-card">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="section-shell section-deep">
          <div className="container">
            <div className="section-heading section-heading--split">
              <div>
                <span className="eyebrow">FAQ</span>
                <h2>{content.faq.title}</h2>
              </div>
              <p>{content.faq.intro}</p>
            </div>

            <div className="faq-list">
              {content.faq.items.map((item) => (
                <details key={item.q} className="faq-item">
                  <summary>
                    <span>{item.q}</span>
                    <ChevronDown size={18} />
                  </summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="form" className="section-shell">
          <div className="container">
            <div className="conversion-grid">
              <div className="section-heading">
                <span className="eyebrow">Custom Enquiry Form</span>
                <h2>{content.form.title}</h2>
                <p>{content.form.intro}</p>

                <div className="contact-stack">
                  <div className="contact-mini-card">
                    <CalendarDays size={18} />
                    <span>{content.form.fields.departureDate}</span>
                  </div>
                  <div className="contact-mini-card">
                    <Trees size={18} />
                    <span>{locale === "en" ? "Golf course preferences welcome" : locale === "zh-HK" ? "歡迎指定想打球場" : "歡迎指定想打球場"}</span>
                  </div>
                  <div className="contact-mini-card">
                    <ShieldCheck size={18} />
                    <span>{content.packages.note}</span>
                  </div>
                </div>
              </div>

              <form className="form-card" onSubmit={handleSubmit}>
                <div className="form-grid">
                  <label>
                    <span>{content.form.fields.departureDate}</span>
                    <input type="date" value={formState.departureDate} onChange={handleChange("departureDate")} required />
                  </label>

                  <label>
                    <span>{content.form.fields.people}</span>
                    <select value={formState.people} onChange={handleChange("people")} required>
                      <option value="">—</option>
                      {content.form.options.people.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label>
                    <span>{content.form.fields.rounds}</span>
                    <select value={formState.rounds} onChange={handleChange("rounds")} required>
                      <option value="">—</option>
                      {content.form.options.rounds.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label>
                    <span>{content.form.fields.nights}</span>
                    <select value={formState.nights} onChange={handleChange("nights")} required>
                      <option value="">—</option>
                      {content.form.options.nights.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label>
                    <span>{content.form.fields.transfer}</span>
                    <select value={formState.transfer} onChange={handleChange("transfer")} required>
                      <option value="">—</option>
                      <option value={content.form.options.yesNo.yes}>{content.form.options.yesNo.yes}</option>
                      <option value={content.form.options.yesNo.no}>{content.form.options.yesNo.no}</option>
                    </select>
                  </label>

                  <label>
                    <span>{content.form.fields.dining}</span>
                    <select value={formState.dining} onChange={handleChange("dining")} required>
                      <option value="">—</option>
                      <option value={content.form.options.yesNo.yes}>{content.form.options.yesNo.yes}</option>
                      <option value={content.form.options.yesNo.no}>{content.form.options.yesNo.no}</option>
                    </select>
                  </label>

                  <label>
                    <span>{content.form.fields.email}</span>
                    <input type="email" value={formState.email} onChange={handleChange("email")} placeholder="name@example.com" required />
                  </label>

                  <label>
                    <span>{content.form.fields.whatsapp}</span>
                    <input type="text" value={formState.whatsapp} onChange={handleChange("whatsapp")} placeholder="+852 / +886" required />
                  </label>
                </div>

                <label className="form-grid__full">
                  <span>{content.form.fields.notes}</span>
                  <textarea
                    rows={5}
                    value={formState.notes}
                    onChange={handleChange("notes")}
                    placeholder={locale === "en" ? "Preferred courses, tee times, hotel level, dinner request..." : locale === "zh-HK" ? "可填想打球場、開球時段、酒店要求、晚餐安排等。" : "可填寫想打球場、開球時段、酒店需求、晚餐安排等。"}
                  />
                </label>

                <p className="privacy-note">{content.form.privacy}</p>

                <button type="submit" className="button-primary button-primary--full">
                  {content.form.submit}
                  <Mail size={18} />
                </button>
              </form>
            </div>
          </div>
        </section>

        <section id="contact" className="section-shell contact-shell">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-card contact-card--dark">
                <span className="eyebrow">Contact</span>
                <h2>{content.contact.title}</h2>
                <p>{content.contact.intro}</p>

                <div className="contact-detail-list">
                  <div>
                    <Phone size={18} />
                    <span>{content.contact.phone}</span>
                  </div>
                  <div>
                    <Phone size={18} />
                    <span>{content.contact.mobile}</span>
                  </div>
                  <div>
                    <Mail size={18} />
                    <span>{content.contact.email}</span>
                  </div>
                  <div>
                    <MessageCircle size={18} />
                    <span>{content.contact.whatsapp}</span>
                  </div>
                  <div>
                    <ShieldCheck size={18} />
                    <div className="flex flex-col gap-1">
                      <span>{content.contact.company}</span>
                      {content.contact.registrations.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="button-primary">
                  {content.hero.secondaryCta}
                  <MessageCircle size={18} />
                </a>
              </div>

              <div className="contact-card contact-card--qr">
                <div className="contact-card__visual">
                  <img src={assets.contact} alt="Golf concierge service" loading="lazy" />
                </div>
                <div className="qr-panel">
                  <img src={whatsappQrUrl} alt="WhatsApp QR Code" loading="lazy" className="qr-code" />
                  <div>
                    <strong>{content.contact.qrCaption}</strong>
                    <p>{content.contact.whatsapp}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
