import { useEffect, useRef, useState, useCallback } from 'react';
import styles from './AboutIETE.module.css';

/* ── useInView hook ── */
function useInView(threshold = 0.2) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        if (!ref.current) return;
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
            { threshold }
        );
        obs.observe(ref.current);
        return () => obs.disconnect();
    }, [threshold]);
    return [ref, inView];
}

/* ── Sidebar Groups ── */
const SIDEBAR_GROUPS = [
    {
        label: 'COMMITTEES',
        items: [
            { id: 'core', label: 'Core', icon: '⚙' },
            { id: 'subcore', label: 'Sub-Core', icon: '⛓' },
        ],
    },
    {
        label: 'DOMAINS',
        items: [
            { id: 'technical', label: 'Technical', icon: '{/}' },
            { id: 'creative', label: 'Creative', icon: '✏' },
            { id: 'pr', label: 'PR & Outreach', icon: '📣' },
            { id: 'marketing', label: 'Marketing', icon: '📈' },
            { id: 'organizing', label: 'Organizing', icon: '≡' },
        ],
    },
];

/* ── Teams Data ── */
const TEAM_DATA = {
    /* ── COMMITTEES: show role card grid ── */
    core: {
        type: 'committee',
        label: 'Core Team',
        path: 'C:/IETE/Teams/ Committees/Core',
        accent: '#00c8ff',
        banner: 'CORE',
        members: [
            { role: 'Cp', title: 'Chairperson', name: 'Meera Malekar', photo: '/team/core/cp.webp', linkedin: 'https://www.linkedin.com/in/meera-malekar-a1b1323b6/', email: 'meera.malekar@somaiya.edu' },
            { role: 'VCp', title: 'Vice Chairperson', name: 'Meeti Shah', photo: '/team/core/vcp.webp', linkedin: 'https://www.linkedin.com/in/meeti-shah27', email: 'meeti.cs@somaiya.edu' },
            { role: 'CEo', title: 'Chief Executive Officer', name: 'Nilambika Dudhani ', photo: '/team/core/ceo.webp', linkedin: 'https://www.linkedin.com/in/nilambika-dudhani-13b73b345/', email: ' nilambika.d@somaiya.edu' },
            { role: 'CTO', title: 'Chief Technical Officer', name: 'Sujal Chalke', photo: '/team/core/cto.webp', linkedin: 'https://www.linkedin.com/in/cluelesssujal/', email: 'sujal.chalke@somaiya.edu' },
            { role: 'CMO', title: 'Chief Marketing Officer', name: 'Krish Chambaria', photo: '/team/core/cmo.webp', linkedin: 'https://www.linkedin.com/in/krish-chambaria-271b92315/', email: 'krish.chambaria@somaiya.edu' },
            { role: 'PRO', title: 'Public Relations Officer', name: 'Darsh Kothari', photo: '/team/core/pro.webp', linkedin: ' https://www.linkedin.com/in/darsh-kothari-70919a264', email: 'darsh.kothari@somaiya.edu' },
            { role: 'DMM', title: 'Digital Media Manager', name: 'Arnav Deshpande', photo: '/team/core/dmm.webp', linkedin: 'https://www.linkedin.com/in/arnav-deshpande-4988023b8/', email: 'arnav.deshpande@somaiya.edu' },
            { role: 'Trs', title: 'Treasurer', name: 'Neel Shah', photo: '/team/core/tr.webp', linkedin: '', email: '' },
        ],
    },
    subcore: {
        type: 'committee',
        label: 'Sub-Core Team',
        path: 'C:/IETE/Teams/ Committees/Sub-Core',
        accent: '#a855f7',
        banner: 'SUB-CORE',
        members: [
            { role: 'WDL', title: 'Secretary', name: 'Himani Bamnikar', photo: '/team/subcore/sec.webp', linkedin: 'https://www.linkedin.com/in/himani-m-bamnikar/', email: 'himani.bamnikar@somaiya.com' },
            { role: 'DSL', title: 'Joint Treasurer', name: 'Parth Shah', photo: '/team/subcore/jt-tr.webp', linkedin: 'https://www.linkedin.com/in/parth-shah-148b43368', email: 'parth13@somaiya.edu' },
            { role: 'MKL', title: 'Marketing Admin', name: 'Mishti Shah', photo: '/team/subcore/ma.webp', linkedin: 'https://www.linkedin.com/in/mishti-shah-250811310', email: 'mishti.shah@somaiya.edu' },
            { role: 'PRL', title: 'Joint Technical Officer', name: 'Shravani Dhuri', photo: '/team/subcore/jt-cto.webp', linkedin: 'https://www.linkedin.com/in/shravani-dhuri-986b6a317/', email: 'shravani.dhuri@somaiya.edu' },
            { role: 'TECL', title: 'Technical Admin', name: 'Karan Mishra', photo: '/team/subcore/tech-admin.webp', linkedin: 'https://www.linkedin.com/in/karan-mishra-b2273b3a3/', email: 'karan.mishra@somaiya.edu' },
            { role: 'CL', title: 'Joint Public Relations Officer', name: 'Savir Shrigadi', photo: '/team/subcore/cl.webp', linkedin: '', email: 'savir.s@somaiya.edu' },
            { role: 'SML', title: 'Public Relations Admin', name: 'Zeal Dhami', photo: '/team/subcore/pr-admin.webp', linkedin: '', email: 'zeal.dhami@somaiya.edu' },
            { role: 'EVL', title: 'Social Media Manager', name: 'Pratik Narvadkar', photo: '/team/subcore/smm.webp', linkedin: '', email: 'pratik.narvadkar@somaiya.edu' },
            { role: 'ORL', title: 'Creative Admin', name: 'Eshant Palkar', photo: '/team/subcore/orl.webp', linkedin: '', email: 'eshant.p@somaiya.edu' },
            { role: 'DOCL', title: 'Organising Admin', name: 'Bhavy Doshi', photo: '/team/subcore/org-head.webp', linkedin: 'https://www.linkedin.com/in/bhavy-doshi-735b20341/', email: 'bhavy.d@somaiya.edu' },
        ],
    },

    /* ── DOMAINS: show leads + team photo ── */
    technical: {
        type: 'domain',
        label: 'Technical Team',
        path: 'C:/IETE/Teams/ Domains/Technical',
        accent: '#22d3ee',
        banner: 'TECHNICAL',
        photo: '/team/domains/tech.webp',
        heads: [
            { role: 'TL', title: 'Technical Lead', name: 'Khush Mehta', email: 'khush.mm@somaiya.edu', photo: '/team/domains/khush.webp' },
        ],
    },
    creative: {
        type: 'domain',
        label: 'Creative Team',
        path: 'C:/IETE/Teams/ Domains/Creative',
        accent: '#f472b6',
        banner: 'CREATIVE',
        photo: '/team/domains/creative.webp',
        heads: [
            { role: 'CL', title: 'Creative Lead', name: 'Shalmali Jadhav', email: 'shalmali.j@somaiya.edu', photo: '/team/domains/shalmali.webp' },
        ],
    },
    pr: {
        type: 'domain',
        label: 'PR & Outreach',
        path: 'C:/IETE/Teams/ Domains/PR-Outreach',
        accent: '#fb923c',
        banner: 'PR',
        photo: '/team/domains/pr.webp',
        heads: [
            { role: 'PL', title: 'PR Lead', name: 'Manav Damani', email: 'manav.damani@somaiya.edu', photo: '/team/domains/manav.webp' },
        ],
    },
    marketing: {
        type: 'domain',
        label: 'Marketing Team',
        path: 'C:/IETE/Teams/ Domains/Marketing',
        accent: '#00dcff',
        banner: 'MARKETING',
        photo: '/team/domains/marketing.webp',
        heads: [
            { role: 'ML', title: 'Marketing Lead', name: 'Veera Allak', email: 'veera.allak@somaiya.edu', photo: '/team/domains/veera.webp' },
        ],
    },
    organizing: {
        type: 'domain',
        label: 'Organizing Team',
        path: 'C:/IETE/Teams/ Domains/Organizing',
        accent: '#4ade80',
        banner: 'ORGANIZING',
        photo: '/team/domains/org.webp',
        heads: [
            { role: 'OL', title: 'Organizing Lead', name: 'Rishabh Shaw', email: 'rishabh.shaw@somaiya.edu', photo: '/team/domains/rishabh.webp' },
            { role: 'EM', title: 'Event Manager', name: 'Aditi Hasurkar', email: 'aditi.hasurkar@somaiya.edu', photo: '/team/domains/aditi.webp' },
        ],
    },
};

/* ── Main Component ── */
export default function AboutIETE() {
    const [aboutRef, aboutInView] = useInView(0.15);
    const [awardsRef, awardsInView] = useInView(0.2);
    const [teamsRef, teamsInView] = useInView(0.1);
    const [selectedTeam, setSelectedTeam] = useState('core');
    const [selectedMember, setSelectedMember] = useState(null);

    const team = TEAM_DATA[selectedTeam];
    const isDomain = team.type === 'domain';

    const closePopup = useCallback(() => setSelectedMember(null), []);

    useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape') closePopup(); };
        if (selectedMember) {
            document.addEventListener('keydown', onKey);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [selectedMember, closePopup]);

    return (
        <>
            <section className={styles.aboutSection}>

                {/* ── Viewport 1: About ── */}
                <div ref={aboutRef} className={styles.viewportSection}>
                    <div className={`${styles.aboutGridContainer} ${aboutInView ? styles.visible : ''}`}>
                        <div className={styles.aboutGrid}>
                            <div className={`${styles.aboutTextCol} ${aboutInView ? styles.slideInLeft : ''}`}>
                                <div className={styles.tagLine}>
                                    <span className={styles.tagDot}></span>
                                    EST. KJSIT, MUMBAI
                                </div>
                                <h2 className={styles.aboutTitle}>
                                    WHAT WE'RE<br />
                                    <span className={styles.titleAccent}>ABOUT.</span>
                                </h2>
                                <div className={styles.lineDecoration}></div>
                                <p className={styles.aboutDesc}>
                                    We are the IETE Student Chapter of KJSIT—a nexus for creators,
                                    thinkers, and pioneers. We transcend the conventional, pushing
                                    the boundaries of technology and engineering to build a smarter
                                    tomorrow. This is our digital hub.
                                </p>
                                <div className={styles.statRow}>
                                    {[['100+', 'Members'], ['7+', 'Workshops'], ['15+', 'Flagship Events']].map(([num, label]) => (
                                        <div key={label} className={styles.statItem}>
                                            <span className={styles.statNum}>{num}</span>
                                            <span className={styles.statLabel}>{label}</span>
                                        </div>
                                    ))}
                                </div>
                                <a href="#join" className={styles.joinBtn}>
                                    JOIN OUR FAMILY <span className={styles.arrow}>→</span>
                                </a>
                            </div>
                            <div className={`${styles.aboutImgCol} ${aboutInView ? styles.slideInRight : ''}`}>
                                <img
                                    src="/team/family.webp"
                                    alt="IETE KJSIT Family"
                                    className={styles.familyImg}
                                />
                                <div className={styles.imgOverlayGrad} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Viewport 2: Awards ── */}
                <div ref={awardsRef} className={styles.viewportSection}>

                    <div className={`${styles.awardBlock} ${awardsInView ? styles.fadeUp : ''}`}>

                        {/* Left: Award photo */}
                        <div className={styles.awardPhotoSide}>
                            <div className={styles.awardPhotoFrame}>
                                <img
                                    src="/team/award.webp"
                                    alt="IETE KJSIT Award Ceremony"
                                    className={styles.awardPhotoImg}
                                />
                                <div className={styles.awardPhotoGlow} />
                            </div>
                            {/* Corner badge */}
                            <div className={styles.awardBadge}>
                                <span className={styles.awardBadgeNum}>3rd</span>
                                <span className={styles.awardBadgeLabel}>Best IETE ISF</span>
                            </div>
                        </div>

                        {/* Right: Info */}
                        <div className={styles.awardInfoSide}>
                            <div className={styles.awardTag}>
                                <span className={styles.awardTagDot} />
                                ACHIEVEMENT UNLOCKED
                            </div>

                            <span className={styles.awardTrophy}>🏆</span>

                            <h2 className={styles.awardHeading}>
                                3<span className={styles.awardHeadingAccent}>RD</span> BEST IETE ISF<br />
                                <span className={styles.awardHeadingAccent}>IN MUMBAI</span>
                            </h2>

                            <div className={styles.awardDivider} />

                            <p className={styles.awardBody}>
                                Awarded by <strong>IETE-India</strong> for outstanding contribution
                                to technical education and innovation through the conduction of
                                <strong> Oscillations 2025</strong>.
                            </p>

                            <div className={styles.awardMeta}>
                                <div className={styles.awardMetaItem}>
                                    <span className={styles.awardMetaVal}>2025</span>
                                    <span className={styles.awardMetaLbl}>Year</span>
                                </div>
                                <div className={styles.awardMetaDivider} />
                                <div className={styles.awardMetaItem}>
                                    <span className={styles.awardMetaVal}>IETE–India</span>
                                    <span className={styles.awardMetaLbl}>Awarded By</span>
                                </div>
                                <div className={styles.awardMetaDivider} />
                                <div className={styles.awardMetaItem}>
                                    <span className={styles.awardMetaVal}>Mumbai</span>
                                    <span className={styles.awardMetaLbl}>Region</span>
                                </div>
                            </div>

                            <a href="/oscillation" className={styles.oscillationBtn}>
                                <span className={styles.btnGlow} />
                                ENTER OSCILLATION
                                <span className={styles.glitchArrow}>_{'>'}</span>
                            </a>
                        </div>

                    </div>

                </div>

                {/* ── Viewport 3: Teams Explorer ── */}
                <div ref={teamsRef} className={`${styles.viewportSection} ${styles.teamsViewport}`}>
                    <div className={`${styles.teamsExplorer} ${teamsInView ? styles.macVisible : ''}`}>

                        {/* macOS title bar */}
                        <div className={styles.macbookTopFrame}>
                            <div className={styles.macbookDots}>
                                <span></span><span></span><span></span>
                            </div>
                            <span className={styles.macPath}>{team.path}</span>
                        </div>

                        {/* Explorer body */}
                        <div className={styles.explorerBody}>

                            {/* Sidebar */}
                            <div className={styles.explorerSidebar}>
                                {SIDEBAR_GROUPS.map((group) => (
                                    <div key={group.label} className={styles.sidebarGroup}>
                                        <p className={styles.sidebarGroupLabel}>{group.label}</p>
                                        {group.items.map((item, i) => (
                                            <button
                                                key={item.id}
                                                onClick={() => setSelectedTeam(item.id)}
                                                className={`${styles.sidebarItem} ${selectedTeam === item.id ? styles.sidebarActive : ''}`}
                                                style={{
                                                    animationDelay: teamsInView ? `${0.1 + i * 0.07}s` : '0s',
                                                    '--team-accent': team.accent,
                                                }}
                                            >
                                                <span className={styles.sidebarIcon}>{item.icon}</span>
                                                <span>{item.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                ))}
                            </div>
                            <div className={styles.sidebarScrollHint}>›</div>
                            <div className={styles.explorerMain}>
                                {/* Header */}
                                <div className={styles.explorerHeader}>
                                    <div
                                        className={styles.domainLeadsTag}
                                        style={{ borderColor: team.accent, color: team.accent }}
                                    >
                                        {team.label.toUpperCase()}
                                    </div>
                                    <span className={styles.memberCount}>
                                        {isDomain ? `${team.heads.length} lead${team.heads.length > 1 ? 's' : ''}` : `${team.members.length} members`}
                                    </span>
                                </div>

                                {/* ── COMMITTEE: Role card grid ── */}
                                {!isDomain && (
                                    <div className={styles.explorerContent}>
                                        <div
                                            className={styles.memberGrid}
                                            style={{ '--grid-cols': selectedTeam === 'subcore' ? 5 : 4 }}
                                        >
                                            {team.members.map((member, i) => (
                                                <div
                                                    key={member.role}
                                                    className={styles.memberCard}
                                                    style={{ '--delay': `${i * 0.07}s`, '--team-accent': team.accent }}
                                                    onClick={() => setSelectedMember({ ...member, accent: team.accent, teamLabel: team.label })}
                                                >
                                                    <div className={styles.memberAvatar}>
                                                        {member.photo ? (
                                                            <img
                                                                src={member.photo}
                                                                alt={member.title}
                                                                className={styles.avatarImg}
                                                                style={{ borderColor: team.accent }}
                                                                onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'flex'; }}
                                                            />
                                                        ) : null}
                                                        <div
                                                            className={styles.avatarCircle}
                                                            style={{ borderColor: team.accent, display: member.photo ? 'none' : 'flex' }}
                                                        />
                                                    </div>
                                                    <span className={styles.memberRole}>{member.name}</span>
                                                    <span className={styles.memberTitle} style={{ fontWeight: 'bold' }}>{member.title}</span>
                                                    <button
                                                        className={styles.showProfileBtn}
                                                        style={{ '--team-accent': team.accent }}
                                                        onClick={(e) => { e.stopPropagation(); setSelectedMember({ ...member, accent: team.accent, teamLabel: team.label }); }}
                                                    >
                                                        SHOW PROFILE
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* ── DOMAIN: 2 leads + team photo ── */}
                                {isDomain && (
                                    <div className={styles.domainContent}>
                                        {/* Left: 2 head cards stacked */}
                                        <div className={styles.headsCol}>
                                            {team.heads.map((head, i) => (
                                                <div
                                                    key={head.role}
                                                    className={styles.headCard}
                                                    style={{ '--team-accent': team.accent, '--delay': `${i * 0.12}s` }}
                                                >
                                                    <div className={styles.headAvatarWrap}>
                                                        {head.photo ? (
                                                            <img
                                                                src={head.photo}
                                                                alt={head.role}
                                                                className={styles.headAvatarImg}
                                                                style={{ borderColor: team.accent }}
                                                                onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'flex'; }}
                                                            />
                                                        ) : null}
                                                        <div className={styles.headAvatar} style={{ borderColor: team.accent, display: head.photo ? 'none' : 'flex' }}></div>
                                                    </div>
                                                    <div className={styles.headInfo}>
                                                        <span className={styles.headRole}>{head.name || 'Name Here'}</span>
                                                        <span className={styles.headTitle} style={{ fontWeight: 'bold' }}>{head.title}</span>
                                                    </div>
                                                    {head.email && (
                                                        <a
                                                            href={`mailto:${head.email}`}
                                                            className={styles.headEmailIcon}
                                                            title="Email"
                                                        >
                                                            ✉
                                                        </a>
                                                    )}
                                                </div>
                                            ))}
                                        </div>

                                        {/* Right: Large team photo */}
                                        <div
                                            className={styles.teamPhotoCard}
                                            style={{ '--team-accent': team.accent }}
                                        >
                                            {team.photo
                                                ? <img src={team.photo} alt={team.label} className={styles.teamPhotoImg} />
                                                : <div className={styles.photoInner}><span className={styles.photoLabel}>Team Photo</span></div>
                                            }
                                            <span className={styles.photoBannerText}>{team.banner}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* ── Member Popup Modal ── */}
            {
                selectedMember && (
                    <div className={styles.popupOverlay} onClick={closePopup}>
                        <div
                            className={styles.popupCard}
                            style={{ '--member-accent': selectedMember.accent }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close button */}
                            <button className={styles.popupClose} onClick={closePopup}>×</button>

                            {/* Left: photo + status ticker */}
                            <div className={styles.popupLeft}>
                                <div className={styles.popupPhotoFrame}>
                                    {selectedMember.photo ? (
                                        <img
                                            src={selectedMember.photo}
                                            alt={selectedMember.title}
                                            className={styles.popupPhotoImg}
                                            onError={(e) => {
                                                e.currentTarget.style.display = 'none';
                                                e.currentTarget.nextSibling.style.display = 'flex';
                                            }}
                                        />
                                    ) : null}
                                    <div className={styles.popupPhotoPlaceholder}
                                        style={{ display: selectedMember.photo ? 'none' : 'flex' }}>
                                        <span className={styles.popupPhotoIcon}>👤</span>
                                    </div>
                                </div>
                                <div className={styles.popupStatusTicker}>
                                    <span>SYS.READY // {selectedMember.name || 'Name Here'} // NODE.ACTIVE</span>
                                </div>
                            </div>

                            {/* Right: info */}
                            <div className={styles.popupRight}>
                                <span className={styles.popupTagLabel}
                                    style={{ color: selectedMember.accent }}>
                            // {selectedMember.teamLabel.toUpperCase()}
                                </span>
                                <h2 className={styles.popupName}
                                    style={{ '--member-accent': selectedMember.accent }}>
                                    {selectedMember.name || 'Name Here'}
                                </h2>
                                <p className={styles.popupRole} style={{ color: selectedMember.accent, marginTop: '0.4rem' }}>
                                    {selectedMember.title}
                                </p>

                                <div className={styles.popupDivider}
                                    style={{ background: `linear-gradient(to right, ${selectedMember.accent}, #8000ff)` }} />
                                <p className={styles.popupBio}>
                                    A key member of the IETE KJSIT committee, responsible for driving
                                    innovation and excellence within the chapter.
                                </p>
                                <div className={styles.popupSocials}>
                                    <a
                                        href={selectedMember.linkedin || '#'}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.popupSocialBtn}
                                        style={{ borderColor: `${selectedMember.accent}33`, textDecoration: 'none' }}
                                        title="LinkedIn"
                                    >
                                        in
                                    </a>
                                    <a
                                        href={selectedMember.email ? `mailto:${selectedMember.email}` : '#'}
                                        className={styles.popupSocialBtn}
                                        style={{ borderColor: `${selectedMember.accent}33`, textDecoration: 'none', fontSize: '1rem' }}
                                        title="Official Email"
                                    >
                                        ✉
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

        </>
    );
}
