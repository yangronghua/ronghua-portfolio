function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <p className="header-label">IT PROFESSIONAL</p>

        <h1>Ronghua Yang</h1>

        <p className="header-title">Junior Software Developer</p>

        <p className="header-location">Sydney, Australia</p>

        <a
          className="github-link"
          href="https://github.com/yangronghua"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a className="resume-link" href="/Ronghua-Yang-Resume.pdf" download>
          Download Resume
        </a>
      </div>
    </header>
  );
}

export default Header