import { personalInfo, skillsData, projectsData } from "./data/portfolioData";

function App() {
  return (
    <div className="bg-dark text-light min-vh-100 d-flex flex-column">
      <nav className="navbar navbar-expand-lg navbar-dark bg-black border-bottom border-secondary sticky-top py-3">
        <div className="container">
          <a
            className="navbar-brand fw-bold font-mono brand-hover"
            href="#hero"
          >
            MB<span className="text-primary">.dev</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navMenu"
          >
            <ul className="navbar-nav align-items-lg-center gap-2">
              <li className="nav-item">
                <a className="nav-link nav-custom-link" href="#sobre-mi">
                  Sobre mí
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-custom-link" href="#proyectos">
                  Proyectos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-custom-link" href="#habilidades">
                  Habilidades
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-custom-link" href="#contacto">
                  Contacto
                </a>
              </li>
              <li className="nav-item ms-lg-2">
                <a
                  href={personalInfo.cvUrl}
                  download
                  className="btn btn-outline-primary btn-sm px-3 fw-semibold font-mono btn-hover-effect"
                >
                  Descargar CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header
        id="hero"
        className="py-5 my-auto text-center border-bottom border-secondary"
      >
        <div className="container py-4">
          <h1 className="display-4 fw-bold mb-3">{personalInfo.name}</h1>
          <p
            className="lead text-light mx-auto mb-4"
            style={{ maxWidth: "650px" }}
          >
            {personalInfo.title}
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a
              href="#proyectos"
              className="btn btn-primary px-4 py-2 fw-semibold btn-hover-effect"
            >
              Ver Proyectos
            </a>
            <a
              href={personalInfo.cvUrl}
              download
              className="btn btn-outline-light px-4 py-2 fw-semibold btn-hover-effect"
            >
              Descargar CV
            </a>
          </div>
        </div>
      </header>

      <section
        id="sobre-mi"
        className="py-5 border-bottom border-secondary bg-black bg-opacity-50"
      >
        <div className="container py-3">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="fw-bold mb-3">Sobre mí</h2>
              <p className="fs-5 text-light lh-lg mb-0">{personalInfo.about}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="proyectos" className="py-5 border-bottom border-secondary">
        <div className="container py-3">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Proyectos Destacados</h2>
          </div>

          <div className="row g-4">
            {projectsData.map((project) => (
              <div key={project.id} className="col-lg-4 col-md-6">
                <div className="card h-100 bg-black border-secondary p-3 shadow-sm d-flex flex-column justify-content-between project-card">
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      {project.status === "production" ? (
                        <span className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25 px-2 py-1 font-mono">
                          🟢 En Producción
                        </span>
                      ) : (
                        <span className="badge bg-warning bg-opacity-10 text-warning border border-warning border-opacity-25 px-2 py-1 font-mono">
                          🟡 En Desarrollo
                        </span>
                      )}
                    </div>

                    <h4 className="fw-bold text-white mb-1">{project.title}</h4>
                    <p className="text-primary small fw-semibold mb-3">
                      {project.subtitle}
                    </p>
                    <p className="text-secondary small mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <div className="d-flex flex-wrap gap-1 mb-4">
                      {project.tech.map((t, index) => (
                        <span
                          key={index}
                          className="badge bg-secondary bg-opacity-25 text-light fw-normal font-mono"
                          style={{ fontSize: "0.75rem" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="d-flex gap-2">
                      {project.demoUrl ? (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-sm btn-primary flex-fill fw-semibold btn-hover-effect"
                        >
                          Ver Demo
                        </a>
                      ) : (
                        <button
                          className="btn btn-sm btn-outline-secondary flex-fill font-mono"
                          disabled
                        >
                          Próximamente
                        </button>
                      )}
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-sm btn-outline-light flex-fill fw-semibold btn-hover-effect"
                      >
                        Ver Código
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="habilidades"
        className="py-5 border-bottom border-secondary bg-black bg-opacity-50"
      >
        <div className="container py-3">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Conocimientos y Habilidades</h2>
          </div>

          <div className="row g-4">
            {Object.entries(skillsData).map(([category, items], idx) => (
              <div key={idx} className="col-md-6 col-lg-3">
                <div className="p-4 rounded border border-secondary bg-black h-100">
                  <h5 className="fw-bold text-primary mb-3">{category}</h5>
                  <ul className="list-unstyled mb-0">
                    {items.map((skill, sIdx) => (
                      <li
                        key={sIdx}
                        className="text-secondary small py-1 border-bottom border-secondary border-opacity-25 font-mono"
                      >
                        ▹ {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="py-5">
        <div className="container py-3 text-center">
          <h2 className="fw-bold mb-5">Contacto</h2>

          <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn btn-outline-light px-4 py-2 btn-hover-effect font-mono"
            >
              {personalInfo.email}
            </a>
            <a
              href={`https://wa.me/5493435611122`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-light px-4 py-2 btn-hover-effect font-mono"
            >
              WhatsApp
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-primary px-4 py-2 btn-hover-effect font-mono"
            >
              LinkedIn
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-secondary px-4 py-2 btn-hover-effect font-mono"
            >
              GitHub
            </a>
          </div>

          <p className="text-secondary small mb-0 font-mono">
            {personalInfo.location}
          </p>
        </div>
      </section>

      <footer className="mt-auto py-3 bg-black border-top border-secondary text-center">
        <div className="container">
          <span className="text-secondary small font-mono">
            © {new Date().getFullYear()} {personalInfo.name}
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
