import styles from "./Login.module.css";

export default function Login() {
  return (
    <form method="post">
      <div className={styles.imgcontainer}>
        <img src="images/welcome.png" alt="Avatar" className={styles.avatar} />
      </div>

      <div className={styles.container}>
        <label htmlFor="uname">
          <b>Username</b>
        </label>
        <input type="text" placeholder="Enter Username" name="uname" required />

        <label htmlFor="psw">
          <div>Password</div>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />
        <div>
          <button type="submit">Login</button>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.psw}>
          Go to <a href="/register">register</a>!
        </div>
      </div>
    </form>
  );
}
