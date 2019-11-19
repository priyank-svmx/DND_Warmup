import React from "react";
import IntelligentSquare from "./IntelligentSquare";
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'


export default function  Board ({knightPosition}){
    const intelligentSquares = [];
    let i = 0;
    while(i < 64){
        intelligentSquares.push(
            <IntelligentSquare key={i} i={i} knightPosition={knightPosition} />
        );
        i++;
    }
    
    return (<DndProvider backend={HTML5Backend}><div
        style={{
            height:"100%",
            width:"100%",
            display: 'flex',
            flexWrap: 'wrap',
        }}
        >{intelligentSquares}</div></DndProvider>);
    
};

