import { Container, Button } from "react-bootstrap";
import { useState } from "react";
import NoticiasFeed from "../components/NoticiasFeed";
type Props = {};

export default function Publicaciones({}: Props) {
  const INITIAL_LIMIT = 6;
  const [limite, setLimite] = useState<number>(INITIAL_LIMIT);

  const handleLoadMore = () => {
    setLimite((prev) => prev * 2);
  };

  return (
    <section className="noticias-page bg-light py-5">
      <div className="container">
        <header className="mb-4 text-center">
          <p className="text-uppercase text-muted small mb-1">
            Publicaciones Recientes
          </p>
          <h1 className="display-6">Lo último del Departamento</h1>
          <hr />
        </header>

        <NoticiasFeed limit={limite} tipo="publicacion" />

        <div className="d-flex justify-content-center my-4">
          <Button variant="outline-primary" onClick={handleLoadMore}>
            Cargar más
          </Button>
        </div>
      </div>
    </section>
  );
}
