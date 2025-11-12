import { useState } from "react";
import { Form, Button, Alert, Spinner } from "react-bootstrap";
import { useImageUpload } from "../hooks/useImageUpload";
import "../css/imageUploader.css";

interface ImageUploaderProps {
  onImageUploaded: (imageUrl: string) => void;
  onError?: (error: string) => void;
}

export default function ImageUploader({
  onImageUploaded,
  onError,
}: ImageUploaderProps) {
  const { uploadImage, loading, error, url } = useImageUpload();
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      await processFile(file);
    }
  };

  const processFile = async (file: File) => {
    // Crear preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);

    // Subir imagen
    const uploadedUrl = await uploadImage(file);
    if (uploadedUrl) {
      onImageUploaded(uploadedUrl);
    } else if (onError && error) {
      onError(error);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  return (
    <div className="image-uploader-container">
      <div
        className={`drag-drop-zone ${isDragging ? "dragging" : ""}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {loading && (
          <div className="loading-spinner">
            <Spinner animation="border" role="status" className="me-2" />
            <span>Subiendo imagen...</span>
          </div>
        )}

        {!loading && !preview && !url && (
          <>
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
            <p className="drag-drop-text">
              Arrastra una imagen aquí o
              <label htmlFor="file-input" className="file-input-label">
                {" "}
                haz clic para seleccionar
              </label>
            </p>
            <Form.Control
              id="file-input"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="d-none"
              disabled={loading}
            />
            <small className="text-muted">
              Máximo 5MB. Formatos: JPG, PNG, GIF, WebP
            </small>
          </>
        )}

        {preview && (
          <div className="preview-container">
            <img src={preview} alt="Preview" className="preview-image" />
            {loading && (
              <div className="upload-overlay">
                <Spinner animation="border" role="status" />
              </div>
            )}
          </div>
        )}
      </div>

      {error && (
        <Alert variant="danger" className="mt-3">
          {error}
        </Alert>
      )}

      {url && (
        <div className="success-container mt-3">
          <Alert variant="success" className="mb-3">
            ✓ Imagen subida exitosamente
          </Alert>
          <div className="uploaded-image-container">
            <img src={url} alt="Uploaded" className="uploaded-image" />
            <div className="image-url-section">
              <small className="text-muted">URL de la imagen:</small>
              <code className="image-url-code">{url}</code>
              <Button
                variant="outline-secondary"
                size="sm"
                onClick={() => navigator.clipboard.writeText(url)}
              >
                Copiar URL
              </Button>
            </div>
          </div>
          <Button
            variant="primary"
            size="sm"
            onClick={() => {
              setPreview(null);
            }}
            className="mt-2"
          >
            Subir otra imagen
          </Button>
        </div>
      )}
    </div>
  );
}
