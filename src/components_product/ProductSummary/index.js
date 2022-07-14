import React from 'react'
import Img from 'gatsby-image'
import { Item, Label } from 'semantic-ui-react'

import AddToCart from '../AddToCart'

export default ({ strings }) => (
  <Item.Group>
    <Item style={{ alignItems: 'center' }}>
      <Item.Image
        src="https://www.ikea.com/us/en/images/products/torvfly-dish-towel-patterned-orange__1156274_pe887030_s5.jpg?f=s"
        size="medium"
        alt={strings.ProductName}
      ></Item.Image>
      <Item.Content>
        <Item.Header>{strings.ProductName}</Item.Header>
        <Item.Description>
          <p>${strings.Price}</p>
          <Label>SKU: {strings.SKU}</Label>
        </Item.Description>
      </Item.Content>
    </Item>
  </Item.Group>
)
