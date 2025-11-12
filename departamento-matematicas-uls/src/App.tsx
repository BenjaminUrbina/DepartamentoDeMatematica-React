import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUS";
import Contacto from "./pages/Contacto";
import Docentes from "./pages/Docentes";
import Noticias from "./pages/Noticias";
import Publicaciones from "./pages/Publicaciones";
import Layoutsmain from "./layouts/Layoutsmain.tsx";
import Login from "./pages/Login.tsx";
import { ProtectedRoute } from "./components/ProtectedRoute.tsx";
import Editor from "./pages/Editor.tsx";
import { AuthProvider } from "./hooks/AuthContext.tsx";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layoutsmain />}>
          <Route index element={<Home />} />

          <Route path="sobre-nosotros" element={<AboutUs />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="docentes" element={<Docentes />} />
          <Route path="noticias" element={<Noticias />} />
          <Route path="publicaciones" element={<Publicaciones />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route
          path="/editor"
          element={
            <ProtectedRoute>
              <Editor />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
