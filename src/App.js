import { ToDoTitle } from './ToDoTitle';
import {ToDoSearch} from './ToDoSearch'
import {ToDoInput} from './ToDoInput'
import { ToDoList } from './ToDoList';
import { TodoItem } from './ToDoItem';
import { ToDoButton } from './ToDoButton';
import "./styles.css"
import './App.css';
import React from 'react';
const tareas= [{text:"Comer",complete:true},{text:"Barrer",complete:true},{text:"Bailar",complete:false},{text:"Cocinar",complete:false}]
function App() {
  const [searchValue,setsearchValue] = React.useState('');
  const [taskValue,setTaskValue] = React.useState(tareas);
  const completados = taskValue.filter(c=>c.complete===true).length
  const total = taskValue.length
  return (
    <React.Fragment>
      <div className='RightScreen'>
        <ToDoTitle completed={completados} total={total}/>
        <ToDoSearch
        searchValue={searchValue}
        setsearchValue={setsearchValue}
        />
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
