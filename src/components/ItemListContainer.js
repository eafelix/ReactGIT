import Fetch from '../utils/Fetch'
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import { useEffect, useState } from "react";
const { Products } = require ('../utils/Products');

const ItemListContainer = ({greetings})  => {   
  const [datos, setDatos] = useState ([]);

    useEffect(() => {
      Fetch(2000, Products)

      .then(result => setDatos(result))
      .catch(err => console.log(err))
    }, []);

    const onAdd = (qty) => {
    alert("Agregaste: "+ qty +"items al carrito");
    } 

    return (
         <div>
           <h4>{greetings}</h4>
           <ItemList items={datos} />
           <ItemCount stock={5} initial={1} onAdd={onAdd} />
         </div>
    )
}

export default ItemListContainer;