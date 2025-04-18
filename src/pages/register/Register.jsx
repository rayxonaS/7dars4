import { Link } from "react-router-dom";
import style from "./register.module.scss";

function Register() {
  return (
    <section className={style.wrapper}>
      <div className={style.left}>
        <img src="../public/sidebar.png" alt="Illustration" />
      </div>
      <div className={style.right}>
        <form className={style.form}>
          <h2>Login</h2>
          <label>Email</label>
          <input type="email" />
          <label>Password</label>
          <input type="password" />
          <label>Create password</label>
          <input type="password" />

          <button type="submit">Create account</button>

          <p className={style.footer}>
            Already have an account?
            <Link to="/login"> Login</Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Register;
