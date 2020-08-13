import React, {Component} from 'react'
import MetArtTile from './MetArtTile'
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

const savedArrayProps = props.MetArtApiDataToComponent
    return (
      <div className="ui raised very padded container segment" style={{width: '100%', marginBottom: '40px'}}>

      <h1>Your The Metropolitan Museum of Art Collection API search results</h1>
      {(props.toggleMetArtLoading === true) ?
      (
      <div className="ui active dimmer">

        <div className="ui indeterminate text loader">Preparing Results</div>

    </div>) : (<br />)}
        <div className="ui cards" style={{paddingBottom: '15px'}}>
    
        {console.log('IN METARTMAIN', props.MetArtApiDataToComponent)}
   
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
        <div className="ui pagination menu" style={{paddingTop: '15px'}}>

        </div>
      </div>
      )
  

}


export default MetArtMain

// MetArtMain.propTypes = {
//   MetArtApiDataToComponent: PropTypes.array.isRequired
// }