import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import "./App.css";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  repeatPassword: "",
};

const RegisterSchema = yup.object().shape({
  firstName: yup.string().required("Required").max(20, "Max length 20"),
  lastName: yup.string().required("Required").max(20, "Max length 20"),
  email: yup.string().required("Required").email("Invalid email"),
  password: yup.string().required("Required"),
  repeatPassword: yup
    .string()
    .required("Required")
    .oneOf([yup.ref("password")], "Should be same as password"),
});

function App() {
  const formik = useFormik({
    initialValues,
    // validateOnChange: false,
    // validateOnBlur: false,
    validationSchema: RegisterSchema,
    onSubmit: async (values, formikHelpers) => {
      //backend call simulation
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(formikHelpers);
      console.log(values);
      formikHelpers.resetForm();
    },
  });

  const {
    errors,
    handleSubmit,
    getFieldProps,
    resetForm,
    dirty,
    isValid,
    isSubmitting,
  } = formik;

  // console.log(formik);

  const disabled = isSubmitting || !(isValid && dirty);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Imie
            <input
              type="text"
              {...getFieldProps("firstName")}
              className={errors.firstName ? "errorInput" : ""}
            />
            {errors.firstName && (
              <span className="error">{errors.firstName}</span>
            )}
          </label>
        </div>
        <div>
          <label>
            Nazwisko
            <input
              type="text"
              {...getFieldProps("lastName")}
              className={errors.lastName ? "errorInput" : ""}
            />
            {errors.lastName && (
              <span className="error">{errors.lastName}</span>
            )}
          </label>
        </div>
        <div>
          <label>
            Email{" "}
            <input
              type="text"
              {...getFieldProps("email")}
              className={errors.email ? "errorInput" : ""}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </label>
        </div>
        <div>
          <label>
            Haslo
            <input
              type="password"
              {...getFieldProps("password")}
              className={errors.password ? "errorInput" : ""}
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </label>
        </div>
        <div>
          <label>
            Powtorz haslo
            <input
              type="password"
              {...getFieldProps("repeatPassword")}
              className={errors.repeatPassword ? "errorInput" : ""}
            />
            {errors.repeatPassword && (
              <span className="error">{errors.repeatPassword}</span>
            )}
          </label>
        </div>
        <button type="submit" disabled={disabled}>
          Zarejestruj
        </button>
        <button type="button" onClick={resetForm}>
          Wyczysc
        </button>
      </form>
    </div>
  );
}
export default App;
