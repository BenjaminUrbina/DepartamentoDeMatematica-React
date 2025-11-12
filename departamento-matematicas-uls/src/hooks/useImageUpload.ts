import { useState, useCallback } from "react";
import { supabaseCliente } from "../backend/supabaseCliente";

interface UploadResult {
  url: string | null;
  error: string | null;
  loading: boolean;
}

export const useImageUpload = () => {
  const [uploadResult, setUploadResult] = useState<UploadResult>({
    url: null,
    error: null,
    loading: false,
  });

  const uploadImage = useCallback(async (file: File): Promise<string | null> => {
    // Validar que sea una imagen
    if (!file.type.startsWith("image/")) {
      setUploadResult({
        url: null,
        error: "El archivo debe ser una imagen",
        loading: false,
      });
      return null;
    }

    // Validar el tamaño (máximo 5MB)
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      setUploadResult({
        url: null,
        error: "La imagen no debe superar 5MB",
        loading: false,
      });
      return null;
    }

    setUploadResult({
      url: null,
      error: null,
      loading: true,
    });

    try {
      // Generar un nombre único para la imagen
      const timestamp = Date.now();
      const random = Math.random().toString(36).substring(2, 15);
      const fileExtension = file.name.split(".").pop();
      const fileName = `noticias/${timestamp}-${random}.${fileExtension}`;

      // Subir a Supabase Storage
      const { data, error } = await supabaseCliente.storage
        .from("imagesNotice")
        .upload(fileName, file, {
          cacheControl: "3600",
          upsert: false,
        });

      if (error) {
        throw error;
      }

      // Obtener la URL pública de la imagen
      const { data: urlData } = supabaseCliente.storage
        .from("imagesNotice")
        .getPublicUrl(data.path);

      const publicUrl = urlData.publicUrl;

      setUploadResult({
        url: publicUrl,
        error: null,
        loading: false,
      });

      return publicUrl;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Error al subir la imagen";
      setUploadResult({
        url: null,
        error: errorMessage,
        loading: false,
      });
      return null;
    }
  }, []);

  const deleteImage = useCallback(async (publicUrl: string): Promise<boolean> => {
    try {
      // Extraer el path de la URL pública
      const urlParts = publicUrl.split("/");
      const fileName = urlParts[urlParts.length - 1];
      const filePath = `noticias/${fileName}`;

      const { error } = await supabaseCliente.storage
        .from("noticias")
        .remove([filePath]);

      if (error) {
        throw error;
      }

      return true;
    } catch (error) {
      console.error("Error al eliminar la imagen:", error);
      return false;
    }
  }, []);

  return {
    uploadImage,
    deleteImage,
    ...uploadResult,
  };
};
