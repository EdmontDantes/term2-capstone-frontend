import React from 'react'
import MetArtTileLikes from './MetArtTileLikes'
import MetArtMainFullScreenSlideShow from './MetArtMainFullScreenSlideShow'


const MetArtMainLikes = (props) => {


const savedArrayProps = props.MetArtLikesArray
    return (
      <div className="ui raised very padded container segment" style={{width: '100%', marginBottom: '40px'}}>

      <MetArtMainFullScreenSlideShow />

        <div className="ui cards" style={{paddingBottom: '15px'}}>
    

      {savedArrayProps.map((individualObjectArt) => {
        return(
          <MetArtTileLikes 
                      key={individualObjectArt.data.objectID} 
                      objectID={individualObjectArt.data.objectID} 
                      image={individualObjectArt.data.primaryImageSmall} 
                      title={individualObjectArt.data.title} 
                      artist={individualObjectArt.data.artistDisplayName} 
                      imageOriginal={individualObjectArt.data.primaryImage}
                      objectDate={individualObjectArt.data.objectDate}
                      artistDisplayName={individualObjectArt.data.artistDisplayName}
                      dimensions={individualObjectArt.data.dimensions}
                      medium={individualObjectArt.data.medium}
                      fullSingleDataArtObject={individualObjectArt}
                      handleArtDisLikeSubmit={props.handleArtDisLikeSubmit}
                      ></MetArtTileLikes>

        )
      })}
        
        </div>

      </div>
      )
  

}


export default MetArtMainLikes