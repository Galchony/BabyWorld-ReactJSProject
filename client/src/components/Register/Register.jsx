import styles from "./Register.module.css";

export default function Register() {
  return (
    <section id="register">
      <form method="POST">
          <h1>Register</h1>
        <div className={styles["container"]}>
          <p className={styles.text}>
            Please fill in this form to create an account.
          </p>
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            required
          />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            id="psw"
            required
          />

          <label htmlFor="psw-repeat">
            <b>Repeat Password</b>
          </label>
          <input
            type="password"
            placeholder="Repeat Password"
            name="psw-repeat"
            id="psw-repeat"
            required
          />

          <p>
            By creating an account you agree to our{" "}
            <a href="#">Terms & Privacy</a>.
          </p>
          <button type="submit" className={styles["registerbtn"]}>
            Register
          </button>
        </div>

        <div className={styles["signin"]}>
          <p>
            Already have an account? <a href="/login">Sign in</a>.
          </p>
        </div>
      </form>
    </section>
  );
}
