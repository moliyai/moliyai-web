"use client"

import { createContext, useContext } from "react"

export type Locale = "en" | "ru" | 'uz'

export type Translations = {
  [key: string]: string | Translations
}

export const defaultLocale: Locale = "en"

export const locales: Record<Locale, string> = {
  en: "English",
  ru: "Русский",
  uz: "O'zbekcha",
}

export const translations: Record<Locale, Translations> = {
  en: {
    common: {
      home: "Home",
      about: "About us",
      news: "News",
      career: "Career",
      contact: "Contact us",
      lab: "R&D lab",
      talkToUs: "Talk to us",
      testInLab: "Test in AI Lab",
      readyToStart: "Ready to get started?",
      scheduleDemo: "Schedule a demo",
      submit: "Submit",
      sending: "Sending...",
      fullName: "Full name",
      email: "Email",
      phone: "Phone",
      company: "Company/Organization",
      message: "Message",
    },
    hero: {
      title: "AI-powered credit scoring solution for underbanked segments in Asia.",
      subtitle: "Moliy.AI is the first national startup and the next-generation of AI-powered credit scoring platform designed for emerging markets 🌍 - starting from Uzbekistan 🇺🇿. While millions of people are financially active, they remain invisible to traditional lenders due to lack of official income, credit history, or collateral.",
    },
    lucid: {
      title: "Lucid",
      subtitle: "Our flagship AI solution for financial analysis",
      description:
        "Lucid is a powerful AI platform that helps financial institutions analyze data, identify patterns, and make informed decisions.",
      learnMore: "Learn more",
    },
    useCases: {
      title: "Use cases",
      subtitle: "Financial institutions",
      collectionScoring: {
        title: "Credit Access for the Unbanked",
        description:
          "Assess creditworthiness using alternative data (e.g., personal assets, mobile usage, utility bills) to serve individuals without formal credit history.",
      },
      fraudDetection: {
        title: "Instant Loan Decisions",
        description: "Automate approvals for MFIs, enabling faster onboarding and reduced manual processing.",
      },
      monitoring: {
        title: "Inclusive & Secure Lending",
        description:
          "Expand fair access to credit while detecting fraud in real time using behavioral and transactional analysis.",
      },
      creditScoring: {
        title: "Delinquency Prediction",
        description:
          "Predict late payments or defaults early, helping lenders take proactive measures and reduce risk.",
      },
      bnplSubtitle: "BNPL organizations",
      operationalEfficiency: {
        title: "Operational Efficiency",
        description: "Improve operational efficiency by automating the credit assessment process, reducing manual review times, and optimizing resource allocation."
      },
      riskManagement: {
        title: "Risk Management",
        description: "Assist BNPL providers in assessing the risk associated with extending credit to individuals without traditional credit histories or collateral."
      },
      secureLending: {
        title: "Inclusive & Secure Lending",
        description: "Expand credit access with AI-driven scoring that uses alternative data, while detecting fraud through real-time risk pattern analysis."
      },
      personalizedOffers: {
        title: "Personalized Offers",
        description: "Enable BNPL providers to offer personalized credit limits and terms based on individual financial behaviors and risk profiles."
      },
    },
    scheduledDevelopment: {
      title: "Scheduled Development",
      dataIntegration: {
        title: "Additional Data Points",
        content: "<ul><li>EGov services, Taxes, Bills</li><li>Telecom Operators</li><li>Social Influence (Offline and Online)</li><li>GPS Location</li></ul>"
      },
      clientMonitoring: {
        title: "Client Monitoring",
        content: "<ul><li>Client became suddenly stable and profitable.</li><li>Business needs to update the information from the client in order not to lose him/ her.</li></ul>"
      },
      loanMarketplace: {
        title: "Loan Marketplace",
        content: "<ul><li>Client is willing to choose from several MFI, BNPL shops to compare the service and convenience.</li><li>MoliyAI can provide a marketplace for both Businesses and Clients to meet each other.</li><li>*Database is secured</li></ul>"
      },
      businessLending: {
        title: "Business Lending",
        content: "<ul><li>Banks still struggle to provide a loan for a business, because human factor exists.</li><li>MoliyAI can analyze all necessary documents required for loan review faster than any Loan Officer.</li></ul>"
      }
    },
    stats: {
      title: "MoliyAI in numbers",
      mfo: {
        value: "3+",
        label: "MFO and BNPL retails are using our solutions",
      },
      records: {
        value: "10K+",
        label: "Records processed",
      },
      creditPortfel: {
        value: "$2M+",
        label: "We process over $2 million in loans every month, empowering underserved individuals with fast, AI-driven access to fair and inclusive credit.",
      },
    },
    achievements: {
      title: "Our achievements",
      aiStartup: {
        title: "AI Startup of the Year",
        description: "Recognized for innovation in financial AI solutions",
      },
      fintech: {
        title: "FinTech Innovation Award",
        description: "For revolutionary approach to financial data analysis",
      },
      topAI: {
        title: "Top AI Company 2023",
        description: "Named among the leading AI companies in finance",
      },
    },
    team: {
      title: "Our team",
    },
    footer: {
      copyright: "© 2025 MoliyAI. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
  },
  ru: {
    common: {
      home: "Главная",
      about: "О нас",
      news: "Новости",
      career: "Карьера",
      contact: "Связаться с нами",
      lab: "R&D лаборатория",
      talkToUs: "Напишите нам",
      testInLab: "Протестировать в AI лаборатории",
      readyToStart: "Готовы начать?",
      scheduleDemo: "Записаться на демонстрацию",
      submit: "Отправить",
      sending: "Отправка...",
      fullName: "Полное имя",
      email: "Электронная почта",
      phone: "Телефон",
      company: "Компания/Организация",
      message: "Сообщение"
    },
    hero: {
      title: "AI-платформа скоринга для небанковского сектора в Азии",
      subtitle: "Moliy.AI — первый национальный стартап и платформа нового поколения для AI-скоринга, ориентированная на развивающиеся рынки 🌍 — начиная с Узбекистана 🇺🇿. Несмотря на то, что миллионы людей финансово активны, они остаются невидимыми для традиционных кредиторов из-за отсутствия официального дохода, кредитной истории или залога."
    },
    lucid: {
      title: "Lucid",
      subtitle: "Наш флагманский AI-продукт для финансового анализа",
      description: "Lucid — мощная AI-платформа, которая помогает финансовым учреждениям анализировать данные, выявлять закономерности и принимать обоснованные решения.",
      learnMore: "Узнать больше"
    },
    useCases: {
      title: "Примеры использования",
      subtitle: "Финансовые учреждения",
      collectionScoring: {
        title: "Кредит для необслуживаемых клиентов",
        description: "Оценка кредитоспособности на основе альтернативных данных (например, личные активы, использование мобильной связи, коммунальные счета) для клиентов без кредитной истории."
      },
      fraudDetection: {
        title: "Мгновенные кредитные решения",
        description: "Автоматизация одобрений для МФО с целью ускорения процесса и снижения ручной обработки."
      },
      monitoring: {
        title: "Инклюзивное и безопасное кредитование",
        description: "Расширение справедливого доступа к кредитам и предотвращение мошенничества через поведенческий и транзакционный анализ."
      },
      creditScoring: {
        title: "Прогнозирование просрочек",
        description: "Предсказание задержек по платежам или дефолтов заранее, что позволяет кредиторам принять меры и снизить риски."
      },
      bnplSubtitle: "Организации BNPL",
      operationalEfficiency: {
        title: "Операционная эффективность",
        description: "Автоматизация оценки кредитоспособности, снижение времени ручной обработки и оптимизация ресурсов."
      },
      riskManagement: {
        title: "Управление рисками",
        description: "Помощь BNPL-поставщикам в оценке рисков при предоставлении кредита клиентам без кредитной истории или залога."
      },
      secureLending: {
        title: "Инклюзивное и безопасное кредитование",
        description: "Расширение кредитования на основе альтернативных данных и выявление мошенничества с помощью анализа рисков в реальном времени."
      },
      personalizedOffers: {
        title: "Персонализированные предложения",
        description: "Предоставление индивидуальных лимитов и условий кредитования на основе поведения и финансового профиля клиента."
      }
    },
    scheduledDevelopment: {
      title: "Планируемые разработки",
      dataIntegration: {
        title: "Дополнительные источники данных",
        content: "<ul><li>Госуслуги, налоги, счета</li><li>Операторы связи</li><li>Социальное влияние (онлайн и офлайн)</li><li>GPS-локация</li></ul>"
      },
      clientMonitoring: {
        title: "Мониторинг клиентов",
        content: "<ul><li>Клиент внезапно стал стабильным и прибыльным.</li><li>Бизнесу необходимо обновить информацию, чтобы не потерять клиента.</li></ul>"
      },
      loanMarketplace: {
        title: "Кредитный маркетплейс",
        content: "<ul><li>Клиент хочет сравнить предложения от разных МФО и BNPL-магазинов.</li><li>MoliyAI может предоставить платформу для взаимодействия клиентов и компаний.</li><li>*База данных защищена</li></ul>"
      },
      businessLending: {
        title: "Кредитование бизнеса",
        content: "<ul><li>Банкам все еще сложно кредитовать бизнес из-за человеческого фактора.</li><li>MoliyAI может быстрее анализировать документы, чем кредитный менеджер.</li></ul>"
      }
    },
    stats: {
      title: "MoliyAI в цифрах",
      mfo: {
        value: "3+",
        label: "МФО и BNPL-розничные сети используют наши решения"
      },
      records: {
        value: "10K+",
        label: "Обработанных записей"
      },
      creditPortfel: {
        value: "$2M+",
        label: "Мы обрабатываем кредиты на сумму более $2 млн в месяц, предоставляя недоступным клиентам быстрый и справедливый AI-кредит."
      }
    },
    achievements: {
      title: "Наши достижения",
      aiStartup: {
        title: "AI-стартап года",
        description: "Признан за инновации в области финансового ИИ"
      },
      fintech: {
        title: "Премия за финтех-инновации",
        description: "За революционный подход к анализу финансовых данных"
      },
      topAI: {
        title: "Топ AI-компания 2023",
        description: "Включена в список ведущих AI-компаний в финансах"
      }
    },
    team: {
      title: "Наша команда"
    },
    footer: {
      copyright: "© 2025 MoliyAI. Все права защищены.",
      privacy: "Политика конфиденциальности",
      terms: "Условия использования"
    }
  },
  uz: {
    common: {
      home: "Bosh sahifa",
      about: "Biz haqimizda",
      news: "Yangiliklar",
      career: "Karyera",
      contact: "Biz bilan bog'laning",
      lab: "R&D laboratoriya",
      talkToUs: "Biz bilan bog‘laning",
      testInLab: "AI laboratoriyada sinab ko‘ring",
      readyToStart: "Boshlashga tayyormisiz?",
      scheduleDemo: "Demonstarsiyani belgilash",
      submit: "Yuborish",
      sending: "Yuborilmoqda...",
      fullName: "To‘liq ism",
      email: "Elektron pochta",
      phone: "Telefon raqam",
      company: "Kompaniya/Tashkilot",
      message: "Xabar"
    },
    hero: {
      title: "Osiyodagi bank xizmatlaridan foydalana olmaydiganlar uchun AI asosidagi kredit reytingi tizimi.",
      subtitle: "Moliy.AI — bu birinchi milliy startap va sun’iy intellekt asosidagi yangi avlod kredit reyting platformasi bo‘lib, rivojlanayotgan bozorlarga, xususan, O‘zbekistondan boshlanmoqda 🇺🇿. Millionlab odamlar moliyaviy faol bo‘lsa-da, ular rasmiy daromad, kredit tarixi yoki garov yo‘qligi sababli an’anaviy kredit tizimlarida ko‘rinmaydi."
    },
    lucid: {
      title: "Lucid",
      subtitle: "Moliyaviy tahlil uchun flagman AI yechimimiz",
      description: "Lucid — bu moliya tashkilotlariga ma’lumotlarni tahlil qilish, naqshlarni aniqlash va oqilona qarorlar qabul qilishda yordam beruvchi kuchli AI platformasi.",
      learnMore: "Batafsil ma’lumot"
    },
    useCases: {
      title: "Qo‘llanilish holatlari",
      subtitle: "Moliyaviy tashkilotlar",
      collectionScoring: {
        title: "Bank xizmatlaridan foydalana olmaydiganlar uchun kredit",
        description: "Rasmiy kredit tarixi bo‘lmagan shaxslarni alternativ ma’lumotlar (masalan, shaxsiy aktivlar, mobil foydalanish, kommunal to‘lovlar) asosida baholab xizmat ko‘rsatish."
      },
      fraudDetection: {
        title: "Zudlik bilan kredit qarorlari",
        description: "Mikromoliyaviy tashkilotlar uchun avtomatik tasdiqlarni amalga oshirish orqali tezkor ro‘yxatdan o‘tishni ta’minlash va qo‘lda ishlovni kamaytirish."
      },
      monitoring: {
        title: "Inklyuziv va xavfsiz kreditlash",
        description: "Xatti-harakatlar va tranzaktsiyalar tahlili orqali firibgarlikni aniqlagan holda kreditga adolatli kirishni kengaytirish."
      },
      creditScoring: {
        title: "To‘lov kechikishini bashorat qilish",
        description: "To‘lov kechikishi yoki defolt holatlarini erta aniqlab, kredit beruvchilarga xavflarni kamaytirish uchun oldindan choralar ko‘rish imkonini beradi."
      },
      bnplSubtitle: "BNPL tashkilotlari",
      operationalEfficiency: {
        title: "Operatsion samaradorlik",
        description: "Kreditni baholash jarayonini avtomatlashtirish, tekshiruv vaqtlarini qisqartirish va resurslarni samarali taqsimlash orqali ish unumdorligini oshirish."
      },
      riskManagement: {
        title: "Xavflarni boshqarish",
        description: "An’anaviy kredit tarixiga ega bo‘lmagan mijozlarga kredit berishda BNPL xizmat ko‘rsatuvchilarga xavfni baholashda yordam berish."
      },
      secureLending: {
        title: "Inklyuziv va xavfsiz kreditlash",
        description: "Real vaqt rejimida xavf tahlili orqali firibgarlikni aniqlash bilan birga, alternativ ma’lumotlar asosida kreditga kirishni kengaytirish."
      },
      personalizedOffers: {
        title: "Shaxsiylashtirilgan takliflar",
        description: "Moliyaviy xatti-harakatlar va risk profillariga asoslangan individual kredit limiti va shartlarini taklif qilish imkonini beradi."
      }
    },
    scheduledDevelopment: {
      title: "Rejalashtirilgan funksiyalar",
      dataIntegration: {
        title: "Qo‘shimcha ma’lumot manbalari",
        content: "<ul><li>Davlat xizmatlari, soliqlar, hisob-kitoblar</li><li>Mobil operatorlar</li><li>Ijtimoiy ta’sir (onlayn va offlayn)</li><li>GPS joylashuv</li></ul>"
      },
      clientMonitoring: {
        title: "Mijoz monitoringi",
        content: "<ul><li>Mijoz to‘satdan barqaror va foydali bo‘ldi.</li><li>Biznes mijoz haqida ma’lumotni yangilashi kerak — aks holda uni yo‘qotishi mumkin.</li></ul>"
      },
      loanMarketplace: {
        title: "Kredit bozor maydonchasi",
        content: "<ul><li>Mijoz bir nechta MFI va BNPL do‘konlari xizmatlarini solishtirishni xohlaydi.</li><li>MoliyAI bu borada Biznes va Mijozlar o‘rtasida vositachi platforma bo‘lishi mumkin.</li><li>*Ma’lumotlar bazasi xavfsiz saqlanadi</li></ul>"
      },
      businessLending: {
        title: "Biznes uchun kreditlash",
        content: "<ul><li>Banklar hanuzgacha inson omili tufayli bizneslarga kredit berishda qiynalmoqda.</li><li>MoliyAI barcha zarur hujjatlarni kredit mutaxassislaridan tezroq tahlil qilish imkoniyatiga ega.</li></ul>"
      }
    },
    stats: {
      title: "MoliyAI raqamlarda",
      mfo: {
        value: "3+",
        label: "MFO va BNPL do‘konlari bizning yechimlarimizdan foydalanmoqda"
      },
      records: {
        value: "10K+",
        label: "Qayta ishlangan yozuvlar"
      },
      creditPortfel: {
        value: "$2M+",
        label: "Har oyda $2 milliondan ortiq kreditlarni qayta ishlaymiz, bu orqali moliyaviy xizmatlardan chetda qolgan fuqarolar tezkor va adolatli kredit olish imkoniga ega bo‘lishadi."
      }
    },
    achievements: {
      title: "Yutuqlarimiz",
      aiStartup: {
        title: "Yilning AI-startapi",
        description: "Moliyaviy AI innovatsiyasi uchun tan olingan"
      },
      fintech: {
        title: "FinTex innovatsiya mukofoti",
        description: "Moliyaviy ma’lumotlarni tahlil qilishdagi inqilobiy yondashuv uchun"
      },
      topAI: {
        title: "2023-yilning eng yaxshi AI kompaniyasi",
        description: "Moliyaviy sohadagi yetakchi AI kompaniyalardan biri deb topilgan"
      }
    },
    team: {
      title: "Jamoamiz"
    },
    footer: {
      copyright: "© 2025 MoliyAI. Barcha huquqlar himoyalangan.",
      privacy: "Maxfiylik siyosati",
      terms: "Foydalanish shartlari"
    }
  }

}

export function getTranslation(locale: Locale, key: string): string {
  const keys = key.split(".")
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let value: any = translations[locale]

  for (const k of keys) {
    if (value[k] === undefined) {
      console.warn(`Translation key not found: ${key} for locale ${locale}`)
      return key
    }
    value = value[k]
  }

  if (typeof value !== "string") {
    console.warn(`Translation value is not a string: ${key} for locale ${locale}`)
    return key
  }

  return value
}

// Create a context for the current locale
export const LocaleContext = createContext<{
  locale: Locale
  setLocale: (locale: Locale) => void
}>({
  locale: defaultLocale,
  setLocale: () => { },
})

// Hook to use the translations
export function useTranslation() {
  const { locale } = useContext(LocaleContext)

  return {
    t: (key: string) => getTranslation(locale, key),
    locale,
  }
}
