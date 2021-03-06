import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import ProductList from '../components_product/ProductList'
import SEO from '../components_product/SEO'
import logo from '../images/ill-short-dark.svg'
import Layout from '../components_product/layout'
import { Image, Header } from 'semantic-ui-react'

export const query = graphql`
  query AllProducts {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulProduct {
      nodes {
        id
        productName {
          productName
        }
        productDescription {
          productDescription
        }
        image {
          url
        }
        price
        slug
        sku
      }
    }
  }
`

// const products = get(this, 'props.data.allContentfulProduct.nodes')
// const products = get(data, 'allContentfulProduct.nodes')

// const products = get(this, 'ProductsQuery.nodes')

// console.log('test')
// console.log(products)

// const siteTitle = get(this, 'site.siteMetadata.title')
// const products = get(data, 'allMoltinProduct.edges')
// const productsList = get(this, 'allContentfulProduct.nodes')
// const filterProductsWithoutImages = products.filter(v => v.node.mainImageHref)
console.log('hi')

const StoreIndex = ({ data }) => {
  return (
    <Layout>
      <h1>hi</h1>

      <h1>{data.allContentfulProduct.nodes[0].productName.productName}</h1>
    </Layout>
    // <Layout>
    //   {/* <SEO title={siteTitle} /> */}
    //   <Header
    //     as="h3"
    //     icon
    //     textAlign="center"
    //     style={{
    //       marginBottom: '2em',
    //     }}
    //   >
    //     <Header.Content
    //       style={{
    //         width: '60%',
    //         margin: '0 auto',
    //       }}
    //     >
    //       <Image src={logo} alt="logo" />
    //     </Header.Content>
    //   </Header>
    //   <ProductList products={data} />
    // </Layout>
  )
}

export default StoreIndex
