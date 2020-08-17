import React from 'react'
import {  
  Container,
  Divider,
  List,
  Segment } from 'semantic-ui-react'

const Footer = () => {
  return(
    <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
    <Container textAlign='center'>

      <Divider inverted section />
      <List horizontal inverted divided link size='small'>
        <List.Item as='a' href='https://github.com/EdmontDantes/term2-capstone-backend'>
          Backend
        </List.Item>
        <List.Item as='a' href='https://github.com/EdmontDantes/term2-capstone-frontend'>
          FrontEnd
        </List.Item>
        <List.Item as='a' href='https://github.com/EdmontDantes'>
          Bogdan Kowaltchook
        </List.Item>
      </List>
    </Container>
  </Segment>
  )
}

export default Footer