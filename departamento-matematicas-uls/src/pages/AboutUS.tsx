type Props = {};
import "../css/aboutUs.css";

export default function AboutUS({}: Props) {
  return (
    <>
      <div id="navbar"></div>
      <div className="hero-banner">
        <img
          src="../images/slide8.jpg"
          alt="Hero Banner"
          className="hero-img"
        />

        <div className="hero-content">
          <div className="hero-left">
            <h1>Sobre Nosotros</h1>
          </div>
          <div className="hero-right">
            <h2>
              Nuestra misión es transformar la enseñanza y la investigación en
              Matemáticas y Estadística, formando líderes capaces de innovar y
              contribuir al desarrollo de la comunidad.
            </h2>
          </div>
        </div>
      </div>
      <main className="container my-5">
        <div className="page-header text-center">
          <h1 className="display-4">Sobre Nosotros</h1>
        </div>

        <div className="entry-about mb-5">
          <p>
            El Departamento de Matemáticas de la Universidad de La Serena es la
            Unidad básica que reúne y administra las actividades asociadas a las
            disciplinas de Matemática y Estadística desarrollándolas en el
            contexto del quehacer académico que le es propio, esto es, en los
            siguientes ámbitos: Docencia, Investigación, Extensión, Vinculación
            con el Medio y Gestión, manteniendo además una constante
            preocupación por el perfeccionamiento de su cuerpo académico.
          </p>
          <p>
            Se destacan las siguientes líneas de acción: Investigación en
            Matemáticas Puras y Aplicadas; Didáctica de la Matemática a través
            de Innovaciones metodológicas en la enseñanza de la disciplina;
            Estas dos líneas, aún cuando tienen carácter específico,
            interaccionan naturalmente entre sí, habiendo surgido como
            consecuencia directa de los intereses e iniciativas de la academia,
            promovidas y apoyadas constantemente por el Departamento de
            Matemáticas en el contexto de su propio plan de desarrollo y su
            articulación con el de la Facultad de Ciencias y el Plan de
            Desarrollo Institucional.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-lg-6 d-flex align-items-stretch">
            <div className="content-card">
              <h2 className="card-title">
                <i className="bi bi-bullseye"></i> Misión
              </h2>
              <blockquote className="highlight-quote">
                En concordancia con la Universidad de La Serena y en particular
                con la Facultad de Ciencias, el Departamento de Matemáticas,
                tiene por misión enseñar, crear y divulgar conocimiento de
                excelencia en las disciplinas que le son propias, es decir,
                Matemática, Estadística y Computación.
              </blockquote>
              <ul className="styled-list">
                <li>
                  Desde esta perspectiva coopera, con todas las carreras y
                  grados académicos a los que les da servicios, en la formación
                  de profesionales, graduados e investigadores al más alto
                  nivel, con creatividad, sentido crítico y capacidad de auto
                  sustentación en su desarrollo personal y social y en el
                  aprendizaje continuo.
                </li>
                <li>
                  En conformidad a la citada misión, el departamento tiene la
                  obligación ineludible e indelegable de:
                </li>
                <li>
                  Administrar la dictación de todas las asignaturas que se
                  requiera en los planes de estudios conducentes a títulos
                  profesionales y/o programas de postgrado que imparta la
                  Universidad, dentro del ámbito de sus competencias.
                </li>
                <li>
                  Desarrollar investigación pura y aplicada, postulando a
                  proyectos con financiamiento tanto interno como externo,
                  participando en seminarios y congresos, como expositores o
                  invitados y generando publicaciones científicas de
                  reconocimiento nacional e internacional.
                </li>
                <li>
                  Desarrollar la Educación Matemática al más alto nivel posible,
                  constituyéndose en un grupo que investiga y forma
                  profesionales de la Educación Matemática, que explora y aplica
                  metodologías innovadoras de enseñanza.
                </li>
                <li>
                  Desarrollar una labor de extensión y difusión de las
                  matemáticas, la estadística y la computación en forma
                  permanente, a nivel de profesorado y alumnos de enseñanza
                  media, con objeto de acercar la actividad científica y
                  computación a los estudiantes de la región.
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6 d-flex align-items-stretch">
            <div className="content-card">
              <h2 className="card-title">
                <i className="bi bi-eye-fill"></i> Visión
              </h2>
              <blockquote className="highlight-quote">
                Ser una unidad de carácter eminentemente científico dedicada a
                la enseñanza y cultivo de las disciplinas de Matemáticas,
                Estadística y Computación, interactuando activamente con sus
                similares en otras regiones, el país y el extranjero; dotada de
                una clara vocación de servicio a la comunidad en la que está
                inserta, un profundo sentido ético y social; y preocupada
                preferentemente de las metodologías de enseñanza de dichas
                disciplinas.
              </blockquote>
              <ul className="styled-list">
                <li>
                  Desde esta perspectiva coopera, con todas las carreras y
                  grados académicos a los que les da servicios, en la formación
                  de profesionales, graduados e investigadores al más alto
                  nivel, con creatividad, sentido crítico y capacidad de auto
                  sustentación en su desarrollo personal y social y en el
                  aprendizaje continuo.
                </li>
                <li>
                  Ser el referente que permite la interrelación institucional y
                  regional con centros de investigación en las líneas
                  comprometidas.
                </li>
                <li>
                  Ser la instancia capacitada para responder a las exigencias de
                  formación de investigadores en Matemáticas en la región de
                  Coquimbo.
                </li>
                <li>
                  Ser la instancia académica de mayor prestigio en la formación
                  de pedagogos en Matemáticas y Computación, tendientes al
                  mejoramiento de la Educación Matemática de la región de
                  Coquimbo, abocada a la generación de nuevas ideas y de
                  conocimiento con miras a mejorar en el ámbito de la enseñanza
                  de las Matemáticas.
                </li>
                <li>
                  Estar preparada para mantener una interrelación permanente con
                  académicos de otras universidades, tanto nacionales e
                  internacionales con el fin de generar proyectos en conjunto.
                </li>
                <li>
                  Estar constituida por un grupo capacitado para responder a las
                  exigencias de la comunidad educativa en Matemáticas,
                  Estadística y Computación.
                </li>
                <li>
                  Ser capaz de formar personas con las competencias necesarias
                  para desenvolverse ética y participativamente en un mundo
                  globalizado, en el que la comprensión de sus deberes y
                  derechos con la sociedad internacional, implique su
                  reconocimiento como ciudadanos del mundo.
                </li>
                <li>
                  Ser capaz de realizar las actividades propias de la gestión
                  del conocimiento con una sólida fundamentación teórica y
                  práctica, que contribuyan a la formación de personas
                  autónomas, creativas y solidarias con capacidad para
                  integrarse al mundo laboral, con principios y un
                  comportamiento ético que favorezcan el mejoramiento de la
                  calidad de vida de la comunidad local, nacional y mundial.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <footer id="footer"></footer>
      <script src="nav-footer.js"></script>
    </>
  );
}
