import React from 'react'
import MetArtTile from './MetArtTile'
const MetArtMain = (props) => {

    return (
      <div className="ui raised very padded container segment">

        <h1>Your The Metropolitan Museum of Art Collection API search results</h1>
        <div className="ui five cards" style={{paddingBottom: '15px'}}>
    
      {console.log('props for MetArtMain', props.MetArtApiDataToComponent)}
      {props.MetArtApiDataToComponent.map((individualObjectArt) => {
        return(
          <MetArtTile key={individualObjectArt.objectID} image={individualObjectArt.primaryImageSmall}></MetArtTile>

        )
      })}
        
        
        </div>
        <div className="ui pagination menu" style={{paddingTop: '15px'}}>

        </div>
      </div>
      )
  

}


export default MetArtMain