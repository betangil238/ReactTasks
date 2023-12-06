import { ToDoTitle } from './ToDoTitle';
import {ToDoSearch} from './ToDoSearch'
import {ToDoInput} from './ToDoInput'
import { ToDoList } from './ToDoList';
import { TodoItem } from './ToDoItem';
import { ToDoButton } from './ToDoButton';
import "../styles/styles.css"
import '../styles/App.css';
import React from 'react';

function useLocalStorage(itemName,initialState){
  const datos = localStorage.getItem(itemName)
  if(!datos){
    const tareasParseadas=JSON.stringify(initialState)
    localStorage.setItem(itemName,tareasParseadas)
  }
  const tareas= JSON.parse(localStorage.getItem(itemName))
  const [local,setLocal] = React.useState(tareas);
  const saveTasks= (tasks) =>{
    localStorage.setItem(itemName,JSON.stringify(tasks))
    setLocal(tasks)
  }

  return [local,saveTasks];
}


function App() {
  const tareas1= [{text:"Comer",complete:true},{text:"Barrer",complete:true},{text:"Bailar",complete:false},{text:"Cocinar",complete:false}]
  const [taskValue,setTaskValue] = useLocalStorage("task_V1",tareas1);
  const [searchValue,setsearchValue] = React.useState("")
  const completados = taskValue.filter(c=>c.complete===true).length
  const total = taskValue.length
  const tareasFiltradas = taskValue.filter(t => t.text.toLowerCase().includes(searchValue.toLowerCase()))

 
  const completeTask = (text) => {
    const newTasks = [...taskValue];
    const i =newTasks.findIndex(t=>t.text===text)
    if(newTasks[i].complete===false){
      newTasks[i].complete=true;
    }else{
      newTasks[i].complete=false;
    }
    setTaskValue(newTasks)
  }

  const deleteTask=(text)=>{
    const newTasks = [...taskValue];
    const i =newTasks.findIndex(t=>t.text===text)
    newTasks.splice(i,1)
    setTaskValue(newTasks)
  }

  
  return (
    <React.Fragment>
      <div className='RightScreen'>
        <ToDoTitle completed={completados} total={total}/>
        <ToDoSearch
        searchValue={searchValue}
        setsearchValue={setsearchValue}
        />
        <ToDoList>
          {tareasFiltradas.map(t =>(
            <TodoItem text={t.text} key={t.text} complete={t.complete}
            onComplete = {()=>completeTask(t.text)}
            onDelete = {()=> deleteTask(t.text)}/>
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
