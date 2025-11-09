import "../css/footer.css";

type FooterLink = {
  label: string;
  href: string;
};

type FooterColumn = {
  title: string;
  links: FooterLink[];
};

const footerColumns: FooterColumn[] = [
  /* Lo que pasamos por parametros es el tipo, llamado FooterColumn, entonces asi se cumple todos los tipos
  que declaramos antes como FooterLink */
  {
    title: "Facultades",
    links: [
      { label: "Ciencias", href: "#" },
      { label: "Ciencias Sociales, Empresariales y Jurídicas", href: "#" },
      { label: "Humanidades", href: "#" },
      { label: "Ingeniería", href: "#" },
    ],
  },
  {
    title: "Programas de estudio",
    links: [
      { label: "Pregrado", href: "#" },
      { label: "Carreras y Licenciaturas", href: "#" },
      { label: "Postgrados", href: "#" },
      { label: "Diplomados, Magísteres y Doctorados", href: "#" },
    ],
  },
  {
    title: "Dependencias universitarias",
    links: [
      { label: "Campus Andrés Bello", href: "#" },
      { label: "Campus Coquimbo", href: "#" },
      { label: "Campus Enrique Molina Garmendia", href: "#" },
      { label: "Campus Ignacio Domeyko", href: "#" },
      { label: "Campus Isabel Bongard", href: "#" },
      { label: "Campus Limarí", href: "#" },
      { label: "Campus Mistraliano", href: "#" },
      { label: "Centro de Extensión", href: "#" },
      { label: "Departamento de Música", href: "#" },
    ],
  },
  {
    title: "Plataformas - Mi ULS",
    links: [
      { label: "Of. de Educación a Distancia", href: "#" },
      { label: "Moodle ULS", href: "#" },
      { label: "Plataforma Docente Integrada (Phoenix)", href: "#" },
      { label: "Directorio de Personas ULS", href: "#" },
      { label: "Soporte", href: "#" },
    ],
  },
  {
    title: "Radio Universitaria",
    links: [
      {
        label: "Radio ULS",
        href: "https://www.userena.cl/radio-universitaria.html",
      },
    ],
  },
  {
    title: "Identidad Visual ULS",
    links: [
      { label: "Logo ULS", href: "https://www.userena.cl/logos-uls" },
      { label: "Logo Departamento Astronomía", href: "/logos_Astro.php" },
    ],
  },
];

const contactInfo = ["Benavente 980 - La Serena - Chile", "51 2 20 4000"];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__top container-fluid">
        <div className="footer__divider" aria-hidden="true" />
        <div className="footer__columns">
          {footerColumns.map(({ title, links }) => (
            <div className="footer__column" key={title}>
              <h5 className="footer__title">{title}</h5>
              <ul className="footer__list">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a className="footer__link" href={href}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__divider" aria-hidden="true" />

        <div className="footer__contact">
          <div className="footer__brand">
            <img
              src="../images/icon-uls.png"
              alt="Universidad de La Serena"
              className="footer__brand-image"
            />
          </div>

          <div className="footer__contact-details">
            <p className="footer__contact-title">Contacta por unidades</p>
            <button
              type="button"
              className="footer__cta btn btn-success btn-sm"
            >
              Ver aquí
            </button>
            {contactInfo.map((detail) => (
              <p key={detail} className="footer__contact-text">
                {detail}
              </p>
            ))}
          </div>

          <div className="footer__brand">
            <img
              src="../images/cna-5.png"
              alt="Acreditación CNA"
              className="footer__brand-image-cna"
            />
          </div>
        </div>
      </div>

      <div className="footer__credits">
        <p className="footer__credits-text">
          <span>{currentYear}</span> · Derechos reservados
          <br />
          Desarrollado por estudiantes de Ingeniería en Computación de la
          Universidad de La Serena
        </p>
      </div>
    </footer>
  );
}
