import React from "react";
import "./home.css"
import ContentWrapper from "../../content-wrapper";
import PageTitle from "../../page-title";
import "./home.css";

const HomePage: React.FC = () => {
    return (
        <ContentWrapper>
            <PageTitle>
                Добро пожаловать на мой сайт
            </PageTitle>
            <p className="plain-text">
                Сайт разработан студентом группы ЗИИ-591 Федерального государственного автономного образовательного учреждения высшего
                образования "Российский университет транспорта" | РУТ (МИИТ) в рамках курсовой работы по дисциплине
                "Интернет программитрование" кафедры "Системы управления транспортной инфраструктуры.
            </p>
                <ul className="plain-text">
                    При разработке сайта были использованы такие технологии как:
                    <li>Язык гиппертекстовой разметки HTML</li>
                    <li>Каскадная таблица стилей CSS</li>
                    <li>Язык программирования JavaScript</li>
                    <li>Язык, расширяющий возможности JavaScript TypeScript</li>
                    <li>JavaScript - библиотека React</li>
                </ul>
            <p>

            </p>

        </ContentWrapper>
    );
}

export default HomePage;