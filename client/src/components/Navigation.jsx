import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <>
      <section id="stuck_container">
        <div className="container_12">
          <div className="grid_12">
            <div className="navigation">
              <nav>
                <ul className="sf-menu">
                  <li className="current">
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/catalog">Catalog</Link>
                  </li>
                  <li>
                    <Link to="/create">Create Post</Link>
                  </li>
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                  <li>
                    <Link to="/logout">Logout</Link>
                  </li>
                </ul>
              </nav>
              <div className="clear" />
            </div>
            <div className="clear" />
          </div>
          <div className="clear" />
        </div>
      </section>
    </>
  );
}
