import React from "react";
export default function Square ({black,children}) {
    const fill = black ? "black":"white";
    const stroke = black?"white":"black"
;    return (<div style={{
        backgroundColor:fill,
        height :"100%",
        width:"100%",
        color:stroke
        }}>
        {children}
    </div>);
};