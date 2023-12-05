function ToDoTitle({completed,total}){
    return(
      <div>
        <h1>Welcome To Do List</h1>
        <h2>Tienes {completed} de {total} tareas completadas</h2>
      </div>
    );
  }
  export {ToDoTitle};