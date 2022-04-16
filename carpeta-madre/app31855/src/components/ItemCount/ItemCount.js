import {useState} from "react"

const ItemCount = ({initial = 0, stock, onAdd}) => {
    const [count, Setcount] = useState(initial)


    const increment = () => {
        if(count < stock ){
            Setcount(count + 1)
        }

        
    }

    const decrement = () => {
 Setcount(count - 1)
    }
    
    console.log("2 se va a montar en la pantalla del componente")

    return (
        <div>
            <button onClick={decrement}>-</button>
            <p>{count}</p>
            <button onClick={increment}>+</button>
            <button onClick={() => onAdd(count)}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount