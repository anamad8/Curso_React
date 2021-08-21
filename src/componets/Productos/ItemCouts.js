import { React, useState } from "react";
import './Productos.css';

function ItemCouts({ stock, initial }) {

    const [counter, setCounter] = useState(initial);

    return (
    <div className="contador">
        <button onClick={() => {
            if (counter < stock) {
            setCounter(counter + 1);
        }
    }}> + </button>
    <p>{counter}</p>
    <button onClick={() => {
        if (counter > initial) {
            setCounter(counter - 1);
        }
        }}> - </button>
    </div>
);
}

export default ItemCouts;


