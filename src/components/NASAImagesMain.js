import React, {Component} from 'react'
import NASATile from './NASATile'
import PropTypes from 'prop-types'
import { clone } from "lodash" 

// class MetArtMain extends Component {
//   // componentWillMount() {
//   //   this.props.MetArtApiDataToComponent
//   // }

//   render() {
//     return (
//             <div className="ui raised very padded container segment">
      
//             <h1>Your The Metropolitan Museum of Art Collection API search results</h1>

//               <div className="ui five cards" style={{paddingBottom: '15px'}}>
          
//               {console.log('IN METARTMAIN', this.props.MetArtApiDataToComponent)}
         
//             {this.props.MetArtApiDataToComponent.map((individualObjectArt) => {
//               return(
//                 <MetArtTile key={individualObjectArt.objectID} image={individualObjectArt.primaryImageSmall} title={individualObjectArt.title} artist={individualObjectArt.artistDisplayName}></MetArtTile>
      
//               )
//             })}
              
//               </div>
//               <div className="ui pagination menu" style={{paddingTop: '15px'}}>
      
//               </div>
//             </div>
//             )
// }
// }

const MetArtMain = (props) => {

const savedArrayProps = props.NASAImagesApiData
    return (
      <div className="ui raised very padded container segment">

      <h1>Your The Metropolitan Museum of Art Collection API search results</h1>
      {(props.toggleNASAImagesLoading === true) ?
      (
      <div className="ui active dimmer">

        <div className="ui indeterminate text loader">Preparing Results</div>

    </div>) : (<br />)}
        <div className="ui three cards" style={{paddingBottom: '15px'}}>
    
        {console.log('IN NASAMain', props.NASAImagesApiData)}
   
      {savedArrayProps.forEach((individualArrayOfMedia, idx) => {
        console.log(individualArrayOfMedia);
        return(

          individualArrayOfMedia.forEach((singleItemOfArrayMedia, idx) => {
            console.log("Single Items of Array ", singleItemOfArrayMedia);

            if(singleItemOfArrayMedia.endsWith('.jpg') && singleItemOfArrayMedia.includes('orig')) {
              return(

                <NASATile key={idx} children={(<img src={singleItemOfArrayMedia} alt="..." style={{cursor: 'pointer'}} />)}></NASATile>
                
    
              )
            } else if(singleItemOfArrayMedia.endsWith('.mp4') && singleItemOfArrayMedia.includes('small')) {
              return(


                <NASATile key={idx} children={(<div className="ui embed" data-url={singleItemOfArrayMedia}></div>)}></NASATile>

            
    
              )
            }


  
          })


        )

        
      })}
        
        </div>
        <div className="ui pagination menu" style={{paddingTop: '15px'}}>

        </div>
      </div>
      )
  

}


export default MetArtMain

// MetArtMain.propTypes = {
//   MetArtApiDataToComponent: PropTypes.array.isRequired
// }