import React from "react";
import ContentWrapper from "../../content-wrapper";
import PageTitle from "../../page-title";
import personPhoto from "../../../img/person.png"
import "./about.css";

const About: React.FC = () => {
    return (
        <ContentWrapper>
            <PageTitle>
                Равил Гусейнов
            </PageTitle>
            <div>
                <img className="img-person" src={personPhoto} alt="person"/>
                <p className="plain-text">
                    Меня зовут Гусейнов Равил, мне 26 лет. Учусь в Федеральном государственном автономном
                    образовательном учреждении высшего образования "Российский университет транспорта" | РУТ (МИИТ)
                    на 5ом курсе по специальности "Прикладная информатика", в группе ЗИИ-591.
                </p>
                <p className="plain-text">
                    Интерес к языкам программирования у меня появился еще со школьных лет. Начинал, как и все
                    программисты моего возраста, с таких языков как Basic, Pascal и т д. В школе познакомился с таким
                    языком как Кумир (лучше бы не знакомился). В JavaScript меня занесло года 3 назад. Началось все как
                    обычно с HTML, CSS, затем перешел к JS. В языке нравится простота, похожесть на некоторые другие
                    языки (синтаксисом). Позднее активно начал использовать TypeScript, т к он добавляет в язык все то,
                    что так необходимо любому языку (на мой взгляд).
                </p>
            </div>
        </ContentWrapper>
    )
}

export default About