import { useState } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Alert,
  Spinner,
} from "react-bootstrap";
import ImageUploader from "../components/ImageUploader";
import { supabaseCliente } from "../backend/supabaseCliente";
import "../css/editor.css";
import { useNavigate } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";

interface NoticiaDatos {
  titulo: string;
  contenido: string;
  imageUrl: string;
  tipo_publicacion: "noticia" | "evento" | "publicacion";
}

export default function Editor() {
  const navegate = useNavigate();
  const [formData, setFormData] = useState<NoticiaDatos>({
    titulo: "",
    contenido: "",
    imageUrl: "",
    tipo_publicacion: "noticia",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [preview, setPreview] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUploaded = (imageUrl: string) => {
    setFormData((prev) => ({
      ...prev,
      imageUrl,
    }));
    setMessage({
      type: "success",
      text: "Imagen subida correctamente",
    });
    setTimeout(() => setMessage(null), 3000);
  };

  const handleImageError = (error: string) => {
    setMessage({
      type: "error",
      text: error,
    });
    setTimeout(() => setMessage(null), 5000);
  };

  const handleRemoveImage = () => {
    setFormData((prev) => ({
      ...prev,
      imageUrl: "",
    }));
  };

  const validateForm = () => {
    if (!formData.titulo.trim()) {
      setMessage({
        type: "error",
        text: "El título es obligatorio",
      });
      return false;
    }
    if (!formData.contenido.trim()) {
      setMessage({
        type: "error",
        text: "El contenido es obligatorio",
      });
      return false;
    }
    if (!formData.imageUrl) {
      setMessage({
        type: "error",
        text: "Debes subir una imagen",
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // Obtener el usuario actual
      const {
        data: { user },
      } = await supabaseCliente.auth.getUser();

      if (!user) {
        throw new Error("Debes estar autenticado para crear una noticia");
      }

      // Insertar la noticia en la base de datos
      const { error } = await supabaseCliente
        .from("posts")
        .insert([
          {
            title: formData.titulo,
            body: formData.contenido,
            url_img: formData.imageUrl,
            id_user: user.id,
            fecha_publicacion: new Date().toISOString(),
            status: "publicado",
            tipo_publicacion: formData.tipo_publicacion,
          },
        ])
        .select();

      if (error) {
        throw error;
      }

      setMessage({
        type: "success",
        text: "¡Publicación creada exitosamente!",
      });

      // Limpiar el formulario
      setFormData({
        titulo: "",
        contenido: "",
        imageUrl: "",
        tipo_publicacion: "noticia",
      });

      // Esperar 2 segundos y redirigir
      setTimeout(() => {
        navegate("/");
      }, 2000);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Error al crear la noticia";
      setMessage({
        type: "error",
        text: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavbarComponent />
      <Container fluid className="editor-container py-5">
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="editor-header mb-4">
              <h1>Crear Nueva Publicación</h1>
              <p className="text-muted">
                Completa el formulario para crear y publicar una nueva noticia,
                evento o publicación
              </p>
            </div>

            {message && (
              <Alert
                variant={message.type === "success" ? "success" : "danger"}
                onClose={() => setMessage(null)}
                dismissible
                className="mb-4"
              >
                {message.text}
              </Alert>
            )}

            <Form onSubmit={handleSubmit} className="editor-form">
              {/* Título */}
              <Form.Group className="mb-4">
                <Form.Label className="form-label-custom">Título *</Form.Label>
                <Form.Control
                  type="text"
                  name="titulo"
                  value={formData.titulo}
                  onChange={handleInputChange}
                  placeholder="Ingresa el título de la noticia"
                  className="form-control-custom"
                  disabled={loading}
                  maxLength={150}
                />
                <Form.Text className="text-muted">
                  {formData.titulo.length}/150 caracteres
                </Form.Text>
              </Form.Group>

              {/* Tipo de publicación */}
              <Form.Group className="mb-4">
                <Form.Label className="form-label-custom">
                  Tipo de publicación *
                </Form.Label>
                <Form.Select
                  name="tipo_publicacion"
                  value={formData.tipo_publicacion}
                  onChange={handleInputChange}
                  className="form-control-custom"
                  disabled={loading}
                >
                  <option value="noticia">Noticia</option>
                  <option value="evento">Evento</option>
                  <option value="publicacion">Publicación</option>
                </Form.Select>
              </Form.Group>

              {/* Imagen */}
              <Form.Group className="mb-4">
                <Form.Label className="form-label-custom">
                  Imagen Principal *
                </Form.Label>
                {!formData.imageUrl ? (
                  <ImageUploader
                    onImageUploaded={handleImageUploaded}
                    onError={handleImageError}
                  />
                ) : (
                  <div className="selected-image-section">
                    <img
                      src={formData.imageUrl}
                      alt="Seleccionada"
                      className="selected-image"
                    />
                    <div className="selected-image-actions">
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={handleRemoveImage}
                        disabled={loading}
                      >
                        Cambiar Imagen
                      </Button>
                    </div>
                  </div>
                )}
              </Form.Group>

              {/* Contenido */}
              <Form.Group className="mb-4">
                <Form.Label className="form-label-custom">
                  Contenido *
                </Form.Label>
                <Form.Control
                  as="textarea"
                  name="contenido"
                  value={formData.contenido}
                  onChange={handleInputChange}
                  placeholder="Escribe el contenido de la noticia aquí..."
                  rows={10}
                  className="form-control-custom"
                  disabled={loading}
                  maxLength={5000}
                />
                <Form.Text className="text-muted">
                  {formData.contenido.length}/5000 caracteres
                </Form.Text>
                
              </Form.Group>

              {/* Botones de acción */}
              <div className="editor-actions">
                <Button
                  variant="primary"
                  size="lg"
                  type="submit"
                  disabled={loading}
                  className="action-button"
                >
                  {loading ? (
                    <>
                      <Spinner
                        animation="border"
                        size="sm"
                        className="me-2"
                        role="status"
                      />
                      Publicando...
                    </>
                  ) : (
                    <>
                      <span className="me-2">📤</span>
                      Publicar
                    </>
                  )}
                </Button>

                <Button
                  variant="outline-secondary"
                  size="lg"
                  onClick={() => setPreview(!preview)}
                  disabled={loading}
                  className="action-button"
                >
                  <span className="me-2">{preview ? "✏️" : "👁️"}</span>
                  {preview ? "Editar" : "Vista Previa"}
                </Button>
              </div>
            </Form>

            {/* Vista Previa */}
            {preview && (
              <div className="preview-section mt-5">
                <h2>Vista Previa de la Publicación</h2>
                <div className="preview-content">
                  <p className="mb-2 text-muted text-uppercase small">
                    {formData.tipo_publicacion}
                  </p>
                  {formData.imageUrl && (
                    <img
                      src={formData.imageUrl}
                      alt="Preview"
                      className="preview-main-image"
                    />
                  )}
                  <h3 className="mt-4">{formData.titulo || "Título..."}</h3>
                  <div className="preview-text">
                    {formData.contenido.split("\n").map((line, idx) => (
                      <p key={idx}>{line || <br />}</p>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
