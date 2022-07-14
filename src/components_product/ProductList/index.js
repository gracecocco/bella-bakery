/* eslint-disable camelcase */
import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

const mapProductsToItems = (products) =>
  products.map(({ productName, id, meta, image }) => {
    // const price = price || null
    return {
      as: Link,
      to: `/product/${id}/`,
      childKey: id,
      // image: (
      //   <Image>
      //     <Img
      //       // fluid={mainImage.childImageSharp.sizes}
      //       alt={productName.productName}
      //     />
      //   </Image>
      // ),
      header: productName.productName,
      // meta: <Card.Meta style={{ color: 'dimgray' }}>{price}</Card.Meta>,
    }
  })

export default ({ products }) => (
  <Card.Group items={mapProductsToItems(products)} itemsPerRow={2} stackable />
)
