export default function Footer() {
  return (
    <footer id="footer">
      <div className="container_12">
        <div className="grid_12">
          <h1 className="logo">
            <a href="index.html">BABY WORLD</a>
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
              Galia Angelova
            </a>
          </div>
        </div>
        <div className="clear" />
      </div>
    </footer>
  );
}
