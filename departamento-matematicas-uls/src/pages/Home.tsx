import { Link } from "react-router-dom";
import "../css/home.css";
import NoticiasFeed from "../components/NoticiasFeed";
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

      <section className="bg-light py-4" id="noticias">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h2 className="section-title m-0">Noticias Recientes</h2>

            <Link to="/noticias" className="btn btn-primary">
              Ver todas
            </Link>
          </div>
          <hr />

          <NoticiasFeed limit={3} tipo="noticia" />
        </div>
      </section>

      <section className="py-4" id="eventos">
        <div className="container">
          <h2 className="section-title mb-3">Próximos eventos</h2>
          <hr />
          <NoticiasFeed limit={3} tipo="evento" />
        </div>
      </section>
    </>
  );
}
