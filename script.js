// Project data
const projects = [
    { id: 1, category: 'ai', featured: true, badge: { en: 'Graduation Project', tr: 'Bitirme Projesi' }, badgeClass: 'featured-badge', date: 'Sept. 2025 - Present', title: { en: 'SummarAIze - Meeting Assistant', tr: 'SummarAIze - Toplantı Asistanı' }, tech: ['React', 'Python', 'Supabase', 'LLM'], description: { en: 'Led a team of 5 engineers to develop a system for Zoom and Google Meet calls with real-time transcription and AI-powered summarization.', tr: '5 mühendisten oluşan bir ekibe liderlik ederek Zoom ve Google Meet aramaları için gerçek zamanlı transkripsiyon ve yapay zeka destekli özetleme sistemi geliştirdim.' }, github: 'https://github.com/Coders-Endgame/Coders-Endgame' },
    { id: 2, category: 'database', date: '2024', title: { en: 'University Management System', tr: 'Üniversite Yönetim Sistemi' }, categoryLabel: { en: 'Database & Web', tr: 'Veritabanı & Web' }, description: { en: 'University management and social media system with comprehensive database architecture.', tr: 'Kapsamlı veritabanı mimarisi ile üniversite yönetim ve sosyal medya sistemi.' }, github: 'https://github.com/LOTS-Lord-Of-The-SQL/UniversityDatabaseSystem' },
    { id: 3, category: 'ai', date: '2024', title: { en: 'AI Traffic Sign Recognition', tr: 'Yapay Zeka Trafik İşareti Tanıma' }, description: { en: 'Machine learning project for traffic sign recognition developed during AI lecture.', tr: 'Yapay zeka dersi sırasında geliştirilen trafik işareti tanıma projesi.' }, github: 'https://github.com/MachineLearningTobbEtu/AITrafficSignRecognition' },
    { id: 4, category: 'game', badge: { en: 'Google OUA 24', tr: 'Google OUA 24' }, date: 'Aug. 2024', title: { en: '3D Endless Runner on Unity', tr: 'Unity 3D Sonsuz Koşu Oyunu' }, description: { en: 'Team project developed during Google Game Academy Bootcamp.', tr: 'Google Oyun Akademisi Bootcamp sırasında geliştirilen takım projesi.' }, github: 'https://github.com/AlaaddinGursoy/OUA-GROUP-56', video: 'https://youtu.be/5G4Zkq_PTBg' },
    { id: 5, category: 'game', date: '2024', title: { en: 'Unity 2D Platform Game', tr: 'Unity 2D Platform Oyunu' }, description: { en: 'A simple yet engaging platform game with 2 levels.', tr: '2 seviyeli basit ama ilgi çekici bir platform oyunu.' }, github: 'https://github.com/AlaaddinGursoy/2D-PlatformGame-Unity-' },
    { id: 6, category: 'programming', date: '2024', title: { en: 'Unity 2D Aircrafts on Map', tr: 'Unity 2D Harita Üstü Uçaklar' }, description: { en: 'Real-time aircraft position tracking on map using API data.', tr: 'API verilerinden harita üzerinde gerçek zamanlı uçak takibi.' }, github: 'https://github.com/AlaaddinGursoy/ADSBonUnity' },
    { id: 7, category: 'hardware', date: 'June 2023', title: { en: 'FPGA - Subway Simulation', tr: 'FPGA - Metro Simülasyonu' }, categoryLabel: { en: 'Logic Design', tr: 'Mantık Tasarımı' }, description: { en: 'Subway simulation with 7-Segment Display in Logical Circuit Design course.', tr: '7-Segment Gösterge ile metro simülasyonu.' }, github: 'https://github.com/AlaaddinGursoy/cs265-metro-sim-7-segment-disp' },
    { id: 8, category: 'programming', date: '2023', title: { en: 'Java Chinese Chess', tr: 'Java Çin Satrancı' }, description: { en: 'Terminal-based Chinese chess game with Java Interfaces and Inheritance.', tr: 'Java Arayüzleri ve Kalıtım ile terminal tabanlı Çin satranç oyunu.' }, github: 'https://github.com/AlaaddinGursoy/Chinese-Chess' },
    { id: 9, category: 'programming', date: '2023', title: { en: 'Java GUI - Tire Stocks Tracker', tr: 'Java GUI - Lastik Stok Takibi' }, description: { en: 'Track automobile tire stock with a simple and fast interface.', tr: 'Basit ve hızlı arayüz ile otomobil lastik stoğu takibi.' }, github: 'https://github.com/AlaaddinGursoy/TireStockTracker' },
    { id: 10, category: 'programming', date: '2023', title: { en: 'Java GUI - Paint & Box War', tr: 'Java GUI - Boyama & Kutu Savaşı' }, description: { en: 'Two-in-one: Simple paint app and strategic box combat game.', tr: 'İki-bir-arada: Basit boyama uygulaması ve kutu savaşı oyunu.' }, github: 'https://github.com/AlaaddinGursoy/BoxCombat-JAVAGUI' },
    { id: 11, category: 'hardware', date: '2023', title: { en: 'Processor Implementation', tr: 'İşlemci Uygulaması' }, categoryLabel: { en: 'C. Architecture', tr: 'Bilgisayar Mimarisi' }, description: { en: 'A basic processor implementation using Verilog.', tr: 'Verilog kullanarak temel işlemci uygulaması.' }, github: 'https://github.com/AlaaddinGursoy/cs361-proccesor' },
    { id: 12, category: 'hardware', badge: { en: 'TUBITAK', tr: 'TÜBİTAK' }, date: 'May 2019', title: { en: 'TUBITAK 4006 - Smart House', tr: 'TÜBİTAK 4006 - Akıllı Ev' }, categoryLabel: { en: 'Technology', tr: 'Teknoloji' }, description: { en: 'Smart phone controlled home automation concept.', tr: 'Akıllı telefon kontrollü ev otomasyon konsepti.' } }
];

const certificates = [
    { icon: '🎮', title: { en: 'Game Academy', tr: 'Oyun Akademisi' }, subtitle: 'Google OUA 24', link: 'https://verified.sertifier.com/tr/verify/02951662813304/' },
    { icon: '📋', title: { en: 'Google Project Management', tr: 'Google Proje Yönetimi' }, subtitle: 'Google (Coursera)', link: 'https://coursera.org/share/86ed1c16c4479cb582d5e0a423ced82b' },
    { icon: '💡', title: { en: 'Ideathon 2024', tr: 'Ideathon 2024' }, subtitle: 'Google OUA', link: 'https://verified.sertifier.com/en/verify/01809811662052/?ref=email' },
    { icon: '📝', title: { en: 'TOEFL ITP', tr: 'TOEFL ITP' }, subtitle: '550 - April 2022', isExam: true },
    { icon: '📝', title: { en: 'eYDS', tr: 'eYDS' }, subtitle: '76.25 - January 2026', isExam: true }
];

let currentLang = 'en';
const categoryMap = { ai: { en: 'AI', tr: 'Yapay Zeka' }, game: { en: 'Game', tr: 'Oyun' }, programming: { en: 'Programming', tr: 'Programlama' }, database: { en: 'Database', tr: 'Veritabanı' }, hardware: { en: 'Hardware', tr: 'Donanım' } };

const githubSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`;
const videoSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>`;

function getText(obj) { return typeof obj === 'string' ? obj : obj[currentLang] || obj.en; }

function renderProjects(filter = 'all') {
    const grid = document.getElementById('projectsGrid');
    const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);
    grid.innerHTML = filtered.map(p => {
        const cat = p.categoryLabel ? getText(p.categoryLabel) : getText(categoryMap[p.category]);
        const links = p.github ? `<a href="${p.github}" target="_blank" rel="noopener noreferrer" class="project-link">${githubSVG}<span>${currentLang === 'en' ? 'View on GitHub' : 'GitHub\'da Görüntüle'}</span></a>` : '';
        const videoLink = p.video ? `<a href="${p.video}" target="_blank" rel="noopener noreferrer" class="project-link video-link">${videoSVG}<span>${currentLang === 'en' ? 'Watch Gameplay' : 'Oynanışı İzle'}</span></a>` : '';
        const techHTML = p.tech ? `<div class="project-tech">${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}</div>` : '';
        const badgeHTML = p.badge ? `<div class="project-badge ${p.badgeClass || ''}">${getText(p.badge)}</div>` : '';
        return `<article class="project-card${p.featured ? ' featured' : ''}" data-category="${p.category}">${badgeHTML}<div class="project-header"><span class="project-category">${cat}</span><span class="project-date">${p.date}</span></div><h3 class="project-title">${getText(p.title)}</h3>${techHTML}<p class="project-description">${getText(p.description)}</p><div class="project-links">${links}${videoLink}</div></article>`;
    }).join('');
}

function renderCertificates() {
    const grid = document.getElementById('certificatesGrid');
    grid.innerHTML = certificates.map(c => {
        const tag = c.link ? 'a' : 'div';
        const attrs = c.link ? `href="${c.link}" target="_blank" rel="noopener noreferrer"` : '';
        return `<${tag} class="certificate-card${c.isExam ? ' exam' : ''}" ${attrs}><div class="certificate-icon">${c.icon}</div><h3>${getText(c.title)}</h3><p>${c.subtitle}</p></${tag}>`;
    }).join('');
}

function updateLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-en]').forEach(el => { el.textContent = el.getAttribute(`data-${lang}`); });
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
    document.querySelectorAll('.filter-btn').forEach(btn => { btn.textContent = btn.getAttribute(`data-${lang}`); });
    renderProjects(document.querySelector('.filter-btn.active')?.dataset.category || 'all');
    renderCertificates();
    document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderCertificates();
    document.querySelectorAll('.lang-btn').forEach(btn => btn.addEventListener('click', () => updateLanguage(btn.dataset.lang)));
    document.querySelectorAll('.filter-btn').forEach(btn => btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProjects(btn.dataset.category);
    }));
});
