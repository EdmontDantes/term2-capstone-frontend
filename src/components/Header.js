import React from 'react'
import { 
  Container,
  Dropdown,
  Menu } from 'semantic-ui-react'

const HeaderCustom = () => {

  return(
    <Menu fixed='top' inverted>
    <Container>
      <Menu.Item as='a'>Home</Menu.Item>

      <Dropdown item simple text='Navigate'>
        <Dropdown.Menu>
          <Dropdown.Item as='a' href='#ArtWidget'>Met Art</Dropdown.Item>
          <Dropdown.Item as='a' href='#NASAWidget'>NASA</Dropdown.Item>
          <Dropdown.Item as='a' href='#NumbersWidget'>Numbers Trivia</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  </Menu>

  )
}

export default HeaderCustom