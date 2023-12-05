import { ToDoTitle } from './ToDoTitle';
import {ToDoSearch} from './ToDoSearch'
import {ToDoInput} from './ToDoInput'
import { ToDoList } from './ToDoList';
import { TodoItem } from './ToDoItem';
import { ToDoButton } from './ToDoButton';
import "./styles.css"
import './App.css';
import React from 'react';

function App() {
  const tareas= [{text:"Comer",complete:true},{text:"Barrer",complete:false},{text:"Bailar",complete:false},{text:"Cocinar",complete:false}]
  return (
    <React.Fragment>
      <div className='RightScreen'>
        <ToDoTitle completed={3} total={5}/>
        <ToDoSearch/>
        <ToDoList>
          {tareas.map(t =>(
            <TodoItem text={t.text} key={t.text} complete={t.complete}/>
          ))}
        </ToDoList>
      </div>
      <div className='LeftScreen'>
        <h2>Create new Task</h2>
        <p>Task name</p>
        <ToDoInput/>
        <ToDoButton/>
      </div>
    </React.Fragment>
  );
}

export default App;
