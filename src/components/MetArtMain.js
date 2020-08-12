import React from 'react'
import MetArtTile from './MetArtTile'
import { clone } from "lodash" 

const MetArtMain = (props) => {

const savedArrayProps = props.MetArtApiDataToComponent
    return (
      <div className="ui raised very padded container segment">

      <h1>Your The Metropolitan Museum of Art Collection API search results</h1>
      {(props.toggleMetArtLoading === true) ?
      (
      <div className="ui active dimmer">
        <div className="ui indeterminate text loader">Preparing Results</div>

    </div>) : (<br />)}
        <div className="ui five cards" style={{paddingBottom: '15px'}}>
    
   
      {savedArrayProps.map((individualObjectArt) => {
        return(
          <MetArtTile key={individualObjectArt.objectID} image={individualObjectArt.primaryImageSmall} title={individualObjectArt.title} artist={individualObjectArt.artistDisplayName}></MetArtTile>

        )
      })}
        
        </div>
        <div className="ui pagination menu" style={{paddingTop: '15px'}}>

        </div>
      </div>
      )
  

}


export default MetArtMain