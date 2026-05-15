document.addEventListener('DOMContentLoaded', () => {
  const langBtn = document.querySelector('.lang-btn');

  const translations = {
    en: {
      title: 'Ahmed ElGioushy',
      subtitle: 'Law • Logistics • Digital Transformation',
      education: 'Education',
      thesis: 'Master’s Thesis',
      research: 'Research Interests',
      certificates: 'Certificates',
      languages: 'Languages',
      contact: 'Contact Me'
    },
    ar: {
      title: 'أحمد الجيوشي',
      subtitle: 'القانون • اللوجستيات • التحول الرقمي',
      education: 'التعليم',
      thesis: 'رسالة الماجستير',
      research: 'الاهتمامات البحثية',
      certificates: 'الشهادات',
      languages: 'اللغات',
      contact: 'تواصل معي'
    }
  };

  let currentLang = 'en';

  langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';

    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

    document.querySelector('h1').innerHTML = currentLang === 'ar'
      ? 'أحمد <span class="gold">الجيوشي</span>'
      : 'Ahmed <span class="gold">ElGioushy</span>';

    document.querySelectorAll('h2')[0].textContent = translations[currentLang].education;
    document.querySelectorAll('h2')[1].textContent = translations[currentLang].thesis;
    document.querySelectorAll('h2')[2].textContent = translations[currentLang].research;
    document.querySelectorAll('h2')[3].textContent = translations[currentLang].certificates;
    document.querySelectorAll('h2')[4].textContent = translations[currentLang].languages;
    document.querySelectorAll('h2')[5].textContent = translations[currentLang].contact;

    document.querySelectorAll('p')[0].textContent = translations[currentLang].subtitle;

    langBtn.textContent = currentLang === 'en' ? 'AR' : 'EN';
  });
});