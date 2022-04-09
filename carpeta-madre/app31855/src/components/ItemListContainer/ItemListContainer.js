//import { getProduct } from "../../asymock"
import { useState, useEffect} from "react"
//import Itemlist from "./components/ItemList/Itemlist"
const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])
    const [search, setSearch] = useState("")



    const onResize = () => {


    console.log("cambio el tamaño de la pantalla")


}

useEffect(()=> {

    window.addEventListener("resize", onResize )

    return (()=> {
        window.removeEventListener("resize", onResize)
    })

})


    /* useEffect(() =>{

       fetch("https://api.mercadolibre.com/sites/MLA/search?q=notebook")
       .then(response => {
           console.log(response)
       }).then(res => {
           setProducts(res.results)
       })
       


    }, [])
 */
    const fetchProducts = () => {
        fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + search)
        .then(response => {
            return response.json()
        }).then(res => {
            setProducts(res.results)
        })

    }
  /*   useEffect(()=>{

        getProduct().then(Response => {
            setProducts(Response)
        })

    }, [])
 */
    console.log(setProducts)
    return(
        <div>
            <h1>{greeting}</h1>
            <input type="text" onChange={(e) => setSearch(e.target.value)}> </input>
            <button onClick={fetchProducts}>Buscar</button>

            <ul>
                {products.map(product => <img key={product.id} src={product.tumbnail} alt= "img"></img>)}
            </ul>
            
                
            {/* <Itemlist products = {products} />  */}

        </div>
    )

}





export default ItemListContainer