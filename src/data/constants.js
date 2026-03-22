// Event data for modals
export const EVENTS = {
    'tech-escape-room': {
        title: 'Tech Escape Room',
        logo: '/logos/iete-logo.webp',
        type: 'tech',
        description: 'Solve technical puzzles and crack codes to escape the room. Team size: 3 members. Entry: ₹100.',
        registerUrl: '#',
    },
    'debug-dash': {
        title: 'Debug Dash',
        logo: '/logos/iete-logo.webp',
        type: 'tech',
        description: 'Find and fix bugs in messy codebases as fast as possible! Entry: ₹30 per person.',
        registerUrl: '#',
    },
    'pixel-perfect': {
        title: 'Pixel Perfect',
        logo: '/logos/iete-logo.webp',
        type: 'tech',
        description: 'Match the target design using HTML/CSS perfectly within the time limit. Entry: ₹30 per person.',
        registerUrl: '#',
    },
    'tech-ctf': {
        title: 'Tech CTF',
        logo: '/logos/iete-logo.webp',
        type: 'tech',
        description: 'Cybersecurity challenge! Find vulnerabilities and capture the flags. Entry: ₹50 per person.',
        registerUrl: '#',
    },
    'ipl-auction': {
        title: 'IPL Auction',
        logo: '/logos/iete-logo.webp',
        type: 'nontech',
        description: 'Step into the shoes of a franchise owner! Strategize and bid to assemble your dream team in this thrilling cricket auction simulation. Team size: 4 members. Entry: ₹200.',
        registerUrl: 'https://forms.gle/QgfYXgzEkVjNoU3L9',
    },
    'fifa': {
        title: 'FIFA',
        logo: '/logos/iete-logo.webp',
        type: 'nontech',
        description: 'Players battle head-to-head in FIFA, showcasing reflexes, tactics, and focus. Entry: ₹50 per person.',
        registerUrl: '#',
    },
    'campus-fued': {
        title: 'Campus Fued',
        logo: '/logos/iete-logo.webp',
        type: 'nontech',
        description: 'Compete in a classic game show format tailored to our college life. Team size: 2 members. Entry: ₹100.',
        registerUrl: '#',
    },
    'startup-saga': {
        title: 'Startup Saga',
        logo: '/logos/iete-logo.webp',
        type: 'nontech',
        description: 'Present your best business ideas and see if you have what it takes to be the next unicorn. Entry: ₹50 per person.',
        registerUrl: '#',
    },
};

export const TECH_EVENTS = ['tech-escape-room', 'debug-dash', 'pixel-perfect', 'tech-ctf'];
export const NONTECH_EVENTS = ['ipl-auction', 'fifa', 'campus-fued', 'startup-saga'];

// Current Sponsors data
export const CURRENT_SPONSORS = {
    major: [
        { initials: 'RB', name: 'RedBull', type: 'BEVERAGE PARTNER', gradient: 'linear-gradient(135deg,#e8174a,#ff6b9d)', logo: '/sponsors/RedBull - Beverage Partner.webp', websiteUrl: '#' },
        { initials: 'AI', name: 'Apsara', type: 'ICE CREAM PARTNER', gradient: 'linear-gradient(135deg,#f59e0b,#fbbf24)', logo: '/sponsors/Apsara Ice Creams - Ice Cream Partner.webp', websiteUrl: '#' },
    ],
    tier2: [
        { initials: 'LL', name: 'Love & Latte', type: 'CAFÉ PARTNER', gradient: 'linear-gradient(135deg,#10b981,#34d399)', logo: '/sponsors/Love & Latte - Cafe Partner.webp', websiteUrl: '#' },
        { initials: 'BL', name: 'Bloovish', type: 'BEAUTY PARTNER', gradient: 'linear-gradient(135deg,#8b5cf6,#a78bfa)', logo: '/sponsors/Bloovish - Beauty Partner.webp', websiteUrl: '#' },
        { initials: 'SM', name: 'Smaaash', type: 'ENTERTAINMENT', gradient: 'linear-gradient(135deg,#06b6d4,#22d3ee)', logo: '/sponsors/Smaaash - Entertainment Partner.webp', websiteUrl: '#' },
    ],
    tier3: [
        { initials: 'NE', name: 'No Escape', type: 'ENTERTAINMENT', gradient: 'linear-gradient(135deg,#ef4444,#f87171)', logo: '/sponsors/No Escape - Entertainment Partner.webp', websiteUrl: '#' },
        { initials: 'RR', name: 'Rage Room', type: 'ENTERTAINMENT', gradient: 'linear-gradient(135deg,#f97316,#fb923c)', logo: '/sponsors/Rage Room - Entertainment Partner.webp', websiteUrl: '#' },
    ]
};

// Past Sponsors data
export const PAST_SPONSORS = {
    sTier: [
        { initials: 'RB', name: 'RedBull', type: 'BEVERAGE PARTNER', gradient: 'linear-gradient(135deg,#e8174a,#ff6b9d)', logo: '/sponsors/RedBull - Beverage Partner.webp', websiteUrl: '#' },
        { initials: 'LL', name: 'Love & Latte', type: 'CAFÉ PARTNER', gradient: 'linear-gradient(135deg,#10b981,#34d399)', logo: '/sponsors/Love & Latte - Cafe Partner.webp', websiteUrl: '#' },
        { initials: 'AI', name: 'Apsara', type: 'ICE CREAM PARTNER', gradient: 'linear-gradient(135deg,#f59e0b,#fbbf24)', logo: '/sponsors/Apsara Ice Creams - Ice Cream Partner.webp', websiteUrl: '#' },
        { initials: 'SM', name: 'Smaaash', type: 'ENTERTAINMENT', gradient: 'linear-gradient(135deg,#06b6d4,#22d3ee)', logo: '/sponsors/Smaaash - Entertainment Partner.webp', websiteUrl: '#' },
        { initials: 'BL', name: 'Bloovish', type: 'BEAUTY PARTNER', gradient: 'linear-gradient(135deg,#8b5cf6,#a78bfa)', logo: '/sponsors/Bloovish - Beauty Partner.webp', websiteUrl: '#' },
        { initials: 'NE', name: 'No Escape', type: 'ENTERTAINMENT', gradient: 'linear-gradient(135deg,#ef4444,#f87171)', logo: '/sponsors/No Escape - Entertainment Partner.webp', websiteUrl: '#' },
        { initials: 'RR', name: 'Rage Room', type: 'ENTERTAINMENT', gradient: 'linear-gradient(135deg,#f97316,#fb923c)', logo: '/sponsors/Rage Room - Entertainment Partner.webp', websiteUrl: '#' },
        { initials: 'MD', name: 'McDonalds', type: 'FOOD PARTNER', gradient: 'linear-gradient(135deg,#f59e0b,#fbbf24)', logo: '/sponsors/mcdonalds.webp', websiteUrl: '#' },
    ],
    aTier: [
        { initials: 'IB', name: 'Interview B.', type: 'EDUCATION', gradient: 'linear-gradient(135deg,#3b82f6,#60a5fa)', logo: '/sponsors/interview buddy - Education Partner.webp', websiteUrl: '#' },
        { initials: 'YI', name: 'Youth Inc', type: 'MEDIA PARTNER', gradient: 'linear-gradient(135deg,#a855f7,#c084fc)', logo: '/sponsors/Youth Inc. - Media Partner.webp', websiteUrl: '#' },
        { initials: 'IO', name: 'Insightone', type: 'MEDIA PARTNER', gradient: 'linear-gradient(135deg,#06b6d4,#0ea5e9)', logo: '/sponsors/Insightone - Media Partner.webp', websiteUrl: '#' },
        { initials: 'GF', name: 'Get My Fest', type: 'MEDIA PARTNER', gradient: 'linear-gradient(135deg,#22c55e,#4ade80)', logo: '/sponsors/Get My Fest - Media Partner.webp', websiteUrl: '#' },
        { initials: 'AT', name: 'Atencion', type: 'PARTNER', gradient: 'linear-gradient(135deg,#0891b2,#06b6d4)', logo: '/sponsors/Atencion.webp', websiteUrl: '#' },
        { initials: 'KS', name: 'Kala Satika', type: 'PARTNER', gradient: 'linear-gradient(135deg,#78716c,#a8a29e)', logo: '/sponsors/Kala Satika.webp', websiteUrl: '#' },
    ],
    bTier: [
        { initials: 'DS', name: 'Dessert', type: 'FOOD PARTNER', gradient: 'linear-gradient(135deg,#f43f5e,#fb7185)', logo: '/sponsors/Dessert.webp', websiteUrl: '#' },
        { initials: 'SA', name: 'Saucy Affair', type: 'FOOD PARTNER', gradient: 'linear-gradient(135deg,#f97316,#fb923c)', logo: '/sponsors/Saucy_Affair.webp', websiteUrl: '#' },
        { initials: 'MB', name: 'Mumbai Bites', type: 'FOOD PARTNER', gradient: 'linear-gradient(135deg,#3b82f6,#60a5fa)', logo: '/sponsors/mumbai_bites.webp', websiteUrl: '#' },
        { initials: 'MBI', name: 'Mumbai Bistro', type: 'FOOD PARTNER', gradient: 'linear-gradient(135deg,#10b981,#34d399)', logo: '/sponsors/mumbai_bistro.webp', websiteUrl: '#' },
        { initials: 'CB', name: 'Coding Blocks', type: 'EDUCATION', gradient: 'linear-gradient(135deg,#8b5cf6,#a78bfa)', logo: '/sponsors/coding_blocks.webp', websiteUrl: '#' },
        { initials: 'CC', name: 'Cibus Cafe', type: 'CAFÉ PARTNER', gradient: 'linear-gradient(135deg,#ef4444,#f87171)', logo: '/sponsors/cibus_cafe.webp', websiteUrl: '#' },
    ]
};

// Countdown target date — April 1 2026
export const EVENT_DATE = new Date('2026-04-01T00:00:00');
