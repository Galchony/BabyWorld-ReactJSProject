import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <>
      <link rel="stylesheet" href="css/owl.carousel.css" />
      <link rel="stylesheet" href="css/camera.css" />
      <link rel="stylesheet" href="css/style.css" />
      <div>
        <Header />
      </div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      <Footer />
      <a href="#" id="toTop" className="fa fa-angle-up" />
    </>
  );
}

export default App;
