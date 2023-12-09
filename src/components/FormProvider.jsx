import React from "react";
import FormContext from "./FormContext";

const FormProvider = ({ children }) => {
  const [formData, setFormData] = React.useState({});
  const [isSubmit, setIsSubmit] = React.useState(false);
  return (
    <FormContext.Provider
      value={{ formData, setFormData, isSubmit, setIsSubmit }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
