import style from "./Forminput.module.scss";

function Forminput({ label, type = "text", name }) {
  return (
    <label className={style.label}>
      <span>{label}</span>
      <input className={style.form_input} name={name} type={type} />
    </label>
  );
}

export default Forminput;
