import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import Plociy from "./Pages/Plociy";
import PagenotFound from "./Pages/PagenotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/policy" element={<Plociy />} />
        <Route path="*" element={<PagenotFound />} />
      </Routes>
    </>
  );
}

export default App;
