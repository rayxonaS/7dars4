import { Link } from "react-router-dom";
import style from "./login.module.scss";
import Forminput from "../../components/forminput/Forminput";

function Login() {
  return (
    <section className={style.login}>
      <div className={`${style.container} container`}>
        <div className={style.login_left}>
          <img src="../images/logo-large.svg" alt="" width={121} />
          <h3 className={style.title}>
            {" "}
            Keep track of your money and save for your future
          </h3>
          <p className={style.text}>
            Personal finance app puts you in control of your spending. Track
            transactions, set budgets, and add to savings pots easily.
          </p>
        </div>
        <div className={style.login_right}>
          <div>
            <h1 className={style.login_title}>Login</h1>
            <form className={style.login_form}>
              <Forminput type="email" label="Email" name="email" />
              <Forminput type="password" label="Password" name="password" />
              <button className={`${style.login_btn} btn`}>Login</button>
              <p className={style.login_form_text}>
                Need to create an account?
                <Link to="/register" className={style.login_form_link}>
                  {" "}
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
