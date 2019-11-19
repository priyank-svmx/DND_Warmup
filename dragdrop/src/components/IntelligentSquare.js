import React from 'react';
import Square from './Square';
import Knight from "./Knight";
import {moveKnight} from "../StateManagement/Game"
import {DraggableItemTypes} from "../Constants/DraggableTypes"
import { useDrop } from 'react-dnd'


export default function IntelligentSquare({i,knightPosition:[knightX,knightY]}){
    
    
    
    // coordinates
    const x = i % 8;
    const y = Math.floor(i / 8);
    const black = (x+y) % 2 === 1;
    
    // making it a drop sink
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: DraggableItemTypes.KNIGHT,
        drop: () => moveKnight(x, y),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
          }),
      })
    
    
    const isKnighted = knightX === x && knightY === y;
    const Piece = isKnighted ? <Knight/>:null;

    return (<div 
    ref={drop}
    style={{
        position:"relative",
        height:"12.5%",
        width:"12.5%"
    }}
    onClick={()=>{
        moveKnight(x,y);
    }}
    >
        <Square black={black}>{Piece}</Square>
        {isOver && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: 'yellow',
          }}
        />)}
    </div>);

}