import NoticiasFeed from "../components/NoticiasFeed";
import "../css/noticias.css";

export default function Noticias() {
  return (
    <section className="noticias-page bg-light py-5">
      <div className="container">
        <header className="mb-4 text-center">
          <p className="text-uppercase text-muted small mb-1">
            Noticias recientes
          </p>
          <h1 className="display-6">Lo último del Departamento</h1>
          <hr />
        </header>

        <NoticiasFeed />
      </div>
    </section>
  );
}
