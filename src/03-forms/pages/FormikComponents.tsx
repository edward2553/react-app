import { Formik, Field, ErrorMessage, Form} from "formik";
import "../styles/styles.css";
import * as Yup from 'yup';

export const FormikComponents= () => {

  return (
    <div>
      <h1>Formik Conmponents</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: ''
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
                        .max(15, 'Debe de tener 15 caracteres o menos')
                        .required('Requerido'),
          lastName: Yup.string()
                       .max(10, 'Debe de tener 10 caracteres o menos')
                       .required('Requerido'),
          email: Yup.string()
                    .email('Inserte un correo valido')
                    .required('El correo es un campo requerido'),
          terms: Yup.boolean()
                    .oneOf([true], 'Debe de aceptar las condiciones'),
          jobType: Yup.string()
                      .notOneOf(['ai', 'Esta opcion no es permitida'])
                      .required('Requerido')
        })}
      >
        {
          (formik) => (
            <Form>

              <label htmlFor="firstName">First Name</label>
              <Field name='firstName' type='text' placeholder='First name' />
              <ErrorMessage name="firstName" component={'span'} />

              <label htmlFor="lastName">Last Name</label>
              <Field name='lastName' type='text' />
              <ErrorMessage name="lastName" component={'span'} />

              <label htmlFor="email">Email</label>
              <Field name='email' type='text' />
              <ErrorMessage name="email" component={'span'} />

              <label htmlFor="jobType">Job Type</label>
              <Field name='jobType' as='select'>
                <option value="">Select one</option>
                <option value="fedeveloper">FE Developer</option>
                <option value="uxui">UX/UI</option>
                <option value="ai">AI Enginner</option>
                <option value="bedeveloper">BE Developer</option>
              </Field>
              <ErrorMessage name="jobType" component={'span'} />

              <label>
                <Field name='terms' type='checkbox' />
                Terms and conditions
              </label>
              <ErrorMessage name="terms" component={'span'} />
              
              <button type="submit">Submit</button>

            </Form>
          )
        }
      </Formik>
    </div>
  );
};
