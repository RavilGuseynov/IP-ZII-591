import React from "react";
import {Link} from "react-router-dom";
import "./menu.css"

const Menu: React.FC = () => {
    return (
        <div className="menu">
            <ul>
                <li className="list-item">
                    <Link to="/">Главная</Link>
                </li>
                <li className="list-item">
                    <Link to="/about">О себе</Link>
                </li>
                <li className="list-item">
                    <Link to="/education">Моя учёба</Link>
                </li>
                <li className="list-item">
                    <Link to="/work">Моя работа</Link>
                </li>
                <li className="list-item">
                    <Link to="/contacts">Контакты</Link>
                </li>
                <li className="list-item">
                    <Link to="tasks">Мои задачи</Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu