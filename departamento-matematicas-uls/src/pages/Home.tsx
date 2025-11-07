import { Link } from "react-router-dom";
import "../css/home.css";
// import "../css/noticias.css";

export default function Home() {
  return (
    <>
      <section className="container py-5" id="acerca">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <h1 className="section-title mb-3">Departamento de Matemáticas</h1>
            <p className="lead mb-3">
              Formamos profesionales con sólidos fundamentos, impulsamos la
              investigación y apoyamos la docencia de pre y postgrado en la ULS.
            </p>
            <ul className="list-unstyled mb-4">
              <li className="mb-2">
                Líneas: Análisis, Álgebra, Probabilidad/Estadística, Modelación.
              </li>
              <li className="mb-2">
                Apoyo a carreras de ingeniería y pedagogía.
              </li>
              <li className="mb-2">
                Vinculación escolar y extensión universitaria.
              </li>
            </ul>

            <Link to="/contacto" className="btn btn-primary">
              Contactar
            </Link>

            <a href="#noticias" className="btn btn-outline-primary ms-2">
              Ver noticias
            </a>
          </div>

          <div className="col-lg-6">
            <img
              src="/images/fondo_mate_depa.jpg"
              className="img-fluid rounded-3 shadow"
              alt="Departamento de Matemáticas ULS"
            />
          </div>
        </div>
      </section>

      <section className="bg-light py-5" id="noticias">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h2 className="section-title m-0">Noticias Recientes</h2>

            <Link to="/noticias" className="btn btn-primary">
              Ver todas
            </Link>
          </div>

          <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-3">
            <div className="col">
              <article className="card h-100 shadow-sm">
                <img
                  src="/images/slide2.jpg"
                  className="card-img-top"
                  alt="Bienvenida"
                />
                <div className="card-body">
                  <h3 className="h5 card-title">
                    Bienvenido al Departamento de Matemáticas
                  </h3>
                  <p className="card-text">
                    Conoce nuestras actividades y comunidad académica.
                  </p>
                  <a
                    href="https://new.express.adobe.com/webpage/ajNAnc4SfTCtJ"
                    className="stretched-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Leer más
                  </a>
                </div>
              </article>
            </div>

            <div className="col">
              <article className="card h-100 shadow-sm">
                <img
                  src="/images/slide_1--938x370.jpg"
                  className="card-img-top"
                  alt="Capacitación"
                />
                <div className="card-body">
                  <h3 className="h5 card-title">
                    Capacitación Departamento de Matemáticas
                  </h3>
                  <p className="card-text">
                    Se realizaron talleres de actualización para docentes.
                  </p>
                  <a
                    href="https://new.express.adobe.com/webpage/ajNAnc4SfTCtJ"
                    className="stretched-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Leer más
                  </a>
                </div>
              </article>
            </div>

            <div className="col d-none d-lg-block">
              <article className="card h-100 border-dashed text-center p-4">
                <div className="my-3">
                  <div className="display-6">📰</div>
                  <h3 className="h6 mt-2">Pronto más noticias</h3>
                  <p className="text-muted small mb-0">
                    Mantente atent@ a nuestras actividades.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light py-5" id="eventos">
        <div className="container">
          <h2 className="section-title mb-3">Próximos eventos</h2>
          <div className="p-4 border rounded-3 text-center">
            <p className="mb-1">No hay eventos publicados por ahora.</p>
            <small className="text-muted">
              ¿Organizas uno? Escríbenos para difundirlo.
            </small>
          </div>
        </div>
      </section>
    </>
  );
}
