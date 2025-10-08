// SEO Meta Tags Constants
export const SITE_NAME = 'Testere Korku Evi'
export const SITE_URL = 'https://testere-korku-evi.vercel.app/'
export const SITE_DESCRIPTION =
  "Testere Korku Evi - Ankara Kızılay'da korku dolu kaçış odası deneyimi. Ekibinizi toplayın, bulmacaları çözün ve kaçın!"

// Common keywords
export const COMMON_KEYWORDS = [
  'testere korku evi',
  'ankara korku evi',
  'kaçış odası ankara',
  'escape room',
  'korku temalı oyun',
  'kızılay eğlence',
]

// Page-specific meta data
export const PAGE_META = {
  home: {
    title: 'Ana Sayfa',
    description: SITE_DESCRIPTION,
    keywords: COMMON_KEYWORDS,
    ogTitle: `${SITE_NAME} Ankara - Ana Sayfa`,
    ogDescription:
      "Ankara Kızılay'da korku temalı kaçış odası deneyimi. Korkarken eğlenin, eğlenirken kaçın!",
  },
  story: {
    title: 'Hikaye',
    description:
      'Testere Korku Evi hikayesi. Karanlık bir banyoda zincirlenen oyuncular, tuzaklar, bulmacalar ve gizli geçitlerle dolu korku temalı kaçış oyunu.',
    keywords: ['testere hikayesi', 'korku evi senaryosu', 'kaçış odası hikaye'],
    ogTitle: `Hikaye - ${SITE_NAME}`,
  },
  information: {
    title: 'Hakkımızda',
    description:
      "Testere Korku Evi hakkında bilgi edinin. Ankara Kızılay'da korku seansları geçirecek, bulmacaları çözecek ve kaçış için mücadele edeceksiniz.",
    keywords: [
      'testere korku evi hakkında',
      'ankara kaçış odası bilgi',
      'korku evi deneyimi',
      'escape room ankara',
    ],
    ogTitle: `Hakkımızda - ${SITE_NAME} Ankara`,
  },
  rules: {
    title: 'Kurallar',
    description:
      'Testere Korku Evi kuralları. Oyun hakkında bilmeniz gereken her şey: ekip sayısı, yaş aralığı, güvenlik kuralları ve rezervasyon bilgileri.',
    keywords: [
      'korku evi kuralları',
      'kaçış odası kurallar',
      'testere oyun kuralları',
      'rezervasyon bilgileri',
    ],
    ogTitle: `Kurallar - ${SITE_NAME}`,
  },
  reservation: {
    title: 'Rezervasyon',
    description:
      'Testere Korku Evi rezervasyon ve iletişim bilgileri. Adres: Meşrutiyet Mahallesi, Kızılay/Ankara. Telefon: 0530 825 82 56. Instagram: @ankarakorkuevi',
    keywords: [
      'testere rezervasyon',
      'korku evi iletişim',
      'ankara kaçış odası adres',
      'kızılay korku evi telefon',
    ],
    ogTitle: `Rezervasyon ve İletişim - ${SITE_NAME}`,
  },
}

/**
 * Generate meta tags for a page
 * @param {string} page - Page name (home, story, information, rules, reservation)
 * @returns {Object} Meta tags configuration
 */
export function generateMeta(page) {
  const pageMeta = PAGE_META[page] || PAGE_META.home
  const keywords = Array.isArray(pageMeta.keywords)
    ? pageMeta.keywords.join(', ')
    : COMMON_KEYWORDS.join(', ')

  return {
    title: pageMeta.title,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: pageMeta.description,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: pageMeta.ogTitle || `${pageMeta.title} - ${SITE_NAME}`,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: pageMeta.ogDescription || pageMeta.description,
      },
      {
        name: 'keywords',
        content: keywords,
      },
    ],
  }
}
