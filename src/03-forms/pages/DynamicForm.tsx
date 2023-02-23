import React, { useEffect, useState } from "react";
import formJSON from "../data/custom-form.json";
import { Form, Formik } from "formik";
import { MySelect, MyTextInput } from "../components";
import * as Yup from 'yup';

type TInitialValues = { [key: string]: any };

const initialValues: TInitialValues = {};
const requiredFields: TInitialValues = {};

for (const input of formJSON) {
  initialValues[input.name] = input.value;

  if (!input.validations?.length) continue;

  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === 'required') {
      schema = schema.required('Este campo es requerido');
    }
    
    if (rule.type === 'minLength') {
      const value = (rule as any).value;
      schema = schema.min( value || 2, `Minimo de ${value} caracteres`)
    }

    if (rule.type === 'email') {
      schema = schema.email('Email invalido')
    }
  }

  requiredFields[input.name] = schema;

}

const validationSchema = Yup.object({...requiredFields})

export const DynamicForm = () => {
  const [formData] = useState(formJSON);
  const [initialValuesState, setIniitalValuesState] = useState<TInitialValues>(
    {}
  );

  const onFillData = () => {
    const initialValues: TInitialValues = {};
    for (const input of formJSON) {
      if (input.type === "email") {
        initialValues[input.name] = "random@randm.com";
      } else {
        initialValues[input.name] = "random text";
      }
    }
    setIniitalValuesState(initialValues);
  };

  useEffect(() => {
    const initialValues: TInitialValues = {};

    for (const input of formJSON) {
      initialValues[input.name] = input.value;
    }
    setIniitalValuesState(initialValues);
  }, []);

  return (
    <>
      <div className="grid">
        <div>
          <h1>Dynamic Form</h1>
          <Formik
            initialValues={
              Object.keys(initialValuesState).length === 0
                ? initialValues
                : initialValuesState
            }
            onSubmit={(values) => {
              console.log(values);
            }}
            enableReinitialize
            validationSchema={validationSchema}
          >
            {({ values }) => (
              <Form>
                {formData.map(({ type, name, label, placeholder, options }) => {
                  if (
                    type === "input" ||
                    type === "password" ||
                    type === "email"
                  ) {
                    return (
                      <MyTextInput
                        key={name}
                        label={label}
                        type={type as any}
                        name={name}
                        placeholder={placeholder}
                      />
                    );
                  } else if (type === "select") {
                    return (
                      <MySelect key={name} label={label} name={name}>
                        <option value="">Select an option</option>
                        {options?.map(({ id, label }) => (
                          <option key={id} value={id}>
                            {label}
                          </option>
                        ))}
                      </MySelect>
                    );
                  }

                  throw new Error(`El tipo de dato ${type} no es soportado`);
                })}

                <button type="submit">Submit</button>
              </Form>
            )}
          </Formik>
        </div>
        <div>
          <button onClick={onFillData}>Fill data</button>
        </div>
      </div>
    </>
  );
};
