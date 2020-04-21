import { Header , Button , Segment, Icon } from 'semantic-ui-react'

function CartItemList() {
  const user = false;
  return (
    <Segment secondary color="teal" inverted textAlign="center" placeholder>
      <Header icon>
        <Icon name ="shopping basket" />
          No products in your cart. Add some
      </Header>
      <Header>
      { user ? (<Button color="orange">
        View Products
        </Button>) : ( <Button color ="blue">
          Login to Add Products
        </Button>)}
      </Header>
    </Segment>
  )

}

export default CartItemList;
