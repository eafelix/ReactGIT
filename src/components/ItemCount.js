
import { useState } from 'react';
import {
    ContainerProduct
} from './Styled-components2'

   const ItemCount = (props, initial) => {
   const [cantidad, setCantidad] = useState(0); 

   const increment = () => {
   if (cantidad < 5) setCantidad(cantidad+1);
   }

   const decrement = () => {
   if (cantidad > 0) setCantidad(cantidad-1);
   }

   const onAdd = () => {
    alert("Agregaste: "+ cantidad +"items al carrito");
   }  

   return (
       <ContainerProduct>
       <div className="product-container">
           <div className="product-image">
               <img src={props.pictureUrl} />
           </div>
           <div className="product-info">
               <h6>{props.title}</h6>
               <p>{props.description}</p>
               <p>{cantidad} artículos</p>
               <button onClick={increment}>+</button>
               <button onClick={decrement}>-</button>
               <button onClick={onAdd}>Agregar al carrito</button>
               <p>{props.price}</p>
           </div> 
       </div> 
       </ContainerProduct>
   );
}

export default ItemCount;