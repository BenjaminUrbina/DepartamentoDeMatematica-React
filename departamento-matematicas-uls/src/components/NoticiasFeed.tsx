import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabaseCliente } from "../backend/supabaseCliente";

import "../css/noticias.css";

export type Noticia = {
  id_publicacion: string;
  title: string;
  body: string;
  status: string;
  fecha_publicacion: string;
  tipo_publicacion: string;
  url_img: string;
};

interface NoticiasFeedProps {
  limit?: number;
  emptyMessage?: string;
  className?: string;
  tipo?: Noticia["tipo_publicacion"];
}

export default function NoticiasFeed(props: NoticiasFeedProps) {
  const { limit = 6, className = "", tipo } = props;
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNoticias = async () => {
      let query = supabaseCliente
        .from("posts")
        .select(
          "id_publicacion,title,body,status,fecha_publicacion,url_img,tipo_publicacion"
        )
        .order("fecha_publicacion", { ascending: false });

      if (tipo) {
        query = query.eq("tipo_publicacion", tipo);
      }

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
  }, [limit, tipo]);

  if (cargando) return <p className="cargando-noticias">Cargando…</p>;

  if (error) {
    return (
      <p>Error: Problemas al cargar la base, porfavor intenta más tarde.</p>
    );
  }

  if (!noticias.length) {
    return (
      <>
        <div className="p-4 border rounded-3 text-center">
          <p className="mb-1">No hay ninguna {tipo} publicada por ahora.</p>
          <small className="text-secondary">
            Estamos trabajando en esto...
          </small>
        </div>
      </>
    );
  }

  return (
    <div className={`row g-4 ${className || ""}`.trim()}>
      {noticias.map((noticia) => (
        <div key={noticia.id_publicacion} className="col-12 col-md-6 col-lg-4">
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
                <Link
                  to={`/noticias/${noticia.id_publicacion}`}
                  className="btn btn-sm btn-outline-primary stretched-link"
                  aria-label={`Leer más sobre ${noticia.title}`}
                >
                  Leer más →
                </Link>
              </div>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
}
