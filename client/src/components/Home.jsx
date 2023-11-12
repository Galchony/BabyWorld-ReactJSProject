import styles from './Home.module.css';
 
export default function Home(props) {
  return (
    <>
      <div className={styles["container_12"]}>
        <div className={styles["grid_4"]}>
          <div className={styles.banner}>
            <a href="/catalog" className={styles.banner_title}>
              Baby <br />
              Feeding
            </a>
            <div className="maxheight">
              <img src="images/icon1.png" alt="" />
            </div>
          </div>
        </div>
        <div className={styles["grid_4"]}>
          <div className={styles.banner}>
            <a href="/catalog" className={styles.banner_title}>
              Baby <br />
              Speeling
            </a>
            <div className="maxheight">
              <img src="images/icon2.png" alt="" />
            </div>
          </div>
        </div>
        <div className={styles["grid_4"]}>
          <div className={styles.banner}>
            <a href="/catalog" className={styles.banner_title}>
              Baby <br />
              Loving
            </a>
            <div className="maxheight">
              <img src="images/icon3.png" alt="Baby Loving" />
            </div>
          </div>
        </div>
        <div className={styles.clear} />
      </div>
    </>
  );
}
