import React from 'react'
import Img from 'gatsby-image'
import { Item, Label } from 'semantic-ui-react'
import regular_strings from '../../content/regular_strings.json'

import AddToCart from '../AddToCart'

const strings = regular_strings

export default () => (
  <Item.Group>
    <Item style={{ alignItems: 'center' }}>
      <Item.Image
        src={strings.Image}
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
