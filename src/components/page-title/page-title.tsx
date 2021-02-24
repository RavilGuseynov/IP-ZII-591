import React from "react";
import "./page-title.css"

const PageTitle: React.FC = (props) => {

    const {children} = props;
    return (
        <h2 className="page-title">
            {children}
        </h2>
    )
}

export default PageTitle;