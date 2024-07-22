import styles from './login.module.scss';

function Login(): JSX.Element {
  return (
    <div className={styles.main}>
      <input type="checkbox" id="chk" aria-hidden="true" />

      <div className={styles.login}>
        <form className={styles.form}>
          <label htmlFor="chk" aria-hidden="true">
            Log in
          </label>
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Email"
            required={true}
          />
          <input
            className={styles.input}
            type="password"
            name="pswd"
            placeholder="Password"
            required={true}
          />
          <button>Log in</button>
        </form>
      </div>

      <div className={styles.register}>
        <form className={styles.form}>
          <label htmlFor="chk" aria-hidden="true">
            Register
          </label>
          <input
            className={styles.input}
            type="text"
            name="txt"
            placeholder="Username"
          />
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Email"
          />
          <input
            className={styles.input}
            type="password"
            name="pswd"
            placeholder="Password"
          />
          <button>Register</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
