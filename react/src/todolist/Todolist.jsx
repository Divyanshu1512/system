import React, { useState } from 'react'
import '../App.css'

const Todolist = () => {
    const[Todos,setTodos]=useState([]);
    const [ currentTodo,setcurrentTodo]= useState('');


const addTodo = ()=>{
    if(currentTodo !==''){
        const newTodo={
        id: Math.random(),
        text: currentTodo
      };
    setTodos([...Todos, newTodo]);
    setcurrentTodo('')  
    }
}

const deleteTodo = (id,newTodo)=>
{
    const updatedTodos = todos.map(Todo=>{
        if(todo.id === id){
            return
        }
    })
}}
export default Todolist
