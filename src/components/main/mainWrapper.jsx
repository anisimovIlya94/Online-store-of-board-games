import React from "react";

const MainWrapper = ({ children, title, marginTop }) => {
    return (
        <div style={{marginTop: marginTop}}>
            <h1 className="title">{title}</h1>
            {children}
        </div>  
    );
}

export default MainWrapper