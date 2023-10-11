import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import "../src/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import VanLife from "./pages/VanLife";
import Movie from "./pages/Movie";
import Gym from "./pages/Gym";
import News from "./pages/News";
import Shop from "./pages/Shop";
import Weather from "./pages/Weather";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route path="/" element={<SocialLinks />} /> */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="experience" element={<Experience />} />
          <Route path="contact" element={<Contact />} />
          <Route>
            <Route path="portfolio">
              <Route index element={<Portfolio />} />
              <Route path="vans" element={<VanLife />} />
              <Route path="gym" element={<Gym />} />
              <Route path="movies" element={<Movie />} />
              <Route path="news" element={<News />} />
              <Route path="shop" element={<Shop />} />
              <Route path="weather" element={<Weather />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
