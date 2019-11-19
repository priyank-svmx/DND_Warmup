import React from 'react';
import {useDrag} from 'react-dnd';
import {DraggableItemTypes} from "../Constants/DraggableTypes"

export default function Knight (){

    const [{ isDragging }, drag] = useDrag({
        item: { type: DraggableItemTypes.KNIGHT },
        collect: monitor => ({
          isDragging: !!monitor.isDragging(),
        }),
      });

    return (<div
    ref={drag}
    style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move',
      }}
    >♘</div>);
};
