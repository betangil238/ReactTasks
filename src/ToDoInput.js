import React from "react";
function ToDoInput(){
    const [searchValue,setsearchValue] = React.useState('');
    return( 
      <input className="InputTask" placeholder="Write your task"
      value={searchValue}
      onChange={(event)=> {setsearchValue(event.target.value)}}></input>
    );
  }
  export {ToDoInput};