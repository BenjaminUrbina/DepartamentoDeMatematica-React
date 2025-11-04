import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavbarComponent = () => {
  return (
    <Navbar className="navbar navbar-expand-lg shadow p-3 bg-body-tertiary rounded">
      <Container>
        <Link className="navbar-brand" to="/">
          <img
            src="/images/icon-uls.png"
            alt="Logo universidad de la serena"
            height={70}
            className="d-inline-block align-text-top"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <Nav.Link as={Link} to="/">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/noticias">
              Noticias
            </Nav.Link>
            <Nav.Link as={Link} to="/docentes">
              Académicos
            </Nav.Link>
            <Nav.Link as={Link} to="/publicaciones">
              Publicaciones
            </Nav.Link>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Otros
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    href="https://www.dmatuls.cl/portal/?page_id=503"
                    target="_blank"
                    rel="noreferrer"
                  >
                    DMATv
                  </a>
                </li>
              </ul>
            </li>

            <Nav.Link as={Link} to="/contacto">
              Contacto
            </Nav.Link>
            <Nav.Link as={Link} to="/sobre-nosotros">
              Sobre nosotros
            </Nav.Link>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
