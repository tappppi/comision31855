//import logo from './logo.svg';

import ItemCount from './components/ItemCount/ItemCount';
import './App.css';
import Nav from "components.js"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  const onAdd = (quantity) => {
    console.log(quantity)
  }
    return (


    <div className='App'>
     

    

      <Nav/>
      <ItemListContainer greeting={"Hola comision 31855!"}/>
      <itemCount intial={1} stock={20} onAdd={onAdd}/>


    </div>


    
  )
}

export default App;
