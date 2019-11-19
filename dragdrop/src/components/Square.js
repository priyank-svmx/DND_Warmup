import React from "react";
export default function Square ({black,children}) {
    const fill = black ? "black":"white";
    const stroke = black?"white":"black"
;    return (<div style={{
        backgroundColor:fill,
        height :"200px",
        width:"200px",
        color:stroke
        }}>
        {children}
    </div>);
};