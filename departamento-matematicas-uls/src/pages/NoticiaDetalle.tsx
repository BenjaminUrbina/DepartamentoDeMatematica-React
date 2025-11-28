import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Spinner, Alert } from "react-bootstrap";
import { supabaseCliente } from "../backend/supabaseCliente";

type PostDetalle = {
  id_publicacion: string;
  title: string;
  body: string;
  url_img: string;
  fecha_publicacion: string;
  tipo_publicacion: string;
};

export default function NoticiaDetalle() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<PostDetalle | null>(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) {
        setError("No se encontró la noticia.");
        setCargando(false);
        return;
      }

      const { data, error } = await supabaseCliente
        .from("posts")
        .select(
          "id_publicacion,title,body,url_img,fecha_publicacion,tipo_publicacion"
        )
        .eq("id_publicacion", id)
        .single();

      if (error) {
        setError(error.message || "No se pudo cargar la noticia.");
      } else if (!data) {
        setError("No se encontró la noticia.");
      } else {
        setPost(data);
      }
      setCargando(false);
    };

    fetchPost();
  }, [id]);

  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <p className="text-uppercase text-muted small mb-1">
            {post?.tipo_publicacion || "Noticia"}
          </p>
          <h1 className="mb-0">{post?.title || "Cargando..."}</h1>
        </div>
        <Link to="/noticias" className="btn btn-outline-primary">
          ← Volver a noticias
        </Link>
      </div>

      {cargando && (
        <div className="text-center py-5">
          <Spinner animation="border" role="status" />
          <p className="mt-3 mb-0">Cargando noticia…</p>
        </div>
      )}

      {error && !cargando && (
        <Alert variant="danger">
          {error}{" "}
          <div className="mt-2">
            <Link to="/noticias" className="btn btn-sm btn-outline-primary">
              Volver a noticias
            </Link>
          </div>
        </Alert>
      )}

      {post && !cargando && !error && (
        <article className="bg-white p-4 rounded-3 shadow-sm">
          <p className="text-body-secondary small mb-3">
            Publicado el {new Date(post.fecha_publicacion).toLocaleDateString()}
          </p>
          {post.url_img && (
            <img
              src={post.url_img}
              alt={post.title}
              className="img-fluid rounded mb-4 w-100"
              onError={(e) => {
                e.currentTarget.src =
                  "https://via.placeholder.com/1200x600?text=Sin+imagen";
              }}
            />
          )}
          <div className="fs-5 lh-lg" style={{ whiteSpace: "pre-line" }}>
            {post.body}
          </div>
        </article>
      )}
    </Container>
  );
}
