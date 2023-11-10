import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import Profile from "./components/Profile";

function App() {
  return (
    <>
    <conteiner>
      <Header />

    </conteiner>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <>


        <section id="content">


          <article className="block-1">
            <div className="container_12">
              <div className="grid_12">
                <h2>Meet Our Pastors Who Share God’s Love</h2>
              </div>
              <div className="grid_4">
                <img src="images/page1_img1.jpg" alt="" />
                <div className="extra_wrapper">
                  <div className="block-1_title">
                    <a href="#">Mark Johnson</a>
                  </div>
                  Lorem ipsum dolor sit tetur dipiscing elit. In mollis erat
                  mattis neque facilisis, sit...
                </div>
              </div>
              <div className="grid_4">
                <img src="images/page1_img2.jpg" alt="" />
                <div className="extra_wrapper">
                  <div className="block-1_title">
                    <a href="#">Sam Rock</a>
                  </div>
                  Korem ipsum dolor sit tetur dipiscing elit. In mollis erat
                  mattis neque facilisis, sito...
                </div>
              </div>
              <div className="grid_4">
                <img src="images/page1_img3.jpg" alt="" />
                <div className="extra_wrapper">
                  <div className="block-1_title">
                    <a href="#">Patrick Pool</a>
                  </div>
                  Forem ipsum dolor sit tetur dipiscing elit. In mollis erat
                  mattis neque facilisu...
                </div>
              </div>
              <div className="clear" />
            </div>
          </article>
        
    
        </section>
        {/*==============================
        footer
=================================*/}
        <footer id="footer">
          <div className="container_12">
            <div className="grid_12">
              <h1 className="logo">
                <a href="index.html">LIGHT</a>
              </h1>
              <div className="socials">
                <a href="#" className="fa fa-twitter" />
                <a href="#" className="fa fa-facebook" />
                <a href="#" className="fa fa-google-plus" />
                <a href="#" className="fa fa-pinterest" />
              </div>
              <div className="sub-copy">
                © <span id="copyright-year" />| <a href="#">Privacy Policy</a>{" "}
                <br /> Website designed by{" "}
                <a href="http://www.templatemonster.com/" rel="nofollow">
                  TemplateMonster.com
                </a>
              </div>
            </div>
            <div className="clear" />
          </div>
        </footer>
        <a href="#" id="toTop" className="fa fa-angle-up" />
      </>
    </>
  );
}

export default App;
