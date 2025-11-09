import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="shadow bg-body-tertiary rounded">
      <Container fluid>
        <Link className="navbar-brand" to="/">
          <img
            src="/images/icon-uls.png"
            alt="Logo universidad de la serena"
            height={70}
            className="d-inline-block align-text-top"
          />
        </Link>

        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />

        <Navbar.Collapse
          className="justify-content-end"
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
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
