import { IoMdCheckmarkCircle } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { FaRegCircle } from "react-icons/fa";

export default function TodoItem({ text, id, isComplete, deleteTodo, toggleTask }) {
    return (
        <main className="flex items-center my-2 gap-2">
            {/* TOGGLE COMPLETE */}
            <div 
                onClick={() => toggleTask(id)} 
                className="flex flex-1 items-center cursor-pointer"
            >
                {isComplete ? (
                    <IoMdCheckmarkCircle className="text-pink-500 text-2xl" />
                ) : (
                    <FaRegCircle className="text-2xl text-pink-500" />
                )}

                <p
                    className={`ml-4 text-[17px] 
                    ${isComplete ? "line-through text-slate-500 dark:text-slate-400" : "text-slate-700 dark:text-slate-200"}`}
                >
                    {text}
                </p>
            </div>

            {/* DELETE BUTTON */}
            <MdDeleteForever
                onClick={() => deleteTodo(id)}
                className="text-2xl cursor-pointer text-slate-600 dark:text-slate-300"
            />
        </main>
    );
}
