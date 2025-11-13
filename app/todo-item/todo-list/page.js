"use client"
import { FaClipboardList } from "react-icons/fa";
import TodoItem from "../todo-item";
import { useEffect, useRef, useState } from "react";
export default function TodoList() {
    // render the state
    const [todoList, setTodoList] = useState([]);
    const myRef = useRef();
    // add the value(add ur tasks)
    const add = () => {

        const inputText = myRef.current.value.trim();

        if (inputText === "") {
            return null;
        }
        
        const newTodo = {
            id: Date.now(),
            text: inputText,
            isComplete: false,

        }
        setTodoList((prev) => [...prev, newTodo]);
        myRef.current.value = "";
    }
    const deleteTodo = (id) => {
    setTodoList((prevTodos) => {
        return prevTodos.filter((todo) => todo.id !== id)
    })
    }
    const toggle = (id) => {
        setTodoList((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo.id === id) {
                    return {...todo, isComplete: !todo.isComplete}
                }
                return todo;
            })
        })
    }
    // 2. NEW EFFECT: Load data from localStorage only on the client
    useEffect(() => {
        const storedTodos = localStorage.getItem("todos");
        if (storedTodos) {
            setTodoList(JSON.parse(storedTodos));
        }
    }, []); // Empty array runs once on mount

    // 3. EXISTING EFFECT: Save data to localStorage (this is perfect)
    useEffect(() => {
        // Only run this if todoList is not empty
        if (todoList.length > 0) {
            localStorage.setItem("todos", JSON.stringify(todoList));
        }
    }, [todoList]);
    return (

        <main className="bg-pink-900 grid py-4 min-h-screen">
            <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 rounded-md min-h-[560px]">
                {/* title  */}
                <div className="flex items-center mt-7 gap-2">
                    <FaClipboardList className="w-8 text-3xl text-pink-500 shadow-md" />
                    <h1 className="text-3xl font-semibold text-pink-pink-100">To-Do-list</h1>
                    
                </div>
                    {/* input field */}
                <div className="flex items-center my-7 bg-gray-200 rounded-full shadow-md">
                    <input type="text"
                        placeholder="Add your Task"
                        ref={myRef}
                        className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 placeholder-text-slate-600" />
                    <button onClick={add}
                        className="border-none rounded-full bg-pink-600 w-32 h-14 text-white text-lg font-medium">Add +</button>
                </div>
                <div>
                    {todoList.map((item, index) => {
                        return <TodoItem key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle} />
                    })}
                </div>

                
            </div>

        </main>
    )
}