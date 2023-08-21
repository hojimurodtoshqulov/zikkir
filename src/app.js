import "./scss/main.scss";
import { Home } from "./pages/home/home";
import Contact from "./pages/contact/contact";
import Company from "./pages/company/company";
import { Routes, Route } from "react-router-dom";
import Aos from "aos";
import { useEffect } from "react";
import Layout from "./layout/layout";
import "./i18n";
import { Cholquvar } from "./pages/cho'lquvar/cho'lquvar";
import { Paxtazor } from "./pages/paxtazor/paxtazor";
import News from "./pages/news/news";
const App = () => {
  useEffect(() => {
    if (typeof window !== null) {
      Aos.init({ duration: 1000, mirror: true });
    }
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/company" element={<Company />} />
          <Route path="/news" element={<News />} />
          <Route path="/cho'lquvar" element={<Cholquvar />} />
          <Route path="/paxtazor" element={<Paxtazor />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
