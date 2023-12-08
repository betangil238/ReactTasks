import { TodoContext } from "../TodoContext";
import React from 'react';
function ToDoTitle(){
  const {
    completados,total
  }=React.useContext(TodoContext)
    return(
      completados ===total ? 
      <div>
        <h1>Welcome To Do List</h1>
        <h2>FELICITACIONES, completaste las tareas</h2>
      </div>
        : 
      <div>
        <h1>Welcome To Do List</h1>
        <h2>Tienes {completados} de {total} tareas completadas</h2>
      </div>
    );
  }
  export {ToDoTitle};