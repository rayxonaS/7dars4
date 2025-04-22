import { Link } from "react-router-dom";
import style from "./register.module.scss";
import Forminput from "../../components/forminput/Forminput";

function Register() {
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
            <h1 className={style.login_title}>Sign up</h1>
            <form className={style.login_form}>
              <Forminput type="name" label="Name" name="name" />
              <Forminput type="email" label="Email" name="email" />
              <Forminput
                type="password"
                label="Create Password"
                name="password"
              />
              <p className={style.form_text}>
                Passwords must be at least 8 characters
              </p>
              <button className={`${style.login_btn} btn`}>
                Create account
              </button>
              <p className={style.login_form_text}>
                Already have an account?
                <Link to="/login" className={style.login_form_link}>
                  {" "}
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
