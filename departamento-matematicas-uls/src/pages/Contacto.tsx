import "../css/contacto.css";

const Contacto = () => {
  return (
    <main className="container page-wrap">
      <section className="page-header p-4 p-md-5">
        <div className="row align-items-center g-4">
          <div className="col-12 col-lg-8">
            <h1 className="page-title display-5 mb-2">Contacto</h1>
            <p className="lead mb-3 text-secondary">
              Encuentra la información de contacto del Departamento de
              Matemáticas y del programa de Magíster en Matemáticas de la
              Universidad de La Serena.
            </p>
          </div>
        </div>
      </section>

      <section className="tarjetas-contactos mb-5">
        <div className="row g-4">
          {/* Departamento de Matemáticas */}
          <div className="col-12 col-lg-6 mb-4">
            <div className="card info-card h-100">
              <div className="card-header d-flex align-items-center gap-3">
                <i className="bi bi-building"></i>
                <div>
                  <h2 className="h5 mb-0">Departamento de Matemáticas</h2>
                  <small className="text-secondary">
                    Universidad de La Serena
                  </small>
                </div>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item px-0">
                    <div className="label">Director</div>
                    <div>Dr. Marco Corgini Videla</div>
                  </li>
                  <li className="list-group-item px-0">
                    <div className="label">Secretaría</div>
                    <div>Mabel Moraga Rojas</div>
                  </li>
                  <li className="list-group-item px-0 d-flex align-items-center justify-content-between">
                    <div>
                      <div className="label">Teléfono</div>
                      <a
                        className="link-underline link-underline-opacity-0"
                        href="tel:+56512204102"
                      >
                        (56) 51 2 204102
                      </a>
                    </div>
                  </li>
                  <li className="list-group-item px-0">
                    <div className="label">Correo electrónico</div>
                    <a href="mailto:demat@userena.cl" className="fw-semibold">
                      demat@userena.cl
                    </a>
                  </li>
                </ul>

                <div className="contact-actions d-flex gap-2 mt-3">
                  <a className="btn btn-primary" href="mailto:demat@userena.cl">
                    <i className="bi bi-envelope-fill me-2"></i>Enviar correo
                  </a>
                  <a
                    className="btn btn-outline-secondary"
                    href="#"
                    aria-disabled="true"
                  >
                    <i className="bi bi-geo-alt me-2"></i>Ubicación
                    (próximamente)
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Magíster en Matemáticas */}
          <div className="col-12 col-lg-6 mb-4">
            <div className="card info-card h-100">
              <div className="card-header d-flex align-items-center gap-3">
                <i className="bi bi-mortarboard"></i>
                <div>
                  <h2 className="h5 mb-0">Magíster en Matemáticas</h2>
                  <small className="text-secondary">
                    Dirección de Postgrado
                  </small>
                </div>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item px-0">
                    <div className="label">Director</div>
                    <div>Dr. Marco Corgini Videla</div>
                  </li>
                  <li className="list-group-item px-0">
                    <div className="label">Coordinador Académico</div>
                    <div>Dr. Jaime Castillo Chará</div>
                  </li>
                  <li className="list-group-item px-0">
                    <div className="label">Correo electrónico</div>
                    <a
                      href="mailto:magister.matematicas@userena.cl"
                      className="fw-semibold"
                    >
                      magister.matematicas@userena.cl
                    </a>
                  </li>
                </ul>

                <div className="contact-actions d-flex gap-2 mt-3">
                  <a
                    className="btn btn-primary"
                    href="mailto:magister.matematicas@userena.cl"
                  >
                    <i className="bi bi-envelope-fill me-2"></i>Enviar correo
                  </a>
                  <a
                    className="btn btn-outline-secondary"
                    href="#"
                    aria-disabled="true"
                  >
                    <i className="bi bi-info-circle me-2"></i>Más información
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contacto;
