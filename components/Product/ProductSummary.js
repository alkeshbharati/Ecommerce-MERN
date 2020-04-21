import {  ItemGroup, ItemImage, ItemContent, Item ,Label} from 'semantic-ui-react'
import AddProductToCart from './AddProductToCart'

function ProductSummary( { name , medialUrl , _id , price , sku }) {
  return (
    <ItemGroup>
       <Item>
          <ItemImage size ="medium" src ={{medialUrl}}/>
            <ItemContent>
                <Item.Header>{name}</Item.Header>
                <Item.Description>
                    <p>${price}</p>
                    <Label>SKU : {sku}</Label>
                </Item.Description>
                <Item.Extra>
                <AddProductToCart productId ={ _id }/>
                </Item.Extra>
            </ItemContent>
      </Item> 
    </ItemGroup>
  )
}

export default ProductSummary;
