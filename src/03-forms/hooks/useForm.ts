import { ChangeEvent, FormEvent, useState } from "react";

export const useForm = <T>(initialValues: T) => {
  const [formData, setFormData] = useState(initialValues);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(JSON.stringify(formData, null, 2));
  };

  const resetForm = () => {
    setFormData({ ...initialValues });
  };

  const isValidEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  return {
    // properties
    registerData: formData,
    ...formData,

    // functions
    onChange,
    onSubmit,
    resetForm,
    isValidEmail
  };
};
