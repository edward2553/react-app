import * as Yup from "yup";

export const registerFormikPageValidation = Yup.object({
  name: Yup.string()
    .required("El nombre es requerido")
    .min(2, "El nombre debe de tener minimo 2 caracteres")
    .max(15, "el nombre debe de tener maximo 15 catacteres"),
  email: Yup.string()
    .required("El email es un campo requerido")
    .email("Inserte un correo email valido"),
  password: Yup.string()
    .required("La contrasena es un campo requerido")
    .min(6, "La contrasena debe de tener minimo 6 caracteres"),
  rpassword: Yup.string()
    .required('Confirmar contrasena es un campo requerido')
    .oneOf([Yup.ref("password")], "Las contraseñas deben de coincidir"),
});
