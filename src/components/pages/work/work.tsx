import React from "react";
import ContentWrapper from "../../content-wrapper";
import PageTitle from "../../page-title";

const Work: React.FC = () => {
    return (
        <ContentWrapper>
            <PageTitle>Моя работа</PageTitle>
            <p className="plain-text">
                Я работаю Frontend-разработчиком в компании Связной. Пишу на JavaScript, TypeScript. Использую библиотеки
                React, Vue (чуть-чуть) и ряд других.
            </p>

            <p className="plain-text">
                Наша команда занимается разработкой онлайн брокера, я делаю клиентскую часть. Наше приложение позволяет
                пользователям оформить онлайн заявку на кредит. Мы собираем данные пользователя (с его разрешения) и
                направляем их в ряд банков, с которыми сотрудничаем. Пользователь в режиме реального времени видит как
                проходит скоринг и может не дожидаться окончания скорнга выбрать устраивающий его банк и условия.
            </p>
        </ContentWrapper>
    )
}

export default Work;