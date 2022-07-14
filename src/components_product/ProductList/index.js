/* eslint-disable camelcase */
import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

const mapProductsToItems = (products) =>
  products.map(({ productName, id, price, image, slug }) => {
    return {
      as: Link,
      to: `/product/${slug}/`,
      childKey: id,
      image: <Image src={image[0].url} />,
      header: productName.productName,
      meta: <Card.Meta style={{ color: 'dimgray' }}>${price}</Card.Meta>,
    }
  })

export default ({ products }) => (
  <Card.Group items={mapProductsToItems(products)} itemsPerRow={2} stackable />
)

/* <Img
            src={image.url}
            // fluid={mainImage.childImageSharp.sizes}
            alt={productName.productName}
          /> */
// </Image>
