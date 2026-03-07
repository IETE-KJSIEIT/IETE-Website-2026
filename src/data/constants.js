// Event data for modals
export const EVENTS = {
    'digital-sherlock': {
        title: 'Digital Sherlock',
        emoji: '🔍',
        type: 'tech',
        description:
            'Put your deductive skills to the test! Analyze clues, solve puzzles, and think critically to crack complex digital mysteries. A battle of logic, pattern recognition, and analytical thinking.',
        registerUrl: '#',
    },
    'prompt-showdown': {
        title: 'Prompt Showdown',
        emoji: '🤖',
        type: 'tech',
        description:
            'Compete in the art of AI prompting! Craft the most creative and effective prompts to generate outputs that meet the challenge criteria. Creativity meets technology in this exciting battle of human-AI collaboration.',
        registerUrl: '#',
    },
    'code-golf': {
        title: 'Code Golf',
        emoji: '⛳',
        type: 'tech',
        description:
            'Write the shortest possible code to solve given problems. Every character counts! Compete against other programmers to produce the most elegant and compact solution across multiple programming languages.',
        registerUrl: '#',
    },
    'coming-soon': {
        title: '🔒 Coming Soon',
        emoji: '🔒',
        type: 'tech',
        locked: true,
        description:
            'A brand new technical event is on its way! Stay tuned for the reveal — something exciting is coming that will challenge your technical skills in a whole new way.',
        registerUrl: '#',
    },
    ipl: {
        title: 'IPL Fantasy',
        emoji: '🏏',
        type: 'nontech',
        description:
            'Build your dream cricket team and compete for points as real IPL matches unfold! Strategic team selection and cricket knowledge will lead you to victory in this fan-favourite competition.',
        registerUrl: '#',
    },
    'alice-borderland': {
        title: 'Alice in Borderland',
        emoji: '🃏',
        type: 'nontech',
        description:
            'Step into the world of Alice in Borderland — a series of mind-bending physical and mental games inspired by the hit Netflix series. Only the smart and the brave will survive each round!',
        registerUrl: '#',
    },
    'fifa-f1': {
        title: 'FIFA & F1 on PS5',
        emoji: '🎮',
        type: 'nontech',
        description:
            "Battle it out on the virtual pitch and racing circuit! Compete in FIFA and F1 tournaments on PlayStation 5. Prove you're the ultimate gaming champion in these high-octane competitive gaming events.",
        registerUrl: '#',
    },
    'social-buzz': {
        title: 'Social Buzz',
        emoji: '📱',
        type: 'nontech',
        description:
            'Showcase your social media creativity and marketing flair! Create engaging content, build a buzz around a given theme, and let your creativity shine in the digital arena. The most viral entry wins!',
        registerUrl: '#',
    },
};

export const TECH_EVENTS = ['digital-sherlock', 'prompt-showdown', 'code-golf', 'coming-soon'];
export const NONTECH_EVENTS = ['ipl', 'alice-borderland', 'fifa-f1', 'social-buzz'];

// Current Sponsors data
export const CURRENT_SPONSORS = {
    major: [
        { initials: 'RB', name: 'Red Bull', type: 'BEVERAGE PARTNER', gradient: 'linear-gradient(135deg,#e8174a,#ff6b9d)' },
        { initials: 'AI', name: 'Apsara', type: 'ICE CREAM PARTNER', gradient: 'linear-gradient(135deg,#f59e0b,#fbbf24)' },
    ],
    tier2: [
        { initials: 'LL', name: 'Love & Latte', type: 'CAFÉ PARTNER', gradient: 'linear-gradient(135deg,#10b981,#34d399)' },
        { initials: 'BL', name: 'Bloovish', type: 'BEAUTY PARTNER', gradient: 'linear-gradient(135deg,#8b5cf6,#a78bfa)' },
        { initials: 'SM', name: 'Smaaash', type: 'ENTERTAINMENT', gradient: 'linear-gradient(135deg,#06b6d4,#22d3ee)' },
    ],
    tier3: [
        { initials: 'NE', name: 'No Escape', type: 'ENTERTAINMENT', gradient: 'linear-gradient(135deg,#ef4444,#f87171)' },
        { initials: 'RR', name: 'Rage Room', type: 'ENTERTAINMENT', gradient: 'linear-gradient(135deg,#f97316,#fb923c)' },
    ]
};

// Past Sponsors data
export const PAST_SPONSORS = {
    sTier: [
        { initials: 'GF', name: 'Get My Fest', type: 'MEDIA PARTNER', gradient: 'linear-gradient(135deg,#22c55e,#4ade80)' },
        { initials: 'IO', name: 'Insightone', type: 'MEDIA PARTNER', gradient: 'linear-gradient(135deg,#06b6d4,#0ea5e9)' },
        { initials: 'YI', name: 'Youth Inc', type: 'MEDIA PARTNER', gradient: 'linear-gradient(135deg,#a855f7,#c084fc)' },
        { initials: 'IB', name: 'Interview B.', type: 'EDUCATION', gradient: 'linear-gradient(135deg,#3b82f6,#60a5fa)' },
    ],
    aTier: [
        { initials: 'AT', name: 'Atencion', type: 'PARTNER', gradient: 'linear-gradient(135deg,#0891b2,#06b6d4)' },
        { initials: 'KS', name: 'Kala Satika', type: 'PARTNER', gradient: 'linear-gradient(135deg,#78716c,#a8a29e)' },
        { initials: 'ZK', name: 'Zouk', type: 'PARTNER', gradient: 'linear-gradient(135deg,#ec4899,#f472b6)' },
        { initials: 'TC', name: 'The Coding', type: 'PARTNER', gradient: 'linear-gradient(135deg,#14b8a6,#2dd4bf)' },
    ],
    bTier: [
        { initials: 'UB', name: 'Urban Burger', type: 'FOOD PARTNER', gradient: 'linear-gradient(135deg,#f43f5e,#fb7185)' },
        { initials: 'SC', name: 'Silly Codes', type: 'TECH PARTNER', gradient: 'linear-gradient(135deg,#6366f1,#818cf8)' },
        { initials: 'VP', name: 'Vprint', type: 'PRINT PARTNER', gradient: 'linear-gradient(135deg,#84cc16,#a3e635)' },
        { initials: 'GL', name: 'Glow Labs', type: 'PARTNER', gradient: 'linear-gradient(135deg,#f59e0b,#fbbf24)' },
    ]
};

// Countdown target date — April 1 2026
export const EVENT_DATE = new Date('2026-04-01T00:00:00');
