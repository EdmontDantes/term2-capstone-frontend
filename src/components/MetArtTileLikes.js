import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import ButtonCustom from './ButtonCustom'
import PropTypes from 'prop-types'


const MetArtTileLikes = (props) => {

  const [open, setOpen] = React.useState(false)
  return (





    


      <div className="ui centered card">
  
      <div className="image">

        <img src={props.image} alt="..." />
      </div>
      <div className="extra">
      <div className="header" style={{fontSize: '16px', color: 'black'}}> {props.artist}</div>
      <br />
        <div className="header"> {props.title}</div>
      </div>
      <div className="inverted extra" style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
      <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<ButtonCustom className={'ui button'} children={'Info'} />}
    >
      <Modal.Header>{props.title}</Modal.Header>
      <Modal.Content image>
        <Image size='large' src={props.imageOriginal} wrapped />
        <Modal.Description>
          <Header>{props.artistDisplayName}</Header>
          <p><span style={{fontWeight: 'bold'}}>Date:&nbsp;</span>
          {props.objectDate}
         </p>
         <br />
          <p><span style={{fontWeight: 'bold'}}>Dimensions:&nbsp;</span>
          {props.dimensions}
         </p>
         <br />
          <p><span style={{fontWeight: 'bold'}}>Medium:&nbsp;</span>
           {props.medium}
          </p>

        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
    
    <ButtonCustom className={'ui red button'} children={'Dislike'} onClick={(event) => {
      props.handleArtDisLikeSubmit(event, props.objectID)
    }} />

      </div>
      
      </div>
    
    

    
  )
}

export default MetArtTileLikes

MetArtTileLikes.propTypes = {
  objectID: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  artist: PropTypes.string,
  imageOriginal: PropTypes.string,
  objectDate: PropTypes.string,
  artistDisplayName: PropTypes.string,
  dimensions: PropTypes.string,
  medium: PropTypes.string,
  handleArtDisLikeSubmit: PropTypes.func
}