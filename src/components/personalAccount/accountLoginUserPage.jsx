import React, { useState, useEffect } from "react";
import TextField from "../common/form/textField";
import ShoppingCardButton from "../shoppingCart/shoppingCartButton";
import { validator } from "../../utils/validator";
import classes from "../../modules/textField.module.css";
import { useAuth } from "../hooks/useAuth";
import { useHistory } from "react-router-dom";


const AccountLoginUserPage = ({path}) => {
  const [data, setData] = useState({
    password: "",
    email: "",
  });
  const history = useHistory()
  // console.log(path.includes("login"))
  const { error: loginError } = useAuth()
  const {logIn} = useAuth()
  const [errors, setErrors] = useState({});
  const [hoverButton, setHoverButton] = useState(false);
  // const [submited, setSubmited] = useState(false)
  const toggleHoverButton = () => {
    setHoverButton(!hoverButton);
  };
  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };
  useEffect(() => {
    validate();
  }, [data]);
//   useEffect(() => {
//     console.log(loginError)
// }, [loginError]);
const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
};
const isValid = Object.keys(errors).length === 0;
  const handleSubmit = (e) => {
    e.preventDefault();
    // setSubmited(true)
    const isValid = validate();
        if (!isValid) return;
    const status = logIn(data)
    status.then(() => {
      if (path && path.includes("login")) {
        // console.log(path)
        history.replace("/main")
        }
    })
  };
  const validatorConfig = {
    email: {
      isRequired: {
        message: "Электронная почта обязательна для заполнения",
      },
    },
    password: {
      isRequired: {
        message: "Пароль обязателен для заполнения",
      },
    },
  };
  return (
    <>
      <form onSubmit={handleSubmit} className={classes.formWrapper}>
        <TextField
          placeholder="Введите Email"
          label="Email"
          name="email"
          value={data.email}
          onChange={handleChange}
          error={errors.email}
          // submited={submited}
        />
        <TextField
          placeholder="Введите Пароль"
          label="Пароль"
          name="password"
          type="password"
          value={data.password}
          onChange={handleChange}
          error={errors.password}
          // submited={submited}
        />
        {loginError && <p style={{color: "red", fontSize: "15px"}}>{loginError}</p>}
        <div style={{ marginTop: "30px" }}>
          <ShoppingCardButton
            onClick={handleSubmit}
            title="Войти"
            orange={true}
            onHoverButton={toggleHoverButton}
            hoverButton={hoverButton}
            icon={false}
            buttonWidth={"250px"}
            modal={false}
            disabled={!isValid}
          />
        </div>
      </form>
    </>
  );
};

export default AccountLoginUserPage;
