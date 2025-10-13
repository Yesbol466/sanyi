import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
  en: {
    translation: {
      common: {
        brand: 'Sanyi',
        nav: { home: 'Home', catalog: 'Catalog', factory: 'Factory', about: 'About', contact: 'Contact' },
        search_placeholder: 'Search materials, categories…',
        cta_visit: 'Request a factory visit',
        cta_rfq: 'Request a quote',
        footer_rights: 'All rights reserved.',
        contact: {
          phone_label: 'Phone',
          email_label: 'Email',
          address_label: 'Address',
          phone_display: '+7 707 234 6666',
          phone_raw: '+77072346666',
          email: 'shamhanyerlan423@gmail.com',
          address: 'Kazakhstan, Almaty, Nauryzbay District, Meiram Microdistrict, House 30B, 050052',
          map_link: 'https://maps.google.com/?q=Kazakhstan,+Almaty,+Nauryzbay+District,+Meiram+Microdistrict,+30B,+050052'
        }
      },
      home: {
        headline: 'Construction materials, made reliable.',
        sub: 'Factory-grade quality, on-time supply, proven projects.',
        featured: 'Featured materials',
        categories: 'Categories'
      },
      catalog: { title: 'Catalog',all: 'All',
empty: 'No products match your filter.',
showing: 'Showing',
items: 'items'

 },
      factory: { title: 'Factory', intro: 'Certified quality · Process control · Safe logistics' },
      product: {
  view_details: 'View details',
  place_order: 'Place an Order',
  system_overview: 'System overview',
  advantages: 'Advantages',
  considerations: 'Considerations',
  back_to_catalog: 'Back to catalog',
  not_found: 'Product not found.'
},
      about: {
  title: 'About Us',
  body: `SANYI Construction Material Company is a professional manufacturer and supplier of advanced building materials, specializing in the research, production, and export of inorganic composite insulation boards and related facade systems. Our products are engineered for fire safety, durability, and thermal efficiency—widely used in residential, commercial, and industrial projects.

With modern automated production lines, SANYI ensures each panel meets strict A2 fire and environmental standards. From raw material batching to cutting, curing, and packaging, every step is monitored for consistency and performance.

We actively build industry partnerships and technology collaborations. In particular, SANYI works closely with VIBOR (Shandong, China) to deliver and commission automated lines for insulation boards and related systems—combining proven Chinese engineering with the needs of international projects: precision, stable throughput, and reliable logistics.

Through Almaty SanYi Foreign Trade Company Limited, we serve Central Asian and global markets with technical support, personnel training, and continuous product innovation.

Our mission is simple—to help build safer, greener, and more efficient structures with every panel we produce.`,
  license_title: 'Registration Certificate',
  license_caption: 'Almaty SanYi Foreign Trade Company Limited · Issued 2025-01-10',
  brands_title: 'Brands',
  collab_title: 'Collaborations & Partners',
  collab_body: 'We partner with established equipment and materials manufacturers. Together with VIBOR (Shandong, China), we deliver supply and commissioning of lines for uniform/perlite and other insulation systems—backed by quality assurance and service.',
  visit_partner: 'Visit VIBOR website'
}

,
      contact: { title: 'Contact', intro: "Tell us about your project. We'll reply within 24h." }
    }
  },
  zh: {
    translation: {
      common: {
        brand: '叁亿',
        nav: { home: '首页', catalog: '产品', factory: '工厂', about: '关于我们', contact: '联系' },
        search_placeholder: '搜索材料、分类…',
        cta_visit: '预约到厂参观',
        cta_rfq: '提交询价',
        footer_rights: '保留所有权利',
        contact: {
          phone_label: '电话',
          email_label: '邮箱',
          address_label: '地址',
          phone_display: '+7 707 234 6666',
          phone_raw: '+77072346666',
          email: 'shamhanyerlan423@gmail.com',
          address: '哈萨克斯坦，阿拉木图市，瑙勒兹拜区，梅拉姆小区，30B号，邮编 050052',
          map_link: 'https://maps.google.com/?q=Kazakhstan,+Almaty,+Nauryzbay+District,+Meiram+Microdistrict,+30B,+050052'
        }
      },
      home: {
        headline: '可靠的建筑材料。',
        sub: '工厂级品质 · 准时交付 · 项目验证。',
        featured: '精选材料',
        categories: '分类'
      },
      catalog: { title: '产品目录',all: '全部',
empty: '没有符合筛选条件的产品。',
showing: '当前',
items: '条'

 },
      factory: { title: '工厂', intro: '认证质量 · 过程管控 · 安全物流' },
      product: {
         system_overview: '系统概述',
  advantages: '产品优势',
  considerations: '使用注意',
  view_details: '查看详情',
  place_order: '下单/询价',
  back_to_catalog: '返回目录',
  not_found: '未找到该产品。'
},
   about: {
  title: '关于我们',
  body: `叁亿建筑材料公司是一家专业的高性能建筑材料制造商与供应商，专注于无机复合保温板及相关幕墙系统的研发、生产与出口。产品兼具防火、安全、耐久与节能特性，广泛应用于住宅、商业与工业项目。

公司配备现代化自动化生产线，严格按A2级防火与环保标准控制生产流程。从配料、成型、切割、养护到包装，均实施稳定性与性能监控。

我们积极开展产业合作与技术协同。叁亿与中国山东的 VIBOR 深度合作，联合提供用于匀质板、珍珠岩板等保温系统的自动化生产线与调试服务，将成熟的中国工程技术与国际项目需求结合，确保精度、产能与可靠物流。

通过“阿拉木图叁亿外贸有限公司”，我们为中亚及全球市场提供技术支持、人员培训与持续的产品创新。

我们的使命很简单——用每一块板材，建设更安全、更绿色、更高效的建筑。`,
  license_title: '注册登记证书',
  license_caption: '阿拉木图叁亿外贸有限公司 · 签发日期 2025-01-10',
  brands_title: '品牌',
  collab_title: '合作与伙伴',
  collab_body: '我们与成熟的设备与材料制造商合作。与山东 VIBOR 携手，提供匀质板、珍珠岩板等保温系统的整线供货与调试服务，并提供质量保障与售后服务。',
  visit_partner: '访问 VIBOR 官网'
}


,
      contact: { title: '联系我们', intro: '告诉我们您的项目，我们将在 24 小时内回复。' }
    }
  },
  ru: {
    translation: {
      common: {
        brand: 'Саньи',
        nav: { home: 'Главная', catalog: 'Каталог', factory: 'Завод', about: 'О нас', contact: 'Контакты' },
        search_placeholder: 'Поиск материалов, категорий…',
        cta_visit: 'Запросить визит на завод',
        cta_rfq: 'Запросить коммерческое предложение',
        footer_rights: 'Все права защищены.',
        contact: {
          phone_label: 'Телефон',
          email_label: 'Эл. почта',
          address_label: 'Адрес',
          phone_display: '+7 707 234 6666',
          phone_raw: '+77072346666',
          email: 'shamhanyerlan423@gmail.com',
          address: 'Казахстан, г. Алматы, Наурызбайский район, мкр. Мейрам, дом 30Б, 050052',
          map_link: 'https://maps.google.com/?q=Kazakhstan,+Almaty,+Nauryzbay+District,+Meiram+Microdistrict,+30B,+050052'
        }
      },
      home: { headline: 'Надёжные строительные материалы.', sub: 'Качество с завода · Сроки · Реализованные проекты.', featured: 'Рекомендовано', categories: 'Категории' },
      catalog: { title: 'Каталог' ,all: 'Все',
empty: 'Нет товаров по текущему фильтру.',
showing: 'Показано:',
items: 'тов.'

},
      factory: { title: 'Завод', intro: 'Сертификация · Контроль процессов · Безопасная логистика' },
      product: {
  view_details: 'Подробнее',
  system_overview: 'Описание системы',
  advantages: 'Преимущества',
  considerations: 'Рекомендации и примечания',
  place_order: 'Оформить заказ / запрос',
  back_to_catalog: 'Назад к каталогу',
  not_found: 'Товар не найден.'
},

     about: {
  title: 'О компании',
  body: `Компания SANYI Construction Material является профессиональным производителем и поставщиком современных строительных материалов. Мы специализируемся на разработке, производстве и экспорте неорганических композитных теплоизоляционных панелей и фасадных систем. Наша продукция отличается огнестойкостью, прочностью и высокой теплоэффективностью и широко применяется в жилом, коммерческом и промышленном строительстве.

На современном автоматизированном производстве каждая панель SANYI проходит строгий контроль качества и соответствует требованиям класса пожарной безопасности A2. Все этапы — от подготовки сырья до резки, сушки и упаковки — контролируются для обеспечения стабильности и высокого качества.

Мы развиваем отраслевые партнёрства и технологическое сотрудничество. В частности, SANYI тесно сотрудничает с компанией VIBOR (Шаньдун, Китай) по поставке и внедрению автоматизированных линий для производства утеплительных плит и связанных систем. Это позволяет объединять передовую китайскую инженерную школу с требованиями международных проектов: высокая точность, стабильная производительность и надёжная логистика.

Через компанию «Almaty SanYi Foreign Trade Company Limited» мы обслуживаем рынки Центральной Азии и других стран, обеспечивая техническую поддержку, обучение персонала и постоянные инновации.

Наша миссия проста — создавать более безопасные, экологичные и энергоэффективные здания с каждой произведённой панелью.`,
  license_title: 'Свидетельство о регистрации',
  license_caption: 'ТОО «Almaty SanYi Foreign Trade Company Limited» · Выдано 10.01.2025',
  brands_title: 'Бренды',
  collab_title: 'Партнёрства и сотрудничество',
  collab_body: 'Мы работаем с признанными производителями оборудования и материалов. Совместно с VIBOR (Шаньдун, Китай) реализуем проекты поставки и пусконаладки линий для匀质板/перлитовых и других теплоизоляционных систем — с гарантированным качеством и сервисом.',
  visit_partner: 'Сайт партнёра VIBOR'
}


,
      contact: { title: 'Контакты', intro: 'Опишите ваш проект. Отвечаем в течение 24 часов.' }
    }
  },
  kk: {
    translation: {
      common: {
        brand: 'Sanyi',
        nav: { home: 'Басты бет', catalog: 'Каталог', factory: 'Зауыт', about: 'Біз туралы', contact: 'Байланыс' },
        search_placeholder: 'Материалдар, санаттар…',
        cta_visit: 'Зауытқа баруға өтініш',
        cta_rfq: 'Баға сұрау',
        footer_rights: 'Барлық құқықтар қорғалған.',
        contact: {
          phone_label: 'Телефон',
          email_label: 'Электрондық пошта',
          address_label: 'Мекенжай',
          phone_display: '+7 707 234 6666',
          phone_raw: '+77072346666',
          email: 'shamhanyerlan423@gmail.com',
          address: 'Қазақстан, Алматы қ., Наурызбай ауданы, Мейрам шағын ауданы, 30Б үй, 050052',
          map_link: 'https://maps.google.com/?q=Kazakhstan,+Almaty,+Nauryzbay+District,+Meiram+Microdistrict,+30B,+050052'
        }
      },
      home: { headline: 'Сенімді құрылыс материалдары.', sub: 'Зауыт сапасы · Уақытылы жеткізу · Жобалар.', featured: 'Таңдаулы', categories: 'Санаттар' },
      catalog: { title: 'Каталог',all: 'Барлығы',
empty: 'Сүзгі бойынша өнімдер табылмады.',
showing: 'Көрсетілген:',
items: 'позиция'

 },
      factory: { title: 'Зауыт', intro: 'Сапа · Процесс бақылау · Логистика' },
      product: {
  view_details: 'Толығырақ',
  system_overview: 'Жүйенің сипаттамасы',
  advantages: 'Артықшылықтары',
  considerations: 'Назар аударыңыз',
  place_order: 'Тапсырыс беру / сұрау',
  back_to_catalog: 'Каталогқа қайту',
  not_found: 'Өнім табылмады.'
},
      about: {
  title: 'Біз туралы',
  body: `SANYI — заманауи құрылыс материалдарын өндіретін және жеткізетін кәсіпорын. Компания бейорганикалық композиттік жылу оқшаулағыш тақталар мен қасбеттік жүйелерді зерттеу, өндіру және экспорттауға маманданған. Өнімдеріміз өртке төзімді, берік және энергия үнемді, тұрғын үй, коммерциялық және өнеркәсіптік нысандарда кең қолданылады.

Заманауи автоматтандырылған желілер әр панельдің A2 өрт және экостандарттарына сай болуын қамтамасыз етеді. Шикізатты дайындаудан бастап, кесу, шынықтыру және қаптауға дейінгі барлық кезең тұрақты бақылауда.

Біз салалық серіктестік пен технологиялық ынтымақтастықты дамытамыз. Атап айтқанда, SANYI Қытайдың Шаньдун провинциясындағы VIBOR компаниясымен тығыз жұмыс істейді: оқшаулағыш тақталарға арналған автоматтандырылған желілерді жеткізу және іске қосу — дәлдік, тұрақты өнімділік және сенімді логистикамен.

«Almaty SanYi Foreign Trade Company Limited» арқылы біз Орталық Азия және әлемдік нарықтарға техникалық қолдау, кадрларды оқыту және үздіксіз инновациялар ұсынамыз.

Мақсатымыз — әр өндірілген панель арқылы қауіпсіз, экологиялық және тиімді ғимараттар салуға үлес қосу.`,
  license_title: 'Тіркеу куәлігі',
  license_caption: '«Almaty SanYi Foreign Trade Company Limited» · Берілген күні 2025-01-10',
  brands_title: 'Брендтер',
  collab_title: 'Серіктестік және әріптестер',
  collab_body: 'Біз жабдық пен материалдар өндірушілерімен жұмыс істейміз. Шаньдундағы VIBOR компаниясымен бірге біртекті/перлит және басқа да оқшаулау жүйелеріне арналған желілерді жеткізіп, іске қосамыз — сапа кепілдігі және сервистік қолдаумен.',
  visit_partner: 'VIBOR сайты'
}

,
      contact: { title: 'Байланыс', intro: 'Жобаңыз туралы айтыңыз. 24 сағат ішінде жауап береміз.' }
    }
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  })

export default i18n
