import React from "react";
function ToDoSearch({searchValue,setsearchValue}){
    return(
      <input className="inputSearch" placeholder="Search... 🔎"
      value={searchValue}
      onChange={(event)=> {setsearchValue(event.target.value)}}></input>
    );
  }
  export {ToDoSearch};