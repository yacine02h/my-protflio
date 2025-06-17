// --- 1. Logic for Mobile Menu (Hamburger) ---
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});


// --- 2. Logic for Language Toggle ---

// DOM Elements
const langToggleButton = document.getElementById('lang-toggle-btn');
const translatableElements = document.querySelectorAll('[data-key]');

// Translations Dictionary (The complete and final version)
const translations = {
    en: {
        // Navbar
        logo: "BrandtDZ",
        navHome: "Home",
        navAbout: "About",
        navServices: "Services",
        navContact: "Contact",
        navProjects: "Projects",
        blogLink: "Blog",
        langBtnText: "عربي",

        // Hero Section
        heroTitle: "Hello, I am Yassine",
        heroSubtitle: "Full Stack Developer",
        heroDescription: "I build modern, responsive web apps",
        
        // About Me Section
        aboutTitle: "About Me",
        aboutParagraph1: "I am a passionate Full Stack Developer from Algeria, with a love for creating dynamic and intuitive web applications. My journey in programming started with a simple \"Hello, World!\" and has grown into a core part of who I am.",
        aboutParagraph2: "I thrive on solving problems and continuously learning new technologies to bring ideas to life. Let's build something amazing together!",
        cvButton: "Download CV",

        // Services Section
        servicesTitle: "My Services",
        mobileTitle: "Mobile App Development",
        mobileDesc: "I design and build intuitive and high-performance applications for Android and iOS devices.",
        desktopTitle: "Desktop Software",
        desktopDesc: "I create custom software solutions for Windows and macOS to automate tasks and improve efficiency.",
        webTitle: "Website Development",
        webDesc: "From landing pages to complex web apps, I build fast, responsive, and modern websites.",
pricingTitle: "Pricing Plans",
pricingSubtitle: "Choose a plan that fits your needs. Prices are illustrative and can be adapted to your project.",
plan1Name: "Basic Site",
plan1Price: "Starts from 40,000 DZD",
plan1Desc: "Ideal for personal portfolios or small business presence.",
plan1Feat1: "Up to 3 Pages",
plan1Feat2: "Responsive Design",
plan1Feat3: "Contact Form",
plan1Feat4: "Basic SEO",
choosePlanBtn: "Choose Plan",
popularRibbon: "Most Popular",
plan2Name: "Pro Site",
plan2Price: "Starts from 80,000 DZD",
plan2Desc: "Perfect for growing businesses and professional services.",
plan2Feat1: "Up to 10 Pages",
plan2Feat2: "Custom Design",
plan2Feat3: "Content Management (CMS)",
plan2Feat4: "Advanced SEO",
plan3Name: "Custom App / E-commerce",
plan3Price: "Let's Talk",
plan3Desc: "For online stores and complex web applications.",
plan3Feat1: "Full Custom Solution",
plan3Feat2: "Payment Integration",
plan3Feat3: "Advanced Features",
plan3Feat4: "Dedicated Support",
contactUsBtn: "Contact Us",
        // Book Project Section
       
        // Contact Section
        contactTitle: "Contact Me",
        formName: "Name",
        formEmail: "Email",
        formMessage: "Message",
        sendButton: "Send Message",

        // New Professional Footer
        footerCtaTitle: "Start a Project?",
        footerCtaSubtitle: "Interested in working together? We should queue up a time to chat.",
        footerCtaButton: "Let's Do This",
        exploreTitle: "Explore",
        myWorkTitle: "My Work",
        emailLink: "your-email@example.com",
        copyright: "&copy; <span id='current-year'></span> Yassine BrandtDZ. All Rights Reserved."
    },
    ar: {
        // Navbar
        logo: "BrandtDZ",
        navHome: "الرئيسية",
        navAbout: "عني",
        navServices: "خدماتي",
        navContact: "تواصل معنا",
        navProjects: "المشاريع",
        blogLink: "المدونة",
        langBtnText: "English",
        
        // Hero Section
        heroTitle: "مرحبًا، أنا ياسين",
        heroSubtitle: "مطور فل ستاك",
        heroDescription: "أُنشئ تطبيقات ويب عصرية ومتجاوبة",

        // About Me Section
        aboutTitle: "عني",
        aboutParagraph1: "أنا مطور فُل ستاك شغوف من الجزائر، أحب إنشاء تطبيقات ويب ديناميكية وسهلة الاستخدام. رحلتي في البرمجة بدأت بـ \"مرحباً بالعالم!\" البسيطة ونمت لتصبح جزءًا أساسيًا من هويتي.",
        aboutParagraph2: "أستمتع بحل المشكلات وأتعلم باستمرار تقنيات جديدة لتحويل الأفكار إلى حقيقة. هيا بنا نبني شيئًا مذهلاً معًا!",
        cvButton: "تحميل السيرة الذاتية",

        // Services Section
        servicesTitle: "خدماتي",
        mobileTitle: "تطوير تطبيقات الموبايل",
        mobileDesc: "أقوم بتصميم وبناء تطبيقات بديهية وعالية الأداء لأجهزة أندرويد و iOS.",
        desktopTitle: "برامج الحاسوب",
        desktopDesc: "أقوم بإنشاء حلول برمجية مخصصة لأنظمة ويندوز و macOS لأتمتة المهام وتحسين الكفاءة.",
        webTitle: "تطوير المواقع",
        webDesc: "من الصفحات التعريفية إلى تطبيقات الويب المعقدة، أقوم ببناء مواقع سريعة ومتجاوبة وعصرية.",
        pricingTitle: "خطط الأسعار",
pricingSubtitle: "اختر الخطة التي تناسب احتياجاتك. جميع الأسعار مرنة وقابلة للتكيف مع مشروعك.",
plan1Name: "الموقع الأساسي",
plan1Price: "تبدأ من 30,000 دج",
plan1Desc: "مثالية للمواقع التعريفية الشخصية أو الشركات الصغيرة.",
plan1Feat1: "حتى 3 صفحات",
plan1Feat2: "تصميم متجاوب",
plan1Feat3: "نموذج اتصال",
plan1Feat4: "تهيئة أساسية لمحركات البحث",
choosePlanBtn: "اختر الخطة",
popularRibbon: "الأكثر شيوعًا",
plan2Name: "الموقع الاحترافي",
plan2Price: "تبدأ من 80,000 دج",
plan2Desc: "ممتازة للشركات النامية والخدمات الاحترافية.",
plan2Feat1: "حتى 10 صفحات",
plan2Feat2: "تصميم مخصص",
plan2Feat3: "نظام إدارة محتوى",
plan2Feat4: "تهيئة متقدمة لمحركات البحث",
plan3Name: "تطبيق مخصص / متجر إلكتروني",
plan3Price: "لنتحدث",
plan3Desc: "للمتاجر الإلكترونية وتطبيقات الويب المعقدة.",
plan3Feat1: "حل مخصص بالكامل",
plan3Feat2: "ربط بوابات الدفع",
plan3Feat3: "ميزات متقدمة",
plan3Feat4: "دعم فني مخصص",
contactUsBtn: "تواصل معنا",
        

        // Contact Section
        contactTitle: "تواصل معي",
        formName: "الاسم",
        formEmail: "البريد الإلكتروني",
        formMessage: "الرسالة",
        sendButton: "إرسال الرسالة",

        // New Professional Footer
        footerCtaTitle: "هل نبدأ مشروعًا؟",
        footerCtaSubtitle: "مهتم بالعمل معًا؟ يجب أن نخصص وقتًا للحديث.",
        footerCtaButton: "هيا بنا",
        exploreTitle: "استكشف",
        myWorkTitle: "أعمالي",
        emailLink: "your-email@example.com",
        copyright: "جميع الحقوق محفوظة &copy; <span id='current-year'></span> ياسين براند."
    }
};

// Function to set the language
const setLanguage = (lang) => {
    // Update all translatable elements
    translatableElements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key]; // Use innerHTML to allow span in copyright
        }
    });

    // Update document direction and language attribute
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Update language toggle button text
    if (translations[lang] && translations[lang].langBtnText) {
        langToggleButton.textContent = translations[lang].langBtnText;
    }

    // Save language preference to localStorage
    localStorage.setItem('language', lang);
};

// Language toggle button event listener
langToggleButton.addEventListener('click', () => {
    const currentLang = document.documentElement.lang;
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
});

// Check for saved language on page load AND set year
document.addEventListener('DOMContentLoaded', () => {
    // 1. Set language from localStorage
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);

    // 2. Set current year in the footer
    const yearSpan = document.getElementById('current-year');
    if(yearSpan) {
        // This ensures the year is displayed even if the copyright text is complex
        if(document.getElementById('current-year')) {
            document.getElementById('current-year').textContent = new Date().getFullYear();
        }
    }
});