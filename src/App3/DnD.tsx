import * as React  from 'react';
import {dndList} from './ts/DnDList';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import {useState,useEffect} from 'react';

import './css/DnD.css';
import { numbers } from '../ts/NumberList';

function DnD(){
  const [list,setList] = useState(dndList);

  const dragEnd = (event) => {
    const draggableId = event.draggableId;
    const items = Array.from(list);
    const index_num = items.find((val,index) => {
      if(Number(draggableId) === val.id){
        return index;
      }
    });
    const [dragItem] = items.splice(index_num,1);
    items.splice(event.destination.index,0,dragItem);
    
    setList(items);
  }
  

  return (
    <div className="dnd wrap">
      ドラッグ&ドロップ<span className="file-name">(DnD.tsx)</span>
      <DragDropContext onDragEnd={dragEnd}>
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
