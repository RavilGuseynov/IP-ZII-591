import React from "react";
import "./content-wrapper.css"

const ContentWrapper: React.FC = (props) => {

    const {children} = props;
    return (
        <div className="page-container">
            {children}
        </div>
    );
}

export default ContentWrapper;