import React, { useState } from "react";
import Quastion from "../catalog/quastion";
import Switcher from "./switcher";
import classes from "../../modules/product.module.css";
import PropTypes from "prop-types";

const ProductInfo = ({ description }) => {
    const [state, setState] = useState("descriprion");
    const handleChange = (name) => {
        setState(name);
    };
    const buttons = [
        { id: "butt1", label: "Описание", name: "descriprion" },
        { id: "butt2", label: "Вопрос-ответ", name: "question-answer" }
    ];
    return (
        <div className={classes.infoWrapper}>
            <Switcher state={state} onChange={handleChange} buttons={buttons} />
            {state === "descriprion" && (
                <div className={classes.description}>{description}</div>
            )}
            {state == "question-answer" && (
                <div>
                    <Quastion
                        type="catalog"
                        title="Какие игры сейчас самые популярные?"
                        text="Warhammer, Magic"
                    />
                    <Quastion
                        type="catalog"
                        title="Какие игры можете посоветовать новичку в настолках?"
                        text="В нашем магазине представлен огромный ассортимент игр на любой вкус, но конечно же есть бессмертная классика настольных игр. Если вы только начинаете свой игровой путь, то мы рекомендуем вам легендарную 'Монополию', знаменитую игры для вечеринок под названием 'Активити', самые распространенные в мире настольные стратегии 'Каркассон' и 'Колонизаторы', простую и веселую игру, от которой невозможно оторваться, 'Дженгу'."
                    />
                    <Quastion
                        type="catalog"
                        title="Как выбрать настольную игру?"
                        text={
                            "Если в настольной игре собирается принять участие компания, нужно учитывать средний возраст игроков. Есть игры, которые не требуют активности и вряд ли понравятся молодёжи, а подвижные не придутся по душе пожилым людям. Многие игры предназначены только для большого количества участников, а другие — строго для двоих. Бывают и индивидуальные варианты, но чаще всего количество участников — от двух до четырёх.Количество игроков, на которое рассчитана игра, написано на её упаковке. Важно сразу решить, сколько человек примут участие в игре. Некоторые настольные игры могут быть скучны только для двоих. Если чаще будут играть именно двое, не стоит покупать игры, которые рассчитаны на большую компанию. Важно и то, как участники будут взаимодействовать между собой во время игры. Есть два основных варианта: каждый сам за себя или в команде.Реквизитом могут быть карты, игральные кости, бумага и карандаши, а также специальные приспособления, которые лежат в коробке. Выделяют несколько типов настольных игр: интеллектуальные, творческие, подвижные и кооперативные.Интеллектуальные больше предназначены для детей, которым надо развивать логику и эрудицию. В формате развлечений они смогут тренировать память и мышление. К таким играм относятся мемо, где надо запоминать картинки или слова.Стратегические и экономические развивают навыки предпринимателя и стратега. Они учат грамотному планированию.Творческие игры развивают воображение. Они требуют большей концентрации. Подвижные игры больше понравятся компаниям, потому что направлены на взаимодействие между игроками. В кооперативной игре ребёнок будет развивать речь и коммуникативные навыки с помощью общения с другими игроками. Игры выбирают и по длительности процесса: от нескольких минут до нескольких часов.Время игры также зависит от количества участников и от того, насколько они хорошо знают правила."
                        }
                    />
                </div>
            )}
        </div>
    );
};

ProductInfo.propTypes = {
    description: PropTypes.string
};

export default ProductInfo;
