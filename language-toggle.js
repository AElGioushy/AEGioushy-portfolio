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
      contactTitle: 'Contact Me', contactLocation: 'Cairo, Egypt', contactPrompt: 'Send a professional message or connect through GitHub and LinkedIn.', formName: 'Your name', formEmail: 'Your email', formSubject: 'Subject', formMessage: 'Your message', formSubmit: 'Send Message', footerText: '2026 Ahmed ElGioushy. Built for GitHub Pages.'
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
      contactTitle: 'تواصل معي', contactLocation: 'القاهرة، مصر', contactPrompt: 'أرسل رسالة مهنية أو تواصل عبر GitHub و LinkedIn.', formName: 'اسمك', formEmail: 'بريدك الإلكتروني', formSubject: 'موضوع الرسالة', formMessage: 'رسالتك', formSubmit: 'إرسال الرسالة', footerText: '2026 أحمد الجيوشي. مبني لـ GitHub Pages.'
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

  function enhanceCaseStudies() {
    const researchSection = document.getElementById('research');
    if (!researchSection || document.getElementById('projects')) return;

    if (!document.getElementById('executive-case-studies-styles')) {
      const style = document.createElement('style');
      style.id = 'executive-case-studies-styles';
      style.textContent = `
        .case-studies-section{position:relative;overflow:hidden}.case-studies-section:before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 82% 16%,rgba(198,169,107,.12),transparent 32%);pointer-events:none}.case-shell{position:relative}.case-intro{display:grid;grid-template-columns:1.05fr .95fr;gap:28px;align-items:stretch;margin-bottom:30px}.case-panel{position:relative;overflow:hidden;border-radius:30px;padding:34px;background:linear-gradient(145deg,rgba(17,19,24,.88),rgba(17,19,24,.6));border:1px solid rgba(198,169,107,.16);box-shadow:0 26px 78px rgba(0,0,0,.24)}.case-panel:before{content:"";position:absolute;inset:0;background:linear-gradient(135deg,rgba(198,169,107,.13),transparent 44%);pointer-events:none}.case-kicker{position:relative;display:inline-flex;align-items:center;gap:10px;color:#c6a96b;font-size:.76rem;font-weight:800;letter-spacing:.22em;text-transform:uppercase;margin-bottom:18px}.case-title{position:relative;font-family:'Playfair Display',serif;font-size:3rem;line-height:1.08;margin-bottom:16px}.case-copy{position:relative;color:#cbd5e1;line-height:1.85}.case-stats{display:grid;gap:14px}.case-stat{position:relative;border:1px solid rgba(198,169,107,.14);border-radius:20px;padding:18px 20px;background:rgba(255,255,255,.035)}.case-stat strong{display:block;color:#c6a96b;font-size:1.55rem}.case-stat span{color:#cbd5e1;font-size:.9rem}.case-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px}.case-card{display:flex;flex-direction:column;min-height:100%;border-radius:26px;padding:24px;background:rgba(11,11,12,.62);border:1px solid rgba(198,169,107,.15);box-shadow:0 22px 62px rgba(0,0,0,.2);transition:transform .3s ease,border-color .3s ease,box-shadow .3s ease}.case-card:hover{transform:translateY(-4px);border-color:rgba(198,169,107,.34);box-shadow:0 32px 82px rgba(0,0,0,.32)}.case-icon{width:46px;height:46px;border-radius:16px;display:inline-flex;align-items:center;justify-content:center;background:rgba(198,169,107,.1);color:#c6a96b;border:1px solid rgba(198,169,107,.18);margin-bottom:18px}.case-card h3{font-size:1.12rem;line-height:1.35;margin-bottom:12px}.case-card p{color:#cbd5e1;line-height:1.72;font-size:.92rem;flex:1}.case-tags{display:flex;flex-wrap:wrap;gap:7px;margin:18px 0}.case-tags span{border:1px solid rgba(198,169,107,.18);border-radius:999px;padding:6px 9px;background:rgba(198,169,107,.055);color:#e4d09a;font-size:.7rem}.case-open{display:inline-flex;align-items:center;justify-content:center;gap:9px;margin-top:auto;border-radius:999px;padding:10px 13px;border:1px solid rgba(198,169,107,.28);color:#f4e5b3;font-weight:800;font-size:.8rem;transition:.25s ease}.case-open:hover{background:#c6a96b;color:#050505}.case-modal{position:fixed;inset:0;z-index:99998;display:none;align-items:center;justify-content:center;padding:22px;background:rgba(0,0,0,.82);backdrop-filter:blur(14px)}.case-modal.open{display:flex}.case-dialog{width:min(880px,100%);max-height:88vh;overflow:auto;border-radius:30px;padding:30px;background:linear-gradient(145deg,rgba(17,19,24,.97),rgba(11,11,12,.96));border:1px solid rgba(198,169,107,.24);box-shadow:0 35px 100px rgba(0,0,0,.5)}.case-dialog-header{display:flex;align-items:flex-start;justify-content:space-between;gap:18px;margin-bottom:20px}.case-dialog h3{font-family:'Playfair Display',serif;font-size:2rem;line-height:1.15}.case-close{width:42px;height:42px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;background:rgba(255,255,255,.05);border:1px solid rgba(198,169,107,.18);color:#fff}.case-close:hover{background:#c6a96b;color:#050505}.case-detail-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}.case-detail{border:1px solid rgba(198,169,107,.14);border-radius:20px;padding:18px;background:rgba(255,255,255,.035)}.case-detail h4{color:#c6a96b;font-size:.78rem;font-weight:800;letter-spacing:.16em;text-transform:uppercase;margin-bottom:10px}.case-detail p{color:#cbd5e1;line-height:1.75}.case-ar{display:none}html[lang="ar"] .case-en{display:none}html[lang="ar"] .case-ar{display:inline}html[lang="ar"] .case-panel,html[lang="ar"] .case-card,html[lang="ar"] .case-dialog{text-align:right}html[lang="ar"] .case-dialog-header{flex-direction:row-reverse}@media(max-width:1180px){.case-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(max-width:900px){.case-intro{grid-template-columns:1fr}.case-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.case-title{font-size:2.3rem}}@media(max-width:640px){.case-panel,.case-dialog{padding:23px;border-radius:24px}.case-grid,.case-detail-grid{grid-template-columns:1fr}.case-title{font-size:1.95rem}.case-modal{padding:14px}.case-card{padding:22px}}
      `;
      document.head.appendChild(style);
    }

    const cases = [
      {
        id: 'hayah-karima',
        icon: 'fa-hand-holding-heart',
        title: 'Hayah Karima Initiative Analysis',
        titleAr: 'تحليل مبادرة حياة كريمة',
        summary: 'Executive analysis of rural development, public service access, and national-scale social impact delivery.',
        summaryAr: 'تحليل تنفيذي للتنمية الريفية، وإتاحة الخدمات العامة، وتحقيق أثر اجتماعي واسع النطاق.',
        objectives: 'Frame the initiative as a governance, inclusion, infrastructure, and quality-of-life transformation model.',
        approach: 'Mapped stakeholders, delivery layers, beneficiary touchpoints, and measurable community development indicators.',
        impact: 'Positions community development as a strategic governance case that connects social policy with execution capacity.',
        fields: 'Governance, Sustainability, Public Policy, Community Development',
        tags: ['Governance', 'Sustainability', 'Public Policy']
      },
      {
        id: 'al-asmarat',
        icon: 'fa-city',
        title: 'Al Asmarat Development Case Study',
        titleAr: 'دراسة حالة تطوير الأسمرات',
        summary: 'Urban development case study focused on housing transformation, social protection, and dignity-led relocation.',
        summaryAr: 'دراسة تطوير عمراني تركز على الإسكان، والحماية الاجتماعية، وإعادة التسكين القائمة على الكرامة.',
        objectives: 'Analyze how planned urban development can address informal housing while improving services and public trust.',
        approach: 'Reviewed the case through urban governance, resident experience, institutional coordination, and sustainability lenses.',
        impact: 'Shows understanding of development projects as integrated social, legal, operational, and governance systems.',
        fields: 'Urban Governance, Development, Social Impact, Sustainability',
        tags: ['Urban Development', 'Social Impact', 'Planning']
      },
      {
        id: 'governance-research',
        icon: 'fa-building-columns',
        title: 'Governance & Digital Transformation Research',
        titleAr: 'بحث الحوكمة والتحول الرقمي',
        summary: 'Research presentation connecting transparency, institutional modernization, and digital service transformation.',
        summaryAr: 'عرض بحثي يربط بين الشفافية، وتحديث المؤسسات، وتحول الخدمات الرقمية.',
        objectives: 'Define how governance maturity supports reliable digital transformation and citizen-centered public services.',
        approach: 'Structured themes around accountability, process redesign, data flow, service accessibility, and change management.',
        impact: 'Creates an executive bridge between academic governance concepts and practical transformation programs.',
        fields: 'Digital Transformation, Governance, Service Design, Institutional Development',
        tags: ['Digital Transformation', 'Governance', 'Public Sector']
      },
      {
        id: 'smart-government',
        icon: 'fa-network-wired',
        title: 'Smart Government / Digital Governance Concepts',
        titleAr: 'مفاهيم الحكومة الذكية والحوكمة الرقمية',
        summary: 'Concept suite for smart services, connected institutions, digital identity, and accountable transformation systems.',
        summaryAr: 'تصور للخدمات الذكية، والمؤسسات المتصلة، والهوية الرقمية، وأنظمة التحول المسؤولة.',
        objectives: 'Present a future-ready model for government services that is accessible, measurable, secure, and human-centered.',
        approach: 'Organized ideas into service journeys, data governance, AI readiness, risk controls, and user trust.',
        impact: 'Signals strategic fluency in the language of smart transformation and responsible digital governance.',
        fields: 'Smart Government, AI Governance, Legal Technology, Public Trust',
        tags: ['Smart Government', 'AI Governance', 'Legal Tech']
      },
      {
        id: 'logistics-transactions',
        icon: 'fa-ship',
        title: 'Logistics & International Transactions Projects',
        titleAr: 'مشروعات اللوجستيات والمعاملات الدولية',
        summary: 'Academic project framing logistics as a legal, commercial, and operational coordination environment.',
        summaryAr: 'مشروع أكاديمي يعرض اللوجستيات كبيئة تنسيق قانونية وتجارية وتشغيلية.',
        objectives: 'Connect cross-border trade, documentation, transport systems, and contractual obligations into one case model.',
        approach: 'Built an analytical view of commercial movement, risk allocation, compliance, and international coordination.',
        impact: 'Strengthens the portfolio identity around legal-logistics thinking and international commercial transactions.',
        fields: 'Logistics, International Transactions, Commercial Law, Maritime Systems',
        tags: ['Logistics', 'Transactions', 'Commercial Law']
      },
      {
        id: 'arbitration-systems',
        icon: 'fa-scale-balanced',
        title: 'Arbitration & Legal Systems Analysis',
        titleAr: 'تحليل التحكيم والأنظمة القانونية',
        summary: 'Case-study layer derived from the thesis focus on arbitral awards, enforcement, and judicial control.',
        summaryAr: 'طبقة دراسة حالة مستندة إلى موضوع الرسالة حول أحكام التحكيم والتنفيذ والرقابة القضائية.',
        objectives: 'Explain how arbitration autonomy is balanced with court supervision, enforceability, and procedural fairness.',
        approach: 'Compared legal principles, enforcement logic, institutional roles, and dispute-resolution safeguards.',
        impact: 'Turns the thesis into a professional research story suitable for academic and executive audiences.',
        fields: 'Arbitration, Judicial Review, Legal Systems, International Disputes',
        tags: ['Arbitration', 'Legal Systems', 'Disputes']
      },
      {
        id: 'community-sustainability',
        icon: 'fa-seedling',
        title: 'Community Development & Sustainability Topics',
        titleAr: 'موضوعات التنمية المجتمعية والاستدامة',
        summary: 'Portfolio case focused on social participation, youth engagement, and sustainability-oriented community value.',
        summaryAr: 'حالة تعرض المشاركة المجتمعية، وتمكين الشباب، والقيمة المجتمعية المرتبطة بالاستدامة.',
        objectives: 'Show how volunteer work and public initiatives can be assessed through long-term community outcomes.',
        approach: 'Grouped themes around awareness, inclusion, participation, sustainability, and measurable civic contribution.',
        impact: 'Connects academic identity with public responsibility and visible community-centered leadership.',
        fields: 'Sustainability, Volunteering, Community Engagement, Youth Development',
        tags: ['Sustainability', 'Community', 'Volunteering']
      },
      {
        id: 'ai-awareness',
        icon: 'fa-brain',
        title: 'AI & Digital Awareness Initiatives',
        titleAr: 'مبادرات الذكاء الاصطناعي والوعي الرقمي',
        summary: 'Awareness project track translating AI concepts into responsible, accessible, and practical public understanding.',
        summaryAr: 'مسار توعوي يترجم مفاهيم الذكاء الاصطناعي إلى فهم مسؤول ومتاح وعملي.',
        objectives: 'Promote future-skills readiness while linking AI awareness to ethics, governance, and digital responsibility.',
        approach: 'Presented AI topics through ambassador programs, community education, and practical digital literacy framing.',
        impact: 'Adds a modern technology dimension to the portfolio while staying aligned with governance and legal awareness.',
        fields: 'AI Awareness, Digital Literacy, Ethics, Governance',
        tags: ['AI', 'Digital Awareness', 'Ethics']
      }
    ];

    const cardsMarkup = cases.map((item) => `
      <article class="case-card reveal">
        <div class="case-icon" aria-hidden="true"><i class="fa-solid ${item.icon}"></i></div>
        <h3><span class="case-en">${item.title}</span><span class="case-ar">${item.titleAr}</span></h3>
        <p><span class="case-en">${item.summary}</span><span class="case-ar">${item.summaryAr}</span></p>
        <div class="case-tags">${item.tags.map((tag) => `<span>${tag}</span>`).join('')}</div>
        <button class="case-open" type="button" data-case="${item.id}">
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
          <span class="case-en">View Case Study</span><span class="case-ar">عرض الدراسة</span>
        </button>
      </article>
    `).join('');

    researchSection.insertAdjacentHTML('afterend', `
      <section id="projects" class="case-studies-section section-padding reveal" aria-labelledby="projects-title">
        <div class="max-w-7xl mx-auto case-shell">
          <div class="case-intro">
            <div class="case-panel">
              <div class="case-kicker"><i class="fa-solid fa-briefcase"></i><span class="case-en">Projects & Case Studies</span><span class="case-ar">المشروعات ودراسات الحالة</span></div>
              <h2 id="projects-title" class="case-title"><span class="case-en">Executive Academic Case Studies</span><span class="case-ar">دراسات حالة أكاديمية تنفيذية</span></h2>
              <p class="case-copy"><span class="case-en">A premium project showcase translating legal, governance, logistics, technology, and community-development thinking into structured professional case studies.</span><span class="case-ar">عرض احترافي يحول التفكير القانوني والحوكمي واللوجستي والتقني والمجتمعي إلى دراسات حالة مهنية منظمة.</span></p>
            </div>
            <aside class="case-panel case-stats" aria-label="Case study focus areas">
              <div class="case-stat"><strong>8</strong><span class="case-en">Executive case studies</span><span class="case-ar">دراسات حالة تنفيذية</span></div>
              <div class="case-stat"><strong>5+</strong><span class="case-en">Strategic research fields</span><span class="case-ar">مجالات بحثية استراتيجية</span></div>
              <div class="case-stat"><strong>360</strong><span class="case-en">Governance, law, logistics, AI, and community impact view</span><span class="case-ar">رؤية شاملة للحوكمة والقانون واللوجستيات والذكاء الاصطناعي والأثر المجتمعي</span></div>
            </aside>
          </div>
          <div class="case-grid" aria-label="Premium project case study cards">${cardsMarkup}</div>
        </div>
      </section>
      <div class="case-modal" id="caseStudyModal" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="caseModalTitle">
        <div class="case-dialog">
          <div class="case-dialog-header">
            <div>
              <div class="case-kicker"><i class="fa-solid fa-folder-open"></i><span class="case-en">Executive Case Study</span><span class="case-ar">دراسة حالة تنفيذية</span></div>
              <h3 id="caseModalTitle"></h3>
            </div>
            <button class="case-close" type="button" aria-label="Close case study"><i class="fa-solid fa-xmark"></i></button>
          </div>
          <div class="case-detail-grid">
            <article class="case-detail"><h4>Executive Summary</h4><p data-case-field="summary"></p></article>
            <article class="case-detail"><h4>Objectives</h4><p data-case-field="objectives"></p></article>
            <article class="case-detail"><h4>Analysis / Approach</h4><p data-case-field="approach"></p></article>
            <article class="case-detail"><h4>Impact / Insights</h4><p data-case-field="impact"></p></article>
            <article class="case-detail"><h4>Fields Involved</h4><p data-case-field="fields"></p></article>
            <article class="case-detail"><h4>Professional Tags</h4><p data-case-field="tags"></p></article>
          </div>
        </div>
      </div>
    `);

    const modal = document.getElementById('caseStudyModal');
    const modalTitle = document.getElementById('caseModalTitle');
    const closeButton = modal?.querySelector('.case-close');
    const fields = modal ? Array.from(modal.querySelectorAll('[data-case-field]')) : [];

    function closeModal() {
      if (!modal) return;
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    function openModal(caseId) {
      const selected = cases.find((item) => item.id === caseId);
      if (!selected || !modal || !modalTitle) return;
      const isArabic = document.documentElement.lang === 'ar';
      modalTitle.textContent = isArabic ? selected.titleAr : selected.title;
      fields.forEach((field) => {
        const key = field.dataset.caseField;
        field.textContent = key === 'tags' ? selected.tags.join(' | ') : selected[key];
      });
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    document.querySelectorAll('.case-open').forEach((button) => {
      button.addEventListener('click', () => openModal(button.dataset.case));
    });

    closeButton?.addEventListener('click', closeModal);
    modal?.addEventListener('click', (event) => {
      if (event.target === modal) closeModal();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && modal?.classList.contains('open')) closeModal();
    });

    document.querySelectorAll('#projects.reveal, #projects .reveal').forEach((el) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('active'); });
      }, { threshold: 0.12 });
      observer.observe(el);
    });
  }

  function enhanceContactBackend() {
    const contactForm = document.querySelector('#contact form');
    if (!contactForm || contactForm.dataset.contactEnhanced === 'true') return;
    contactForm.dataset.contactEnhanced = 'true';
    contactForm.classList.add('premium-contact-form');
    contactForm.setAttribute('novalidate', '');

    if (!document.getElementById('premium-contact-system-styles')) {
      const style = document.createElement('style');
      style.id = 'premium-contact-system-styles';
      style.textContent = `
        .premium-contact-form{position:relative;overflow:hidden;border:1px solid rgba(198,169,107,.18)!important}.premium-contact-form:before{content:"";position:absolute;inset:0;background:linear-gradient(135deg,rgba(198,169,107,.11),transparent 42%);pointer-events:none}.premium-contact-form>*{position:relative}.premium-contact-form .form-field{min-height:54px;transition:border-color .25s ease,box-shadow .25s ease,background .25s ease,transform .25s ease}.premium-contact-form .form-field:hover{border-color:rgba(198,169,107,.34);background:rgba(255,255,255,.055)}.premium-contact-form .form-field:focus{box-shadow:0 0 0 4px rgba(198,169,107,.1);transform:translateY(-1px)}.contact-honeypot{position:absolute!important;left:-9999px!important;width:1px!important;height:1px!important;opacity:0!important;pointer-events:none!important}.contact-status{min-height:54px;border-radius:18px;border:1px solid rgba(198,169,107,.14);background:rgba(255,255,255,.035);color:#cbd5e1;padding:14px 16px;line-height:1.6;display:none}.contact-status.show{display:flex;align-items:center;gap:10px;animation:contactRise .32s ease both}.contact-status.success{border-color:rgba(74,222,128,.34);background:rgba(74,222,128,.08);color:#d7ffe2}.contact-status.error{border-color:rgba(248,113,113,.34);background:rgba(248,113,113,.08);color:#ffe1e1}.contact-status.info{border-color:rgba(198,169,107,.28);background:rgba(198,169,107,.08);color:#f1dfaa}.contact-submit{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:10px;min-height:48px;transition:transform .25s ease,box-shadow .25s ease,opacity .25s ease}.contact-submit:hover:not(:disabled){transform:translateY(-1px);box-shadow:0 16px 38px rgba(198,169,107,.22)}.contact-submit:disabled{cursor:not-allowed;opacity:.72}.contact-submit.loading:before{content:"";width:16px;height:16px;border-radius:50%;border:2px solid rgba(0,0,0,.25);border-top-color:#000;animation:contactSpin .8s linear infinite}.premium-contact-form.was-sent{animation:contactGlow .75s ease both}@keyframes contactSpin{to{transform:rotate(360deg)}}@keyframes contactRise{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}@keyframes contactGlow{0%{box-shadow:0 0 0 rgba(198,169,107,0)}45%{box-shadow:0 0 0 6px rgba(198,169,107,.08),0 30px 90px rgba(74,222,128,.12)}100%{box-shadow:0 24px 80px rgba(0,0,0,.22)}}html[lang="ar"] .premium-contact-form{text-align:right}html[lang="ar"] .contact-status{justify-content:flex-end}@media(max-width:640px){.premium-contact-form{padding:24px!important}.contact-submit{width:100%}.contact-status{font-size:.92rem}}
      `;
      document.head.appendChild(style);
    }

    const emailField = contactForm.querySelector('input[name="email"]');
    const messageField = contactForm.querySelector('textarea[name="message"]');
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const hiddenSubject = contactForm.querySelector('input[name="_subject"]');
    const startedAt = Date.now();

    if (emailField && !contactForm.querySelector('input[name="subject"]')) {
      emailField.insertAdjacentHTML('afterend', '<input class="form-field" required name="subject" autocomplete="off" data-i18n-placeholder="formSubject" placeholder="Subject" maxlength="120">');
    }

    if (!contactForm.querySelector('input[name="_honey"]')) {
      contactForm.insertAdjacentHTML('beforeend', '<input class="contact-honeypot" type="text" name="_honey" tabindex="-1" autocomplete="off" aria-hidden="true">');
    }

    if (!contactForm.querySelector('.contact-status')) {
      contactForm.insertAdjacentHTML('beforeend', '<div class="contact-status" role="status" aria-live="polite"></div>');
    }

    const nameField = contactForm.querySelector('input[name="name"]');
    const subjectField = contactForm.querySelector('input[name="subject"]');
    const honeyField = contactForm.querySelector('input[name="_honey"]');
    const statusBox = contactForm.querySelector('.contact-status');

    if (submitButton) {
      submitButton.classList.add('contact-submit');
    }

    function isArabic() {
      return document.documentElement.lang === 'ar';
    }

    function copy(en, ar) {
      return isArabic() ? ar : en;
    }

    function setStatus(type, message) {
      if (!statusBox) return;
      const icon = type === 'success' ? 'fa-circle-check' : type === 'error' ? 'fa-triangle-exclamation' : 'fa-paper-plane';
      statusBox.className = `contact-status show ${type}`;
      statusBox.innerHTML = `<i class="fa-solid ${icon}" aria-hidden="true"></i><span>${message}</span>`;
    }

    function setLoading(isLoading) {
      if (!submitButton) return;
      submitButton.disabled = isLoading;
      submitButton.classList.toggle('loading', isLoading);
      submitButton.textContent = isLoading ? copy('Sending...', 'جاري الإرسال...') : copy('Send Message', 'إرسال الرسالة');
    }

    function validateForm() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!nameField?.value.trim() || nameField.value.trim().length < 2) return copy('Please enter your full name.', 'من فضلك أدخل اسمك الكامل.');
      if (!emailField?.value.trim() || !emailPattern.test(emailField.value.trim())) return copy('Please enter a valid email address.', 'من فضلك أدخل بريدًا إلكترونيًا صحيحًا.');
      if (!subjectField?.value.trim() || subjectField.value.trim().length < 3) return copy('Please enter a clear subject.', 'من فضلك أدخل موضوعًا واضحًا.');
      if (!messageField?.value.trim() || messageField.value.trim().length < 10) return copy('Please write a message of at least 10 characters.', 'من فضلك اكتب رسالة لا تقل عن 10 أحرف.');
      return '';
    }

    contactForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const validationError = validateForm();
      if (validationError) {
        setStatus('error', validationError);
        return;
      }

      if (honeyField?.value) {
        setStatus('error', copy('Submission blocked by spam protection.', 'تم حظر الإرسال بواسطة حماية الرسائل المزعجة.'));
        return;
      }

      if (Date.now() - startedAt < 2500) {
        setStatus('error', copy('Please wait a moment before sending.', 'من فضلك انتظر لحظة قبل الإرسال.'));
        return;
      }

      const lastSubmit = Number(localStorage.getItem('portfolio-contact-last-submit') || 0);
      if (Date.now() - lastSubmit < 30000) {
        setStatus('info', copy('Your message was recently sent. Please wait before sending another one.', 'تم إرسال رسالة مؤخرًا. من فضلك انتظر قليلًا قبل إرسال رسالة أخرى.'));
        return;
      }

      const formData = new FormData(contactForm);
      if (hiddenSubject && subjectField) hiddenSubject.value = `Portfolio Contact: ${subjectField.value.trim()}`;
      formData.set('_subject', hiddenSubject?.value || `Portfolio Contact: ${subjectField.value.trim()}`);
      formData.set('_captcha', 'false');

      setLoading(true);
      setStatus('info', copy('Sending your message securely...', 'جاري إرسال رسالتك بأمان...'));

      try {
        const response = await fetch(contactForm.action, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: formData
        });

        if (!response.ok) throw new Error('Contact submission failed');
        localStorage.setItem('portfolio-contact-last-submit', String(Date.now()));
        contactForm.reset();
        contactForm.classList.add('was-sent');
        window.setTimeout(() => contactForm.classList.remove('was-sent'), 900);
        setStatus('success', copy('Message sent successfully. Thank you for reaching out.', 'تم إرسال الرسالة بنجاح. شكرًا لتواصلك.'));
      } catch (error) {
        setStatus('error', copy('The message could not be sent right now. Please try again or email directly.', 'تعذر إرسال الرسالة الآن. من فضلك حاول مرة أخرى أو استخدم البريد مباشرة.'));
      } finally {
        setLoading(false);
      }
    });
  }

  function enhanceExecutiveNavigation() {
    const desktopNav = document.querySelector('.desktop-nav');
    const mobileMenu = document.querySelector('.mobile-menu');
    const additions = [
      { id: 'timeline', en: 'Timeline', ar: 'المسار' },
      { id: 'research', en: 'Research', ar: 'الأبحاث' },
      { id: 'projects', en: 'Projects', ar: 'المشروعات' }
    ];

    function buildLink(item) {
      const link = document.createElement('a');
      link.className = 'nav-link executive-added-link';
      link.href = `#${item.id}`;
      link.dataset.section = item.id;
      link.innerHTML = `<span class="case-en">${item.en}</span><span class="case-ar">${item.ar}</span>`;
      link.addEventListener('click', () => {
        document.querySelector('.mobile-menu')?.classList.remove('open');
        document.querySelector('.menu-btn')?.setAttribute('aria-expanded', 'false');
      });
      return link;
    }

    [desktopNav, mobileMenu].forEach((nav) => {
      if (!nav) return;
      const certificatesLink = nav.querySelector('a[href="#certificates"]');
      additions.forEach((item) => {
        if (nav.querySelector(`a[href="#${item.id}"]`)) return;
        const link = buildLink(item);
        if (certificatesLink) nav.insertBefore(link, certificatesLink);
        else nav.appendChild(link);
      });
    });

    const allLinks = Array.from(document.querySelectorAll('.nav-link[data-section]'));
    const sections = allLinks
      .map((link) => document.getElementById(link.dataset.section))
      .filter(Boolean);

    if (!sections.length) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        allLinks.forEach((link) => {
          const active = link.dataset.section === entry.target.id;
          link.classList.toggle('active', active);
          if (active) link.setAttribute('aria-current', 'page');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-34% 0px -54% 0px', threshold: 0.01 });
    sections.forEach((section) => observer.observe(section));
  }

  function enhancePremiumMotion() {
    if (!document.getElementById('premium-motion-polish-styles')) {
      const style = document.createElement('style');
      style.id = 'premium-motion-polish-styles';
      style.textContent = `
        .reveal{transition-delay:var(--reveal-delay,0ms)}.magnetic-ready{will-change:transform}.premium-tilt{will-change:transform;transition:transform .24s ease,box-shadow .24s ease}.premium-tilt:hover{transform:translateY(-5px) scale(1.005)}.scroll-progress{position:fixed;left:0;top:0;height:2px;width:0;z-index:999999;background:linear-gradient(90deg,transparent,#c6a96b,#e4c77c);box-shadow:0 0 18px rgba(198,169,107,.45);pointer-events:none}.ambient-gold-line{position:fixed;right:18px;bottom:18px;width:84px;height:1px;z-index:5;background:linear-gradient(90deg,transparent,rgba(198,169,107,.65));opacity:.55;pointer-events:none}.floating-back-top{position:fixed;right:20px;bottom:28px;z-index:60;width:46px;height:46px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;background:rgba(17,19,24,.76);border:1px solid rgba(198,169,107,.22);color:#c6a96b;backdrop-filter:blur(14px);opacity:0;transform:translateY(12px);pointer-events:none;transition:.25s ease}.floating-back-top.visible{opacity:1;transform:none;pointer-events:auto}.floating-back-top:hover{background:#c6a96b;color:#050505}@media(max-width:640px){.ambient-gold-line{display:none}.floating-back-top{right:16px;bottom:18px;width:42px;height:42px}}@media(prefers-reduced-motion:reduce){.premium-tilt:hover,.magnetic-ready,.floating-back-top{transform:none!important;transition:none!important}.scroll-progress{display:none}}
      `;
      document.head.appendChild(style);
    }

    if (!document.querySelector('.scroll-progress')) {
      document.body.insertAdjacentHTML('afterbegin', '<div class="scroll-progress" aria-hidden="true"></div><div class="ambient-gold-line" aria-hidden="true"></div><button class="floating-back-top" type="button" aria-label="Back to top"><i class="fa-solid fa-arrow-up"></i></button>');
    }

    document.querySelectorAll('.glass, .publication-card, .case-card, .story-card').forEach((card) => {
      card.classList.add('premium-tilt');
    });
    document.querySelectorAll('a, button').forEach((control) => control.classList.add('magnetic-ready'));
    document.querySelectorAll('.reveal').forEach((element, index) => {
      element.style.setProperty('--reveal-delay', `${Math.min(index % 6, 5) * 45}ms`);
    });

    const progress = document.querySelector('.scroll-progress');
    const backTop = document.querySelector('.floating-back-top');
    function updateScrollPolish() {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? window.scrollY / max : 0;
      if (progress) progress.style.width = `${Math.max(0, Math.min(1, ratio)) * 100}%`;
      backTop?.classList.toggle('visible', window.scrollY > 780);
    }
    updateScrollPolish();
    window.addEventListener('scroll', updateScrollPolish, { passive: true });
    backTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    document.querySelectorAll('.magnetic-ready').forEach((element) => {
      element.addEventListener('mousemove', (event) => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const rect = element.getBoundingClientRect();
        const x = (event.clientX - rect.left - rect.width / 2) * 0.08;
        const y = (event.clientY - rect.top - rect.height / 2) * 0.08;
        element.style.transform = `translate(${x}px, ${y}px)`;
      });
      element.addEventListener('mouseleave', () => {
        element.style.transform = '';
      });
    });
  }

  function enhanceGitHubAnalytics() {
    const githubHeading = document.querySelector('[data-i18n="githubTitle"]');
    const githubSection = githubHeading?.closest('section');
    if (!githubSection || githubSection.querySelector('.github-premium-suite')) return;
    githubSection.id = githubSection.id || 'github';

    if (!document.getElementById('github-analytics-suite-styles')) {
      const style = document.createElement('style');
      style.id = 'github-analytics-suite-styles';
      style.textContent = `
        .github-premium-suite{margin-top:34px;display:grid;grid-template-columns:1.1fr .9fr;gap:18px}.github-panel{border-radius:26px;padding:24px;background:rgba(11,11,12,.58);border:1px solid rgba(198,169,107,.16);box-shadow:0 22px 62px rgba(0,0,0,.2)}.github-panel h3{font-size:1.2rem;margin-bottom:14px}.github-graph{width:100%;min-height:128px;object-fit:contain}.repo-list{display:grid;gap:12px}.repo-card{display:flex;justify-content:space-between;gap:14px;align-items:center;border-radius:18px;padding:14px;border:1px solid rgba(198,169,107,.14);background:rgba(255,255,255,.035)}.repo-card a{font-weight:800;color:#f3dfaa}.repo-card span{color:#94a3b8;font-size:.82rem}.visitor-row{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}.visitor-chip{border-radius:18px;padding:16px;background:rgba(198,169,107,.07);border:1px solid rgba(198,169,107,.15);text-align:center}.visitor-chip strong{display:block;color:#c6a96b;font-size:1.35rem}.visitor-chip span{color:#cbd5e1;font-size:.78rem}@media(max-width:900px){.github-premium-suite{grid-template-columns:1fr}.visitor-row{grid-template-columns:1fr 1fr}}@media(max-width:560px){.visitor-row{grid-template-columns:1fr}.repo-card{align-items:flex-start;flex-direction:column}}
      `;
      document.head.appendChild(style);
    }

    const visits = Number(localStorage.getItem('aeg-portfolio-visits') || 0) + 1;
    localStorage.setItem('aeg-portfolio-visits', String(visits));
    const firstSeen = localStorage.getItem('aeg-portfolio-first-seen') || new Date().toISOString().slice(0, 10);
    localStorage.setItem('aeg-portfolio-first-seen', firstSeen);

    githubSection.querySelector('.max-w-7xl')?.insertAdjacentHTML('beforeend', `
      <div class="github-premium-suite reveal" aria-label="GitHub analytics and repository showcase">
        <article class="github-panel">
          <h3><span class="case-en">Contribution Graph</span><span class="case-ar">رسم المساهمات</span></h3>
          <img class="github-graph" loading="lazy" alt="GitHub contribution graph" src="https://github-readme-activity-graph.vercel.app/graph?username=AElGioushy&theme=github-compact&hide_border=true&area=true&color=C6A96B&line=C6A96B&point=E4C77C">
        </article>
        <aside class="github-panel">
          <h3><span class="case-en">Portfolio Analytics</span><span class="case-ar">تحليلات الزيارة</span></h3>
          <div class="visitor-row">
            <div class="visitor-chip"><strong>${visits}</strong><span class="case-en">Local visits</span><span class="case-ar">زيارات محلية</span></div>
            <div class="visitor-chip"><strong>${firstSeen}</strong><span class="case-en">First view</span><span class="case-ar">أول زيارة</span></div>
            <div class="visitor-chip"><strong>Live</strong><span class="case-en">GitHub widgets</span><span class="case-ar">عناصر GitHub</span></div>
          </div>
        </aside>
        <article class="github-panel">
          <h3><span class="case-en">Repository Showcase</span><span class="case-ar">عرض المستودعات</span></h3>
          <div class="repo-list">
            <div class="repo-card"><a href="https://github.com/AElGioushy/AEGioushy-portfolio" target="_blank" rel="noopener noreferrer">AEGioushy Portfolio</a><span>Executive academic brand system</span></div>
            <div class="repo-card"><a href="https://github.com/AElGioushy" target="_blank" rel="noopener noreferrer">AElGioushy GitHub</a><span>Public profile and future projects</span></div>
          </div>
        </article>
        <article class="github-panel">
          <h3><span class="case-en">Profile Views</span><span class="case-ar">مشاهدات الملف</span></h3>
          <img loading="lazy" alt="GitHub profile views" src="https://komarev.com/ghpvc/?username=AElGioushy&style=for-the-badge&color=C6A96B&label=PROFILE+VIEWS">
        </article>
      </div>
    `);
  }

  function enhanceSeoRuntime() {
    if (!document.querySelector('link[rel="icon"]')) {
      document.head.insertAdjacentHTML('beforeend', '<link rel="icon" type="image/png" href="logo.png"><link rel="apple-touch-icon" href="logo.png"><link rel="manifest" href="site.webmanifest">');
    }
    if (!document.querySelector('meta[name="theme-color"]')) {
      document.head.insertAdjacentHTML('beforeend', '<meta name="theme-color" content="#0B0B0C"><meta name="application-name" content="AEG Portfolio">');
    }
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
  enhanceCaseStudies();
  enhanceContactBackend();
  enhanceExecutiveNavigation();
  enhancePremiumMotion();
  enhanceGitHubAnalytics();
  enhanceSeoRuntime();
  applyLanguage();
});
