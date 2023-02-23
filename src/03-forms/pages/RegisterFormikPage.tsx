import { useFormik } from "formik";

import "../styles/styles.css";
import { registerFormikPageValidation } from "../validations";

export const RegisterFormikPage = () => {
  const { errors, touched, getFieldProps, handleSubmit, handleReset } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
        rpassword: "",
      },
      onSubmit: (values) => {
        console.log(JSON.stringify(values, null, 2));
      },
      validationSchema: registerFormikPageValidation,
    });

  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" {...getFieldProps("name")} />
        {touched.name && errors.name && <span>{errors.name}</span>}

        <label>Email</label>
        <input type="email" {...getFieldProps("email")} />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <label>Password</label>
        <input type="password" {...getFieldProps("password")} />
        {touched.password && errors.password && <span>{errors.password}</span>}

        <label>Repeat password</label>
        <input type="password" {...getFieldProps("rpassword")} />
        {touched.rpassword && errors.rpassword && (
          <span>{errors.rpassword}</span>
        )}

        <button type="submit">Create</button>
        <button type="button" onClick={handleReset}>
          Reset Form
        </button>
      </form>
    </div>
  );
};
