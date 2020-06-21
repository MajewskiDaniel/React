import React, { useState } from "react";
import "./App.css";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  repeatPassword: "",
};

const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
function App() {
  const [values, setValues] = useState({ ...initialValues });
  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validate = () => {
    const validateErrors = {};
    if (!values.firstName) {
      validateErrors.firstName = "Required";
    } else if (values.firstName.length > 20) {
      validateErrors.firstName = "Max length 20";
    }
    if (!values.lastName) {
      validateErrors.lastName = "Required";
    } else if (values.lastName.length > 20) {
      validateErrors.lastName = "Max length 20";
    }
    if (!values.email) {
      validateErrors.email = "Required";
    } else if (!isValidEmail(values.email)) {
      validateErrors.email = "Incorrect email";
    }

    if (!values.password) {
      validateErrors.password = "Required";
    }
    if (!values.repeatPassword) {
      validateErrors.repeatPassword = "Required";
    } else if (values.repeatPassword !== values.password) {
      validateErrors.repeatPassword = "Should be same as Password";
    }
    setErrors(validateErrors);

    return Object.keys(validateErrors).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    console.log(values);
  };

  const reset = () => {
    setValues({ ...initialValues });
    setErrors({});
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label>
            Imie{" "}
            <input
              type="text"
              name="firstName"
              value={values.firstName}
              onChange={onChange}
              // onBlur={validate}
              className={errors.firstName ? "errorInput" : ""}
            />
            {errors.firstName && (
              <span className="error">{errors.firstName}</span>
            )}
          </label>
        </div>
        <div>
          <label>
            Nazwisko{" "}
            <input
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={onChange}
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
              name="email"
              value={values.email}
              onChange={onChange}
              className={errors.email ? "errorInput" : ""}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </label>
        </div>
        <div>
          <label>
            Haslo{" "}
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={onChange}
              className={errors.password ? "errorInput" : ""}
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </label>
        </div>
        <div>
          <label>
            Powtorz haslo{" "}
            <input
              type="password"
              name="repeatPassword"
              value={values.repeatPassword}
              onChange={onChange}
              className={errors.repeatPassword ? "errorInput" : ""}
            />
            {errors.repeatPassword && (
              <span className="error">{errors.repeatPassword}</span>
            )}
          </label>
        </div>
        <button type="submit">Zarejestruj</button>
        <button type="button" onClick={reset}>
          Wyczysc
        </button>
      </form>
    </div>
  );
}

export default App;
