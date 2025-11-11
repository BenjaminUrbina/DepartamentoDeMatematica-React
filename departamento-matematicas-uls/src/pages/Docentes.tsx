import "../css/docentes.css";

interface Docente {
  id: number;
  nombre: string;
  correo: string;
}

const Docentes = () => {
  const docentes: Docente[] = [
    {
      id: 1,
      nombre: "Dr. Héctor Moreno Barrera",
      correo: "hmoreno@userena.cl",
    },
    {
      id: 2,
      nombre: "Dr. Eduardo Alfonso Notte Cuello",
      correo: "enotte@userena.cl",
    },
    {
      id: 3,
      nombre: "Dr. Carlos Navarrete Rojas",
      correo: "cnavarrete@userena.cl",
    },
    {
      id: 4,
      nombre: "Dr. Cristian González Avilés",
      correo: "cgonzalez@userena.cl",
    },
    {
      id: 5,
      nombre: "Dr. Eric Roberto Jeltsch Figueroa",
      correo: "ejeltsch@userena.cl",
    },
    {
      id: 6,
      nombre: "Lic. Guillermo Leyton García",
      correo: "gleyton@userena.cl",
    },
    {
      id: 7,
      nombre: "Dr. Héctor Torres Apablaza",
      correo: "htorres@userena.cl",
    },
    {
      id: 8,
      nombre: "Dr. Justino Sánchez Cubillos",
      correo: "jsanchez@userena.cl",
    },
    {
      id: 9,
      nombre: "Dr. Gustavo Labbé Morales",
      correo: "glabbe@userena.cl",
    },
    {
      id: 10,
      nombre: "Dr. Marco Corgini Videla",
      correo: "mcorgini@userena.cl",
    },
    {
      id: 11,
      nombre: "Dr. Milton Espinoza Espinoza",
      correo: "milton.espinozae@userena.cl",
    },
    {
      id: 12,
      nombre: "Dra. Palmenia Rodríguez Rojas",
      correo: "prodriguez@userena.cl",
    },
    {
      id: 13,
      nombre: "Dr. Aldo Pereira Solís",
      correo: "aldo.pereira@userena.cl",
    },
    {
      id: 14,
      nombre: "Dr. Diego Arcis Arcis",
      correo: "diego.arcis@userena.cl",
    },
    {
      id: 15,
      nombre: "Dr. Rodrigo Véjar Asem",
      correo: "rodrigo.vejar@userena.cl",
    },
    {
      id: 16,
      nombre: "Dr. Rodolfo Viera Quezada",
      correo: "rodolfo.vieraq@userena.cl",
    },
    {
      id: 17,
      nombre: "Dr. Roberto Díaz Vivanco",
      correo: "roberto.diazv1@userena.cl",
    },
    {
      id: 18,
      nombre: "Mg. Luisa Elgueta Alucema",
      correo: "lelgueta@userena.cl",
    },
    {
      id: 19,
      nombre: "Mg. Rosanna Tabilo",
      correo: "rtabilo@userena.cl",
    },
    {
      id: 20,
      nombre: "Mg. Eliana Bustamante Díaz",
      correo: "ebustamante@userena.cl",
    },
  ];

  return (
    <>
      <header className="site-header">
        <h1>Listado de Docentes</h1>
        <p>Universidad de La Serena</p>
      </header>

      <div className="container">
        <main className="container">
          <div className="table-wrap">
            <table className="docentes">
              <thead>
                <tr>
                  <th>N°</th>
                  <th>Nombre</th>
                  <th>Correo</th>
                </tr>
              </thead>
              <tbody>
                {docentes.map((docente) => (
                  <tr key={docente.id}>
                    <td>{docente.id}</td>
                    <td>{docente.nombre}</td>
                    <td>
                      <a href={`mailto:${docente.correo}`}>{docente.correo}</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  );
};

export default Docentes;
