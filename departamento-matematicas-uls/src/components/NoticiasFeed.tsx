import { useEffect, useState } from "react";
import { supabaseCliente } from "../backend/supabaseCliente";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "../css/noticias.css";

export type Noticia = {
  id_post: number;
  title: string;
  body: string;
  status: string;
  fecha_publicacion: string;
  url_img: string;
};

interface NoticiasFeedProps {
  limit?: number;
  emptyMessage?: string;
  className?: string;
}

const DEFAULT_EMPTY_MESSAGE = "No hay noticias disponibles por ahora.";

export default function NoticiasFeed(props: NoticiasFeedProps) {
  const {
    limit = 6,
    emptyMessage = DEFAULT_EMPTY_MESSAGE,
    className = "",
  } = props;
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNoticias = async () => {
      let query = supabaseCliente
        .from("posts")
        .select("id_post,title,body,status,fecha_publicacion,url_img")
        .order("fecha_publicacion", { ascending: false });

      if (limit) {
        /* Esto simplemente limita la cantidad de noticias recibidas */
        query = query.limit(limit);
      }

      const { data, error } = await query;

      if (error) {
        setError(error.message);
      } else {
        // Pasamos la info solo si no esta vacio
        setNoticias(data ?? []);
      }

      setCargando(false);
    };

    fetchNoticias();
  }, [limit]);

  if (cargando) return <p className="cargando-noticias">Cargando…</p>;

  if (error) {
    return (
      <p>Error: Problemas al cargar la base, porfavor intenta más tarde.</p>
    );
  }

  if (!noticias.length) {
    return <p className="cargando-noticias">{emptyMessage}</p>;
  }

  return (
    <div className={`row g-4 ${className || ""}`.trim()}>
      {noticias.map((noticia) => (
        <div key={noticia.id_post} className="col-12 col-md-6 col-lg-4">
          <article className="card h-100 shadow-sm">
            {/* Imagen de la card */}
            <img
              src={noticia.url_img}
              alt={noticia.title || "Noticia"}
              className="card-img-top"
              onError={(e) => {
                e.currentTarget.src =
                  "https://via.placeholder.com/800x450?text=Sin+imagen";
              }}
            />

            {/* Cuerpo */}
            <div className="card-body d-flex flex-column">
              <h2 className="card-title h5 mb-1">{noticia.title}</h2>
              <p className="card-subtitle text-body-secondary small mb-3">
                {noticia.fecha_publicacion}
              </p>

              <p className="card-text flex-grow-1 noticia-body">
                {noticia.body}
              </p>

              {/* Acción */}
              <div className="mt-3 pt-3 border-top">
                {/* Si tienes una URL de detalle, úsala en href */}
                <a
                  href={"#"}
                  className="btn btn-sm btn-outline-primary stretched-link"
                  aria-label={`Leer más sobre ${noticia.title}`}
                >
                  Leer más →
                </a>
              </div>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
}
