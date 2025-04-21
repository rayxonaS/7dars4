import { Link } from "react-router-dom";
import style from "./login.module.scss";

function Login() {
  return (
    <section className={style.login}>
      <div className="container">
        <div className={style.login_left}></div>
        <div className={style.login_right}></div>
      </div>
    </section>
  );
}

export default Login;
