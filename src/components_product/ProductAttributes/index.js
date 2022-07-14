/* eslint-disable camelcase */
import React from 'react'
import { Header, Divider, Table } from 'semantic-ui-react'
import regular_strings from '../../content/regular_strings.json'

const strings = regular_strings

export default ({
  description,
  material,
  max_watt,
  bulb_qty,
  finish,
  bulb,
}) => (
  <div>
    <Header as="h3">About {strings.ProductName}</Header>
    <p>{strings.Description}</p>

    <Divider />

    <Table celled>
      <Table.Header style={{ background: '#f9fafb' }}>
        <Table.Row>
          <Table.HeaderCell colSpan="2">Attributes</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>Quantity</Table.Cell>
          <Table.Cell>{strings.Quantity}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Size</Table.Cell>
          <Table.Cell>{strings.Size}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Colors</Table.Cell>
          <Table.Cell>
            <p>{strings.Color_1}</p>
            <p>{strings.Color_2}</p>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Material</Table.Cell>
          <Table.Cell>{strings.Material}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Pattern</Table.Cell>
          <Table.Cell>{strings.Pattern}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Designer</Table.Cell>
          <Table.Cell>{strings.Designer}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </div>
)
