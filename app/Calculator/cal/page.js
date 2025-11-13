"use client"
import {  useState } from "react"

export default function BasicCalculator () {
    const [display, setDisplay] = useState("");
    const [result, setResult] = useState("");

    const handleClick = (value) => {
        if (value === "C") {
            setDisplay("");
            setDisplay("");
        } else if (value === "=") {
             try {
        const evalResult = Function(`'use strict'; return (${display})`)();
        setResult(evalResult);
        setDisplay(String(evalResult));
        } catch {
            setDisplay("")
            setResult("");

        }       
    } else {
      if (display === "Error") {
        setDisplay(value);
      } else {
        setDisplay(display + value);
        if (result !== "") {
          setResult("");
        }
      }
    }

};


    return (
        <main className="bg-gray-100 items-center flex justify-center min-h-screen">
            <div className="bg-pink-600 rounded-lg shadow-lg w-80 p-6">
                <div className="bg-white text-pink-500 text-2xl text-right px-3 mb-4 py-4 rounded" > 
                {display || 0}

                </div>

                <div className="grid grid-cols-4 gap-3">
                    {["9","8","7","/","6","5","4","*","3","2","1","-","0",".","=","+"].map((btn) => (
                        <button 
                        key={btn}
                        onClick={() => handleClick(btn)}
                        className={
                            `${
                                ["+", "-", "*", "/"].includes(btn)
                                ? "text-pink-500 bg-white" : btn ==="="
                                ? " text-white hover:bg-pink-500 font-bold"
                                 : "text-white bg-pink-600 hover:bg-pink-500"
                            } rounded shadow-lg py-4` }
                        >
                            {btn}
                        </button>
                    ))}
                    <button onClick={() => handleClick("C")
                    }
                    className="bg-white text-pink-600 rounded shadow col-span-4 py-3"
                    >
                        C
                    </button>

                </div>
               
            </div>

        </main>
    );
}