"use client"
import { useEffect, useRef } from "react";
import { useState } from "react"
import { FaClipboardList } from "react-icons/fa"
import TodoItem from "../todo-item";

export default function TodoList() {
    const [todoList, setTodoList] = useState([]);
    const myRef = useRef();
    const [dark, setDark] = useState(false);
const add = () => {
    const Textinput = myRef.current.value
    // if the input is empty, stop and do nothing(no empty tasks allowed)
    if (Textinput === "") {
        return null
    } 
        const newTodo = {
        id: Date.now(),
        text: Textinput,
        isComplete: false,
    }
    console.log(newTodo)
    setTodoList((prev) => [...prev, newTodo])
    myRef.current.value = "";
    // clear the input box after adding the task
    }
    // create a new task object,
    // id: a unique number created from the current time
    // text: what the use typed
    // isComplete: starts as false that task is not done yet 
   
    // add the new tast to the old list
    
    // this run when you click delete
    const deleteTodo = (id) => {
        setTodoList((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== id)
            // this keep all task expect the one with the matching id
        });

    }
    // runs when click a checkbox
    const toggleTask = (id) => {
        setTodoList((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, isComplete: !todo.isComplete }
                }
                return todo;

            });
        })
        // goes through all tasks
        // if it finds the task with same id, it flips isComplete form
        {/**
            false - true
            true - false */}
    }
    useEffect(() => {
         const storedTodos = localStorage.getItem("todos");
         if (storedTodos) {
        setTodoList(JSON.parse(storedTodos));
         }
    }, []);
    useEffect(() => {
        if (todoList.length > 0) {
           localStorage.setItem("todos", JSON.stringify(todoList))
       } 
    }, [todoList]);
    {/** adding a dark mode feature */ }
    // save theme
    useEffect(() => {
        localStorage.setItem("theme", dark ? "dark" : "light")
    }, [dark])
    return (
        <main className={` ${dark ? "bg-gray-900" : "bg-pink-600"} flex items-center justify-center py-4 min-h-screen`}>
            <div 
                className={` ${
                    dark ? "bg-gray-800 text-white" : "bg-white text-black"
                }
                 place-center w-11/12 max-w-md  flex flex-col rounded-md p-7 rounded-md min-h-[465px]`}>
                <div
                    className="items-center flex mt-7 gap-2">
                   <FaClipboardList className="text-pink-500 text-4xl"/> 
                    <h1 className="text-4xl font-semibold">Todo-List</h1>
                </div>
                <button
                    onClick={() => setDark(!dark)}
                    className="px-4 my-4 py-2 rounded-full  bg-pink-600 text-white"
                >
                    {dark ? "Light" : "Dark"}
                </button>
                <div className="flex items-center my-7 bg-gray-200 rounded-full shadow-md" >
                    <input type="text"
                        ref={myRef}
                        placeholder="Add your Task"
                        className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 placeholeder-text-slate-900"/>
                    <button
                        onClick={add}
                        className="border-none rounded-full bg-pink-600 w-32 h-15 text-white text-lg font-medium">Add +</button>
                </div>
                <div>
                    {todoList.map((item) => {
                        return (
                            <TodoItem
                                key={item.id}
                                text={item.text}
                                id={item.id}
                                deleteTodo={deleteTodo}
                                isComplete={item.isComplete}
                                toggleTask={toggleTask}
                                />
                        );
                    })}
                </div>
            </div>
        </main>
    )
}