import React from 'react';

function useLocalStorage(itemName,initialState){
    const [local,setLocal] = React.useState([]);
    const [loading,setLoading] = React.useState(true);
    const [error,setError] = React.useState(false);
    React.useEffect(()=>{
      setTimeout(()=>{
     try{
      const datos = localStorage.getItem(itemName)
      if(!datos){
        const tareasParseadas=JSON.stringify(initialState)
        localStorage.setItem(itemName,tareasParseadas)
      }else{
        const tareas= JSON.parse(localStorage.getItem(itemName))
        setLocal(tareas)
      }
      setLoading(false)
      }catch(error){
        setLoading(false)
        setError(error)
      }
    },2000)
  })
  
    const saveTasks= (tasks) =>{
      localStorage.setItem(itemName,JSON.stringify(tasks))
      setLocal(tasks)
    }
    return {local,saveTasks,loading,error};
  }

  export {useLocalStorage}