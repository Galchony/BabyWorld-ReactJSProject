import { Routes, Route, useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import * as userService from "./services/userService";

import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import Catalog from "./components/Catalog";
import Profile from "./components/Profile";
import Create from "./components/Create";
import Details from "./components/Details";
import Login from "./components/Login/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";

function App() {
  const navigate = useNavigate();

  const onLoginClickHandler = (userData) => {
    userService.login(userData).catch((err) => console.log(err));
    navigate("/");
  };
  const onLogoutClickHandler = () => {
    userService.logout()
    .catch((err) => console.log(err));
    navigate("/");

  };

  return (
    <>
      <link rel="stylesheet" href="css/owl.carousel.css" />
      <link rel="stylesheet" href="css/camera.css" />
      <link rel="stylesheet" href="css/style.css" />
      <div>
        <Header  />
      </div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create" element={<Create />} />
          <Route path="/postDetails/:postId" element={<Details />} />
          <Route
            path="/login"
            element={<Login onLogin={onLoginClickHandler} />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout onClick={onLogoutClickHandler} navigate={navigate}/>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
