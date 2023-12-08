import {useLocalStorage} from './useLocalStorage';
import React from "react";
const TodoContext= React.createContext();


function TodoProvider({children}){
    const tareas1= [{text:"Comer",complete:true},{text:"Barrer",complete:true},{text:"Bailar",complete:false},{text:"Cocinar",complete:false}]
    const {local:taskValue,saveTasks:setTaskValue,loading,error} = useLocalStorage("task_V1",tareas1);
    const [searchValue,setsearchValue] = React.useState("")
    const completados = taskValue.filter(c=>c.complete===true).length
    const total = taskValue.length
    const tareasFiltradas = taskValue.filter(t => t.text.toLowerCase().includes(searchValue.toLowerCase()))
    
    const addTodo= (text)=>{
      const newTasks = [...taskValue];
        newTasks.push({
          text:text,
          complete:false
        });
        setTaskValue(newTasks)
      
    }
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
    return(
        <TodoContext.Provider value={{
            completados,total,searchValue,
            setsearchValue,tareasFiltradas,
            completeTask,deleteTask,loading,error,addTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export {TodoContext,TodoProvider}