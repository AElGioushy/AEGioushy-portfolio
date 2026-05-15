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

  function enhanceResearchPublications() {
    const researchSection = document.getElementById('research');
    if (!researchSection || researchSection.querySelector('.academic-research-suite')) return;

    if (!document.getElementById('academic-research-suite-styles')) {
      const style = document.createElement('style');
      style.id = 'academic-research-suite-styles';
      style.textContent = `
        .academic-research-suite{margin-top:56px}.academic-hero{display:grid;grid-template-columns:1.1fr .9fr;gap:28px;align-items:stretch;margin-bottom:28px}.academic-panel{position:relative;overflow:hidden;border-radius:30px;padding:34px;background:linear-gradient(145deg,rgba(17,19,24,.88),rgba(17,19,24,.58));border:1px solid rgba(198,169,107,.16);box-shadow:0 28px 80px rgba(0,0,0,.24)}.academic-panel:before{content:"";position:absolute;inset:0;background:linear-gradient(120deg,rgba(198,169,107,.13),transparent 42%);pointer-events:none}.academic-kicker{position:relative;display:inline-flex;align-items:center;gap:10px;color:#c6a96b;font-size:.78rem;font-weight:800;letter-spacing:.22em;text-transform:uppercase;margin-bottom:18px}.academic-title{position:relative;font-family:'Playfair Display',serif;font-size:2.2rem;line-height:1.15;margin-bottom:16px}.academic-copy{position:relative;color:#cbd5e1;line-height:1.85}.citation-mark{position:absolute;right:28px;top:18px;color:rgba(198,169,107,.18);font-family:'Playfair Display',serif;font-size:5rem;line-height:1}.research-metrics{display:grid;gap:14px}.metric-row{border:1px solid rgba(198,169,107,.14);border-radius:20px;padding:18px 20px;background:rgba(255,255,255,.035)}.metric-row strong{display:block;color:#c6a96b;font-size:1.45rem}.metric-row span{color:#cbd5e1;font-size:.9rem}.interest-cloud{display:flex;flex-wrap:wrap;gap:10px;margin:24px 0 34px}.interest-cloud span{border:1px solid rgba(198,169,107,.2);border-radius:999px;padding:9px 13px;background:rgba(198,169,107,.06);color:#e6d39c;font-size:.82rem}.publication-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px}.publication-card{display:flex;flex-direction:column;min-height:100%;border-radius:26px;padding:26px;background:rgba(11,11,12,.58);border:1px solid rgba(198,169,107,.16);box-shadow:0 22px 60px rgba(0,0,0,.2);transition:transform .3s ease,border-color .3s ease,box-shadow .3s ease}.publication-card:hover{transform:translateY(-4px);border-color:rgba(198,169,107,.34);box-shadow:0 30px 78px rgba(0,0,0,.3)}.pub-type{display:flex;align-items:center;justify-content:space-between;gap:12px;color:#c6a96b;font-size:.74rem;font-weight:800;letter-spacing:.18em;text-transform:uppercase;margin-bottom:16px}.pub-title{font-size:1.2rem;line-height:1.35;margin-bottom:12px}.pub-copy{color:#cbd5e1;line-height:1.75;font-size:.94rem;flex:1}.download-btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;margin-top:22px;border-radius:999px;padding:11px 15px;background:#c6a96b;color:#050505;font-weight:800;font-size:.82rem}.download-btn:hover{transform:translateY(-1px);box-shadow:0 12px 34px rgba(198,169,107,.22)}.academic-direction{margin-top:24px;display:grid;grid-template-columns:.8fr 1.2fr;gap:20px}.direction-card{border-radius:26px;padding:28px;border:1px solid rgba(198,169,107,.16);background:linear-gradient(145deg,rgba(198,169,107,.1),rgba(255,255,255,.035))}.direction-card h3{font-family:'Playfair Display',serif;font-size:1.7rem;margin-bottom:12px}.direction-card p{color:#cbd5e1;line-height:1.8}.academic-ar{display:none}html[lang="ar"] .academic-en{display:none}html[lang="ar"] .academic-ar{display:inline}html[lang="ar"] .academic-panel,html[lang="ar"] .publication-card,html[lang="ar"] .direction-card{text-align:right}html[lang="ar"] .citation-mark{right:auto;left:28px}@media(max-width:980px){.academic-hero,.academic-direction{grid-template-columns:1fr}.publication-grid{grid-template-columns:1fr 1fr}}@media(max-width:640px){.academic-panel{padding:24px}.academic-title{font-size:1.72rem}.publication-grid{grid-template-columns:1fr}.interest-cloud span{font-size:.78rem}.citation-mark{font-size:4rem}}
      `;
      document.head.appendChild(style);
    }

    researchSection.querySelector('.max-w-7xl')?.insertAdjacentHTML('beforeend', `
      <div class="academic-research-suite reveal" aria-label="Premium academic research and publications showcase">
        <div class="academic-hero">
          <article class="academic-panel">
            <div class="citation-mark">&ldquo;</div>
            <div class="academic-kicker"><i class="fa-solid fa-book-open"></i><span class="academic-en">Master Thesis Showcase</span><span class="academic-ar">عرض رسالة الماجستير</span></div>
            <h3 class="academic-title"><span class="academic-en">Judicial Control over Arbitral Awards</span><span class="academic-ar">الرقابة القضائية على أحكام التحكيم</span></h3>
            <p class="academic-copy"><span class="academic-en">A research foundation examining how courts supervise arbitral awards, protect procedural integrity, and balance arbitration autonomy with legal accountability.</span><span class="academic-ar">أساس بحثي يدرس كيفية رقابة المحاكم على أحكام التحكيم، وحماية سلامة الإجراءات، وتحقيق التوازن بين استقلال التحكيم والمساءلة القانونية.</span></p>
            <div class="interest-cloud" aria-label="Research categories"><span>Arbitration</span><span>Judicial Review</span><span>Legal Systems</span><span>International Transactions</span></div>
          </article>
          <aside class="academic-panel research-metrics" aria-label="Academic achievements">
            <div class="metric-row"><strong>M.Sc</strong><span class="academic-en">International Transactions & Logistics</span><span class="academic-ar">المعاملات الدولية واللوجستيات</span></div>
            <div class="metric-row"><strong>LL.B</strong><span class="academic-en">Legal Studies & International Relations</span><span class="academic-ar">الدراسات القانونية والعلاقات الدولية</span></div>
            <div class="metric-row"><strong>7+</strong><span class="academic-en">Research domains across law, governance, logistics, and technology</span><span class="academic-ar">مجالات بحثية في القانون والحوكمة واللوجستيات والتكنولوجيا</span></div>
          </aside>
        </div>
        <div class="academic-panel">
          <div class="academic-kicker"><i class="fa-solid fa-layer-group"></i><span class="academic-en">Research Interests</span><span class="academic-ar">الاهتمامات البحثية</span></div>
          <div class="interest-cloud"><span>Governance</span><span>Digital Transformation</span><span>International Commercial Transactions</span><span>Logistics Systems</span><span>Arbitration</span><span>Legal Technology</span><span>AI Governance</span><span>Smart Transformation Systems</span></div>
        </div>
        <div class="publication-grid" aria-label="Downloadable academic publication cards">
          <article class="publication-card"><div class="pub-type"><span>Working Paper</span><i class="fa-regular fa-file-pdf"></i></div><h3 class="pub-title"><span class="academic-en">Judicial Control over Arbitral Awards</span><span class="academic-ar">الرقابة القضائية على أحكام التحكيم</span></h3><p class="pub-copy"><span class="academic-en">A publication-style abstract from the master's thesis, framed for future academic circulation.</span><span class="academic-ar">ملخص بصيغة أكاديمية مستند إلى رسالة الماجستير ومهيأ للتداول البحثي مستقبلًا.</span></p><a class="download-btn paper-download" href="#" data-paper="arbitration"><i class="fa-solid fa-download"></i><span>PDF Brief</span></a></article>
          <article class="publication-card"><div class="pub-type"><span>Research Note</span><i class="fa-regular fa-file-pdf"></i></div><h3 class="pub-title"><span class="academic-en">Digital Governance & Smart Transformation Systems</span><span class="academic-ar">الحوكمة الرقمية وأنظمة التحول الذكي</span></h3><p class="pub-copy"><span class="academic-en">Future PhD direction connecting institutional modernization, public trust, and responsible technology adoption.</span><span class="academic-ar">اتجاه دكتوراه مستقبلي يربط تحديث المؤسسات والثقة العامة وتبني التكنولوجيا المسؤول.</span></p><a class="download-btn paper-download" href="#" data-paper="governance"><i class="fa-solid fa-download"></i><span>PDF Brief</span></a></article>
          <article class="publication-card"><div class="pub-type"><span>Concept Paper</span><i class="fa-regular fa-file-pdf"></i></div><h3 class="pub-title"><span class="academic-en">Logistics & International Commercial Transactions</span><span class="academic-ar">اللوجستيات والمعاملات التجارية الدولية</span></h3><p class="pub-copy"><span class="academic-en">A concise research brief on cross-border movement, commercial coordination, and legal-logistics interfaces.</span><span class="academic-ar">موجز بحثي حول الحركة العابرة للحدود والتنسيق التجاري والتداخل بين القانون واللوجستيات.</span></p><a class="download-btn paper-download" href="#" data-paper="logistics"><i class="fa-solid fa-download"></i><span>PDF Brief</span></a></article>
        </div>
        <div class="academic-direction">
          <div class="direction-card"><h3><span class="academic-en">Future PhD Direction</span><span class="academic-ar">اتجاه الدكتوراه المستقبلي</span></h3><p><span class="academic-en">Digital Governance & Smart Transformation Systems</span><span class="academic-ar">الحوكمة الرقمية وأنظمة التحول الذكي</span></p></div>
          <div class="direction-card"><h3><span class="academic-en">Academic Positioning</span><span class="academic-ar">التموضع الأكاديمي</span></h3><p><span class="academic-en">A research identity at the intersection of arbitration, legal systems, logistics, governance, AI policy, and institutional digital transformation.</span><span class="academic-ar">هوية بحثية عند تقاطع التحكيم والأنظمة القانونية واللوجستيات والحوكمة وسياسات الذكاء الاصطناعي والتحول الرقمي المؤسسي.</span></p></div>
        </div>
      </div>
    `);

    const pdfText = {
      arbitration: {
        title: 'Judicial Control over Arbitral Awards',
        lines: ['Research brief based on the master thesis.', 'Focus: arbitration, judicial review, procedural safeguards, and enforceability.', 'Author: Ahmed ElGioushy']
      },
      governance: {
        title: 'Digital Governance & Smart Transformation Systems',
        lines: ['Future PhD research direction.', 'Focus: institutional modernization, public trust, AI governance, and responsible digital transformation.', 'Author: Ahmed ElGioushy']
      },
      logistics: {
        title: 'Logistics & International Commercial Transactions',
        lines: ['Concept paper for legal-logistics research.', 'Focus: cross-border transactions, logistics systems, and commercial coordination.', 'Author: Ahmed ElGioushy']
      }
    };

    function escapePdfText(value) {
      return value.replace(/[()\\]/g, (match) => `\\${match}`);
    }

    function buildSimplePdf(title, lines) {
      const textLines = [title, '', ...lines].map(escapePdfText);
      const streamLines = ['BT', '/F1 18 Tf', '72 742 Td', `(${textLines[0]}) Tj`, '/F1 11 Tf'];
      textLines.slice(1).forEach((line) => {
        streamLines.push('0 -22 Td', `(${line}) Tj`);
      });
      streamLines.push('ET');
      const stream = streamLines.join('\n');
      const objects = [
        '1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n',
        '2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n',
        '3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>\nendobj\n',
        '4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n',
        `5 0 obj\n<< /Length ${stream.length} >>\nstream\n${stream}\nendstream\nendobj\n`
      ];
      let pdf = '%PDF-1.4\n';
      const offsets = [0];
      objects.forEach((object) => {
        offsets.push(pdf.length);
        pdf += object;
      });
      const xrefStart = pdf.length;
      pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
      offsets.slice(1).forEach((offset) => {
        pdf += `${String(offset).padStart(10, '0')} 00000 n \n`;
      });
      pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;
      return pdf;
    }

    researchSection.querySelectorAll('.paper-download').forEach((button) => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        const paper = pdfText[button.dataset.paper];
        if (!paper) return;
        const blob = new Blob([buildSimplePdf(paper.title, paper.lines)], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${paper.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.pdf`;
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(url);
      });
    });

    document.querySelectorAll('.academic-research-suite .reveal').forEach((el) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('active'); });
      }, { threshold: 0.12 });
      observer.observe(el);
    });
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

  enhanceResearchPublications();
  applyLanguage();
});
