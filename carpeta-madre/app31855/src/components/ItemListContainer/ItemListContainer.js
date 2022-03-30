import { getProduct } from "../../asymock"
import { useState, useEffect} from "react"
import Itemlist from "../ItemList"
const ItemListContainer = ({greeting}) => {

    const [prodcuts, setProducts] = useState([])


    useEffect(()=>{

        getProduct().then(Response => {
            setProducts(Response)
        })

    }, [])

    console.log(setProducts)
    return(
        <div>
            <h1>{greeting}</h1>

            <ul>
                {products.map(product => <li key={product.id} > { product.name }</li>)}
            </ul>
            <Itemlist products = {products} />
        </div>
    )

}

export default ItemListContainer