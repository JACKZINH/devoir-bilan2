import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Artisandetails from "./pages/Artisandetails";
import Artisanlist from "./pages/Artisanlist";
import Error from "./pages/Error";
import "./assets/styles/global.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artisanlist" element={<Artisanlist />} />
          <Route path="/artisandetails/:id" element={<Artisandetails />} />
          <Route path="*" element={<Error />} /> {/* Route catch-all */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
