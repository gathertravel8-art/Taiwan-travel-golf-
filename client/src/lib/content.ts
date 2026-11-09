/*
Design Philosophy Reminder:
當代日式靜奢旅遊美學。所有內容結構都必須服務於精品旅遊型錄般的閱讀節奏，
以松針綠、沙霧米白、墨灰、霧金與克制的資訊層級，呈現給香港高端高爾夫客群。
*/

export type Locale = "zh-TW" | "en" | "zh-HK";

export const whatsappUrl = "https://wa.me/886913369369";
export const whatsappQrUrl =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663396090936/YX5JNN9d6ExP9T7Pu98y4K/unclewhatsappQR-code_5f228944.jpg";

export const assets = {
  hero:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663396090936/YX5JNN9d6ExP9T7Pu98y4K/taiwan-golf-hero-bright-v2-EgRD3WBn3PCEUsjNmx7EBd.webp",
  transport:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663396090936/YX5JNN9d6ExP9T7Pu98y4K/golf-transport-van-jS3KA7vEMebaiGNMxk2Fyq.webp",
  hotel:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663396090936/YX5JNN9d6ExP9T7Pu98y4K/hyatt-style-room-golf-7nZDuU2XrKwsFX7WXCx8iS.webp",
  contact:
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663396090936/YX5JNN9d6ExP9T7Pu98y4K/whatsapp-concierge-golf-ngitc7D3xNFXMi8zp2nKKh.webp",
  courses: {
    donghua:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663396090936/YX5JNN9d6ExP9T7Pu98y4K/donghua_83cff12e.jpg",
    orient:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663396090936/YX5JNN9d6ExP9T7Pu98y4K/orient_17358ed7.jpg",
    miramar:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663396090936/YX5JNN9d6ExP9T7Pu98y4K/miramar_a10bdcb7.jpg",
    yonghan:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663396090936/YX5JNN9d6ExP9T7Pu98y4K/yonghan_f9f1d809.jpg",
    tashee:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663396090936/YX5JNN9d6ExP9T7Pu98y4K/tashee_abbb7ecd.jpg",
    sunrise:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663396090936/YX5JNN9d6ExP9T7Pu98y4K/sunrise_eed6a83c.jpg",
    tsaihsing:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663396090936/YX5JNN9d6ExP9T7Pu98y4K/tsaihsing_88b8b817.jpg",
    palmlakes:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663396090936/YX5JNN9d6ExP9T7Pu98y4K/palmlakes_3f5524e2.jpg",
    chianan:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663396090936/YX5JNN9d6ExP9T7Pu98y4K/chianan_5798f164.jpg",
    hsinyi:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663396090936/YX5JNN9d6ExP9T7Pu98y4K/hsinyi_637b36a7.jpg",
  },
} as const;

export type CourseItem = {
  name: string;
  type: "featured" | "alternate";
  image: string;
  officialUrl: string;
  blurb: string;
  difficulty: string;
  drive: string;
};

export type SiteContent = {
  seo: {
    lang: string;
    title: string;
    description: string;
    keywords: string;
  };
  nav: {
    brand: string;
    menu: { label: string; href: string }[];
    cta: string;
    languageLabel: string;
    languageNames: Record<Locale, string>;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    floatingLabel: string;
    stats: { value: string; label: string }[];
    highlights: string[];
  };
  benefits: {
    title: string;
    intro: string;
    items: { title: string; text: string }[];
  };
  packages: {
    title: string;
    intro: string;
    featured: {
      badge: string;
      title: string;
      description: string;
      includes: string[];
    };
    custom: {
      badge: string;
      title: string;
      points: string[];
    };
    note: string;
  };
  courses: {
    title: string;
    intro: string;
    featuredLabel: string;
    alternateLabel: string;
    items: CourseItem[];
  };
  stayTransport: {
    title: string;
    intro: string;
    hotel: {
      title: string;
      meta: string;
      bullets: string[];
      description: string;
    };
    transport: {
      title: string;
      meta: string;
      bullets: string[];
      description: string;
    };
  };
  testimonials: {
    title: string;
    intro: string;
    items: { quote: string; name: string; trip: string }[];
  };
  about: {
    title: string;
    intro: string;
    blocks: { title: string; text: string }[];
  };
  faq: {
    title: string;
    intro: string;
    items: { q: string; a: string }[];
  };
  form: {
    title: string;
    intro: string;
    privacy: string;
    submit: string;
    success: string;
    fields: {
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
    options: {
      people: string[];
      rounds: string[];
      nights: string[];
      yesNo: { yes: string; no: string };
    };
  };
  contact: {
    title: string;
    intro: string;
    phone: string;
    mobile: string;
    email: string;
    whatsapp: string;
    qrCaption: string;
    company: string;
    registrations: string[];
  };
};

export const siteContent: Record<Locale, SiteContent> = {
  "zh-TW": {
    seo: {
      lang: "zh-Hant",
      title:
        "台灣高球自由行｜專屬香港球友，台灣高球頂級自由行，北台灣最優質高球場，等您來挑戰！",
      description:
        "專為香港高端高爾夫客群設計的台灣高球自由行，整合北台灣頂級球場、飯店住宿、保母車接送、餐廳代訂與客製化報價，適合 4–8 人小團出發。",
      keywords:
        "台灣高球自由行,香港高爾夫旅遊,北台灣高爾夫球場,台灣高爾夫自由行,台灣高端高球旅遊,高球保母車接送,雪碧旅行社",
    },
    nav: {
      brand: "台灣高球自由行",
      menu: [
        { label: "行程亮點", href: "#benefits" },
        { label: "方案", href: "#packages" },
        { label: "球場", href: "#courses" },
        { label: "住宿交通", href: "#stay-transport" },
        { label: "推薦餐廳", href: "#restaurants" },
        { label: "FAQ", href: "#faq" },
        { label: "聯絡", href: "#contact" },
      ],
      cta: "立即詢問",
      languageLabel: "語言切換",
      languageNames: {
        "zh-TW": "繁體中文",
        en: "English",
        "zh-HK": "廣東話",
      },
    },
    hero: {
      eyebrow: "Taiwan Golf Travel for Hong Kong Customers",
      title: "北台灣頂級高球自由行",
      subtitle: "香港球友專屬，為 4–8 人香港球友小團量身規劃。",
      description:
        "從北台灣高爾夫球場安排、飯店住宿、保母車接送到餐廳代訂，專屬客製的高CP值價格，更是為了重視品質、效率的香港優質球友打造更俐落的台灣高球旅程。",
      primaryCta: "索取客製化報價",
      secondaryCta: "WhatsApp 聯絡",
      floatingLabel: "自由行 Golf Concierge",
      stats: [
        { value: "4–8人", label: "高端小團" },
        { value: "7座主打球場", label: "北台灣精選" },
        { value: "5天4場球", label: "經典安排" },
      ],
      highlights: [
        "台灣高爾夫球場安排",
        "飯店住宿與早餐",
        "保母車全程接送",
        "餐廳代訂與晚宴建議",
      ],
    },
    benefits: {
      title: "專為香港高端球友設計的台灣高球自由行",
      intro:
        "這不是制式團體行程，而是一份更像私人顧問安排的高球自由行提案。從球場等級、移動動線、住宿舒適度到餐敘節奏，我們都替您先想好。",
      items: [
        {
          title: "小團客製，4–8 人剛剛好",
          text: "適合好友揪團、企業球敘、家庭高球度假，不走大團拼車模式，行程節奏更從容。",
        },
        {
          title: "台灣十大球場安排邏輯",
          text: "以北台灣優質高爾夫球場為核心，依難度、景觀、會館質感與車程動線進行配置。",
        },
        {
          title: "保母車全程接送",
          text: "從機場、飯店、球場到餐廳皆可安排，支援球具收納、彈性停靠與香港客群熟悉的服務節奏。",
        },
      ],
    },
    packages: {
      title: "行程方案與客製化報價",
      intro:
        "網站不顯示固定價格。我們會依出發日期、人數、想打的球場、住宿等級與接送需求，提供客製化報價。",
      featured: {
        badge: "主打方案",
        title: "5天4場球｜北台灣高球自由行",
        description:
          "適合第一次來台灣安排高球旅程的香港客群。以穩定住宿、北台灣代表性球場與流暢接送為主軸，兼顧效率與品質。",
        includes: [
          "北台灣代表性高爾夫球場安排",
          "大台北地區優質星級酒店",
          "保母車或賓士九人座包車接送",
          "可依需求代訂餐廳與聚餐",
        ],
      },
      custom: {
        badge: "專屬調整",
        title: "依球齡、球風與商務需求彈性配置",
        points: [
          "可安排 3 ~5 天或更長天數的高球自由行",
          "可指定經典景觀球場、策略型球道或商務感俱樂部",
          "可依出發目的搭配一般舒適型或高端飯店住宿",
        ],
      },
      note: "全站僅提供客製化報價，不提供公開價格與線上付款。",
    },
    courses: {
      title: "北台灣必打高爾夫球場介紹",
      intro:
        "球場安排會依實際開球時段、出發日期與訂場狀況調整。以下為最常用的主打與備選名單，方便您先掌握風格與車程。",
      featuredLabel: "主打球場",
      alternateLabel: "備選優質南部球場",
      items: [
        {
          name: "東華菁英高爾夫俱樂部",
          type: "featured",
          image: assets.courses.donghua,
          officialUrl: "https://donghuaelitegolf.com/",
          blurb:
            "林口地勢結合湖景與長球道節奏，開闊中帶策略性，是北台灣高球自由行的經典起手式。",
          difficulty: "中高挑戰，適合已有固定下場經驗的香港球友。",
          drive: "自台北出發約 40–50 分鐘。",
        },
        {
          name: "東方高爾夫俱樂部",
          type: "featured",
          image: assets.courses.orient,
          officialUrl: "https://orientgolf.tw/",
          blurb:
            "球道景觀與俱樂部識別度高，整體氛圍帶有高端會員制球會的沈穩感。",
          difficulty: "中等以上，適合重視場景與會館質感的高端客群。",
          drive: "自台北出發約 40–50 分鐘。",
        },
        {
          name: "美麗華高爾夫鄉村俱樂部",
          type: "featured",
          image: assets.courses.miramar,
          officialUrl: "https://www.miramargolf.com/",
          blurb:
            "景觀辨識度高，球場與會館連成完整度假場域，適合安排為舒適型高球旅程。",
          difficulty: "中等挑戰，適合兼顧擊球體驗與旅遊氛圍的球友。",
          drive: "自台北出發約 50–60 分鐘。",
        },
        {
          name: "永漢高爾夫球場",
          type: "featured",
          image: assets.courses.yonghan,
          officialUrl: "https://www.qgolf.com.tw/b101.php",
          blurb:
            "草坡起伏鮮明，帶有經典球場的節奏感，方便安排高效率的一日球敘。",
          difficulty: "中高挑戰，適合熟客型與重視球道變化的球友。",
          drive: "自台北出發約 40–50 分鐘。",
        },
        {
          name: "大溪高爾夫俱樂部",
          type: "featured",
          image: assets.courses.tashee,
          officialUrl: "http://www.tasheegolf.com.tw/",
          blurb:
            "山景與水景層次完整，是北台灣高端高爾夫旅遊常被指定的代表性球場。",
          difficulty: "中高至高挑戰，適合追求知名度與景觀質感的旅客。",
          drive: "自台北出發約 50–60 分鐘。",
        },
        {
          name: "揚昇高爾夫鄉村俱樂部",
          type: "featured",
          image: assets.courses.sunrise,
          officialUrl: "https://sunrise-golf.com.tw/index.php?&do=&lang=en",
          blurb:
            "國際級俱樂部尺度完整，適合作為高規格招待、核心比賽日與商務球敘安排。",
          difficulty: "高挑戰，適合喜歡策略型球道與果嶺節奏的球友。",
          drive: "自台北出發約 45–60 分鐘。",
        },
        {
          name: "再興高爾夫俱樂部",
          type: "featured",
          image: assets.courses.tsaihsing,
          officialUrl: "http://www.the-club.com.tw/tw/",
          blurb:
            "球道自然、人文氛圍較濃，整體體驗安靜沉穩，適合好友團或節奏較從容的小團。",
          difficulty: "中等挑戰，適合混合程度球友與休閒型高端旅客。",
          drive: "自台北出發約 70–90 分鐘。",
        },
        {
          name: "棕梠湖渡假村",
          type: "alternate",
          image: assets.courses.palmlakes,
          officialUrl: "https://www.palmlakes.com.tw/?section=9",
          blurb:
            "渡假感強烈，景觀與球道兼具熱帶氣息，適合作為跨區延伸行程備選。",
          difficulty: "中等挑戰，適合偏好景觀與度假節奏的旅客。",
          drive: "非北台灣核心動線，通常作為延伸安排。",
        },
        {
          name: "嘉南高爾夫球場",
          type: "alternate",
          image: assets.courses.chianan,
          officialUrl: "https://www.chianangolf.com.tw/",
          blurb:
            "球道視野舒展，適合與餐敘、南部移動或特定商務需求搭配安排。",
          difficulty: "中等挑戰，適合重視動線與聚餐安排的客群。",
          drive: "非北台灣核心動線，通常作為延伸安排。",
        },
        {
          name: "信誼高爾夫球場",
          type: "alternate",
          image: assets.courses.hsinyi,
          officialUrl: "https://hsinyigolf.com.tw/",
          blurb:
            "具國際型球道感受，果嶺周邊配置明確，適合搭配其他區域行程延伸。",
          difficulty: "中等至中高挑戰，適合重視球感與場地完成度的旅客。",
          drive: "非北台灣核心動線，通常作為延伸安排。",
        },
      ],
    },
    stayTransport: {
      title: "住宿與交通安排",
      intro:
        "除了球場本身，香港球友最在意的通常還包括睡得好不好、移動順不順、球具好不好放。這些細節我們會一起配好。",
      hotel: {
        title: "大台北地區星級酒店",
        meta: "4星級質感住宿｜早餐｜健身房｜一小時內可串接多座球場",
        bullets: ["地理位置穩定", "交通便利", "適合高球客停留"],
        description:
          "飯店整體調性俐落，適合作為北台灣高球自由行的穩定住宿據點。白天往返球場效率高，晚上也方便安排聚餐與休息。",
      },
      transport: {
        title: "保母車（8 人）與賓士九人座（4–6 人）",
        meta: "接送服務｜球具收納｜彈性停靠",
        bullets: ["機場接送", "球場往返", "餐廳與臨時停靠"],
        description:
          "依人數與球具數量配置車型，讓香港球友從機場落地、入住飯店到每日下場與晚餐移動都更輕鬆，也避免自行叫車的時間成本。",
      },
    },
    testimonials: {
      title: "香港客戶體驗",
      intro: "",
      items: [
        {
          quote:
            "最欣賞的是行程唔趕，球場、酒店同晚餐安排都幾順，對我哋幾個朋友嚟講真係舒服。",
          name: "陳先生｜香港九龍",
          trip: "4 人好友高球團",
        },
        {
          quote:
            "第一次帶客戶去台灣打波，接送同訂場處理得好穩，成個感覺比較似私人顧問安排。",
          name: "林先生｜香港中環",
          trip: "6 人商務球敘",
        },
        {
          quote:
            "WhatsApp 溝通好直接，唔使自己逐樣搵酒店同車，對香港人嚟講真係慳好多時間。",
          name: "黃先生｜香港沙田",
          trip: "5 人家庭旅遊延伸高球行程",
        },
      ],
    },
    about: {
      title: "關於雪碧旅行社",
      intro:
        "雪碧旅行社專注於高端高球旅遊安排，以合法旅行社身份整合球場、住宿、接送與在地餐敘資源，為香港客群提供更省心的台灣高球自由行。",
      blocks: [
        {
          title: "專業感與高端服務節奏",
          text:
            "我們理解香港球友對時間效率、交通、住宿與整體質感的要求，因此網站上的每一項安排都以可執行、可溝通、可微調為基礎，期望讓您有愉快的高球之旅。",
        },
        {
          title: "合法旅行社身分說明",
          text:
            "雪碧旅行社成立於2015年，有甲級旅行社執照，安全有保障",
        },
        {
          title: "在地資源與行程整合能力",
          text:
            "除了北台灣球場安排，也可依需求串接飯店、餐廳代訂、機場接送與特殊停靠動線，協助小團完成更成熟的自由行配置。",
        },
      ],
    },
    faq: {
      title: "FAQ 常見問題",
      intro:
        "如果您準備安排台灣高球自由行，以下問題通常會是香港球友最先確認的重點。",
      items: [
        {
          q: "幾人可以成團？",
          a: "主要服務 4–8 人小團，若有更少或更多人數，也可先提出需求，我們會依球場與交通安排評估。",
        },
        {
          q: "球場可以保證訂到嗎？",
          a: "熱門球場與熱門時段需要提早安排。我們會依出發日期與球場訂位情況提出優先順序與替代方案，但不會在未確認前承諾固定場次。",
        },
        {
          q: "下雨怎麼辦？",
          a: "會依球場規則、天候條件與當日狀況協助溝通與調整。若需要改場、延後或調整行程，也會協助提供替代建議。",
        },
        {
          q: "行程是否包含餐費？",
          a: "網站不列固定價格，也不預設含餐費。我們可依需求代訂餐廳或安排聚餐，再納入客製化報價內容中說明。",
        },
        {
          q: "可以只安排球場與接送，不含住宿嗎？",
          a: "可以。若您已有既定住宿地點，我們也能以球場安排、接送與餐廳代訂作為單獨服務內容。",
        },
        {
          q: "如何付款？",
          a: "網站不提供線上付款。實際付款方式會在報價確認後，由專人以訊息或 email 進一步說明。",
        },
        {
          q: "可以代訂餐廳或晚宴嗎？",
          a: "可以。若您有指定料理類型、包廂需求或商務招待場景，我們可一併規劃。",
        },
        {
          q: "會顯示公開價格嗎？",
          a: "不會。本網站主打高端小團與客製化安排，因此只提供依需求製作的專屬報價。",
        },
      ],
    },
    form: {
      title: "索取客製化報價",
      intro:
        "填寫基本需求後，我們會以 Email 或 WhatsApp 與您聯絡，進一步確認球場、住宿與接送細節。",
      privacy: "送出表單即表示您同意我們使用聯絡資訊回覆台灣高球自由行相關需求，不會公開顯示您的個人資料。",
      submit: "送出需求",
      success: "已為您開啟 Email 草稿，您也可直接使用下方 WhatsApp 快速聯絡。",
      fields: {
        departureDate: "出發日期",
        people: "人數（4–8）",
        rounds: "打幾場球",
        nights: "住宿天數",
        transfer: "是否需要接送",
        dining: "是否需要餐廳安排",
        email: "Email",
        whatsapp: "WhatsApp",
        notes: "備註",
      },
      options: {
        people: ["4 人", "5 人", "6 人", "7 人", "8 人"],
        rounds: ["2 場", "3 場", "4 場", "5 場以上"],
        nights: ["2 晚", "3 晚", "4 晚", "5 晚以上"],
        yesNo: { yes: "需要", no: "不需要" },
      },
    },
    contact: {
      title: "聯絡我們",
      intro:
        "若您已經有大概日期、人數或想打的球場，直接用 WhatsApp 聯絡會更快。我們也接受 Email 與電話詢問。",
      phone: "公司電話：(02)2970-5866",
      mobile: "手機：0913369369",
      email: "Email：chang950912@gmail.com",
      whatsapp: "WhatsApp：+886 913 369 369",
      qrCaption: "掃描 QR Code 直接加入 WhatsApp",
      company: "雪碧旅行社（合法旅行社）",
      registrations: [
        "觀光局註冊編號：789000",
        "交觀甲：04614號",
        "品保編號：(高)0513號",
      ],
    },
  },
  en: {
    seo: {
      lang: "en",
      title:
        "Taiwan Golf Travel | Premium Golf Free Travel for Hong Kong Customers in North Taiwan",
      description:
        "A premium Taiwan golf travel landing page for Hong Kong customers, featuring North Taiwan golf courses, hotel stay, private transfer, restaurant booking, and custom quotation for small groups of 4 to 8 guests.",
      keywords:
        "Taiwan golf travel,Hong Kong golf trip,North Taiwan golf courses,Taiwan golf free travel,premium golf tour Taiwan,private golf transfer Taiwan",
    },
    nav: {
      brand: "Taiwan Golf Travel",
      menu: [
        { label: "Highlights", href: "#benefits" },
        { label: "Packages", href: "#packages" },
        { label: "Courses", href: "#courses" },
        { label: "Stay & Transfer", href: "#stay-transport" },
        { label: "Dining Pick", href: "#restaurants" },
        { label: "FAQ", href: "#faq" },
        { label: "Contact", href: "#contact" },
      ],
      cta: "Enquire Now",
      languageLabel: "Language",
      languageNames: {
        "zh-TW": "Traditional Chinese",
        en: "English",
        "zh-HK": "Cantonese",
      },
    },
    hero: {
      eyebrow: "Luxury Golf Free Travel in Taiwan",
      title:
        "Exclusive for Hong Kong golfers: premium Taiwan golf free travel with North Taiwan’s finest golf courses waiting for your challenge.",
      subtitle: "A refined golf journey for Hong Kong groups of 4 to 8 guests.",
      description:
        "We arrange North Taiwan golf courses, hotel stays, private transfer, and restaurant reservations in one tailored journey, with custom high-value pricing for Hong Kong golfers who care about quality and efficiency.",
      primaryCta: "Request Custom Quote",
      secondaryCta: "Contact via WhatsApp",
      floatingLabel: "Free Travel Golf Concierge",
      stats: [
        { value: "4–8", label: "Private Group" },
        { value: "7 Core Courses", label: "North Taiwan" },
        { value: "5D4N", label: "Classic Itinerary" },
      ],
      highlights: [
        "Golf course planning",
        "Hotel stay and breakfast",
        "Private transfer service",
        "Restaurant booking support",
      ],
    },
    benefits: {
      title: "A premium Taiwan golf travel experience designed for Hong Kong customers",
      intro:
        "This is not a standard package tour. It is a carefully paced golf free travel proposal for guests who value course quality, travel efficiency, and a polished overall experience.",
      items: [
        {
          title: "Tailor-made small groups",
          text: "Built for 4 to 8 guests, ideal for friends, family golf holidays, and corporate golf gatherings.",
        },
        {
          title: "Top-tier Taiwan golf course planning",
          text: "North Taiwan courses are selected based on landscape, challenge level, club atmosphere, and travel efficiency.",
        },
        {
          title: "Full private transfer support",
          text: "Airport, hotel, golf course, and dining transfers can all be arranged with proper golf bag storage and flexible stops.",
        },
      ],
    },
    packages: {
      title: "Suggested plans and custom quotation",
      intro:
        "No fixed prices are shown on the website. Each quotation is tailored to your dates, group size, preferred golf courses, hotel level, and transfer needs.",
      featured: {
        badge: "Featured Plan",
        title: "5 Days 4 Rounds | North Taiwan Golf Free Travel",
        description:
          "A balanced itinerary for Hong Kong golfers visiting Taiwan for a premium golf journey, combining strong course quality, smooth transfers, and reliable accommodation.",
        includes: [
          "North Taiwan signature golf course arrangement",
          "Quality star-rated hotel stay in Greater Taipei",
          "Private van or Mercedes 9-seater charter transfer",
          "Optional restaurant and gathering reservation support",
        ],
      },
      custom: {
        badge: "Tailored Option",
        title: "Flexible around your golf style and business needs",
        points: [
          "Available for 3 to 5-day golf travel plans or longer stays",
          "Can focus on classic, scenic, or more strategic golf courses",
          "Hotel arrangement can match either premium or practical preferences",
        ],
      },
      note: "Custom quotation only. No public pricing and no online payment on the website.",
    },
    courses: {
      title: "Selected golf courses in North Taiwan",
      intro:
        "Actual arrangements depend on tee time availability, travel dates, and booking status. The list below shows our common featured and alternate golf course options.",
      featuredLabel: "Featured Courses",
      alternateLabel: "Alternate Quality Southern Courses",
      items: [
        {
          name: "Donghua Elite Golf Club",
          type: "featured",
          image: assets.courses.donghua,
          officialUrl: "https://donghuaelitegolf.com/",
          blurb:
            "A classic opening choice for North Taiwan golf travel, combining open fairways, water scenery, and strategic rhythm.",
          difficulty: "Medium to high challenge, suitable for regular golfers.",
          drive: "Around 40–50 minutes from Taipei.",
        },
        {
          name: "Orient Golf Club",
          type: "featured",
          image: assets.courses.orient,
          officialUrl: "https://orientgolf.tw/",
          blurb:
            "Known for its memorable course views and club atmosphere, suitable for premium travellers who appreciate scenery and setting.",
          difficulty: "Medium-plus challenge with strong visual identity.",
          drive: "Around 40–50 minutes from Taipei.",
        },
        {
          name: "Miramar Golf & Country Club",
          type: "featured",
          image: assets.courses.miramar,
          officialUrl: "https://www.miramargolf.com/",
          blurb:
            "A scenic resort-style golf experience where course and clubhouse ambience work together naturally.",
          difficulty: "Medium challenge with a comfortable travel rhythm.",
          drive: "Around 50–60 minutes from Taipei.",
        },
        {
          name: "Yong Han Golf Course",
          type: "featured",
          image: assets.courses.yonghan,
          officialUrl: "https://www.qgolf.com.tw/b101.php",
          blurb:
            "Undulating fairways create a more classic golfing rhythm, ideal for efficient one-day golf gatherings.",
          difficulty: "Medium to high challenge for experienced players.",
          drive: "Around 40–50 minutes from Taipei.",
        },
        {
          name: "Tashee Golf Club",
          type: "featured",
          image: assets.courses.tashee,
          officialUrl: "http://www.tasheegolf.com.tw/",
          blurb:
            "A signature North Taiwan destination where mountain and water scenery elevate the premium golf travel feel.",
          difficulty: "Medium-high to high challenge.",
          drive: "Around 50–60 minutes from Taipei.",
        },
        {
          name: "Sunrise Golf & Country Club",
          type: "featured",
          image: assets.courses.sunrise,
          officialUrl: "https://sunrise-golf.com.tw/index.php?&do=&lang=en",
          blurb:
            "A full-scale international club setting, often suited for higher-end corporate golf and key playing days.",
          difficulty: "High challenge for strategic golfers.",
          drive: "Around 45–60 minutes from Taipei.",
        },
        {
          name: "Tsai Hsing Golf Club",
          type: "featured",
          image: assets.courses.tsaihsing,
          officialUrl: "http://www.the-club.com.tw/tw/",
          blurb:
            "Quiet, natural, and well-paced, making it a refined choice for relaxed premium small groups.",
          difficulty: "Medium challenge, suitable for mixed-level groups.",
          drive: "Around 70–90 minutes from Taipei.",
        },
        {
          name: "Palm Lakes Resort",
          type: "alternate",
          image: assets.courses.palmlakes,
          officialUrl: "https://www.palmlakes.com.tw/?section=9",
          blurb:
            "A resort-style golf environment with tropical scenery, suitable as an extended travel option.",
          difficulty: "Medium challenge.",
          drive: "Usually arranged only as a cross-region extension.",
        },
        {
          name: "Chia Nan Golf Club",
          type: "alternate",
          image: assets.courses.chianan,
          officialUrl: "https://www.chianangolf.com.tw/",
          blurb:
            "Open views and practical routing make it useful for extension trips and dining-focused schedules.",
          difficulty: "Medium challenge.",
          drive: "Usually arranged only as a cross-region extension.",
        },
        {
          name: "Hsinyi Golf Course",
          type: "alternate",
          image: assets.courses.hsinyi,
          officialUrl: "https://hsinyigolf.com.tw/",
          blurb:
            "A well-defined course layout suitable for guests who value a complete golfing experience.",
          difficulty: "Medium to medium-high challenge.",
          drive: "Usually arranged only as a cross-region extension.",
        },
      ],
    },
    stayTransport: {
      title: "Hotel stay and transfer arrangement",
      intro:
        "For Hong Kong customers, a premium golf trip is not only about the golf courses. Rest quality, smooth daily movement, and easy golf bag handling matter just as much.",
      hotel: {
        title: "Star-Rated Hotels in Greater Taipei",
        meta: "4-star comfort stay | Breakfast | Gym | Within practical reach of major courses",
        bullets: ["Stable location", "Convenient access", "Suitable for golfers"],
        description:
          "A reliable hotel base for North Taiwan golf travel, offering a clean, efficient, and comfortable stay for golf-focused groups.",
      },
      transport: {
        title: "8-seat van and Mercedes 9-seater for 4 to 6 guests",
        meta: "Pick-up service | Golf bag storage | Flexible stops",
        bullets: ["Airport transfer", "Daily golf routing", "Dinner and custom stop support"],
        description:
          "Vehicle type is matched to group size and golf bag volume, so your movement from airport arrival to daily golf and dinner feels smooth and well coordinated.",
      },
    },
    testimonials: {
      title: "Client experience",
      intro: "",
      items: [
        {
          quote:
            "The pace was excellent. Nothing felt rushed, and the golf courses, hotel, and dinner flow worked very well for our group.",
          name: "Mr. Chan | Hong Kong",
          trip: "4-person friends golf trip",
        },
        {
          quote:
            "For a business golf trip, the transfer and course coordination felt stable and professional, which mattered a lot to us.",
          name: "Mr. Lam | Hong Kong",
          trip: "6-person corporate golf gathering",
        },
        {
          quote:
            "WhatsApp communication was straightforward and saved us a lot of planning time. It felt like working with a local golf concierge.",
          name: "Mr. Wong | Hong Kong",
          trip: "Family trip with golf extension",
        },
      ],
    },
    about: {
      title: "About Sprite Travel Agency",
      intro:
        "Sprite Travel Agency provides premium golf travel coordination in Taiwan, combining golf courses, hotel stays, transfers, and local dining support under a legal travel agency structure.",
      blocks: [
        {
          title: "Professional and premium service rhythm",
          text:
            "We understand that Hong Kong golfers care about efficiency, transport, accommodation, and overall quality, so every arrangement is designed to stay practical, adjustable, and pleasant throughout the trip.",
        },
        {
          title: "Legal agency identity",
          text:
            "Sprite Travel Agency was established in 2015 and holds a Class-A travel agency license for a safer and more reliable service experience.",
        },
        {
          title: "Local resource integration",
          text:
            "Beyond golf course scheduling, we can coordinate hotel stay, dining reservations, airport transfer, and practical routing adjustments in Taiwan.",
        },
      ],
    },
    faq: {
      title: "Frequently asked questions",
      intro:
        "These are the questions Hong Kong golfers most commonly ask before confirming a Taiwan golf free travel plan.",
      items: [
        {
          q: "How many guests are needed to form a group?",
          a: "Our main focus is premium small groups of 4 to 8 guests, though special requests can still be discussed.",
        },
        {
          q: "Can golf course booking be guaranteed?",
          a: "Popular courses and tee times require early planning. We provide priority options and alternatives, but cannot guarantee a specific slot before confirmation.",
        },
        {
          q: "What if it rains?",
          a: "We help assess the course policy, weather conditions, and possible adjustments, including rescheduling or alternate suggestions where possible.",
        },
        {
          q: "Are meals included?",
          a: "Meals are not automatically included. Restaurant booking can be arranged and reflected in the final custom quotation.",
        },
        {
          q: "Can I request only golf courses and transfer without hotel stay?",
          a: "Yes. If you already have your own hotel arrangement, we can focus on golf course scheduling, transfer, and restaurant reservations.",
        },
        {
          q: "How do payments work?",
          a: "There is no online payment on the website. Payment details are confirmed later after the quotation and itinerary are agreed upon.",
        },
        {
          q: "Can you arrange restaurants or private dinners?",
          a: "Yes. We can help with dining preferences, private room requests, and business hospitality settings.",
        },
        {
          q: "Will prices be shown publicly?",
          a: "No. This website focuses on premium custom planning, so only tailored quotations are provided.",
        },
      ],
    },
    form: {
      title: "Request a custom quotation",
      intro:
        "Fill in your basic travel needs and we will follow up by email or WhatsApp with a more detailed golf travel discussion.",
      privacy: "By sending this form, you agree that we may use your contact details to respond to your Taiwan golf travel enquiry.",
      submit: "Send Enquiry",
      success: "An email draft has been opened for you. You may also contact us directly on WhatsApp below.",
      fields: {
        departureDate: "Departure date",
        people: "Group size (4–8)",
        rounds: "Number of rounds",
        nights: "Hotel nights",
        transfer: "Need transfer service",
        dining: "Need restaurant booking",
        email: "Email",
        whatsapp: "WhatsApp",
        notes: "Notes",
      },
      options: {
        people: ["4 guests", "5 guests", "6 guests", "7 guests", "8 guests"],
        rounds: ["2 rounds", "3 rounds", "4 rounds", "5+ rounds"],
        nights: ["2 nights", "3 nights", "4 nights", "5+ nights"],
        yesNo: { yes: "Yes", no: "No" },
      },
    },
    contact: {
      title: "Contact us",
      intro:
        "If you already have travel dates, group size, or preferred golf courses in mind, WhatsApp is the fastest way to start.",
      phone: "Office: (07)533-7989",
      mobile: "Mobile: 0913369369",
      email: "Email: chang950912@gmail.com",
      whatsapp: "WhatsApp: +886 913 369 369",
      qrCaption: "Scan the QR code to contact us on WhatsApp",
      company: "Sprite Travel Agency (licensed travel agency)",
      registrations: [
        "Tourism Bureau Registration No.: 789000",
        "Jiaoguanjia No.: 04614",
        "Travel Quality Assurance No.: (Kaohsiung) 0513",
      ],
    },
  },
  "zh-HK": {
    seo: {
      lang: "zh-HK",
      title:
        "台灣高球自由行｜專屬香港球友，台灣高球頂級自由行，北台灣最優質高球場，等您來挑戰！",
      description:
        "專為香港高端高爾夫客群設計嘅台灣高球自由行，安排北台灣優質球場、酒店住宿、專車接送、餐廳代訂同客製化報價，適合 4–8 人小團。",
      keywords:
        "台灣高球自由行,香港高爾夫旅遊,北台灣高爾夫球場,台灣高球小團,專車接送高球,客製化報價",
    },
    nav: {
      brand: "台灣高球自由行",
      menu: [
        { label: "行程亮點", href: "#benefits" },
        { label: "方案", href: "#packages" },
        { label: "球場", href: "#courses" },
        { label: "住宿交通", href: "#stay-transport" },
        { label: "推薦餐廳", href: "#restaurants" },
        { label: "FAQ", href: "#faq" },
        { label: "聯絡", href: "#contact" },
      ],
      cta: "即時查詢",
      languageLabel: "語言",
      languageNames: {
        "zh-TW": "繁體中文",
        en: "English",
        "zh-HK": "廣東話",
      },
    },
    hero: {
      eyebrow: "Taiwan Golf Travel for Hong Kong Customers",
      title: "北台灣頂級高球自由行",
      subtitle: "高端自由行，專為 4–8 人香港球友小團而設。",
      description:
        "由北台灣高爾夫球場安排、酒店住宿、保母車接送到餐廳代訂，一次過幫你處理。專屬客製、高CP值嘅價格安排，更適合重視品質同效率嘅香港優質球友。",
      primaryCta: "索取客製化報價",
      secondaryCta: "WhatsApp 聯絡",
      floatingLabel: "自由行 Golf Concierge",
      stats: [
        { value: "4–8人", label: "高端小團" },
        { value: "7個主打球場", label: "北台灣精選" },
        { value: "5日4場球", label: "經典安排" },
      ],
      highlights: [
        "台灣高爾夫球場安排",
        "酒店住宿同早餐",
        "專車接送服務",
        "餐廳代訂支援",
      ],
    },
    benefits: {
      title: "專為香港高端球友設計嘅台灣高球自由行",
      intro:
        "呢個唔係一般旅行團，而係比較似私人顧問幫你排好晒節奏嘅高球自由行。由球場質素、酒店舒適度到每日移動安排，都以實際體驗為先。",
      items: [
        {
          title: "4–8 人小團客製",
          text: "適合朋友組團、家庭旅遊或者商務球敘，唔使同陌生人拼團，行程會舒服好多。",
        },
        {
          title: "台灣十大球場安排思路",
          text: "以北台灣優質高球場做核心，再按難度、景觀、會館質感同車程幫你配搭。",
        },
        {
          title: "保母車全程接送",
          text: "由機場、酒店、球場到晚餐地點都可以安排，球具收納同彈性停靠都會一併考慮。",
        },
      ],
    },
    packages: {
      title: "行程方案同客製化報價",
      intro:
        "網站唔會顯示固定價格。我哋會按出發日期、人數、想打幾多場球、住幾多晚同接送需求，再出專屬報價。",
      featured: {
        badge: "主打方案",
        title: "5日4場球｜北台灣高球自由行",
        description:
          "好適合第一次去台灣打波嘅香港客人。行程以北台灣代表性球場、穩定住宿同流暢接送做主線，整體感覺會比較穩陣。",
        includes: [
          "北台灣代表性高爾夫球場安排",
          "大台北地區優質星級酒店",
          "保母車或賓士九人座包車接送",
          "可代訂晚餐或聚餐",
        ],
      },
      custom: {
        badge: "靈活調整",
        title: "按你哋球風、行程長短同商務需要去配",
        points: [
          "可以安排 3～5 日或者更長行程",
          "可以指定景觀球場、經典球場或者較有挑戰性球道",
          "酒店可以按高端或實用取向去揀配搭",
        ],
      },
      note: "全站只做客製化報價，唔會公開價格，亦唔會做線上付款。",
    },
    courses: {
      title: "北台灣必打高爾夫球場介紹",
      intro:
        "實際安排會睇返開球時段、出發日期同訂場情況。以下係最常見嘅主打同備選球場，方便你先了解風格。",
      featuredLabel: "主打球場",
      alternateLabel: "備選優質南部球場",
      items: [
        {
          name: "東華菁英高爾夫俱樂部",
          type: "featured",
          image: assets.courses.donghua,
          officialUrl: "https://donghuaelitegolf.com/",
          blurb:
            "林口地勢配合湖景同長球道節奏，視野幾開揚，適合作為北台灣高球自由行第一場。",
          difficulty: "中高挑戰，適合平時有落場習慣嘅球友。",
          drive: "由台北出發約 40–50 分鐘。",
        },
        {
          name: "東方高爾夫俱樂部",
          type: "featured",
          image: assets.courses.orient,
          officialUrl: "https://orientgolf.tw/",
          blurb:
            "球場景觀同會館辨識度高，整體有高端會員制球會感覺。",
          difficulty: "中上難度，適合重視場景同會所氛圍嘅旅客。",
          drive: "由台北出發約 40–50 分鐘。",
        },
        {
          name: "美麗華高爾夫鄉村俱樂部",
          type: "featured",
          image: assets.courses.miramar,
          officialUrl: "https://www.miramargolf.com/",
          blurb:
            "景觀感好強，球場同會館串連得幾完整，適合想兼顧休閒同質感嘅旅客。",
          difficulty: "中等挑戰，節奏舒服。",
          drive: "由台北出發約 50–60 分鐘。",
        },
        {
          name: "永漢高爾夫球場",
          type: "featured",
          image: assets.courses.yonghan,
          officialUrl: "https://www.qgolf.com.tw/b101.php",
          blurb:
            "草坡起伏幾有特色，打感比較有經典球場味道，安排一日球敘好方便。",
          difficulty: "中高挑戰，適合有一定球齡嘅客人。",
          drive: "由台北出發約 40–50 分鐘。",
        },
        {
          name: "大溪高爾夫俱樂部",
          type: "featured",
          image: assets.courses.tashee,
          officialUrl: "http://www.tasheegolf.com.tw/",
          blurb:
            "山景水景層次完整，係北台灣高端高球旅遊常見指定球場之一。",
          difficulty: "中高至高挑戰，適合追求知名度同景觀感嘅球友。",
          drive: "由台北出發約 50–60 分鐘。",
        },
        {
          name: "揚昇高爾夫鄉村俱樂部",
          type: "featured",
          image: assets.courses.sunrise,
          officialUrl: "https://sunrise-golf.com.tw/index.php?&do=&lang=en",
          blurb:
            "俱樂部規模完整，感覺較國際化，幾適合商務招待或者重點比賽日安排。",
          difficulty: "高挑戰，適合鍾意策略型球道嘅球友。",
          drive: "由台北出發約 45–60 分鐘。",
        },
        {
          name: "再興高爾夫俱樂部",
          type: "featured",
          image: assets.courses.tsaihsing,
          officialUrl: "http://www.the-club.com.tw/tw/",
          blurb:
            "自然感較強，節奏唔急，幾適合朋友團或者想輕鬆打波又保持質感嘅小團。",
          difficulty: "中等挑戰，適合混合程度球友。",
          drive: "由台北出發約 70–90 分鐘。",
        },
        {
          name: "棕梠湖渡假村",
          type: "alternate",
          image: assets.courses.palmlakes,
          officialUrl: "https://www.palmlakes.com.tw/?section=9",
          blurb:
            "度假感比較重，景觀有熱帶氣氛，適合做跨區延伸行程備選。",
          difficulty: "中等挑戰。",
          drive: "唔屬於北台灣核心動線，多數作延伸安排。",
        },
        {
          name: "嘉南高爾夫球場",
          type: "alternate",
          image: assets.courses.chianan,
          officialUrl: "https://www.chianangolf.com.tw/",
          blurb:
            "球道開揚，幾適合配合南部移動或者餐敘需求一齊安排。",
          difficulty: "中等挑戰。",
          drive: "唔屬於北台灣核心動線，多數作延伸安排。",
        },
        {
          name: "信誼高爾夫球場",
          type: "alternate",
          image: assets.courses.hsinyi,
          officialUrl: "https://hsinyigolf.com.tw/",
          blurb:
            "球道配置完整，適合重視場地完成度同擊球感覺嘅客人。",
          difficulty: "中等至中高挑戰。",
          drive: "唔屬於北台灣核心動線，多數作延伸安排。",
        },
      ],
    },
    stayTransport: {
      title: "住宿同交通安排",
      intro:
        "對香港球友嚟講，高球旅行唔只睇球場，仲要睇酒店住得舒唔舒服、每日移動順唔順、球具擺放方唔方便。",
      hotel: {
        title: "大台北地區星級酒店",
        meta: "4星級質感住宿｜早餐｜健身房｜一小時內可串連多個球場",
        bullets: ["位置穩定", "交通方便", "適合高球客"],
        description:
          "作為北台灣高球自由行住宿據點幾合適，日頭去球場效率高，夜晚返酒店休息或者再出去食飯都方便。",
      },
      transport: {
        title: "保母車（8 人）同賓士九人座（4–6 人）",
        meta: "接送服務｜球具收納｜彈性停靠",
        bullets: ["機場接送", "球場往返", "晚餐同臨時停靠"],
        description:
          "會按人數同球具數量安排車型，等你由機場落地、入住酒店、每日去球場到夜晚食飯，成個移動節奏都順好多。",
      },
    },
    testimonials: {
      title: "香港客戶體驗",
      intro: "",
      items: [
        {
          quote:
            "最鍾意係成個節奏唔趕，球場、酒店同晚餐安排都幾順，對我哋幾個朋友嚟講真係幾舒服。",
          name: "陳先生｜香港九龍",
          trip: "4 人朋友高球團",
        },
        {
          quote:
            "第一次帶客去台灣打波，接送同訂場處理得幾穩陣，感覺真係似有個在地顧問幫手。",
          name: "林先生｜香港中環",
          trip: "6 人商務球敘",
        },
        {
          quote:
            "WhatsApp 溝通直接，唔使自己逐樣搵酒店同車，對香港人嚟講真係慳好多時間。",
          name: "黃先生｜香港沙田",
          trip: "5 人家庭旅遊延伸高球行程",
        },
      ],
    },
    about: {
      title: "關於雪碧旅行社",
      intro:
        "雪碧旅行社主力做高端高球旅遊安排，以合法旅行社身份整合球場、住宿、接送同在地餐敘資源，令香港客人去台灣打波可以更省心。",
      blocks: [
        {
          title: "專業感同服務節奏",
          text:
            "我哋明白香港球友好重視時間效率、交通、住宿同整體質感，所以網站上每個安排都以可執行、可溝通、可微調為基礎，希望令你有一個愉快嘅高球之旅。",
        },
        {
          title: "合法旅行社說明",
          text:
            "雪碧旅行社成立於2015年，持有甲級旅行社牌照，服務更安全、更有保障。",
        },
        {
          title: "在地資源整合",
          text:
            "除咗北台灣球場安排之外，亦可以按需要一齊處理酒店、餐廳代訂、機場接送同特別動線安排。",
        },
      ],
    },
    faq: {
      title: "FAQ 常見問題",
      intro: "如果你準備安排台灣高球自由行，以下問題通常都係香港球友最關心嘅重點。",
      items: [
        {
          q: "幾多人可以成團？",
          a: "主要服務 4–8 人小團。如果人數再少或者再多，都可以先講，我哋會按球場同交通情況評估。",
        },
        {
          q: "球場可唔可以保證訂到？",
          a: "熱門球場同熱門時段一定要早安排。我哋會按日期同訂場情況提供優先次序同替代方案，但未確認前唔會亂答應固定場次。",
        },
        {
          q: "落雨點算？",
          a: "會按球場規則、天氣同即日狀況幫你一齊評估，有需要時再協助調整時段、改場或者改行程。",
        },
        {
          q: "餐費包唔包？",
          a: "網站唔會預設包餐。若你需要餐廳代訂或者晚宴安排，我哋可以一齊納入報價內容。",
        },
        {
          q: "可唔可以只安排球場同接送？",
          a: "可以。如果你本身已經有酒店，我哋都可以只幫你處理球場安排、接送同餐廳代訂。",
        },
        {
          q: "點樣付款？",
          a: "網站唔做線上付款。實際付款方法會喺報價確認後，由專人再透過訊息或者 email 跟進。",
        },
        {
          q: "可唔可以代訂餐廳或者晚宴？",
          a: "可以。如果你有指定菜式、包廂或者商務招待場景，都可以一齊配合。",
        },
        {
          q: "網站會唔會顯示公開價格？",
          a: "唔會。因為主打高端小團同客製化安排，所以只提供專屬報價。",
        },
      ],
    },
    form: {
      title: "索取客製化報價",
      intro:
        "填好基本資料之後，我哋會用 Email 或 WhatsApp 再同你確認球場、住宿同接送細節。",
      privacy: "送出表單即表示你同意我哋使用聯絡資料回覆台灣高球自由行相關查詢，資料唔會公開顯示。",
      submit: "送出需求",
      success: "已幫你開啟 Email 草稿，你都可以直接用下面 WhatsApp 聯絡我哋。",
      fields: {
        departureDate: "出發日期",
        people: "人數（4–8）",
        rounds: "打幾場球",
        nights: "住宿幾晚",
        transfer: "需唔需要接送",
        dining: "需唔需要餐廳安排",
        email: "Email",
        whatsapp: "WhatsApp",
        notes: "備註",
      },
      options: {
        people: ["4 人", "5 人", "6 人", "7 人", "8 人"],
        rounds: ["2 場", "3 場", "4 場", "5 場以上"],
        nights: ["2 晚", "3 晚", "4 晚", "5 晚以上"],
        yesNo: { yes: "需要", no: "唔需要" },
      },
    },
    contact: {
      title: "聯絡我哋",
      intro:
        "如果你已經有大概日期、人數或者想打邊幾個球場，直接用 WhatsApp 聯絡會最快。",
      phone: "公司電話：(02)2970-5866",
      mobile: "手機：0913369369",
      email: "Email：chang950912@gmail.com",
      whatsapp: "WhatsApp：+886 913 369 369",
      qrCaption: "掃描 QR Code 即可加入 WhatsApp",
      company: "雪碧旅行社（合法旅行社）",
      registrations: [
        "觀光局註冊編號：789000",
        "交觀甲：04614號",
        "品保編號：(高)0513號",
      ],
    },
  },
};
