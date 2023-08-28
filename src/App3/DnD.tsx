import * as React  from 'react';
import {dndList} from './ts/DnDList';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import {useState,useEffect} from 'react';

import './css/DnD.css';

function DnD(){
  const [list,setList] = useState(dndList);

  return (
    <div className="dnd wrap">
      ドラッグ&ドロップ<span className="file-name">(DnD.tsx)</span>
      <DragDropContext>
        <Droppable droppableId="dnd-list"　type="droppableItem">
          {(provided) => (
            <ul className="dnd-area" ref={provided.innerRef} {...provided.droppableProps}>
              {list.map((item, index) => (
                <Draggable draggableId={item.id.toString()} key={item.id.toString()} index={index}>
                  {(draggableProvided) => (
                    <li
                      className="dnd-item"
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.draggableProps}
                      {...draggableProvided.dragHandleProps}
                    >
                      {item.name}
                    </li>
                  )}
                </Draggable>
                )
              )}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default DnD;
