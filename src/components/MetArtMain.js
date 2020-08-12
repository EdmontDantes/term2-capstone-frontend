import React, {Component} from 'react'
import MetArtTile from './MetArtTile'
class MetArtMain extends Component {

  state = {

  }

  componentDidMount() {
    console.log('Mount MetArtMain')
  }

  render() {
    console.log('Render MetArtMain');
    return (
      <div className="ui raised very padded container segment">

        <h1>Your The Metropolitan Museum of Art Collection API search results</h1>
        <div className="ui five cards" style={{paddingBottom: '15px'}}>
        
        <MetArtTile />
        <MetArtTile />

        <MetArtTile />

        <MetArtTile />

        <MetArtTile />

        <MetArtTile />

        <MetArtTile />

        <MetArtTile />

        
        
        </div>
        <div className="ui pagination menu" style={{paddingTop: '15px'}}>

        </div>
      </div>
      )
  }

}


export default MetArtMain