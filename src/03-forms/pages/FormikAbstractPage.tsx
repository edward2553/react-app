import { Formik, Field, ErrorMessage, Form} from "formik";
import "../styles/styles.css";
import * as Yup from 'yup';
import { MyCheckbox, MySelect, MyTextInput } from "../components";

export const FormikAbstractPage= () => {

  return (
    <div>
      <h1>Formik Abstract</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe de tener 15 caracteres o menos")
            .required("Requerido"),
          lastName: Yup.string()
            .max(10, "Debe de tener 10 caracteres o menos")
            .required("Requerido"),
          email: Yup.string()
            .email("Inserte un correo valido")
            .required("El correo es un campo requerido"),
          terms: Yup.boolean().oneOf([true], "Debe de aceptar las condiciones"),
          jobType: Yup.string()
                  .notOneOf([ 'ai' ], 'Esta opción no es permitida.')
                  .required('Requerido')
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label="First name"
              name="firstName"
              placeholder="Edward Andres"
            />

            <MyTextInput
              label="Last name"
              name="lastName"
              placeholder="Moron Quintana"
            />

            <MyTextInput
              label="Email"
              name="email"
              placeholder="john@google.com"
              type="email"
            />

            <MySelect name="jobType" as="select" label={'Job Type'}>
              <option value="">Select one</option>
              <option value="fedeveloper">FE Developer</option>
              <option value="uxui">UX/UI</option>
              <option value="ai">AI Enginner</option>
              <option value="bedeveloper">BE Developer</option>
            </MySelect>

            <MyCheckbox label={"Terms & condition"} name={"terms"} />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
