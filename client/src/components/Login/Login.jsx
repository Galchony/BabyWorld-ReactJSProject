import { useState } from "react";
import styles from "./Login.module.css";

export default function Login({ onLogin }) {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onClick = (e) => {
    e.preventDefault();
    onLogin(values);
  };

  return (
    <section id="login">
      <form method="post" onSubmit={onClick}>
        <div className={styles.imgcontainer}>
          <img
            src="images/welcome.png"
            alt="Avatar"
            className={styles.avatar}
          />
        </div>

        <div className={styles.container}>
          <label htmlFor="email">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter email"
            name="email"
            value={values.email}
            onChange={onChangeHandler}
            required
          />

          <label htmlFor="psw">
            <div>Password</div>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={values.password}
            onChange={onChangeHandler}
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
    </section>
  );
}
