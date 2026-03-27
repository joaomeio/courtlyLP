import { useState, useEffect } from 'react';
import './App.css';
import appScreenshot from '../image.png';
import logoImg from '../Design sem nome.png';
import scheduleScreenshot from '../schedule.png';
import studentScreenshot from '../student.png';
import coachImg from '../imagem coach.png';


// ─── Icons ────────────────────────────────────────────────────────────────────

const CalendarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const UsersIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const CreditCardIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2" /><line x1="1" y1="10" x2="23" y2="10" />
  </svg>
);

const BookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const BarChartIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);

const LayoutIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" />
  </svg>
);

const CheckIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

const GreenCheck = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="12" fill="#66b319" />
    <polyline points="6 12 10 16 18 8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GrayX = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="11" fill="none" stroke="#e2e8f0" strokeWidth="1.5" />
    <line x1="8.5" y1="8.5" x2="15.5" y2="15.5" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="15.5" y1="8.5" x2="8.5" y2="15.5" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const TennisBallIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M2.5 12a9.5 9.5 0 0 1 4.5-8 9.5 9.5 0 0 1 0 16 9.5 9.5 0 0 1-4.5-8z" />
  </svg>
);

const ImageIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
);

// ─── Court Decoration (signature element) ─────────────────────────────────────
// Top-down court line geometry — used as a background watermark in hero + CTA

function CourtDecoration() {
  return (
    <div className="court-decoration" aria-hidden="true">
      <svg viewBox="0 0 440 280" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Doubles boundary */}
        <rect x="12" y="12" width="416" height="256" stroke="currentColor" strokeWidth="1.5" />
        {/* Net */}
        <line x1="12" y1="140" x2="428" y2="140" stroke="currentColor" strokeWidth="2.5" />
        {/* Singles sidelines */}
        <line x1="66" y1="12" x2="66" y2="268" stroke="currentColor" strokeWidth="1" />
        <line x1="374" y1="12" x2="374" y2="268" stroke="currentColor" strokeWidth="1" />
        {/* Service lines */}
        <line x1="66" y1="76" x2="374" y2="76" stroke="currentColor" strokeWidth="1" />
        <line x1="66" y1="204" x2="374" y2="204" stroke="currentColor" strokeWidth="1" />
        {/* Center service line */}
        <line x1="220" y1="76" x2="220" y2="204" stroke="currentColor" strokeWidth="1" />
        {/* Center marks */}
        <line x1="215" y1="12" x2="225" y2="12" stroke="currentColor" strokeWidth="2" />
        <line x1="215" y1="268" x2="225" y2="268" stroke="currentColor" strokeWidth="2" />
        {/* Net posts */}
        <circle cx="12" cy="140" r="3.5" fill="currentColor" />
        <circle cx="428" cy="140" r="3.5" fill="currentColor" />
      </svg>
    </div>
  );
}

// ─── Placeholder ──────────────────────────────────────────────────────────────
// Supports responsive images via mobileSrc / desktopSrc props.
// Usage: <Placeholder mobileSrc="/img/mobile.png" desktopSrc="/img/desktop.png" />
// When no src props are provided, shows a dev placeholder.

function Placeholder({ name, style = {}, mobileSrc, desktopSrc }) {
  if (mobileSrc || desktopSrc) {
    return (
      <picture style={{ display: 'block', width: '100%', ...style }}>
        {mobileSrc && <source media="(max-width: 767px)" srcSet={mobileSrc} />}
        {desktopSrc && <source media="(min-width: 768px)" srcSet={desktopSrc} />}
        <img
          src={desktopSrc || mobileSrc}
          alt={name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </picture>
    );
  }
  return (
    <div className="placeholder-visual" style={style}>
      <div className="placeholder-inner">
        <div className="placeholder-icon"><ImageIcon /></div>
        <span className="placeholder-name">{name}</span>
        <span className="placeholder-hint">Replace with your screenshot</span>
      </div>
    </div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar({ scrolled }) {
  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo-area">
          <img src={logoImg} alt="Courtly" style={{ height: '36px', width: 'auto' }} />
        </div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#pricing">Pricing</a>
        </div>
        <div className="nav-actions">
          <a href="https://app.courtlytennis.com" className="sign-in-link">Sign in</a>
          <a href="https://app.courtlytennis.com" className="btn btn-primary">Get started free</a>
        </div>
      </div>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="hero">
      <CourtDecoration />
      <div className="container hero-inner">
        <div className="hero-content">
          <div className="hero-eyebrow reveal-on-scroll">
            <span className="badge">#1 Tennis Coaching App</span>
          </div>
          <h1 className="hero-title">
            <span className="title-line">
              <span className="animate-text-slide-up">Run your coaching</span>
            </span>
            <span className="title-line title-line-accent">
              <span className="animate-text-slide-up" style={{ animationDelay: '0.1s' }}>business smarter.</span>
            </span>
          </h1>
          <p className="hero-subtitle reveal-on-scroll">
            Schedule sessions, manage students, track payments, and grow your tennis academy — all in one clean, professional platform.
          </p>
          <div className="hero-actions reveal-on-scroll" style={{ animationDelay: '0.15s' }}>
            <a href="https://app.courtlytennis.com" className="btn btn-primary">
              Start for free <ArrowRightIcon />
            </a>
          </div>
        </div>
        <div className="hero-visual reveal-on-scroll" style={{ animationDelay: '0.1s' }}>
          <div className="hero-visual-wrapper">
            <img src={appScreenshot} alt="Courtly App" className="mockup-img" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Stats ────────────────────────────────────────────────────────────────────

function StatsBar() {
  const stats = [
    { value: "250+", label: "Preset drills" },
    { value: "100%", label: "Mobile ready" },
    { value: "Free", label: "Free to start" },
    { value: "1 min", label: "Setup time" },
  ];
  return (
    <section className="stats-bar reveal-on-scroll">
      <div className="container stats-container">
        {stats.map((stat, i) => (
          <div key={i} className="stat-item">
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Features ─────────────────────────────────────────────────────────────────

function FeaturesGrid() {
  const features = [
    { icon: <CalendarIcon />, title: "Smart Scheduling", desc: "Automate conflict-free bookings and court assignments effortlessly." },
    { icon: <UsersIcon />, title: "Student Management", desc: "Track progress, attendance, and skill development profiles in one place." },
    { icon: <CreditCardIcon />, title: "Payment Tracking", desc: "Integrated billing and invoice management to ensure you get paid on time." },
    { icon: <BookIcon />, title: "250+ Drill Library", desc: "Access a massive library of interactive tennis drills and lesson plans." },
    { icon: <BarChartIcon />, title: "Analytics", desc: "Visualize your academy's growth, revenue, and court utilization." },
    { icon: <LayoutIcon />, title: "Court Management", desc: "Easily manage availability for multiple facilities and court surfaces." },
  ];
  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="section-header reveal-on-scroll">
          <p className="section-label">Features</p>
          <h2 className="section-title">Everything your academy needs</h2>
          <p className="section-subtitle">Purpose-built tools for tennis coaches, not generic scheduling software.</p>
        </div>
        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className="feature-card reveal-on-scroll" style={{ animationDelay: `${i * 0.07}s` }}>
              <div className="feature-icon-wrap">{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Screenshots ──────────────────────────────────────────────────────────────

function AppScreenshots() {
  return (
    <section className="screenshots-section">
      <div className="container">
        <div className="section-header reveal-on-scroll">
          <p className="section-label">App preview</p>
          <h2 className="section-title">See it in action</h2>
          <p className="section-subtitle">A clean interface built for how coaches actually work.</p>
        </div>
        <div className="screenshots-grid">
          <div className="screenshot-col reveal-on-scroll">
            <img src={scheduleScreenshot} alt="Schedule" className="mockup-img" />
            <p className="screenshot-caption">Visual weekly scheduling with drag-and-drop</p>
          </div>
          <div className="screenshot-col reveal-on-scroll" style={{ animationDelay: '0.1s' }}>
            <img src={studentScreenshot} alt="Students" className="mockup-img" />
            <p className="screenshot-caption">Detailed student skill progression tracking</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-inner reveal-on-scroll">
          <div className="about-content">
            <p className="section-label">Our Story</p>
            <h2 className="section-title">Built by coaches, for coaches.</h2>
            <div className="about-text">
              <p>
                Courtly was born out of the frustration of managing a growing tennis academy with nothing but messy spreadsheets and generic scheduling tools.
              </p>
              <p>
                We realized that tennis professionals spend more time on admin than on the court. Our mission is to give you that time back with a platform as precise as your backhand.
              </p>
            </div>
          </div>
          <div className="about-visual">
            <div className="about-image-wrapper">
              <img src={coachImg} alt="Courtly Coach" className="about-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Pricing ──────────────────────────────────────────────────────────────────

const FEATURES = [
  { text: "Up to 5 Students", proText: "Unlimited Students" },
  { text: "25 Preset Drills", proText: "Unlimited Preset Drills" },
  { text: "Basic Calendar view" },
  { text: "Full 250+ Drill Library & Custom", proOnly: true },
  { text: "Recurring Lessons & Waitlist", proOnly: true },
  { text: "Court & Group Management", proOnly: true },
  { text: "Payment & Income Tracking", proOnly: true },
];

function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  const monthlyPrice = isAnnual ? 19 : 29;
  const annualTotal = 19 * 12;

  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <div className="section-header reveal-on-scroll">
          <p className="section-label">Pricing</p>
          <h2 className="section-title">Simple, honest pricing</h2>
          <p className="section-subtitle">Start free and upgrade when you're ready to grow.</p>
        </div>

        {/* Toggle */}
        <div className="pricing-toggle-wrap reveal-on-scroll">
          <div className="pricing-toggle">
            <button className={`toggle-btn ${isAnnual ? 'active' : ''}`} onClick={() => setIsAnnual(true)}>Annual</button>
            <button className={`toggle-btn ${!isAnnual ? 'active' : ''}`} onClick={() => setIsAnnual(false)}>Monthly</button>
          </div>
          {isAnnual && <span className="toggle-savings">Save 34%</span>}
        </div>

        <div className="pricing-grid">
          {/* Basic */}
          <div className="pricing-card reveal-on-scroll">
            <div className="plan-header">
              <p className="plan-name">Basic</p>
              <div className="plan-price-row">
                <span className="plan-amount">$0</span>
                <div className="plan-price-meta">
                  <span>PER MONTH, FREE</span>
                  <span>FOREVER</span>
                </div>
              </div>
            </div>
            <a href="https://app.courtlytennis.com" className="btn btn-current plan-btn">Current Plan</a>
            <div className="plan-features-header">Includes:</div>
            <ul className="plan-features">
              {FEATURES.map((f, i) => (
                <li key={i} className={f.proOnly ? 'locked' : ''}>
                  {f.proOnly ? <GrayX /> : <GreenCheck />}
                  <span>{f.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pro */}
          <div className="pricing-card pricing-card-pro reveal-on-scroll" style={{ animationDelay: '0.1s' }}>
            <p className="plan-popular-label">Most Popular</p>
            <div className="plan-header">
              <p className="plan-name pro">Courtly Pro</p>
              <div className="plan-price-row">
                <span className="plan-amount">${monthlyPrice}</span>
                <div className="plan-price-meta">
                  <span>PER MONTH</span>
                  {isAnnual && <span className="plan-annual-note">(billed ${annualTotal} yearly)</span>}
                </div>
              </div>
            </div>
            <a href="https://app.courtlytennis.com" className="btn btn-primary plan-btn">Get Started</a>
            <div className="plan-features-header">Everything from Basic and:</div>
            <ul className="plan-features">
              {FEATURES.map((f, i) => (
                <li key={i}>
                  <GreenCheck />
                  <span>{f.proText || f.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA ──────────────────────────────────────────────────────────────────────

function CTASection() {
  return (
    <section className="cta-section reveal-on-scroll">
      <div className="container">
        <div className="cta-inner">
          <CourtDecoration />
          <div className="cta-content">
            <h2 className="cta-title">Ready to level up<br />your coaching?</h2>
            <a href="https://app.courtlytennis.com" className="btn btn-primary cta-btn">
              Get started free <ArrowRightIcon />
            </a>
            <p className="cta-note">No credit card required · Free plan forever</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="logo-area">
          <img src={logoImg} alt="Courtly" style={{ height: '32px' }} />
        </div>
        <p className="footer-copyright">© {new Date().getFullYear()} Courtly. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-main">
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <StatsBar />
        <FeaturesGrid />
        <AppScreenshots />
        <AboutSection />
        <Pricing />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
