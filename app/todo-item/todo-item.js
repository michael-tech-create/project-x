import { IoMdCheckmarkCircle } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { FaRegCircle } from "react-icons/fa";
export default function TodoItem({text,id,isComplete, deleteTodo, toggle} ) {
    return (
        <main className="flex items-center my-2 gap-2">
            <div onClick={()=>{toggle(id)}} className="flex flex-1 items-center cursor-pointer">
                { isComplete ? <IoMdCheckmarkCircle className="text-pink-500 text-2xl" /> : <FaRegCircle  className="text-2xl text-pink-500"/>}
                <p className={`text-slate-700 ml-4 text-[17px] text-decoration-slate-500 gap-4 ${isComplete ? "line-through" : "" }`}>{text}</p>
            </div>

    <MdDeleteForever onClick={() => deleteTodo(id)} 
                className="text-2xl cursor-pointer"/>
            
        </main>
    )
}