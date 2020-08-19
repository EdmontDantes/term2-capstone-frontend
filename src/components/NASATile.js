import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import ButtonCustom from './ButtonCustom'

const NASATile = (props) => {

  const [open, setOpen] = React.useState(false)

  return (
      <div className="ui centered card">
  
      <div className="image">
      <img src={props.image} alt="..." />
      </div>

      <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<ButtonCustom className={'ui button'} children={'Info'} />}
    >
      <Modal.Header>{props.dataInfo[0].title}</Modal.Header>
      <Modal.Content image>
        <Image size='large' src={props.image} wrapped />
        <Modal.Description>
          <Header>Title: {props.dataInfo[0].title}</Header>
          <p><span style={{fontWeight: 'bold'}}>Date Created:&nbsp;</span>
          {props.dataInfo[0].date_created}
         </p>
         <br />
          <p><span style={{fontWeight: 'bold'}}>Description:&nbsp;</span>
          {props.dataInfo[0].description}
         </p>
         <br />
          <p><span style={{fontWeight: 'bold'}}>Location:&nbsp;</span>
           {props.dataInfo[0].description}
          </p>
          <p><span style={{fontWeight: 'bold'}}>Photographer:&nbsp;</span>
          {props.dataInfo[0].photographer}
         </p>

        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>

      
      
      </div>
    
    

    
  )
}

export default NASATile