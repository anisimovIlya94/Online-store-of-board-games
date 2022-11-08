import React, { useState } from 'react';
import classes from "../../modules/account.module.css"
import TextField from '../common/form/textField';
import ShoppingCardButton from '../shoppingCart/shoppingCartButton';

const AccountQuestions = ({modal}) => {
    const [data, setData] = useState({ name: "Илья", telephone: "+7 912 217 63 50", question: "" });
    const [errors, setErrors] = useState({});
    const [hoverButton, setHoverButton] = useState(false);
    const toggleHoverButton = () => {
      setHoverButton(!hoverButton);
    };
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data)
    };
    const validatorConfig = {
        name: {
            isRequired: {
                message: `Поле обязательно для заполнения`
            }
        },
        telephone: {
            isRequired: {
                message: `Поле обязательно для заполнения`
            }
        },
        question: {
            isRequired: {
                message: `Поле обязательно для заполнения`
            }
        },
    };
    return (<div className={classes.questionsWrapper}>
        <h2 className={classes.questionsTitle}>Остались вопросы?</h2>
        <form onSubmit={handleSubmit} className={classes.formWrapper}>
            <TextField placeholder="Имя" label="Ваше имя" name="name" value={data.name} onChange={handleChange} error={errors.name} />
            <TextField placeholder="Телефон" label="Ваш телефон" name="telephone" value={data.telephone} onChange={handleChange} error={errors.telephone} />
            <TextField placeholder="Комментарий" label="Ваш комментарий" name="question" textarea={true} value={data.question} onChange={handleChange} error={errors.question} />
            <ShoppingCardButton onClick={handleSubmit}
              title="Заказать звонок"
              orange={true}
              onHoverButton={toggleHoverButton}
              hoverButton={hoverButton}
                icon={false}
                buttonWidth="100%"
                modal={modal}
            />
        </form>
    </div> );
}
 
export default AccountQuestions;