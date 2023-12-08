import React from "react";
import { TodoContext } from "../TodoContext";
function ToDoSearch(){
  const {searchValue,setsearchValue}=React.useContext(TodoContext)
    return(
      <input className="inputSearch" placeholder="Search... 🔎"
      value={searchValue}
      onChange={(event)=> {setsearchValue(event.target.value)}}></input>
    );
  }
  export {ToDoSearch};