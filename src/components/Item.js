
import { ContainerItem, Circle, Image, Info, Icon } from './Styled-components2';

const Item = ({ id, stock, price, pictureUrl }) => {
    return (
      <ContainerItem>
        <Circle />
         <Image src={pictureUrl} />
          <Info>
            <Icon>
              <strong>$ {price}</strong>
            </Icon>
          <Icon>
              {stock} unid.
          </Icon>
          <Icon style={{cursor: "pointer"}}>
          </Icon>
      </Info>
      </ContainerItem>
    );
}

export default Item;