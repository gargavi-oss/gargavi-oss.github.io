import { useState } from 'react'
import {
  profile,
  about,
  education,
  projects,
  skills,
  socials,
  experience,
  achievements,
} from '../data/resume.js'
import {
  Terminal,
  ExternalLink,
  Mail,
  Globe,
  FileText,
  Award,
  BookOpen,
  Code,
  Sparkles,
  ArrowUpRight,
  Menu,
  X,
} from 'lucide-react'

function GithubIcon({ size = 22, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function LinkedinIcon({ size = 22, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

/* ─── Hand-Drawn Squiggly Underline SVG ─── */
function WavyUnderline({ stroke = '#ff4d4d' }) {
  return (
    <svg
      className="hd-section-title-svg"
      viewBox="0 0 200 14"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 8 C 30 2, 45 14, 75 7 C 105 0, 125 14, 155 7 C 175 2, 185 11, 198 8"
        stroke={stroke}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

/* ─── Hand-Drawn Doodle Arrow SVG ─── */
function DoodleArrow() {
  return (
    <svg
      width="64"
      height="46"
      viewBox="0 0 64 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 10 C 22 2, 40 8, 48 26 C 50 30, 52 35, 54 40"
        stroke="#ff4d4d"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeDasharray="4 3"
      />
      <path
        d="M44 38 L 54 41 L 56 30"
        stroke="#ff4d4d"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/* ─── Navigation Header ─── */
function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const links = ['about', 'experience', 'projects', 'skills', 'education', 'contact']

  return (
    <header className="hd-nav">
      <div className="hd-nav-inner">
        <a href="#hero" className="hd-nav-logo">
          <span>Avi Garg</span>
          <span className="hd-nav-logo-badge">dev</span>
        </a>

        {/* Desktop Links */}
        <nav className="hd-nav-links">
          {links.map((link) => (
            <a key={link} href={`#${link}`} className="hd-nav-link">
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
          <a
            href="/avi_s_resume-17.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hd-btn hd-btn-yellow"
            style={{ padding: '6px 16px', minHeight: '36px', fontSize: '1rem' }}
          >
            <FileText size={16} strokeWidth={2.5} />
            Resume
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="hd-hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X size={22} strokeWidth={2.5} /> : <Menu size={22} strokeWidth={2.5} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`hd-mobile-menu ${isOpen ? 'open' : ''}`}>
        {links.map((link) => (
          <a
            key={link}
            href={`#${link}`}
            className="hd-nav-link"
            onClick={() => setIsOpen(false)}
          >
            ✏️ {link.charAt(0).toUpperCase() + link.slice(1)}
          </a>
        ))}
        <a
          href="/avi_s_resume-17.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hd-btn hd-btn-yellow"
          style={{ width: '100%', textAlign: 'center' }}
          onClick={() => setIsOpen(false)}
        >
          <FileText size={18} strokeWidth={2.5} />
          View Resume (PDF)
        </a>
      </div>
    </header>
  )
}

/* ─── Hero Section ─── */
function Hero() {
  return (
    <section id="hero" className="hd-hero hd-container">
      <div className="hd-hero-badge">
        <span>👋 Hey there! Welcome to my notebook</span>
      </div>

      <h1 className="hd-hero-title">
        Avi Garg<span style={{ color: 'var(--hd-accent)', display: 'inline-block', transform: 'rotate(10deg)' }}>!</span>
      </h1>

      <div>
        <span className="hd-hero-role">
          {profile.role}
          <svg
            style={{ position: 'absolute', bottom: -4, left: 0, width: '100%', height: 8 }}
            viewBox="0 0 100 8"
            preserveAspectRatio="none"
          >
            <path d="M0 5 Q 50 1 100 5" stroke="#2d5da1" strokeWidth="2.5" fill="none" />
          </svg>
        </span>
      </div>

      <p className="hd-hero-tagline">{profile.tagline}</p>

      <div className="hd-hero-actions">
        <a href="#projects" className="hd-btn">
          Explore Projects
          <ArrowUpRight size={20} strokeWidth={2.5} />
        </a>

        <a
          href="/avi_s_resume-17.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hd-btn hd-btn-secondary"
        >
          <FileText size={18} strokeWidth={2.5} />
          Download Resume
        </a>

        {/* Hand-drawn arrow annotation */}
        <div className="hd-hero-arrow">
          <span className="hd-hero-arrow-text">check it out!</span>
          <DoodleArrow />
        </div>
      </div>
    </section>
  )
}

/* ─── About Section ─── */
function AboutSection() {
  return (
    <section id="about" className="hd-section hd-container">
      <div className="hd-section-header">
        <span className="hd-section-tag">Sticky Note #1</span>
        <div>
          <h2 className="hd-section-title">
            About Me
            <WavyUnderline />
          </h2>
        </div>
      </div>

      <div className="hd-about-grid">
        {/* Main Note Card */}
        <div className="hd-card hd-about-card">
          <div className="hd-tape" />
          <p className="hd-about-intro">
            Hi! I'm <span className="hd-highlight">{about.intro}</span> — a{' '}
            <span className="hd-highlight-blue">{profile.role}</span> based in {about.location}.
          </p>
          {about.lines.map((line, idx) => (
            <p key={idx} className="hd-about-line">
              {line}
            </p>
          ))}
          <p className="hd-about-line">
            I love designing backend architectures, building interactive AI applications,
            and collaborating on open-source software.
          </p>
        </div>

        {/* Quick Stats Grid */}
        <div className="hd-stats-grid">
          <div className="hd-stat-card">
            <div className="hd-stat-num">{projects.length}+</div>
            <div className="hd-stat-label">Projects Built</div>
          </div>
          <div className="hd-stat-card">
            <div className="hd-stat-num">{skills.length}</div>
            <div className="hd-stat-label">Skill Groups</div>
          </div>
          <div className="hd-stat-card">
            <div className="hd-stat-num">{experience.length}</div>
            <div className="hd-stat-label">Internship</div>
          </div>
          <div className="hd-stat-card">
            <div className="hd-stat-num">100+</div>
            <div className="hd-stat-label">LeetCode Qs</div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Experience Section ─── */
function ExperienceSection() {
  return (
    <section id="experience" className="hd-section hd-container">
      <div className="hd-section-header">
        <span className="hd-section-tag">Work History</span>
        <div>
          <h2 className="hd-section-title">
            Work Experience
            <WavyUnderline stroke="#2d5da1" />
          </h2>
        </div>
        <p className="hd-section-subtitle">
          Real-world engineering, production REST APIs, and agile development.
        </p>
      </div>

      <div className="hd-timeline">
        {experience.map((exp) => (
          <div key={exp.id} className="hd-timeline-item">
            <div className="hd-timeline-dot" />
            <div className="hd-card hd-timeline-card">
              <div className="hd-tack" />
              <div className="hd-exp-header">
                <div>
                  <h3 className="hd-exp-company">{exp.company}</h3>
                  <p className="hd-exp-role">{exp.role}</p>
                </div>
                <div className="hd-exp-meta">
                  <div className="hd-exp-duration">{exp.duration}</div>
                  <div className="hd-exp-location">📍 {exp.location}</div>
                </div>
              </div>

              <ul className="hd-exp-list">
                {exp.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── Projects Section ─── */
function ProjectsSection() {
  return (
    <section id="projects" className="hd-section hd-container">
      <div className="hd-section-header">
        <span className="hd-section-tag">Featured Code</span>
        <div>
          <h2 className="hd-section-title">
            Projects I've Built
            <WavyUnderline />
          </h2>
        </div>
        <p className="hd-section-subtitle">
          "Talk is cheap. Show me the code." Here are selected projects from AI systems to full-stack platforms.
        </p>
      </div>

      <div className="hd-projects-grid">
        {projects.map((project, idx) => {

          return (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`hd-card hd-project-card `}
            >
              {/* Tape or Tack Decoration */}
              {idx % 2 === 0 ? <div className="hd-tape" /> : <div className="hd-tack" />}

              <div>
                <div className="hd-project-top">
                  <span className="hd-project-num">#{project.id}</span>
                  <span className="hd-project-category">
                    {project.tech?.[0] || 'Full-Stack'}
                  </span>
                </div>

                <h3 className="hd-project-title">{project.title}</h3>
                <p className="hd-project-desc">{project.desc}</p>
              </div>

              <div>
                {project.tech && (
                  <div className="hd-project-tech">
                    {project.tech.map((t) => (
                      <span key={t} className="hd-tech-pill">
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                <span className="hd-project-link">
                  Open Project Repository
                  <ExternalLink size={16} strokeWidth={2.5} />
                </span>
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}

/* ─── Skills Section ─── */
function SkillsSection() {
  const iconMap = {
    Languages: '💻',
    'Frameworks & Libraries': '⚡',
    'Databases & Design': '🗄️',
    'Cloud & DevOps': '☁️',
    'Core CS & SDLC': '🧠',
    'Machine Learning': '🤖',
  }

  return (
    <section id="skills" className="hd-section hd-container">
      <div className="hd-section-header">
        <span className="hd-section-tag">Toolbox</span>
        <div>
          <h2 className="hd-section-title">
            Skills & Technologies
            <WavyUnderline stroke="#2d5da1" />
          </h2>
        </div>
        <p className="hd-section-subtitle">
          Core languages, modern frameworks, cloud tools, and development practices.
        </p>
      </div>

      <div className="hd-skills-grid">
        {skills.map(({ group, items }, idx) => (
          <div key={group} className="hd-card hd-skill-card">
            {idx === 0 && <div className="hd-tape hd-tape-left" />}
            <div className="hd-skill-header">
              <div className="hd-skill-icon-wrap">{iconMap[group] || '📌'}</div>
              <h3 className="hd-skill-group">{group}</h3>
            </div>
            <div className="hd-skill-tags">
              {items.split(', ').map((item) => (
                <span key={item} className="hd-skill-tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── Education & Honors Section ─── */
function EducationAndHonors() {
  return (
    <section id="education" className="hd-section hd-container">
      <div className="hd-dual-grid">
        {/* Education Column */}
        <div>
          <div className="hd-section-header" style={{ textAlign: 'left', marginBottom: '24px' }}>
            <span className="hd-section-tag">Academics</span>
            <div>
              <h2 className="hd-section-title" style={{ fontSize: '2.2rem' }}>
                Education 🎓
                <WavyUnderline />
              </h2>
            </div>
          </div>

          {education.map((item, idx) => (
            <div key={idx} className="hd-card hd-edu-card">
              <div className="hd-tape" />
              <h3 className="hd-item-title">{item.title}</h3>
              <p className="hd-item-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Honors & Achievements Column */}
        <div>
          <div className="hd-section-header" style={{ textAlign: 'left', marginBottom: '24px' }}>
            <span className="hd-section-tag">Recognition</span>
            <div>
              <h2 className="hd-section-title" style={{ fontSize: '2.2rem' }}>
                Achievements 🏆
                <WavyUnderline stroke="#2d5da1" />
              </h2>
            </div>
          </div>

          {achievements.map((item, idx) => (
            <div key={idx} className="hd-card hd-achieve-card hd-card-yellow">
              <div className="hd-tack" />
              <h3 className="hd-item-title">★ {item.title}</h3>
              <p className="hd-item-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Contact Section ─── */
function ContactSection() {
  const getSocialIcon = (title) => {
    switch (title.toLowerCase()) {
      case 'github':
        return <GithubIcon size={22} />
      case 'linkedin':
        return <LinkedinIcon size={22} />
      case 'email':
        return <Mail size={22} strokeWidth={2.5} />
      default:
        return <Globe size={22} strokeWidth={2.5} />
    }
  }

  return (
    <section id="contact" className="hd-section hd-container">
      <div className="hd-card hd-contact-box">
        <div className="hd-tape" />
        <span className="hd-section-tag">Say Hello</span>

        <h2 className="hd-section-title" style={{ display: 'block', margin: '10px 0 20px' }}>
          Let's Build Something Together! 📬
        </h2>

        <p className="hd-contact-text">
          I'm always open to discussing new projects, internship opportunities, or interesting software challenges.
          Feel free to drop a message!
        </p>

        <div className="hd-social-grid">
          {socials.map((s) => (
            <a
              key={s.id}
              href={s.url}
              target={s.url.startsWith('mailto:') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="hd-social-card"
            >
              {getSocialIcon(s.title)}
              <span>{s.title}</span>
            </a>
          ))}
        </div>

        <a
          href={`mailto:${profile.email}`}
          className="hd-btn"
          style={{ fontSize: '1.3rem', padding: '14px 34px' }}
        >
          <Mail size={20} strokeWidth={2.5} />
          Send Me An Email
        </a>
      </div>
    </section>
  )
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="hd-footer hd-container">
      <div className="hd-footer-content">
        <p>
          Handcrafted with ☕ and code by <strong>{profile.name}</strong> • {new Date().getFullYear()}
        </p>
        <p style={{ fontSize: '1rem', color: '#777', marginTop: '6px' }}>
          Tip: You can click the terminal button in the bottom-right corner to toggle terminal mode anytime!
        </p>
      </div>
    </footer>
  )
}

/* ─── Main Hand-Drawn GUI Portfolio Component ─── */
export default function GUIPortfolio({ onSwitchMode }) {
  return (
    <div className="gui-portfolio">
      {/* Sketchpad Navigation */}
      <Nav />

      {/* Tiny Hand-Drawn Stamp Toggle for Terminal Mode */}
      {onSwitchMode && (
        <button
          onClick={onSwitchMode}
          className="hd-corner-toggle"
          title="Switch to Interactive Terminal Mode"
          aria-label="Switch to Terminal Mode"
        >
          <Terminal size={22} strokeWidth={2.5} />
        </button>
      )}

      {/* Sections */}
      <main>
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationAndHonors />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
