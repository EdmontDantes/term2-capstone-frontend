import React from 'react'
import NASATile from './NASATile'


const MetArtMain = (props) => {


    return (
      <div className="ui raised very padded container segment" style={{width: '100%', marginBottom: '40px'}}>

      <h1>Your NASA Images Results</h1>
      {(props.toggleNASAImagesLoading === true) ?
      (
      <div className="ui active dimmer">

        <div className="ui indeterminate text loader">Preparing Results</div>

    </div>) : (<br />)}
        <div className="ui cards" style={{paddingBottom: '15px'}}>
    
  
      {props.NASAImagesApiData.map((individualArrayOfMedia, idx) => {

          if(individualArrayOfMedia.links !== undefined) {
            
            return(
              <NASATile 
              key={idx} 
              image={individualArrayOfMedia.links[0].href} 
              dataInfo={individualArrayOfMedia.data}></NASATile>
            )

          }

      })}
        
        </div>

      </div>
      )
  

}

export default MetArtMain
