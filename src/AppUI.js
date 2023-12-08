import React from 'react';
import { ToDoTitle } from './JS/ToDoTitle';
import {ToDoSearch} from './JS/ToDoSearch'
// import {ToDoInput} from './JS/ToDoInput'
import { ToDoList } from './JS/ToDoList';
import { TodoItem } from './JS/ToDoItem';
import { ToDoButton } from './JS/ToDoButton';
import {TodosLoading} from  './JS/msg/TodosLoading';
import {TodosError} from  './JS/msg/TodosError';
import {TodosEmpty} from  './JS/msg/TodosEmpty';
import { TodoContext } from './TodoContext';

function AppUI(){
    const {loading,error,tareasFiltradas,completeTask,deleteTask,addTodo }=React.useContext(TodoContext)
    const [newTodoValue,setNewTodoValue] = React.useState('');
    const onSubmit = (event) => {event.preventDefault();
    addTodo(newTodoValue);
    setNewTodoValue('');}
    const onChange = (event) =>{setNewTodoValue(event.target.value)}
    return (
        <React.Fragment>
        <div className='RightScreen'>
            <ToDoTitle />
            <ToDoSearch />
            <ToDoList>
                {loading && (<>
                    <TodosLoading/>
                    <TodosLoading/>
                    <TodosLoading/>
                    <TodosLoading/>
                </>)}
                {error && <TodosError/>}
                {(!loading && tareasFiltradas.length===0) && <TodosEmpty/>}
                {tareasFiltradas.map(t =>(
                <TodoItem text={t.text} key={t.text} complete={t.complete}
                onComplete = {()=>completeTask(t.text)}
                onDelete = {()=> deleteTask(t.text)}/>
            ))}
            </ToDoList>

        </div>
        <form className='LeftScreen' onSubmit={onSubmit}>
            <h2>Create new Task</h2>
            <p>Task name</p>
            <input className="InputTask" placeholder="Write your task" value={newTodoValue} onChange={onChange} required></input>
            <ToDoButton/>
        </form>
        </React.Fragment>
    );
}
export {AppUI}