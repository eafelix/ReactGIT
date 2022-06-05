import Item from "./Item";
import { ContainerProduct } from './Styled-components2'

const ItemList = ({ items }) => {
    return (
        <ContainerProduct>
        {
            items.length > 0
            ? items.map(item => <Item key={item.id} id={item.id} price={item.cost} pictureUrl={item.image[0]} stock={item.stock} />)
            : <p>Cargando...</p>
        }
        </ContainerProduct>
    );
}

export default ItemList;