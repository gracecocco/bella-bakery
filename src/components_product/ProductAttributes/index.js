/* eslint-disable camelcase */
import React from 'react'
import { Header, Divider, Table } from 'semantic-ui-react'

export default ({ strings }) => (
  <div>
    <Header as="h3">{strings.About}</Header>
    <p>{strings.Product.Description}</p>

    <Divider />

    <Table celled>
      <Table.Header style={{ background: '#f9fafb' }}>
        <Table.Row>
          <Table.HeaderCell colSpan="2">Details</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>{strings.Product.Details.Quantity.label}</Table.Cell>
          <Table.Cell>
            <p>{strings.Product.Details.Quantity.value}</p>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>{strings.Product.Details.Size.label}</Table.Cell>
          <Table.Cell>
            <p>{strings.Product.Details.Size.value}</p>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>{strings.Product.Details.Color.label}</Table.Cell>
          <Table.Cell>
            <p>{strings.Product.Details.Color.values.primary}</p>
            <p>{strings.Product.Details.Color.values.secondary}</p>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>{strings.Product.Details.Material.label}</Table.Cell>
          <Table.Cell>
            <p>{strings.Product.Details.Material.value}</p>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>{strings.Product.Details.Pattern.label}</Table.Cell>
          <Table.Cell>
            <p>{strings.Product.Details.Pattern.value}</p>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>{strings.Product.Details.Designer.label}</Table.Cell>
          <Table.Cell>
            <p>{strings.Product.Details.Designer.value}</p>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </div>
)
