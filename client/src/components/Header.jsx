import Navigation from "./Navigation";
import styles from './Header.module.css';


export default function Header() {
  return (
    <>
      <header>
        <div className={styles["container_12"]}>
          <div className={styles["grid_12"]}>
          </div>
          <div className={styles["clear"]} />
        </div>
        <Navigation />
 
      </header>
    </>
  );
}
