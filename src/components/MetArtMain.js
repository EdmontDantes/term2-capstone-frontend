import React from 'react'
import MetArtTile from './MetArtTile'

const MetArtMain = (props) => {

const savedArrayProps = props.MetArtApiDataToComponent
    return (
      <div className="ui raised very padded container segment" style={{width: '100%', marginBottom: '40px'}}>

      <h1>Your The Metropolitan Museum of Art Collection API search results</h1>
      {(props.toggleMetArtLoading === true && props.toggleMetArtLoading.length !==0) ?
      (
      <div className="ui active dimmer">

        <div className="ui indeterminate text loader">Preparing Results</div>

    </div>) : (<br />)}
        <div className="ui cards" style={{paddingBottom: '15px'}}>
    

      {savedArrayProps.map((individualObjectArt) => {
        return(
          <MetArtTile 
                      key={individualObjectArt.objectID} 
                      image={individualObjectArt.primaryImageSmall} 
                      title={individualObjectArt.title} 
                      artist={individualObjectArt.artistDisplayName} 
                      imageOriginal={individualObjectArt.primaryImage}
                      objectDate={individualObjectArt.objectDate}
                      artistDisplayName={individualObjectArt.artistDisplayName}
                      dimensions={individualObjectArt.dimensions}
                      medium={individualObjectArt.medium}
                      ></MetArtTile>

        )
      })}
        
        </div>

      </div>
      )
  

}


export default MetArtMain