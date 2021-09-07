import React from 'react'
import {
  
  CCard,
 
} from '@coreui/react'
import { DragHandle } from 'src/assets/icons/partials/DragHandle'
import List from 'src/assets/icons/partials/data'
import { ListItem, ListContainer } from 'src/assets/icons/partials/styles' 
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"


const Tree = () => {
  const list = List.getList();
    return (
        <div>
        <DragDropContext
        onDragEnd={(param) => {
          const srcI = param.source.index;
          const desI = param.destination?.index;
          if (desI) {
            list.splice(desI, 0, list.splice(srcI, 1)[0]);
            List.saveList(list);
          }
        }}
      >
      <CCard>
        <ListContainer>
        
          <h1>Product Tree</h1>
          <Droppable droppableId="droppable-1">
            {(provided, _) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {list.map((item, i) => (
                  <Draggable
                    key={item.id}
                    draggableId={"draggable-" + item.id}
                    index={i}
                  >
                    {(provided, snapshot) => (
                      <ListItem
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        style={{
                          ...provided.draggableProps.style,
                          boxShadow: snapshot.isDragging
                            ? "0 0 .4rem #666"
                            : "none",
                        }}
                      >
                        <DragHandle {...provided.dragHandleProps} />
                        <span>{item.title}</span>
                      </ListItem>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          
        </ListContainer>
        </CCard>
      </DragDropContext> 
        </div>
    )
}

export default Tree
