import React from 'react'
import { Link } from 'gatsby'
import { Segment, Container, Grid, List, Header } from 'semantic-ui-react'

const strings = strings

const twitterLink = (
  <a href="https://twitter.com/parmsang" alt="twitter link">
    {strings.Footer.Twitter}
  </a>
)
const facebookLink = (
  <a href="https://facebook.com/" alt="facebook link">
    {strings.Footer.Facebook}
  </a>
)
const emailLink = (
  <a href="mailto:john@doe.com" alt="email link">
    {strings.Footer.Email}
  </a>
)

const Footer = ({ strings }) => (
  <Segment
    vertical
    style={{
      padding: '4em 0em',
      marginTop: '3em',
      borderTop: '1px solid #f2f2f2',
    }}
  >
    <Container text>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={4}>
            <Header as="h4" content="About" />
            <List>
              <List.Item as={Link} to="/privacy/">
                {strings.Footer.Privacy}
              </List.Item>
              <List.Item as={Link} to="/terms/">
                {strings.Footer.Terms}
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={5}>
            <Header as="h4" content="Services" />
            <List>
              <List.Item as={Link} to="/">
                {strings.Footer.OurProducts}
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as="h4">{strings.Footer.History}</Header>
            <p>{strings.Footer.AboutDescription}</p>
            <List horizontal style={{ display: 'flex' }}>
              <List.Item
                icon="twitter"
                style={{ display: 'flex' }}
                content={twitterLink}
              />
              <List.Item
                icon="facebook"
                style={{ display: 'flex' }}
                content={facebookLink}
              />
              <List.Item
                icon="mail"
                style={{ display: 'flex' }}
                content={emailLink}
              />
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
)

export default Footer
