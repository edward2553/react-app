import { useForm } from "../hooks/useForm";
import { IForm } from "../interfaces";

import "../styles/styles.css";

export const RegisterPage = () => {
  const {
    registerData,
    onChange,
    onSubmit,
    resetForm,
    isValidEmail 
  } = useForm<IForm>({
      name: "",
      email: "",
      password: "",
      rpassword: "",
    });

  const { name, email, password, rpassword } = registerData;

  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={onChange}
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>Este campo es requerido</span>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>Email no es valido</span>}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={onChange}
        />
        {password.trim().length <= 0 && <span>Este campo es requerido</span>}
        {
          password.trim().length < 6 &&
          password.trim().length > 0 &&
          <span>La contraseña debe de tener minimo 6 letras</span>
        }
        <input
          type="password"
          name="rpassword"
          placeholder="Repeat Password"
          value={rpassword}
          onChange={onChange}
          />
        {rpassword.trim().length <= 0 && <span>Este campo es requerido</span>}
        {rpassword.trim().length > 0 && rpassword !== password && <span>Las contraseñas deben de conincidir</span>}

        <button type="submit">Create</button>
        <button type="button" onClick={resetForm}>
          Reset Form
        </button>
      </form>
    </div>
  );
};
