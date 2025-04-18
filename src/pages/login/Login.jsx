import { Link } from "react-router-dom";
import style from "./login.module.scss";

function Login() {
  return (
    <section className={style.wrapper}>
      <div className={style.left}>
        <img alt="Illustration" />
        <h2>Keep track of your money and save for your future</h2>
        <p>
          Personal finance app puts you in control of your spending. Track
          transactions, set budgets, and add to savings pots easily.
        </p>
      </div>
      <div className={style.right}>
        <form className={style.form}>
          <h2>Login</h2>
          <label>Email</label>
          <input type="email" />
          <label>Password</label>
          <input type="password" />

          <button type="submit">Login</button>

          <p className={style.footer}>
            Need to create an account?
            <Link to="/register"> Sign Up</Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Login;
