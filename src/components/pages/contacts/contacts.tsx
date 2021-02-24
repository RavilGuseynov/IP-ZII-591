import React from "react";
import ContentWrapper from "../../content-wrapper";
import PageTitle from "../../page-title";
import "./contacts.css"

const Contacts: React.FC = () => {
    return (
        <ContentWrapper>
            <PageTitle>Мои контакты</PageTitle>
            <ul>
                <li className="contact-list-item">
                    <a href="https://vk.com/r_guseynov" target="_blank" rel="noreferrer">VK</a>
                </li>
                <li className="contact-list-item">
                    <a href="https://web.facebook.com/ravil.guseynov" target="_blank" rel="noreferrer">FaceBook</a>
                </li>
                <li className="contact-list-item">
                    <a href="https://t.me/rguseynov" target="_blank" rel="noreferrer">Telegram</a>
                </li>
            </ul>
        </ContentWrapper>
    )
}

export default Contacts;