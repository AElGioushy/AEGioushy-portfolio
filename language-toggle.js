document.addEventListener('DOMContentLoaded', () => {
  const langBtn = document.querySelector('.lang-btn');

  const translations = {
    en: {
      heroTitle: 'Ahmed ElGioushy',
      heroSubtitle: 'Law, Logistics & Digital Transformation',
      education: 'Education',
      thesis: 'Master Thesis',
      volunteer: 'Volunteer & Community Work',
      governance: 'Governance & Digital Transformation',
      cairo: 'CairoICT Experience',
      certificates: 'Certificates',
      languages: 'Languages',
      contact: 'Contact Me'
    },
    ar: {
      heroTitle: 'أحمد الجيوشي',
      heroSubtitle: 'القانون واللوجستيات والتحول الرقمي',
      education: 'التعليم',
      thesis: 'رسالة الماجستير',
      volunteer: 'العمل التطوعي والمجتمعي',
      governance: 'الحوكمة والتحول الرقمي',
      cairo: 'تجربة CairoICT',
      certificates: 'الشهادات',
      languages: 'اللغات',
      contact: 'تواصل معي'
    }
  };

  let currentLang = localStorage.getItem('portfolio-language') || 'en';

  const applyLanguage = () => {
    const t = translations[currentLang];

    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

    const heroHeading = document.querySelector('.heading');
    if (heroHeading) {
      heroHeading.innerHTML = currentLang === 'ar'
        ? 'أحمد <span class="gold">الجيوشي</span>'
        : 'Ahmed <span class="gold">ElGioushy</span>';
    }

    const pTags = document.querySelectorAll('p');
    if (pTags[0]) pTags[0].textContent = t.heroSubtitle;

    const headings = document.querySelectorAll('h2');
    if (headings[0]) headings[0].textContent = t.education;
    if (headings[1]) headings[1].textContent = t.thesis;
    if (headings[2]) headings[2].textContent = t.volunteer;
    if (headings[3]) headings[3].textContent = t.governance;
    if (headings[4]) headings[4].textContent = t.cairo;
    if (headings[5]) headings[5].textContent = t.certificates;
    if (headings[6]) headings[6].textContent = t.languages;
    if (headings[7]) headings[7].textContent = t.contact;

    langBtn.textContent = currentLang === 'en' ? 'AR' : 'EN';
  };

  applyLanguage();

  langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    localStorage.setItem('portfolio-language', currentLang);
    applyLanguage();
  });
});