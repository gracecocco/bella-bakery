import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import ProductList from '../components_product/ProductList'
import SEO from '../components_product/SEO'
import logo from '../images/bella-logo.png'
import Layout from '../components_product/layout'
import { Image, Header } from 'semantic-ui-react'
import { Input, PageHeader } from 'antd'
import ProductSummary from '../components_product/ProductSummary'
import ProductAttributes from '../components_product/ProductAttributes'
import regular_strings from '../content/regular_strings.json'
import instrumented_strings from '../content/instrumented_strings.json'

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

const strings = regular_strings
// const strings = instrumented_strings

const StoreIndex = ({ location, data }) => {
  return (
    <Layout location={location}>
      {/* <SEO title={data.site.siteMetadata.siteTitle} /> */}
      <Header
        as="h3"
        icon
        textAlign="center"
        style={{
          marginBottom: '2em',
        }}
      >
        <Header.Content
          style={{
            width: '60%',
            margin: '0 auto',
          }}
        >
          <Image src={logo} alt="logo" />
        </Header.Content>
      </Header>
      <ProductSummary strings={strings} />
      <ProductAttributes strings={strings} />
      {/* <ProductList products={data.allContentfulProduct.nodes} /> */}
    </Layout>
  )
}

export default StoreIndex
