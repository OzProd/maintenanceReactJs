import React from 'react';
import { render } from 'react-dom';
import { ListeTechniciens } from './DirecteurT/Technicien';
import { Pannes } from './DirecteurT/Pannes'
import { Draggable, Droppable } from 'react-drag-and-drop'
import DragSortableList from 'react-drag-sortable'


export default class IndexDT extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
    var list = [
      { content: (<div>test1</div>), classes: ['bigger'] },
      { content: (<div>test2</div>) },
      { content: (<div>test3</div>), classes: ['bigger'] },
      { content: (<div>test4</div>) }
    ];

    var placeholder = (
      <div className="placeholderContent">PLACEHOLDER</div>
    );
    var onSort = function (sortedList, dropEvent) {
      console.log("sortedList", sortedList, dropEvent);
    }
    return (
      <div>
        <h3>  indexdt</h3>
        <ListeTechniciens> </ListeTechniciens>
        <Pannes> </Pannes>
        <div>
          <DragSortableList items={list} placeholder={placeholder} onSort={onSort} dropBackTransitionDuration={0.3} type="vertical" />
          <DragSortableList items={list} onSort={onSort} type="horizontal" />
          <DragSortableList items={list} placeholder={placeholder} onSort={onSort} type="vertical" />
        </div>
      </div>


    );
  }

  onDrop(data) {
    console.log(data)
    // => banana  
  }
}
