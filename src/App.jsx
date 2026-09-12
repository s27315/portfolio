function NetworkMotif() {
  // Subtle node-and-line graphic echoing "networks & communication systems"
  return (
    <svg
      className="hero-net"
      viewBox="0 0 560 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g stroke="#5ec2cf" strokeWidth="1">
        <line x1="80" y1="120" x2="260" y2="60" />
        <line x1="260" y1="60" x2="440" y2="140" />
        <line x1="80" y1="120" x2="180" y2="260" />
        <line x1="260" y1="60" x2="180" y2="260" />
        <line x1="440" y1="140" x2="380" y2="300" />
        <line x1="180" y1="260" x2="380" y2="300" />
        <line x1="180" y1="260" x2="140" y2="420" />
        <line x1="380" y1="300" x2="320" y2="440" />
        <line x1="140" y1="420" x2="320" y2="440" />
        <line x1="380" y1="300" x2="480" y2="380" />
      </g>
      <g fill="#d8a657">
        <circle cx="80" cy="120" r="5" />
        <circle cx="260" cy="60" r="4" />
        <circle cx="440" cy="140" r="5" />
        <circle cx="180" cy="260" r="6" />
        <circle cx="380" cy="300" r="5" />
        <circle cx="140" cy="420" r="4" />
        <circle cx="320" cy="440" r="5" />
        <circle cx="480" cy="380" r="4" />
      </g>
    </svg>
  )
}

const projects = [
  {
    title: '10 Enterprise Java Systems',
    repo: 'amani-shadia',
    desc: 'Ten complete Java systems — Hospital, Banking, School, Hotel, Airline, Library, Real Estate, Payroll, Vehicle Rental, and Online Shopping — demonstrating inheritance, encapsulation, and exception handling.',
    tags: ['Java', 'OOP'],
  },
  {
    title: 'Laundry Management System',
    repo: 'OOP_ASSIGNMENT',
    desc: 'A full Java application for order tracking, customer records, and payments, built with OOP principles, encapsulation, and data validation.',
    tags: ['Java'],
  },
  {
    title: 'She Can Code Web Projects',
    repo: 'shecancode',
    desc: 'Responsive layouts and interactive React-based UI components built during a front-end development bootcamp.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    title: 'Introduction to Linux',
    repo: 'Introduction-to-Linux.git-',
    desc: 'Command-line and shell exercises from Linux Administration coursework — file permissions, navigation, and basic scripting.',
    tags: ['Linux', 'Shell'],
  },
  {
    title: 'Lineups Assignment',
    repo: 'lineups-assignment',
    desc: 'Class assignment project. Edit this line with a short description of what it builds and why.',
    tags: ['Assignment'],
  },
  {
    title: 'First Web Project',
    repo: 'first',
    desc: 'An early HTML project — first steps in structuring and styling a web page.',
    tags: ['HTML'],
  },
]

const education = [
  {
    year: '2023 — Present',
    title: 'BSc Information Technology — Networks & Communication Systems',
    place: 'Adventist University of Central Africa (AUCA), Kigali, Rwanda',
    note: 'Overall GPA 13.19/20 · Major GPA 13.01/20 (Second Class Honours, Upper Division)',
  },
]

const experience = [
  {
    role: 'Web Development Trainee',
    org: 'She Can Code Training Program',
    period: 'Jan 2025 – May 2025',
    bullets: [
      'Completed an intensive front-end bootcamp, graduating with a portfolio of live projects.',
      'Built and deployed responsive web applications with HTML, CSS, JavaScript, and React, version-controlled on GitHub.',
      'Collaborated in agile team environments, strengthening peer-review, debugging, and teamwork skills.',
    ],
  },
  {
    role: 'Independent Story Writer & Digital Content Creator',
    org: 'Wattpad',
    period: '2023 – Present',
    bullets: [
      'Published original storytelling content, building a readership of 500+ across multiple stories.',
      'Grew audience engagement through multi-platform social media outreach and content promotion.',
    ],
  },
]

const languages = [
  { name: 'Kinyarwanda', level: 'Native' },
  { name: 'English', level: 'Proficient — Certified' },
  { name: 'French', level: 'Basic' },
]

export default function App() {
  const cvHref = `${import.meta.env.BASE_URL}Shadia_Amani_CV.pdf`

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <a className="nav-mark" href="#top">
            Shadia Amani
          </a>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <main id="top">
        <header className="hero">
          <NetworkMotif />
          <div className="wrap">
            <p className="hero-eyebrow">
              IT Student — Networks &amp; Communication Systems, AUCA
            </p>
            <h1>Building reliable systems, one connection at a time.</h1>
            <p className="lead">
              I'm Shadia, a third-year IT student specializing in Networks and Communication
              Systems, and a full-stack developer working across HTML, CSS, JavaScript, React,
              Next.js, Java, C, and SQL. 25+ active repositories, one bootcamp, and a steady
              habit of finishing what I start.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={cvHref} target="_blank" rel="noreferrer">
                View CV
              </a>
              <a
                className="btn btn-ghost"
                href="https://github.com/s27315"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </header>

        <section id="about">
          <div className="wrap">
            <div className="section-head">
              <h2>About</h2>
              <span className="section-num">01</span>
            </div>
            <div className="about-grid">
              <div>
                <p>
                  I'm a third-year Information Technology student at AUCA, specializing in
                  Networks and Communication Systems, with a strong foundation in networking,
                  Linux administration, databases, and software engineering practices.
                </p>
                <p>
                  Alongside coursework, I work as a full-stack developer — HTML, CSS,
                  JavaScript, React, Next.js, Java (OOP), C, and SQL — and bring proven
                  communication and project-delivery skills from a front-end development
                  bootcamp. I'm looking for a hands-on internship where I can apply what I know
                  and keep learning fast.
                </p>
              </div>
              <ul className="fact-list">
                <li>
                  <span>Based in</span>
                  <span>Kigali, Rwanda</span>
                </li>
                <li>
                  <span>Studying</span>
                  <span>IT — Networks &amp; Comm. Systems</span>
                </li>
                <li>
                  <span>School</span>
                  <span>AUCA</span>
                </li>
                <li>
                  <span>GPA</span>
                  <span>13.19/20 overall</span>
                </li>
                <li>
                  <span>Open to</span>
                  <span>Internships / collaboration</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="wrap">
            <div className="section-head">
              <h2>Skills</h2>
              <span className="section-num">02</span>
            </div>
            <div className="skills-grid">
              <div className="skill-group">
                <h3>Web Development</h3>
                <ul>
                  <li>HTML5 &amp; CSS3</li>
                  <li>JavaScript (ES6+)</li>
                  <li>React.js &amp; Next.js</li>
                </ul>
              </div>
              <div className="skill-group">
                <h3>Programming &amp; Data</h3>
                <ul>
                  <li>Java (OOP), C</li>
                  <li>Data structures &amp; OO design</li>
                  <li>MySQL &amp; database management</li>
                </ul>
              </div>
              <div className="skill-group">
                <h3>Networking &amp; Systems</h3>
                <ul>
                  <li>Computer networks</li>
                  <li>Routing &amp; switching</li>
                  <li>Linux administration</li>
                </ul>
              </div>
            </div>
            <div className="skills-grid" style={{ marginTop: 32 }}>
              <div className="skill-group">
                <h3>Tools</h3>
                <ul>
                  <li>Git &amp; GitHub (25+ repos)</li>
                  <li>Agile teamwork</li>
                </ul>
              </div>
              <div className="skill-group">
                <h3>Languages</h3>
                <ul>
                  {languages.map((l) => (
                    <li key={l.name}>
                      {l.name} — {l.level}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="skill-group">
                <h3>Other</h3>
                <ul>
                  <li>Creative writing &amp; content strategy</li>
                  <li>Public speaking &amp; leadership</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="wrap">
            <div className="section-head">
              <h2>Projects</h2>
              <span className="section-num">03</span>
            </div>
            {projects.map((p) => (
              <div className="project-row" key={p.repo}>
                <div>
                  <h3 className="project-title">
                    <a
                      href={`https://github.com/s27315/${p.repo}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {p.title}
                    </a>
                  </h3>
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-tags">
                    {p.tags.map((t) => (
                      <span className="tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  className="project-link"
                  href={`https://github.com/s27315/${p.repo}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  View repo ↗
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="experience">
          <div className="wrap">
            <div className="section-head">
              <h2>Experience</h2>
              <span className="section-num">04</span>
            </div>
            {experience.map((x) => (
              <div className="edu-row" key={x.role}>
                <div className="edu-year">{x.period}</div>
                <div>
                  <h3>
                    {x.role} — {x.org}
                  </h3>
                  <ul style={{ margin: '6px 0 0', paddingLeft: 18, color: 'var(--text-muted)' }}>
                    {x.bullets.map((b) => (
                      <li key={b} style={{ marginBottom: 4 }}>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="education">
          <div className="wrap">
            <div className="section-head">
              <h2>Education</h2>
              <span className="section-num">05</span>
            </div>
            {education.map((e) => (
              <div className="edu-row" key={e.title}>
                <div className="edu-year">{e.year}</div>
                <div>
                  <h3>{e.title}</h3>
                  <p>{e.place}</p>
                  {e.note && (
                    <p style={{ marginTop: 4, fontSize: '0.85rem' }}>{e.note}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact">
          <div className="wrap">
            <div className="section-head">
              <h2>Contact</h2>
              <span className="section-num">06</span>
            </div>
            <div className="contact-grid">
              <a className="contact-card" href="mailto:amanishadia3@gmail.com">
                <span className="contact-label">Email</span>
                <span className="contact-value">amanishadia3@gmail.com</span>
              </a>
              <a
                className="contact-card"
                href="https://www.linkedin.com/in/shadia-amani/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-label">LinkedIn</span>
                <span className="contact-value">shadia-amani</span>
              </a>
              <a
                className="contact-card"
                href="https://github.com/s27315"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-label">GitHub</span>
                <span className="contact-value">s27315</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">© {new Date().getFullYear()} Shadia Amani</div>
      </footer>
    </>
  )
}
