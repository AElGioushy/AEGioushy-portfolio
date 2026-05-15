document.addEventListener('DOMContentLoaded', () => {
  const langBtn = document.querySelector('.lang-btn');
  const menuBtn = document.querySelector('.menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');

  const translations = {
    en: {
      navAbout: 'About', navEducation: 'Education', navResearch: 'Research', navCertificates: 'Certificates', navContact: 'Contact',
      heroKicker: 'AEG Executive Academic Portfolio', heroName: 'Ahmed ElGioushy', heroTitle: 'Law, Logistics & Digital Transformation', heroSummary: 'Executive academic portfolio focused on governance, logistics, arbitration, and digital transformation.', heroCta: 'Explore Profile', heroContact: 'Contact',
      statPrograms: 'Ambassador Programs', statYears: 'Years Experience', statLaw: 'Legal Studies', statMaster: 'Transactions & Logistics',
      aboutTitle: 'About & Professional Snapshot', aboutText: 'A multidisciplinary legal and logistics profile connecting arbitration, governance, technology awareness, and public-facing academic development.',
      educationTitle: 'Education', eduOneTitle: 'Pharos University', eduOneText: 'Legal Studies & International Relations.', eduTwoTitle: 'AASTMT', eduTwoText: 'Master Degree in International Transactions & Logistics.',
      thesisTitle: 'Master Thesis', thesisName: 'Judicial Control over Arbitral Awards', thesisText: 'Focused on arbitration systems, legal oversight mechanisms, and the relationship between institutional authority and enforceable awards.',
      volunteerTitle: 'Volunteer & Community Work', volunteerOne: 'ESE Activities', volunteerOneText: 'Sustainability and youth engagement initiatives.', volunteerTwo: 'AI Ambassador', volunteerTwoText: 'AI awareness and volunteer coordination programs.', volunteerThree: 'Community Engagement', volunteerThreeText: 'Academic networking and development activities.',
      governanceTitle: 'Governance & Digital Transformation', governanceOne: 'Digital Transformation Ambassador', governanceOneText: 'Digital modernization and awareness programs.', governanceTwo: 'Governance Ambassador', governanceTwoText: 'Transparency and institutional governance initiatives.',
      cairoTitle: 'CairoICT Experience', cairoOne: 'Technology Networking', cairoOneText: 'Networking with institutions and technology leaders.', cairoTwo: 'Innovation Exposure', cairoTwoText: 'Digital governance and smart transformation insights.', cairoThree: 'Executive Exposure', cairoThreeText: 'Innovation policy and future systems understanding.',
      certificatesTitle: 'Certificates', certOne: 'Master Certificate', certTwo: 'AI Ambassador Basic', certThree: 'AI Ambassador Advanced',
      languagesTitle: 'Languages', langArabic: 'Arabic - Native', langEnglish: 'English - Professional', langFrench: 'French - Learning', langGerman: 'German - Beginner',
      timelineTitle: 'Executive Timeline', timelineIntro: 'Academic, ambassadorial, and professional development journey.', timeOne: 'Governance & Digital Transformation Ambassador', timeOneText: 'Participated in ambassadorial initiatives focused on governance modernization and digital transformation awareness.', timeTwo: 'CairoICT Participation', timeTwoText: 'Expanded professional exposure to innovation ecosystems, executive networking, and emerging technology environments.', timeThree: 'Master Degree Completion', timeThreeText: 'Completed postgraduate studies in International Transactions and Logistics at AASTMT.',
      researchTitle: 'Research & Publications', researchIntro: 'Research interests connecting international transactions, logistics systems, arbitration, governance, and responsible technology adoption.', researchOne: 'Arbitration & Judicial Control', researchOneText: 'Study of court oversight, enforceability, and procedural safeguards around arbitral awards.', researchTwo: 'Digital Governance', researchTwoText: 'Exploration of public-sector modernization, transparency, and technology-enabled institutional development.', researchThree: 'Logistics & International Transactions', researchThreeText: 'Academic focus on cross-border transactions, maritime/logistics systems, and commercial coordination.',
      githubTitle: 'GitHub Activity', githubIntro: 'Live public GitHub profile widgets for technical presence and project visibility.', githubProfile: 'Open GitHub Profile',
      contactTitle: 'Contact Me', contactLocation: 'Cairo, Egypt', contactPrompt: 'Send a professional message or connect through GitHub and LinkedIn.', formName: 'Your name', formEmail: 'Your email', formMessage: 'Your message', formSubmit: 'Send Message', footerText: '2026 Ahmed ElGioushy. Built for GitHub Pages.'
    },
    ar: {
      navAbout: 'نبذة', navEducation: 'التعليم', navResearch: 'الأبحاث', navCertificates: 'الشهادات', navContact: 'التواصل',
      heroKicker: 'الملف الأكاديمي التنفيذي AEG', heroName: 'أحمد الجيوشي', heroTitle: 'القانون واللوجستيات والتحول الرقمي', heroSummary: 'ملف أكاديمي تنفيذي يركز على الحوكمة واللوجستيات والتحكيم والتحول الرقمي.', heroCta: 'استكشف الملف', heroContact: 'تواصل',
      statPrograms: 'برامج سفراء', statYears: 'سنوات خبرة', statLaw: 'الدراسات القانونية', statMaster: 'المعاملات واللوجستيات',
      aboutTitle: 'نبذة ولمحة مهنية', aboutText: 'مسار قانوني ولوجستي متعدد التخصصات يربط بين التحكيم والحوكمة والوعي التقني والتطور الأكاديمي.',
      educationTitle: 'التعليم', eduOneTitle: 'جامعة فاروس', eduOneText: 'الدراسات القانونية والعلاقات الدولية.', eduTwoTitle: 'الأكاديمية العربية للعلوم والتكنولوجيا والنقل البحري', eduTwoText: 'درجة الماجستير في المعاملات الدولية واللوجستيات.',
      thesisTitle: 'رسالة الماجستير', thesisName: 'الرقابة القضائية على أحكام التحكيم', thesisText: 'تركز على أنظمة التحكيم وآليات الرقابة القانونية والعلاقة بين السلطة المؤسسية وقابلية تنفيذ الأحكام.',
      volunteerTitle: 'العمل التطوعي والمجتمعي', volunteerOne: 'أنشطة ESE', volunteerOneText: 'مبادرات الاستدامة ومشاركة الشباب.', volunteerTwo: 'سفير الذكاء الاصطناعي', volunteerTwoText: 'برامج التوعية بالذكاء الاصطناعي وتنسيق العمل التطوعي.', volunteerThree: 'المشاركة المجتمعية', volunteerThreeText: 'أنشطة التواصل الأكاديمي والتطوير.',
      governanceTitle: 'الحوكمة والتحول الرقمي', governanceOne: 'سفير التحول الرقمي', governanceOneText: 'برامج التحديث الرقمي والتوعية.', governanceTwo: 'سفير الحوكمة', governanceTwoText: 'مبادرات الشفافية والحوكمة المؤسسية.',
      cairoTitle: 'تجربة CairoICT', cairoOne: 'التواصل التقني', cairoOneText: 'التواصل مع المؤسسات وقادة التكنولوجيا.', cairoTwo: 'التعرض للابتكار', cairoTwoText: 'رؤى حول الحوكمة الرقمية والتحول الذكي.', cairoThree: 'خبرة تنفيذية', cairoThreeText: 'فهم سياسات الابتكار وأنظمة المستقبل.',
      certificatesTitle: 'الشهادات', certOne: 'شهادة الماجستير', certTwo: 'سفير الذكاء الاصطناعي - أساسي', certThree: 'سفير الذكاء الاصطناعي - متقدم',
      languagesTitle: 'اللغات', langArabic: 'العربية - اللغة الأم', langEnglish: 'الإنجليزية - مهنية', langFrench: 'الفرنسية - قيد التعلم', langGerman: 'الألمانية - مبتدئ',
      timelineTitle: 'المسار التنفيذي', timelineIntro: 'رحلة التطور الأكاديمي والمهني وبرامج السفراء.', timeOne: 'سفير الحوكمة والتحول الرقمي', timeOneText: 'المشاركة في مبادرات سفراء تركز على تحديث الحوكمة والتوعية بالتحول الرقمي.', timeTwo: 'المشاركة في CairoICT', timeTwoText: 'توسيع الخبرة المهنية في بيئات الابتكار والتواصل التنفيذي والتكنولوجيا الناشئة.', timeThree: 'إتمام درجة الماجستير', timeThreeText: 'إتمام الدراسات العليا في المعاملات الدولية واللوجستيات بالأكاديمية العربية.',
      researchTitle: 'الأبحاث والمنشورات', researchIntro: 'اهتمامات بحثية تربط بين المعاملات الدولية واللوجستيات والتحكيم والحوكمة وتبني التكنولوجيا المسؤول.', researchOne: 'التحكيم والرقابة القضائية', researchOneText: 'دراسة رقابة المحاكم وقابلية التنفيذ والضمانات الإجرائية المرتبطة بأحكام التحكيم.', researchTwo: 'الحوكمة الرقمية', researchTwoText: 'استكشاف تحديث القطاع العام والشفافية والتطوير المؤسسي المدعوم بالتكنولوجيا.', researchThree: 'اللوجستيات والمعاملات الدولية', researchThreeText: 'تركيز أكاديمي على المعاملات العابرة للحدود وأنظمة النقل واللوجستيات والتنسيق التجاري.',
      githubTitle: 'نشاط GitHub', githubIntro: 'عناصر مباشرة من ملف GitHub العام لإظهار الحضور التقني والمشروعات.', githubProfile: 'فتح ملف GitHub',
      contactTitle: 'تواصل معي', contactLocation: 'القاهرة، مصر', contactPrompt: 'أرسل رسالة مهنية أو تواصل عبر GitHub و LinkedIn.', formName: 'اسمك', formEmail: 'بريدك الإلكتروني', formMessage: 'رسالتك', formSubmit: 'إرسال الرسالة', footerText: '2026 أحمد الجيوشي. مبني لـ GitHub Pages.'
    }
  };

  let currentLang = localStorage.getItem('portfolio-language') || 'en';

  function applyLanguage() {
    const active = translations[currentLang];
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.dataset.i18n;
      if (active[key]) element.textContent = active[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
      const key = element.dataset.i18nPlaceholder;
      if (active[key]) element.setAttribute('placeholder', active[key]);
    });

    if (langBtn) langBtn.textContent = currentLang === 'en' ? 'AR' : 'EN';
  }

  if (langBtn) {
    langBtn.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'ar' : 'en';
      localStorage.setItem('portfolio-language', currentLang);
      applyLanguage();
    });
  }

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(isOpen));
    });

    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  applyLanguage();
});
