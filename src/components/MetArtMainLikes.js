import React from 'react'
import MetArtTile from './MetArtTile'

const MetArtMainLikes = (props) => {

const savedArrayProps = props.MetArtLikesArray
    return (
      <div className="ui raised very padded container segment" style={{width: '100%', marginBottom: '40px'}}>

      <h1>Your The Metropolitan Museum of Art Collection API Likes and Slideshow Controls</h1>

        <div className="ui cards" style={{paddingBottom: '15px'}}>
    

      {savedArrayProps.map((individualObjectArt) => {
        return(
          <MetArtTile 
                      key={individualObjectArt.data.objectID} 
                      image={individualObjectArt.data.primaryImageSmall} 
                      title={individualObjectArt.data.title} 
                      artist={individualObjectArt.data.artistDisplayName} 
                      imageOriginal={individualObjectArt.data.primaryImage}
                      objectDate={individualObjectArt.data.objectDate}
                      artistDisplayName={individualObjectArt.data.artistDisplayName}
                      dimensions={individualObjectArt.data.dimensions}
                      medium={individualObjectArt.data.medium}
                      fullSingleDataArtObject={individualObjectArt}
                      handleArtLikeSubmit={props.handleArtLikeSubmit}
                      ></MetArtTile>

        )
      })}
        
        </div>

      </div>
      )
  

}


export default MetArtMainLikes