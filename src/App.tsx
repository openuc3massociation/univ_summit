import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Agenda from "./pages/Agenda";
import Ponentes from "./pages/Ponentes";
import Patrocinadores from "./pages/Patrocinadores";
import Contacto from "./pages/Contacto";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/agenda" element={<Agenda />} />
      <Route path="/ponentes" element={<Ponentes />} />
      <Route path="/patrocinadores" element={<Patrocinadores />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/blog" element={<BlogList />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
    </Routes>
  );
};

export default App;