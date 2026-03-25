// Event data for modals
export const EVENTS = {
    'tech-escape-room': {
        title: 'Tech Escape Room',
        logo: '/logos/tech_escape.png',
        type: 'tech',
        description: 'Teams must solve a series of coding, logic, and tech-based puzzles within a time limit to unlock stages and finally "escape" the room. Team size: 3 members. Entry: ₹100.',
        registerUrl: '#',
    },
    'debug-dash': {
        title: 'Debug Dash',
        logo: '/logos/debug_dash.png',
        type: 'tech',
        description: 'A high-intensity competition that challenges you to identify, analyze, and fix errors in pre-written code snippets under strict time constraints. Focus is on logical clarity and attention to detail — not writing from scratch. Entry: ₹30 per person.',
        registerUrl: '#',
    },
    'pixel-perfect': {
        title: 'Pixel Perfect',
        logo: '/logos/pixel_perfect.png',
        type: 'tech',
        description: 'A visual coding showdown where code meets art. Participants are shown a specific geometric shape or pattern (the "Target") and must recreate it using only HTML and CSS within a strict time limit. No images, no SVGs — just pure code and styling. Entry: ₹30 per person.',
        registerUrl: '#',
    },
    'tech-ctf': {
        title: 'Tech CTF',
        logo: '/logos/tech_ctf.png',
        type: 'tech',
        description: 'A hands-on cybersecurity contest where participants solve real-world security challenges in a fun and competitive environment. With cybersecurity as one of the fastest-growing career domains, get ready to capture the flags! Entry: ₹50 per person.',
        registerUrl: '#',
    },
    'upcoming-event': {
        title: 'Circuit Sprint',
        logo: '/logos/circuit_sprint.png',
        type: 'tech',
        description: 'A fast-paced tech showdown! Crack the quiz, grab your Arduino or Raspberry Pi, and race against time to solve a real-world problem through hardware implementation. Speed meets innovation here.',
        registerUrl: 'https://forms.gle/e3hNaNyxtajZ4Wod9',
    },
    'ipl-auction': {
        title: 'IPL Auction',
        logo: '/logos/auction.png',
        type: 'nontech',
        description: 'Build your dream cricket team with a fixed budget and smart bidding strategies. Analyze players, plan tactics, and outbid competitors to create the ultimate winning squad. Team size: 4 members. Entry: ₹200.',
        registerUrl: 'https://forms.gle/QgfYXgzEkVjNoU3L9',
    },
    'F1': {
        title: 'F1',
        logo: '/logos/f1.png',
        type: 'nontech',
        description: 'Buckle up and dominate the virtual tracks! This PS5 showdown is all about speed, strategy, and skill as you battle it out in F1 — the ultimate test of reflexes and racing prowess. Outmaneuver, outsmart, and outdrive your rivals in thrilling head-to-head battles. Entry: ₹50 per person.',
        registerUrl: '#',
    },
    'campus-fued': {
        title: 'Campus Fued',
        logo: '/logos/campus_feud.png',
        type: 'nontech',
        description: 'A fun, survey-based team game where you guess the most popular campus answers. Test your wit, teamwork, and presence of mind to score big! Team size: 2 members. Entry: ₹100.',
        registerUrl: '#',
    },
    'startup-saga': {
        title: 'Startup Saga',
        logo: '/logos/startup_saga.png',
        type: 'nontech',
        description: 'All about ideas, creativity, and quick thinking. No technical skills needed! This event gives you a real-world startup experience in a fun and interactive way. Entry: ₹50 per person.',
        registerUrl: '#',
    },
};

export const TECH_EVENTS = ['tech-escape-room', 'debug-dash', 'pixel-perfect', 'tech-ctf', 'upcoming-event'];
export const NONTECH_EVENTS = ['ipl-auction', 'F1', 'campus-fued', 'startup-saga'];



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
export const EVENT_DATE = new Date('2026-04-06T00:00:00');
