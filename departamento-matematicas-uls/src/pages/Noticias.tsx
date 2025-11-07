import { useEffect, useMemo, useState } from "react";
import { supabaseCliente } from "../backend/supabaseCliente";
import "../css/noticias.css";

type Noticia = {
  id_post: number;
  title: string;
  body: string;
  status: string;
  id_user: number;
  fecha_publicacion: string;
};

type NoticiaUI = Noticia & { fechaLegible: string };

export default function Noticias() {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNoticias = async () => {
      const { data, error } = await supabaseCliente
        .from("posts")
        .select("id_post,title,body,status,id_user,fecha_publicacion")
        .order("fecha_publicacion", { ascending: false })
        .limit(6);

      console.log("posts supabase", { data, error });

      if (error) {
        setError(error.message);
      } else {
        setNoticias(data ?? []);
      }
      setCargando(false);
    };

    fetchNoticias();
  }, []);

  const noticiasNormalizadas = useMemo<NoticiaUI[]>(() => {
    return noticias.map((noticia) => {
      let fechaLegible = "Sin fecha";

      if (noticia.fecha_publicacion) {
        const fecha = new Date(noticia.fecha_publicacion);
        if (!Number.isNaN(fecha.getTime())) {
          fechaLegible = fecha.toLocaleString("es-CL", {
            dateStyle: "medium",
            timeStyle: "short",
          });
        } else {
          fechaLegible = noticia.fecha_publicacion;
        }
      }

      return { ...noticia, fechaLegible };
    });
  }, [noticias]);

  if (cargando) return <p>Cargando…</p>;
  if (error)
    return (
      <p>
        Error: Problemas al cargar la base, porfavor intenta más tarde. {error}
      </p>
    );

  if (!noticiasNormalizadas.length) {
    return (
      <section className="noticias-vacias">
        <p>No hay noticias disponibles por ahora.</p>
      </section>
    );
  }

  return (
    <section className="noticias-page bg-light py-5">
      <div className="container">
        <header className="mb-4 text-center">
          <p className="text-uppercase text-muted small mb-1">
            Noticias recientes
          </p>
          <h1 className="display-6">Lo último del Departamento</h1>
          <p className="lead text-muted">
            Publicaciones obtenidas directamente desde tu base de datos Supabase.
          </p>
        </header>

        <div className="row g-4">
          {noticiasNormalizadas.map((noticia) => (
            <div key={noticia.id_post} className="col-12 col-md-6 col-lg-4">
              <article className="card noticia-card h-100 shadow-sm">
                <div className="card-body d-flex flex-column">
                  <div className="mb-3">
                    <span className="badge bg-primary-subtle text-primary-emphasis">
                      {noticia.status}
                    </span>
                  </div>

                    <h3 className="h5">{noticia.title}</h3>
                    <p className="text-muted small mb-3">
                      {noticia.fechaLegible}
                    </p>

                  <p className="flex-grow-1">{noticia.body}</p>

                  <div className="d-flex align-items-center justify-content-between mt-3 pt-3 border-top">
                    <span className="small text-muted">
                      Usuario #{noticia.id_user}
                    </span>
                    <button type="button" className="btn btn-link p-0">
                      Leer más →
                    </button>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
