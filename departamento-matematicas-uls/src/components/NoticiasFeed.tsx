import { useEffect, useState } from "react";
import { supabaseCliente } from "../backend/supabaseCliente";
import "../css/noticias.css";

export type Noticia = {
  id_post: number;
  title: string;
  body: string;
  status: string;
  fecha_publicacion: string;
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
        .select("id_post,title,body,status,fecha_publicacion")
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
    <div className={`row g-4 ${className}`.trim()}>
      {noticias.map((noticia) => (
        <div key={noticia.id_post} className="col-12 col-md-6 col-lg-4">
          <article className="card noticia-card h-100 shadow-sm">
            <div className="card-body d-flex flex-column">
              <div className="mb-3"></div>

              <h2 className="h5">{noticia.title}</h2>
              <p className="text-muted small mb-3">
                {noticia.fecha_publicacion}
              </p>

              <p className="flex-grow-1">{noticia.body}</p>

              <div className="d-flex align-items-center justify-content-between mt-3 pt-3 border-top">
                <button type="button" className="btn btn-link p-0">
                  Leer más →
                </button>
              </div>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
}
