import React from 'react';
import './ScheduleMockup.css';

const ChevronLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const HomeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const ScheduleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
    <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
  </svg>
);

const DrillsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6.5 6.5 11 11" />
    <path d="m21 21-1-1" />
    <path d="m3 3 1 1" />
    <path d="m18 22 .44-2.2c.1-.51.46-.92.95-1.07l2.1-.64c.52-.16.52-.89 0-1.05l-2.1-.64c-.49-.15-.85-.56-.95-1.07l-.44-2.2c-.11-.53-.87-.53-.98 0l-.44 2.2c-.1.51-.46.92-.95 1.07l-2.1.64c-.52.16-.52.89 0 1.05l2.1.64c.49.15.85.56.95 1.07l.44 2.2c.11.53.87.53.98 0Z" />
    <path d="m2 18 .44-2.2c.1-.51.46-.92.95-1.07l2.1-.64c.52-.16.52-.89 0-1.05l-2.1-.64c-.49-.15-.85-.56-.95-1.07L2 10.1c-.11-.53-.87-.53-.98 0l-.44 2.2c-.1.51-.46.92-.95 1.07l-2.1.64c-.52.16-.52.89 0 1.05l2.1.64c.49.15.85.56.95 1.07l.44 2.2c.11.53.87.53.98 0Z" />
  </svg>
);

const StudentsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const ProgramsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
    <path d="M6.5 17H20" />
  </svg>
);

const SessionCard = ({ name, type, status, initial, initialColor }) => (
  <div className="session-card">
    <div className="session-card-left">
      <div className="session-avatar" style={{ backgroundColor: initialColor }}>{initial}</div>
      <div className="session-info">
        <div className="session-name">{name}</div>
        <div className="session-details">{type} • Center Court</div>
      </div>
    </div>
    <div className={`session-status status-${status.toLowerCase()}`}>
      {status}
    </div>
  </div>
);

const ScheduleMockup = () => {
  const days = [
    { day: 'MON', date: 23 },
    { day: 'TUE', date: 24 },
    { day: 'WED', date: 25 },
    { day: 'THU', date: 26, active: true },
    { day: 'FRI', date: 27 },
    { day: 'SAT', date: 28 },
    { day: 'SUN', date: 29 },
  ];

  const sessions = [
    { time: '00:00', name: 'Jordan Baker', type: 'Group', status: 'PENDING', initial: 'J', initialColor: '#f1f5f9' },
    { time: '08:00', name: 'Jake Smith', type: 'Group', status: 'PENDING', initial: 'J', initialColor: '#f1f5f9' },
    { time: '16:00', name: 'Jake Smith', type: 'Group', status: 'PENDING', initial: 'J', initialColor: '#f1f5f9' },
    { time: '18:00', name: 'Jake Smith', type: 'Private', status: 'CONFIRMED', initial: 'J', initialColor: '#dcfce7' },
  ];

  return (
    <div className="mobile-mockup">
      <div className="mockup-screen">
        {/* Header */}
        <header className="mockup-header">
          <ChevronLeft />
          <h2 className="month-title">March 2026</h2>
          <ChevronRight />
        </header>

        {/* Calendar Strip */}
        <div className="calendar-strip">
          {days.map((d, i) => (
            <div key={i} className={`calendar-day ${d.active ? 'active' : ''}`}>
              <span className="day-name">{d.day}</span>
              <span className="day-date">{d.date}</span>
            </div>
          ))}
        </div>

        {/* Sessions Section */}
        <div className="sessions-section">
          <h3 className="section-title">TODAY'S SESSIONS</h3>
          
          <div className="timeline-container">
            <div className="timeline-line"></div>
            {sessions.map((session, i) => (
              <div key={i} className="timeline-item">
                <div className="time-marker">
                  <span className="time-text">{session.time}</span>
                  <div className={`time-dot ${session.status === 'CONFIRMED' ? 'confirmed' : ''}`}></div>
                </div>
                <SessionCard {...session} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Nav */}
        <nav className="bottom-nav">
          <div className="nav-item">
            <HomeIcon />
            <span>HOME</span>
          </div>
          <div className="nav-item active">
            <ScheduleIcon />
            <span>SCHEDULE</span>
          </div>
          <div className="nav-item">
            <DrillsIcon />
            <span>DRILLS</span>
          </div>
          <div className="nav-item">
            <StudentsIcon />
            <span>STUDENTS</span>
          </div>
          <div className="nav-item">
            <ProgramsIcon />
            <span>PROGRAMS</span>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default ScheduleMockup;
