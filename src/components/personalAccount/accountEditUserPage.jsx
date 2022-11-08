import React, { useState } from "react";
import TextField from "../common/form/textField";
import ShoppingCardButton from "../shoppingCart/shoppingCartButton";
import classes from "../../modules/textField.module.css";

const AccountEditUserPage = ({ modalName }) => {
  const [data, setData] = useState({
    name: "Илья",
    telephone: "+7 912 217 63 50",
    secondName: "Анисимов",
    email: "anisimov_ilya26@mail.ru",
  });
  const [errors, setErrors] = useState({});
  const [hoverButton, setHoverButton] = useState(false);
  const toggleHoverButton = () => {
    setHoverButton(!hoverButton);
  };
  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  const validatorConfig = {
    name: {
      isRequired: {
        message: `Поле обязательно для заполнения`,
      },
    },
    telephone: {
      isRequired: {
        message: `Поле обязательно для заполнения`,
      },
    },
    question: {
      isRequired: {
        message: `Поле обязательно для заполнения`,
      },
    },
  };
  return (
    // <ModalWindow id={id}>
      <>
        <h2 className={classes.editTitle}>Изменить данные</h2>
        <form onSubmit={handleSubmit} className={classes.formWrapper}>
          <TextField
            placeholder="Имя"
            label="Ваше имя"
            name="name"
            value={data.name}
            onChange={handleChange}
            error={errors.name}
          />
          <TextField
            placeholder="Фамилия"
            label="Ваша фамилия"
            name="secondName"
            value={data.secondName}
            onChange={handleChange}
            error={errors.secondName}
          />
          <TextField
            placeholder="Телефон"
            label="Ваш телефон"
            name="telephone"
            value={data.telephone}
            onChange={handleChange}
            error={errors.telephone}
          />
          <TextField
            placeholder="Email"
            label="Ваш email"
            name="email"
            value={data.email}
            onChange={handleChange}
            error={errors.email}
          />
          <div style={{ marginTop: "30px" }}>
            <ShoppingCardButton
              onClick={handleSubmit}
              title="Сохранить"
              orange={true}
              onHoverButton={toggleHoverButton}
              hoverButton={hoverButton}
              icon={false}
              buttonWidth={"250px"}
              modal={true}
            />
          </div>
        </form>
      </>
    // </ModalWindow>
  );
};

export default AccountEditUserPage;
