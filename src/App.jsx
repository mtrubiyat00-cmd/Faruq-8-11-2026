import React, { useEffect, useState } from 'react';
import {
  ArrowRight, ArrowUpRight, Scale, Menu, X, Phone, Mail, MapPin,
  MessageCircle, GraduationCap, Landmark, ShieldCheck, BookOpen,
  Clock3, Globe2, ChevronRight, Send, CheckCircle2
} from 'lucide-react';

const EMAIL = 'advswagat@gmail.com';
const PHONE = '+8801829285721';
const MAP_URL = 'https://maps.app.goo.gl/5dEUEXZihjd593VT8';
const FACEBOOK_URL = 'https://www.facebook.com/sawgat25/';

const copy = {
  en: {
    nav: ['Home', 'Biography', 'Services', 'Contact'],
    eyebrow: 'ADVOCATE · BANGLADESH',
    headline: 'Advocate Obaidullah Faruq (Sawgat)',
    intro: 'A commitment to legal knowledge, professional integrity and dedicated service.',
    heroText: 'Providing legal services and consultation in Bangladesh, with a professional approach shaped by careful attention, clear communication and respect for every client.',
    contact: 'Contact Me',
    explore: 'Explore Practice Areas',
    experience: 'Years of professional experience',
    education: 'Legal education',
    affiliation: 'Professional affiliation',
    location: 'Based in Noakhali, Bangladesh',
    aboutEyebrow: 'ABOUT THE ADVOCATE',
    aboutTitle: 'A thoughtful, client-focused approach to legal practice.',
    aboutText: 'Advocate Obaidullah Faruq (Sawgat) is a Bangladesh-based legal professional with an LL.B. (Honours) and LL.M. from Bangladesh Islami University. With five years of professional experience, he is enrolled with the Bangladesh Bar Council and associated with the Noakhali District Bar Association.',
    aboutText2: 'His professional approach emphasizes legal knowledge, integrity and dedicated service. He welcomes inquiries from individuals seeking information about legal assistance in Bangladesh, including clients who are based overseas.',
    readBio: 'Read full biography',
    credentials: 'Education & professional background',
    credential1: 'LL.B. (Honours)',
    credential2: 'LL.M.',
    university: 'Bangladesh Islami University',
    bar: 'Bangladesh Bar Council',
    barSub: 'Enrolled advocate',
    association: 'Noakhali District Bar Association',
    associationSub: 'Professional association',
    servicesEyebrow: 'PRACTICE AREAS',
    servicesTitle: 'Legal services',
    servicesIntro: 'Explore the practice areas currently offered. For advice on a specific matter, please get in touch to discuss the details and applicable jurisdiction.',
    family: 'Family Law',
    familyDesc: 'Legal guidance and assistance for family-related matters, approached with care, discretion and respect for the people involved.',
    criminal: 'Criminal Law',
    criminalDesc: 'Legal assistance in criminal matters, with attention to the facts, applicable law and the procedural requirements of each case.',
    consultation: 'Legal Consultation',
    consultationDesc: 'Professional legal consultation to help clarify legal questions, understand available options and identify appropriate next steps.',
    details: 'Enquire about this service',
    contactEyebrow: 'GET IN TOUCH',
    contactTitle: 'Start a conversation.',
    contactIntro: 'For inquiries about legal services in Bangladesh, use the contact details below or send a message through the form.',
    call: 'Call',
    whatsapp: 'WhatsApp',
    email: 'Email',
    chamber: 'Chamber address',
    chamberAddress: '4th Floor, Judge Court Mosque Building, Chamber No. 401, Noakhali, Bangladesh.',
    chamberBn: 'জজকোর্ট মসজিদ ভবনের ৪র্থ তলা, ৪০১ নং চেম্বার, নোয়াখালী।',
    officeHours: 'Chamber hours',
    closed: 'Closed',
    dayHours: '9:30 AM – 4:00 PM',
    sunday: 'Sunday', monday: 'Monday', tuesday: 'Tuesday', wednesday: 'Wednesday',
    thursday: 'Thursday', friday: 'Friday', saturday: 'Saturday',
    formName: 'Your name',
    formEmail: 'Email address',
    formPhone: 'Phone number (optional)',
    formTopic: 'What is your inquiry about?',
    formMessage: 'Your message',
    formSubmit: 'Send inquiry',
    formNote: 'Please do not include confidential or sensitive case details in this initial inquiry.',
    formSuccess: 'Your message has been submitted. Thank you for reaching out.',
    formError: 'We could not submit your message. Please try again or contact the advocate directly by email or WhatsApp.',
    selectTopic: 'Select a topic',
    topicFamily: 'Family Law',
    topicCriminal: 'Criminal Law',
    topicConsult: 'Legal Consultation',
    topicOther: 'Other inquiry',
    footerLine: 'Legal knowledge. Professional integrity. Dedicated service.',
    disclaimer: 'Disclaimer',
    privacy: 'Privacy',
    rights: 'All rights reserved.',
    legalNote: 'This website provides general information about legal services. It does not constitute legal advice, create a lawyer-client relationship, or guarantee representation. Legal services are subject to applicable laws, jurisdiction and professional authorization in Bangladesh.',
    privacyText: 'Information submitted through the contact form is used to respond to your inquiry. Do not send confidential documents or sensitive personal information through this website. Contact form delivery is handled by FormSubmit after email activation.',
    bioTitle: 'Biography',
    bioIntro: 'Professional background and legal education',
    bioP1: 'Advocate Obaidullah Faruq (Sawgat) is a legal professional based in Noakhali, Bangladesh. He holds an LL.B. (Honours) and an LL.M. from Bangladesh Islami University.',
    bioP2: 'With five years of professional experience, he is enrolled with the Bangladesh Bar Council and associated with the Noakhali District Bar Association. His court practice includes the Noakhali Judge Court in Maijdee, Noakhali.',
    bioP3: 'His stated areas of practice are Family Law, Criminal Law and Legal Consultation. He aims to approach each inquiry with professionalism, integrity and clear communication.',
    practice: 'Practice',
    jurisdiction: 'Jurisdiction',
    jurisdictionValue: 'Bangladesh',
    court: 'Court practice',
    courtValue: 'Noakhali Judge Court, Maijdee, Noakhali, Bangladesh',
    insights: 'Legal information',
    insightsText: 'For legal inquiries, please contact the advocate directly. General information on this website is not a substitute for advice based on the facts and documents of an individual matter.',
    backHome: 'Back to home',
    globalNote: 'Online inquiries are welcome from clients based outside Bangladesh. Legal representation is limited to matters and jurisdictions for which the advocate is professionally authorized.'
  },
  bn: {
    nav: ['হোম', 'জীবনী', 'সেবাসমূহ', 'যোগাযোগ'],
    eyebrow: 'অ্যাডভোকেট · বাংলাদেশ',
    headline: 'অ্যাডভোকেট ওবায়দুল্লাহ ফারুক (সওগাত)',
    intro: 'আইনজ্ঞান, পেশাগত সততা এবং নিষ্ঠার সঙ্গে সেবা প্রদানের অঙ্গীকার।',
    heroText: 'যত্নশীল মনোযোগ, স্পষ্ট যোগাযোগ এবং প্রতিটি মক্কেলের প্রতি সম্মান বজায় রেখে বাংলাদেশে আইনি সেবা ও পরামর্শ প্রদান।',
    contact: 'যোগাযোগ করুন',
    explore: 'আইনি সেবাসমূহ দেখুন',
    experience: 'বছরের পেশাগত অভিজ্ঞতা',
    education: 'আইন বিষয়ে শিক্ষা',
    affiliation: 'পেশাগত সম্পৃক্ততা',
    location: 'নোয়াখালী, বাংলাদেশ',
    aboutEyebrow: 'অ্যাডভোকেট সম্পর্কে',
    aboutTitle: 'আইন পেশায় মনোযোগী ও মক্কেলকেন্দ্রিক দৃষ্টিভঙ্গি।',
    aboutText: 'অ্যাডভোকেট ওবায়দুল্লাহ ফারুক (সওগাত) বাংলাদেশের একজন আইন পেশাজীবী। তিনি বাংলাদেশ ইসলামী বিশ্ববিদ্যালয় থেকে এলএল.বি. (অনার্স) এবং এলএল.এম. ডিগ্রি অর্জন করেছেন। পাঁচ বছরের পেশাগত অভিজ্ঞতাসম্পন্ন তিনি বাংলাদেশ বার কাউন্সিলে তালিকাভুক্ত এবং নোয়াখালী জেলা আইনজীবী সমিতির সঙ্গে সম্পৃক্ত।',
    aboutText2: 'তাঁর পেশাগত দৃষ্টিভঙ্গির মূল ভিত্তি হলো আইনজ্ঞান, সততা ও নিষ্ঠার সঙ্গে সেবা প্রদান। বাংলাদেশে আইনি সহায়তা সম্পর্কে জানতে আগ্রহী দেশ-বিদেশের ব্যক্তিদের যোগাযোগকে স্বাগত জানানো হয়।',
    readBio: 'সম্পূর্ণ জীবনী পড়ুন',
    credentials: 'শিক্ষা ও পেশাগত পরিচিতি',
    credential1: 'এলএল.বি. (অনার্স)',
    credential2: 'এলএল.এম.',
    university: 'বাংলাদেশ ইসলামী বিশ্ববিদ্যালয়',
    bar: 'বাংলাদেশ বার কাউন্সিল',
    barSub: 'তালিকাভুক্ত আইনজীবী',
    association: 'নোয়াখালী জেলা আইনজীবী সমিতি',
    associationSub: 'পেশাগত সম্পৃক্ততা',
    servicesEyebrow: 'আইন পেশার ক্ষেত্র',
    servicesTitle: 'আইনি সেবাসমূহ',
    servicesIntro: 'বর্তমানে প্রদত্ত আইনি সেবার ক্ষেত্রগুলো দেখুন। নির্দিষ্ট বিষয়ে পরামর্শের জন্য বিস্তারিত জানিয়ে যোগাযোগ করুন।',
    family: 'পারিবারিক আইন',
    familyDesc: 'পারিবারিক বিষয়ের আইনি দিকনির্দেশনা ও সহায়তা—যত্ন, গোপনীয়তা এবং সংশ্লিষ্ট ব্যক্তিদের প্রতি সম্মান বজায় রেখে।',
    criminal: 'ফৌজদারি আইন',
    criminalDesc: 'ঘটনার তথ্য, প্রযোজ্য আইন এবং প্রতিটি মামলার প্রক্রিয়াগত বিষয় বিবেচনায় ফৌজদারি বিষয়ে আইনি সহায়তা।',
    consultation: 'আইনি পরামর্শ',
    consultationDesc: 'আইনি প্রশ্ন পরিষ্কার করা, উপলব্ধ বিকল্প বোঝা এবং পরবর্তী উপযুক্ত পদক্ষেপ নির্ধারণে পেশাগত পরামর্শ।',
    details: 'এই সেবা সম্পর্কে জানতে যোগাযোগ করুন',
    contactEyebrow: 'যোগাযোগ করুন',
    contactTitle: 'আলোচনা শুরু করুন।',
    contactIntro: 'বাংলাদেশে আইনি সেবা সম্পর্কে জানতে নিচের যোগাযোগের মাধ্যম ব্যবহার করুন অথবা ফর্মে বার্তা পাঠান।',
    call: 'ফোন',
    whatsapp: 'হোয়াটসঅ্যাপ',
    email: 'ইমেইল',
    chamber: 'চেম্বারের ঠিকানা',
    chamberAddress: 'জজকোর্ট মসজিদ ভবনের ৪র্থ তলা, ৪০১ নং চেম্বার, নোয়াখালী, বাংলাদেশ।',
    chamberBn: 'জজকোর্ট মসজিদ ভবনের ৪র্থ তলা, ৪০১ নং চেম্বার, নোয়াখালী।',
    officeHours: 'চেম্বারের সময়সূচি',
    closed: 'বন্ধ',
    dayHours: 'সকাল ৯:৩০ – বিকাল ৪:০০',
    sunday: 'রবিবার', monday: 'সোমবার', tuesday: 'মঙ্গলবার', wednesday: 'বুধবার',
    thursday: 'বৃহস্পতিবার', friday: 'শুক্রবার', saturday: 'শনিবার',
    formName: 'আপনার নাম',
    formEmail: 'ইমেইল ঠিকানা',
    formPhone: 'ফোন নম্বর (ঐচ্ছিক)',
    formTopic: 'যোগাযোগের বিষয়',
    formMessage: 'আপনার বার্তা',
    formSubmit: 'বার্তা পাঠান',
    formNote: 'প্রাথমিক বার্তায় গোপনীয় বা সংবেদনশীল মামলার তথ্য পাঠাবেন না।',
    formSuccess: 'আপনার বার্তা পাঠানো হয়েছে। যোগাযোগ করার জন্য ধন্যবাদ।',
    formError: 'বার্তা পাঠানো যায়নি। অনুগ্রহ করে আবার চেষ্টা করুন অথবা ইমেইল/হোয়াটসঅ্যাপে সরাসরি যোগাযোগ করুন।',
    selectTopic: 'বিষয় নির্বাচন করুন',
    topicFamily: 'পারিবারিক আইন',
    topicCriminal: 'ফৌজদারি আইন',
    topicConsult: 'আইনি পরামর্শ',
    topicOther: 'অন্যান্য',
    footerLine: 'আইনজ্ঞান। পেশাগত সততা। নিষ্ঠার সঙ্গে সেবা।',
    disclaimer: 'দাবিত্যাগ',
    privacy: 'গোপনীয়তা',
    rights: 'সর্বস্বত্ব সংরক্ষিত।',
    legalNote: 'এই ওয়েবসাইটে আইনি সেবা সম্পর্কে সাধারণ তথ্য দেওয়া হয়েছে। এটি আইনি পরামর্শ নয়, আইনজীবী-মক্কেল সম্পর্ক তৈরি করে না এবং প্রতিনিধিত্বের নিশ্চয়তা দেয় না। আইনি সেবা বাংলাদেশের প্রযোজ্য আইন, এখতিয়ার এবং পেশাগত অনুমোদনের অধীন।',
    privacyText: 'যোগাযোগ ফর্মে দেওয়া তথ্য আপনার অনুসন্ধানের জবাব দেওয়ার জন্য ব্যবহার করা হয়। এই ওয়েবসাইটের মাধ্যমে গোপনীয় নথি বা সংবেদনশীল ব্যক্তিগত তথ্য পাঠাবেন না। ইমেইল সক্রিয়করণের পর FormSubmit-এর মাধ্যমে ফর্মের বার্তা পাঠানো হবে।',
    bioTitle: 'জীবনী',
    bioIntro: 'পেশাগত পরিচিতি ও আইন বিষয়ে শিক্ষা',
    bioP1: 'অ্যাডভোকেট ওবায়দুল্লাহ ফারুক (সওগাত) নোয়াখালী, বাংলাদেশে অবস্থিত একজন আইন পেশাজীবী। তিনি বাংলাদেশ ইসলামী বিশ্ববিদ্যালয় থেকে এলএল.বি. (অনার্স) এবং এলএল.এম. ডিগ্রি অর্জন করেছেন।',
    bioP2: 'পাঁচ বছরের পেশাগত অভিজ্ঞতাসম্পন্ন তিনি বাংলাদেশ বার কাউন্সিলে তালিকাভুক্ত এবং নোয়াখালী জেলা আইনজীবী সমিতির সঙ্গে সম্পৃক্ত। তাঁর আদালত-সংক্রান্ত কার্যক্রমের মধ্যে মাইজদী, নোয়াখালীর নোয়াখালী জজ কোর্ট অন্তর্ভুক্ত।',
    bioP3: 'তাঁর উল্লেখিত আইনচর্চার ক্ষেত্র হলো পারিবারিক আইন, ফৌজদারি আইন এবং আইনি পরামর্শ। প্রতিটি অনুসন্ধানে পেশাদারিত্ব, সততা ও স্পষ্ট যোগাযোগ বজায় রাখাই তাঁর লক্ষ্য।',
    practice: 'আইনচর্চার ক্ষেত্র',
    jurisdiction: 'এখতিয়ার',
    jurisdictionValue: 'বাংলাদেশ',
    court: 'আদালত',
    courtValue: 'নোয়াখালী জজ কোর্ট, মাইজদী, নোয়াখালী, বাংলাদেশ',
    insights: 'আইনি তথ্য',
    insightsText: 'আইনি বিষয়ে জানতে সরাসরি অ্যাডভোকেটের সঙ্গে যোগাযোগ করুন। ওয়েবসাইটের সাধারণ তথ্য কোনো নির্দিষ্ট বিষয়ের ঘটনা ও নথি বিবেচনায় দেওয়া আইনি পরামর্শের বিকল্প নয়।',
    backHome: 'হোমে ফিরে যান',
    globalNote: 'বাংলাদেশের বাইরে অবস্থানরত ব্যক্তিদের অনলাইন অনুসন্ধান স্বাগত। আইনগত প্রতিনিধিত্ব কেবল সেই বিষয় ও এখতিয়ারে সীমাবদ্ধ, যেখানে অ্যাডভোকেট পেশাগতভাবে অনুমোদিত।'
  }
};

function App() {
  const [lang, setLang] = useState('en');
  const [page, setPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = page === 'home'
      ? 'Advocate Obaidullah Faruq (Sawgat) | Legal Services in Bangladesh'
      : `${page[0].toUpperCase()}${page.slice(1)} | Advocate Obaidullah Faruq (Sawgat)`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page, lang]);

  const go = (next) => {
    setPage(next);
    setMenuOpen(false);
    window.history.pushState({ page: next }, '', next === 'home' ? '/' : `/${next}`);
  };

  useEffect(() => {
    const handlePop = () => {
      const path = window.location.pathname.replace('/', '') || 'home';
      setPage(['home', 'biography', 'services', 'contact', 'insights', 'privacy', 'disclaimer'].includes(path) ? path : 'home');
    };
    window.addEventListener('popstate', handlePop);
    return () => window.removeEventListener('popstate', handlePop);
  }, []);

  const navItems = [
    ['home', t.nav[0]], ['biography', t.nav[1]], ['services', t.nav[2]], ['contact', t.nav[3]]
  ];

  return (
    <div className={lang === 'bn' ? 'app bengali' : 'app'}>
      <div className="topline"><div className="container topline-inner"><span><MapPin size={13}/> {t.location}</span><span className="topline-right"><span><Phone size={13}/> {PHONE}</span><span className="top-email"><Mail size={13}/> {EMAIL}</span></span></div></div>
      <header className="site-header">
        <div className="container header-inner">
          <button className="brand" onClick={() => go('home')} aria-label="Home">
            <span className="brand-mark">OFS</span><span className="brand-copy"><strong>Advocate Obaidullah Faruq</strong><small>(Sawgat)</small></span>
          </button>
          <nav className={menuOpen ? 'main-nav open' : 'main-nav'}>
            {navItems.map(([id, label]) => <button key={id} className={page === id ? 'nav-link active' : 'nav-link'} onClick={() => go(id)}>{label}</button>)}
            <button className="nav-contact" onClick={() => go('contact')}>{t.contact} <ArrowUpRight size={15}/></button>
          </nav>
          <div className="header-actions">
            <div className="language-switch" aria-label="Language selector"><button className={lang === 'en' ? 'selected' : ''} onClick={() => setLang('en')}>EN</button><span>/</span><button className={lang === 'bn' ? 'selected' : ''} onClick={() => setLang('bn')}>বাং</button></div>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
          </div>
        </div>
      </header>

      <main>
        {page === 'home' && <Home t={t} go={go} lang={lang}/>}
        {page === 'biography' && <Biography t={t} go={go}/>}
        {page === 'services' && <Services t={t} go={go}/>}
        {page === 'contact' && <Contact t={t} lang={lang}/>}
        {page === 'insights' && <Insights t={t} go={go}/>}
        {page === 'privacy' && <Policy t={t} go={go} type="privacy"/>}
        {page === 'disclaimer' && <Policy t={t} go={go} type="disclaimer"/>}
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand"><span className="brand-mark">OFS</span><div><strong>Advocate Obaidullah Faruq (Sawgat)</strong><p>{t.footerLine}</p></div></div>
          <div className="footer-links"><button onClick={() => go('biography')}>{t.nav[1]}</button><button onClick={() => go('services')}>{t.nav[2]}</button><button onClick={() => go('contact')}>{t.nav[3]}</button><button onClick={() => go('insights')}>{t.insights}</button></div>
          <div className="footer-social"><a href={`tel:${PHONE}`} aria-label="Call"><Phone/></a><a href={`https://wa.me/${PHONE.replace('+','')}`} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle/></a><a href={`mailto:${EMAIL}`} aria-label="Email"><Mail/></a><a href={FACEBOOK_URL} target="_blank" rel="noreferrer" aria-label="Facebook"><Globe2/></a></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Advocate Obaidullah Faruq (Sawgat). {t.rights}</span><div><button onClick={() => go('privacy')}>{t.privacy}</button><button onClick={() => go('disclaimer')}>{t.disclaimer}</button></div></div>
      </footer>
    </div>
  );
}

function Home({t, go, lang}) {
  return <>
    <section className="hero">
      <div className="hero-lines"></div><div className="hero-glow"></div>
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="eyebrow"><span className="eyebrow-line"></span>{t.eyebrow}</div>
          <h1>{lang === 'en' ? 'Advocate Obaidullah Faruq (Sawgat)' : t.headline}</h1>
          <p className="hero-intro">{t.intro}</p><p className="hero-description">{t.heroText}</p>
          <div className="hero-buttons"><button className="button button-gold" onClick={() => go('contact')}>{t.contact}<ArrowUpRight size={17}/></button><button className="button button-outline" onClick={() => go('services')}>{t.explore}<ArrowRight size={17}/></button></div>
          <div className="hero-meta"><span><ShieldCheck size={16}/>{t.bar}</span><span><MapPin size={16}/>{t.location}</span></div>
        </div>
        <div className="hero-art">
          <div className="hero-photo-frame">
            <img
              src="/images/Lawyer%20Sawgat.png"
              alt="Advocate Obaidullah Faruq (Sawgat)"
              className="hero-portrait"
              fetchPriority="high"
            />
            <span className="hero-photo-label">ADVOCATE · BANGLADESH</span>
          </div>
          <div className="hero-photo-orbit"></div>
        </div>
      </div>
      <div className="hero-bottom container"><span>01 / 04</span><span className="hero-bottom-line"></span><span>LEGAL PROFESSIONAL · BANGLADESH</span></div>
    </section>

    <section className="stats-section"><div className="container stats-grid">
      <Stat icon={<Clock3/>} value="5+" label={t.experience}/><Stat icon={<GraduationCap/>} value="LL.B. · LL.M." label={t.education}/><Stat icon={<Landmark/>} value="Noakhali" label={t.affiliation}/>
    </div></section>

    <section className="section about-preview"><div className="container two-column">
      <div className="section-label"><span>01</span><div><small>{t.aboutEyebrow}</small><div className="label-rule"></div></div></div>
      <div className="section-body"><h2>{t.aboutTitle}</h2><p>{t.aboutText}</p><p>{t.aboutText2}</p><button className="text-link" onClick={() => go('biography')}>{t.readBio}<ArrowUpRight size={17}/></button></div>
    </div></section>

    <section className="section services-preview"><div className="container">
      <div className="section-heading"><div><div className="eyebrow dark"><span className="eyebrow-line"></span>{t.servicesEyebrow}</div><h2>{t.servicesTitle}</h2></div><p>{t.servicesIntro}</p></div>
      <ServiceCards t={t} go={go}/>
    </div></section>

    <section className="cta-band"><div className="container cta-inner"><div><div className="eyebrow"><span className="eyebrow-line"></span>{t.contactEyebrow}</div><h2>{t.contactTitle}</h2><p>{t.globalNote}</p></div><button className="button button-gold" onClick={() => go('contact')}>{t.contact}<ArrowUpRight size={17}/></button></div></section>
  </>;
}

function Stat({icon, value, label}) { return <div className="stat"><span className="stat-icon">{icon}</span><div><strong>{value}</strong><small>{label}</small></div></div>; }

function ServiceCards({t, go}) {
  const cards = [
    {icon:<Scale/>, title:t.family, desc:t.familyDesc},
    {icon:<ShieldCheck/>, title:t.criminal, desc:t.criminalDesc},
    {icon:<BookOpen/>, title:t.consultation, desc:t.consultationDesc}
  ];
  return <div className="service-grid">{cards.map((c,i)=><article className="service-card" key={c.title}><div className="service-card-top"><span className="service-icon">{c.icon}</span><span className="service-number">0{i+1}</span></div><h3>{c.title}</h3><p>{c.desc}</p><button className="card-link" onClick={() => go('contact')}>{t.details}<ArrowUpRight size={16}/></button></article>)}</div>;
}

function PageHero({eyebrow, title, intro}) { return <section className="page-hero"><div className="container"><div className="eyebrow"><span className="eyebrow-line"></span>{eyebrow}</div><h1>{title}</h1>{intro && <p>{intro}</p>}</div></section>; }

function Biography({t, go}) {
  return <>
    <PageHero eyebrow={t.aboutEyebrow} title={t.bioTitle} intro={t.bioIntro}/>
    <section className="section">
      <div className="container bio-layout">
        <div className="bio-aside">
          <img
            src="/images/Advocate%20Sawgat.png"
            alt="Full-length portrait of Advocate Obaidullah Faruq (Sawgat)"
            className="bio-portrait"
            loading="lazy"
          />
        </div>
        <div className="bio-content">
          <h2>{t.aboutTitle}</h2>
          <p>{t.bioP1}</p>
          <p>{t.bioP2}</p>
          <p>{t.bioP3}</p>
          <div className="credential-grid">
            <div className="credential"><GraduationCap/><span>{t.credential1}</span><small>{t.university}</small></div>
            <div className="credential"><GraduationCap/><span>{t.credential2}</span><small>{t.university}</small></div>
            <div className="credential"><ShieldCheck/><span>{t.bar}</span><small>{t.barSub}</small></div>
            <div className="credential"><Landmark/><span>{t.association}</span><small>{t.associationSub}</small></div>
          </div>
          <div className="bio-facts">
            <div><small>{t.practice}</small><strong>{t.family}, {t.criminal}, {t.consultation}</strong></div>
            <div><small>{t.jurisdiction}</small><strong>{t.jurisdictionValue}</strong></div>
            <div><small>{t.court}</small><strong>{t.courtValue}</strong></div>
          </div>
          <button className="button button-dark" onClick={() => go('contact')}>{t.contact}<ArrowUpRight size={17}/></button>
        </div>
      </div>
    </section>
  </>;
}

function Services({t, go}) {
  return <><PageHero eyebrow={t.servicesEyebrow} title={t.servicesTitle} intro={t.servicesIntro}/><section className="section"><div className="container"><ServiceCards t={t} go={go}/><div className="jurisdiction-note"><Globe2/><p>{t.globalNote}</p></div></div></section></>;
}

function Contact({t, lang}) {
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);
  async function submit(e) {
    e.preventDefault();
    setSending(true); setStatus('');
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append('_subject', 'Website inquiry — Advocate Obaidullah Faruq (Sawgat)');
    data.append('_captcha', 'false');
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: data
      });
      const result = await response.json();
      if (response.ok && (result.success === 'true' || result.success === true)) {
        setStatus('success'); form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally { setSending(false); }
  }
  return <><PageHero eyebrow={t.contactEyebrow} title={t.contactTitle} intro={t.contactIntro}/><section className="section contact-section"><div className="container contact-grid">
    <div className="contact-info">
      <div className="contact-item"><span><Phone/></span><div><small>{t.call}</small><a href={`tel:${PHONE}`}>{PHONE}</a></div></div>
      <div className="contact-item"><span><MessageCircle/></span><div><small>{t.whatsapp}</small><a href={`https://wa.me/${PHONE.replace('+','')}`} target="_blank" rel="noreferrer">{PHONE}</a></div></div>
      <div className="contact-item"><span><Mail/></span><div><small>{t.email}</small><a href={`mailto:${EMAIL}`}>{EMAIL}</a></div></div>
      <div className="contact-item"><span><MapPin/></span><div><small>{t.chamber}</small><p>{t.chamberAddress}</p><p className="bangla-address">{t.chamberBn}</p><a className="map-link" href={MAP_URL} target="_blank" rel="noreferrer">Open map <ArrowUpRight size={14}/></a></div></div>
      <div className="hours-card"><h3><Clock3 size={18}/>{t.officeHours}</h3><Hours t={t}/></div>
    </div>
    <form className="contact-form" onSubmit={submit}>
      <div className="form-heading"><span>{t.contactEyebrow}</span><h2>{t.contactTitle}</h2></div>
      <label>{t.formName}<input name="name" type="text" required autoComplete="name" placeholder={t.formName}/></label>
      <label>{t.formEmail}<input name="email" type="email" required autoComplete="email" placeholder={t.formEmail}/></label>
      <label>{t.formPhone}<input name="phone" type="tel" autoComplete="tel" placeholder={t.formPhone}/></label>
      <label>{t.formTopic}<select name="topic" required defaultValue=""><option value="" disabled>{t.selectTopic}</option><option>{t.topicFamily}</option><option>{t.topicCriminal}</option><option>{t.topicConsult}</option><option>{t.topicOther}</option></select></label>
      <label>{t.formMessage}<textarea name="message" rows="5" required placeholder={t.formMessage}/></label>
      <p className="form-note">{t.formNote}</p>
      <button className="button button-dark submit-button" type="submit" disabled={sending}>{sending ? '...' : t.formSubmit}<Send size={16}/></button>
      {status === 'success' && <div className="form-status success"><CheckCircle2 size={17}/>{t.formSuccess}</div>}
      {status === 'error' && <div className="form-status error">{t.formError}</div>}
    </form>
  </div></section></>;
}

function Hours({t}) {
  const days = [['saturday',true],['sunday',false],['monday',false],['tuesday',false],['wednesday',false],['thursday',false],['friday',true]];
  return <div className="hours-list">{days.map(([day,closed])=><div key={day}><span>{t[day]}</span><strong>{closed ? t.closed : t.dayHours}</strong></div>)}</div>;
}

function Insights({t, go}) {
  return <><PageHero eyebrow={t.insights} title={t.insights} intro={t.insightsText}/><section className="section"><div className="container insight-panel"><BookOpen/><h2>{t.insights}</h2><p>{t.insightsText}</p><button className="text-link" onClick={() => go('contact')}>{t.contact}<ArrowUpRight size={17}/></button></div></section></>;
}

function Policy({t, go, type}) {
  const title = type === 'privacy' ? t.privacy : t.disclaimer;
  const text = type === 'privacy' ? t.privacyText : t.legalNote;
  return <><PageHero eyebrow="INFORMATION" title={title}/><section className="section"><div className="container policy-content"><p>{text}</p><button className="text-link" onClick={() => go('home')}>{t.backHome}<ArrowRight size={16}/></button></div></section></>;
}

export default App;
