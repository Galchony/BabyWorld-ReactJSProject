import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container_12">
        <div className="grid_12">
          <h1 className="logo">
            <Link to="/">BABY WORLD</Link>
          </h1>
          <div className="socials">
            <a href="https://twitter.com/search?q=%23babyworld&src=typed_query&f=top" className="fa fa-twitter" />
            <a href="#" className="fa fa-facebook" />
            <a href="https://www.google.com/search?q=baby+world&sca_esv=581983041&sxsrf=AM9HkKkdLCYglyCB4puipAkKwcKD9QyLsA%3A1699899646273&source=hp&ei=_mhSZabCBLmHvr0PlM-BsAs&iflsig=AO6bgOgAAAAAZVJ3Do0cqsP2vyZBJtBsybG_IktMgD75&oq=ba&gs_lp=Egdnd3Mtd2l6IgJiYSoCCAAyBxAjGIoFGCcyDBAjGIoFGBMYgAQYJzIHECMYigUYJzILEAAYgAQYsQMYgwEyDRAuGIoFGLEDGIMBGEMyDRAAGIoFGLEDGIMBGEMyExAuGIoFGLEDGIMBGMcBGNEDGEMyCxAAGIoFGLEDGIMBMgUQLhiABDILEAAYgAQYsQMYgwFIpQ1QhwRYhwVwAXgAkAEAmAGbAaABsQKqAQMwLjK4AQHIAQD4AQGoAgrCAgcQIxjqAhgnwgIREC4YgAQYsQMYgwEYxwEY0QPCAgUQABiABA&sclient=gws-wiz" className="fa fa-google-plus" />
            <a href="#" className="fa fa-pinterest" />
          </div>
          <div className="sub-copy">
            © <span id="copyright-year" /> <span>All rights reserved!</span>{" "}
            <br /> Website designed by{" "}
            <a href="https://github.com/Galchony" rel="nofollow">
              Galia Angelova
            </a>
          </div>
        </div>
        <div className="clear" />
      </div>
    </footer>
  );
}
