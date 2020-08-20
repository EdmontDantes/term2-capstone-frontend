import React from 'react'
import MetArtTileLikes from './MetArtTileLikes'
import PropTypes from 'prop-types'


const MetArtMainLikes = (props) => {



    return (
      <div className="ui raised very padded container segment" style={{width: '100%', marginBottom: '40px'}}>

      

        <div className="ui cards" style={{paddingBottom: '15px'}}>
    

      {props.MetArtLikesArray.map((individualObjectArt) => {
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
                      handleArtDisLikeSubmit={props.handleArtDisLikeSubmit}
                      ></MetArtTileLikes>

        )
      })}
        
        </div>

      </div>
      )
  

}


export default MetArtMainLikes

MetArtMainLikes.propTypes = {
  MetArtLikesArray: PropTypes.array,
  handleArtDisLikeSubmit: PropTypes.func
}