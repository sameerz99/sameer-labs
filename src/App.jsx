import './App.css'

const projects = [
  {
    number: '01',
    name: 'Orbit Finance',
    type: 'PRODUCT DESIGN · WEB APP',
    description: 'A calmer way to understand your money and make it go further.',
    className: 'orbit',
    mark: 'orbit',
    tags: ['React', 'Product design'],
  },
  {
    number: '02',
    name: 'Sunday Supply',
    type: 'BRANDING · E-COMMERCE',
    description: 'A little corner of the internet for things made to last.',
    className: 'sunday',
    mark: 'sunday.',
    tags: ['Shopify', 'Art direction'],
  },
]

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      viewBox="0 0 20 20"
      fill="none"
    >
      {diagonal ? (
        <path d="M5 15 15 5M6 5h9v9" />
      ) : (
        <path d="M3.5 10h12m-5-5 5 5-5 5" />
      )}
    </svg>
  )
}

function App() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Sameer, home">
          <span className="wordmark-mark">s.</span>
          <span>sameer<span className="wordmark-dot">labs</span></span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-availability" href="#contact">
          <span className="availability-dot" />
          Available for work
        </a>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> INDEPENDENT DEVELOPER & DESIGNER</p>
          <h1>
            Making the web
            <br />
            feel a little more <span className="serif-word">human.</span>
          </h1>
          <p className="hero-description">
            Hey, I’m Sameer — I design and build thoughtful digital experiences
            for people and the things they care about.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">
              Explore my work <ArrowIcon />
            </a>
            <a className="text-link" href="#about">A bit about me</a>
          </div>
          <div className="hero-note">
            <span className="note-line" />
            <span>Currently crafting on the internet<br />from Kathmandu, Nepal <span aria-hidden="true">↗</span></span>
          </div>
        </div>

        <div className="hero-art" aria-label="Abstract colorful artwork" role="img">
          <div className="art-grid" />
          <div className="art-glow" />
          <div className="art-orbit art-orbit-one" />
          <div className="art-orbit art-orbit-two" />
          <div className="art-sun" />
          <div className="art-card">
            <span className="art-card-label">A LITTLE CURIOSITY</span>
            <span className="art-card-title">Ideas into<br /><i>interfaces.</i></span>
            <span className="art-card-footer"><span>CREATIVE PRACTICE</span><span>2025—26</span></span>
          </div>
          <span className="art-index">FIG. 01 — A WORK IN PROGRESS</span>
          <span className="art-sparkle sparkle-one">✳</span>
          <span className="art-sparkle sparkle-two">✳</span>
        </div>
      </section>

      <div className="ticker" aria-label="Designing with care, building with purpose">
        <div className="ticker-track" aria-hidden="true">
          {Array.from({ length: 2 }, (_, index) => (
            <span className="ticker-group" key={index}>
              <span>DESIGNING WITH CARE</span><span className="ticker-star">✳</span>
              <span>BUILDING WITH PURPOSE</span><span className="ticker-star">✳</span>
              <span>STAYING CURIOUS</span><span className="ticker-star">✳</span>
            </span>
          ))}
        </div>
      </div>

      <section className="work-section section-wrap" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span className="eyebrow-line" /> A FEW THINGS I’VE MADE</p>
            <h2>Selected <span className="serif-word">work.</span></h2>
          </div>
          <p className="section-aside">A collection of ideas, experiments,<br />and happy little accidents.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className={`project-art ${project.className}`}>
                <div className="project-art-top"><span>FEATURED PROJECT</span><span>{project.number} / 02</span></div>
                <div className="project-art-mark">{project.mark}</div>
                {project.className === 'orbit' ? (
                  <div className="orbit-widget">
                    <span>YOUR BALANCE</span><strong>$24,680<span>.00</span></strong>
                    <div className="widget-chart"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
                    <span className="widget-caption">↑ 12.8% this month</span>
                  </div>
                ) : (
                  <div className="sunday-widget">
                    <span>GOOD THINGS, MADE SLOWLY.</span>
                    <strong>Objects for<br /><i>everyday rituals.</i></strong>
                    <span className="shop-link">SHOP THE COLLECTION <ArrowIcon /></span>
                  </div>
                )}
                <span className="project-art-caption">{project.type}</span>
              </div>
              <div className="project-info">
                <div>
                  <span className="project-number">{project.number}</span>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
                <a className="project-link" href="#contact" aria-label={`Ask me about ${project.name}`}>
                  <ArrowIcon diagonal />
                </a>
              </div>
              <div className="project-tags">
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
        <p className="work-footnote"><span className="footnote-star">✳</span> A couple of concepts to get things started — more work coming soon.</p>
      </section>

      <section className="about-section" id="about">
        <div className="about-inner section-wrap">
          <div className="about-stamp" aria-hidden="true">
            <div className="stamp-ring"><span>MADE WITH INTENTION · MADE WITH INTENTION ·</span></div>
            <span className="stamp-center">s<span>.</span></span>
          </div>
          <div className="about-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> A LITTLE ABOUT ME</p>
            <h2>Curious by nature.<br /><span className="serif-word">Intentional</span> by design.</h2>
            <p className="about-description">
              I’m a developer who cares about the details — the way something
              works, the way it feels, and the little moments in between. I like
              turning complex ideas into simple, useful, and genuinely lovely
              experiences.
            </p>
            <div className="skills">
              <span>WHAT I BRING TO THE TABLE</span>
              <ul><li>Creative development</li><li>Interface design</li><li>Thoughtful details</li></ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="contact-section section-wrap" id="contact">
        <div className="contact-top">
          <p className="eyebrow"><span className="eyebrow-line" /> HAVE A GOOD ONE IN MIND?</p>
          <span className="contact-index">KTM · AVAILABLE WORLDWIDE</span>
        </div>
        <div className="contact-content">
          <h2>Let’s make<br />something <span className="serif-word">matter.</span></h2>
          <a className="button button-light" href="mailto:hello@sameer.dev">
            Say hello <ArrowIcon diagonal />
          </a>
        </div>
        <div className="footer-bottom">
          <a className="wordmark footer-wordmark" href="#home">
            <span className="wordmark-mark">s.</span>
            <span>sameer<span className="wordmark-dot">labs</span></span>
          </a>
          <p>Designed with care, built with React. <span>© 2026 Sameer</span></p>
          <a className="back-to-top" href="#home">BACK TO TOP ↑</a>
        </div>
      </footer>
    </main>
  )
}

export default App
