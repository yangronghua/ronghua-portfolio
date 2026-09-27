import { generateResumePDF } from "../utils/resumeGenerator"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <a href="#about">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a
          href="#"
          onClick={(event) => {
            event.preventDefault();
            generateResumePDF();
          }}
        >
          Download PDF
        </a>
      </div>
    </nav>
  );
}

export default Navbar
