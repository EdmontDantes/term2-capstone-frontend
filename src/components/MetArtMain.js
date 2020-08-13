import React from 'react'
import MetArtTile from './MetArtTile'
import { clone, cloneDeep } from "lodash" 

const MetArtMain = (props) => {

const savedArrayProps = cloneDeep(props.MetArtApiDataToComponent)
  const functionToPerform =
    
    savedArrayProps.map((individualObjectArt) => {
      return(
        <MetArtTile key={individualObjectArt.objectID} image={individualObjectArt.primaryImageSmall} title={individualObjectArt.title} artist={individualObjectArt.artistDisplayName}></MetArtTile>
  
      )
    })
  

  return (
    <div className="ui raised very padded container segment">

    <h1>Your The Metropolitan Museum of Art Collection API search results</h1>
    {(props.toggleMetArtLoading === true) ?
    (
    <div className="ui active dimmer">
      <div className="ui indeterminate text loader">Preparing Results</div>

  </div>) : (<br />)}
      <div className="ui five cards" style={{paddingBottom: '15px'}}>
  
      {console.log('IN METARTMAIN', props.MetArtApiDataToComponent)}
      {}

      {functionToPerform}
    {props.MetArtApiDataToComponent.map((individualObjectArt) => {
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