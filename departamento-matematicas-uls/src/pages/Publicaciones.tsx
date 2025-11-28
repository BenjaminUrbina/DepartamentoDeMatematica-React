import { Container } from "react-bootstrap";
import NoticiasFeed from "../components/NoticiasFeed";
type Props = {};

export default function Publicaciones({}: Props) {
  return (
    <Container fluid>
      <h1 className="publicaciones-departamento align-items-center">
        Encuentra todas las publicaciones mas relevantes
      </h1>
      <Container>
        <NoticiasFeed limit={3} tipo="publicaciones" />
      </Container>
    </Container>
  );
}
