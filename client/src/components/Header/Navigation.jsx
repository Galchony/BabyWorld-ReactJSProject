import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <>
      <section id={styles["stuck_container"]} className={styles["navigation"]}>
        <div className={styles["container_12"]}>
          <div className={styles["grid_12"]}>
            <div className="navigation">
              <nav>
                <ul className={styles["sf-menu"]}>
                  <li className={styles["current"]}>
                    <Link  to="/">Home</Link>
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
              <div className={styles["clear"]} />
            </div>
            <div className={styles["clear"]} />
          </div>
          <div className={styles["clear"]} />
        </div>
      </section>
    </>
  );
}
